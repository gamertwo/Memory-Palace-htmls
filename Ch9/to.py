import tkinter as tk
from tkinter import ttk, filedialog, messagebox
import os
from pypdf import PdfReader, PdfWriter


class PDFCutterApp:
    def __init__(self, root):
        self.root = root
        self.root.title("PDF Page Cutter")
        self.root.geometry("600x660")
        self.root.resizable(False, True)
        self.root.configure(bg="#1e1e2e")

        self.pdf_path = None
        self.total_pages = 0
        self.ranges = []  # list of (start, end) tuples

        self._build_ui()

    # ──────────────────────────────────────────────
    #  UI Construction
    # ──────────────────────────────────────────────
    def _build_ui(self):
        ACCENT   = "#7c3aed"
        SURFACE  = "#2a2a3e"
        TEXT     = "#e2e8f0"
        SUBTEXT  = "#94a3b8"
        SUCCESS  = "#10b981"
        DANGER   = "#ef4444"
        BG       = "#1e1e2e"

        self._colors = dict(
            accent=ACCENT, surface=SURFACE, text=TEXT,
            subtext=SUBTEXT, success=SUCCESS, danger=DANGER, bg=BG
        )

        # ── Title ──────────────────────────────────
        title_frame = tk.Frame(self.root, bg=ACCENT, height=56)
        title_frame.pack(fill="x")
        tk.Label(
            title_frame, text="✂  PDF Page Cutter",
            font=("Segoe UI", 16, "bold"),
            fg="white", bg=ACCENT, pady=12
        ).pack()

        # ── Upload section ─────────────────────────
        upload_frame = tk.Frame(self.root, bg=SURFACE, pady=10, padx=24)
        upload_frame.pack(fill="x", padx=20, pady=(12, 0))

        tk.Label(
            upload_frame, text="PDF File",
            font=("Segoe UI", 10, "bold"),
            fg=SUBTEXT, bg=SURFACE
        ).pack(anchor="w")

        file_row = tk.Frame(upload_frame, bg=SURFACE)
        file_row.pack(fill="x", pady=(6, 0))

        self.file_label = tk.Label(
            file_row, text="No file selected",
            font=("Segoe UI", 10), fg=SUBTEXT, bg="#12121f",
            anchor="w", padx=10, pady=8, relief="flat"
        )
        self.file_label.pack(side="left", fill="x", expand=True, ipady=2)

        tk.Button(
            file_row, text="Browse",
            font=("Segoe UI", 10, "bold"),
            fg="white", bg=ACCENT, activebackground="#6d28d9",
            activeforeground="white", relief="flat",
            padx=16, pady=6, cursor="hand2",
            command=self._browse_file
        ).pack(side="left", padx=(8, 0))

        self.pages_label = tk.Label(
            upload_frame, text="",
            font=("Segoe UI", 9), fg=SUCCESS, bg=SURFACE
        )
        self.pages_label.pack(anchor="w", pady=(6, 0))

        # ── Range section ──────────────────────────
        range_frame = tk.Frame(self.root, bg=SURFACE, pady=10, padx=24)
        range_frame.pack(fill="x", padx=20, pady=(10, 0))

        tk.Label(
            range_frame, text="Page Ranges",
            font=("Segoe UI", 10, "bold"),
            fg=SUBTEXT, bg=SURFACE
        ).pack(anchor="w")

        input_row = tk.Frame(range_frame, bg=SURFACE)
        input_row.pack(fill="x", pady=(8, 0))

        tk.Label(input_row, text="From", font=("Segoe UI", 10),
                 fg=TEXT, bg=SURFACE).pack(side="left")

        self.from_var = tk.StringVar()
        self.from_entry = tk.Entry(
            input_row, textvariable=self.from_var,
            font=("Segoe UI", 12, "bold"), width=5,
            bg="#12121f", fg=TEXT, insertbackground=TEXT,
            relief="flat", justify="center"
        )
        self.from_entry.pack(side="left", padx=(8, 0), ipady=5)

        tk.Label(input_row, text="To", font=("Segoe UI", 10),
                 fg=TEXT, bg=SURFACE, padx=12).pack(side="left")

        self.to_var = tk.StringVar()
        self.to_entry = tk.Entry(
            input_row, textvariable=self.to_var,
            font=("Segoe UI", 12, "bold"), width=5,
            bg="#12121f", fg=TEXT, insertbackground=TEXT,
            relief="flat", justify="center"
        )
        self.to_entry.pack(side="left", ipady=5)

        tk.Button(
            input_row, text="+ Add Range",
            font=("Segoe UI", 10, "bold"),
            fg="white", bg="#0ea5e9", activebackground="#0284c7",
            activeforeground="white", relief="flat",
            padx=12, pady=4, cursor="hand2",
            command=self._add_range
        ).pack(side="left", padx=(16, 0))

        # Range list box
        list_frame = tk.Frame(range_frame, bg=SURFACE)
        list_frame.pack(fill="x", pady=(10, 0))

        self.range_listbox = tk.Listbox(
            list_frame, height=4,
            font=("Segoe UI", 10), bg="#12121f", fg=TEXT,
            selectbackground=ACCENT, relief="flat",
            activestyle="none", borderwidth=0
        )
        self.range_listbox.pack(side="left", fill="x", expand=True)

        sb = tk.Scrollbar(list_frame, command=self.range_listbox.yview)
        sb.pack(side="right", fill="y")
        self.range_listbox.config(yscrollcommand=sb.set)

        tk.Button(
            range_frame, text="✕  Remove Selected",
            font=("Segoe UI", 9),
            fg=DANGER, bg=SURFACE, activebackground=SURFACE,
            activeforeground="#fca5a5", relief="flat",
            cursor="hand2", command=self._remove_range
        ).pack(anchor="e", pady=(6, 0))

        # ── Output section ─────────────────────────
        out_frame = tk.Frame(self.root, bg=SURFACE, pady=10, padx=24)
        out_frame.pack(fill="x", padx=20, pady=(10, 0))

        tk.Label(
            out_frame, text="Output Filename (optional)",
            font=("Segoe UI", 10, "bold"),
            fg=SUBTEXT, bg=SURFACE
        ).pack(anchor="w")

        self.out_var = tk.StringVar(value="output.pdf")
        tk.Entry(
            out_frame, textvariable=self.out_var,
            font=("Segoe UI", 10), bg="#12121f", fg=TEXT,
            insertbackground=TEXT, relief="flat"
        ).pack(fill="x", pady=(6, 0), ipady=6)

        # ── Extract button ─────────────────────────
        tk.Button(
            self.root, text="✂  Extract Pages",
            font=("Segoe UI", 13, "bold"),
            fg="white", bg=ACCENT, activebackground="#6d28d9",
            activeforeground="white", relief="flat",
            pady=10, cursor="hand2",
            command=self._extract
        ).pack(fill="x", padx=20, pady=(12, 0))

        # ── Status bar ─────────────────────────────
        self.status_var = tk.StringVar(value="Ready — load a PDF to begin.")
        tk.Label(
            self.root, textvariable=self.status_var,
            font=("Segoe UI", 9), fg=SUBTEXT, bg=BG, pady=8
        ).pack()

    # ──────────────────────────────────────────────
    #  Logic
    # ──────────────────────────────────────────────
    def _browse_file(self):
        path = filedialog.askopenfilename(
            title="Select PDF",
            filetypes=[("PDF files", "*.pdf"), ("All files", "*.*")]
        )
        if not path:
            return
        try:
            reader = PdfReader(path)
            self.total_pages = len(reader.pages)
            self.pdf_path = path
            name = os.path.basename(path)
            self.file_label.config(text=name, fg=self._colors["text"])
            self.pages_label.config(
                text=f"✔  {self.total_pages} pages detected"
            )
            # pre-fill output name
            stem = os.path.splitext(name)[0]
            self.out_var.set(f"{stem}_cut.pdf")
            self.ranges.clear()
            self.range_listbox.delete(0, "end")
            self._set_status(f"Loaded: {name}")
        except Exception as e:
            messagebox.showerror("Error", f"Could not read PDF:\n{e}")

    def _add_range(self):
        if not self.pdf_path:
            messagebox.showwarning("No PDF", "Please load a PDF file first.")
            return
        try:
            start = int(self.from_var.get())
            end   = int(self.to_var.get())
        except ValueError:
            messagebox.showerror("Invalid Input", "Page numbers must be integers.")
            return

        if start < 1 or end < 1:
            messagebox.showerror("Invalid Range", "Page numbers must be ≥ 1.")
            return
        if start > end:
            messagebox.showerror("Invalid Range", "\"From\" must be ≤ \"To\".")
            return
        if end > self.total_pages:
            messagebox.showerror(
                "Out of Range",
                f"This PDF only has {self.total_pages} page(s)."
            )
            return

        self.ranges.append((start, end))
        label = f"  Pages  {start}  →  {end}  ({end - start + 1} page{'s' if end > start else ''})"
        self.range_listbox.insert("end", label)
        self.from_var.set("")
        self.to_var.set("")
        self._set_status(f"Added range {start}–{end}. Total ranges: {len(self.ranges)}")

    def _remove_range(self):
        sel = self.range_listbox.curselection()
        if not sel:
            return
        idx = sel[0]
        self.range_listbox.delete(idx)
        del self.ranges[idx]
        self._set_status("Range removed.")

    def _extract(self):
        if not self.pdf_path:
            messagebox.showwarning("No PDF", "Please load a PDF file first.")
            return
        if not self.ranges:
            messagebox.showwarning("No Ranges", "Add at least one page range.")
            return

        out_name = self.out_var.get().strip() or "output.pdf"
        if not out_name.lower().endswith(".pdf"):
            out_name += ".pdf"

        save_path = filedialog.asksaveasfilename(
            title="Save output PDF",
            initialfile=out_name,
            defaultextension=".pdf",
            filetypes=[("PDF files", "*.pdf")]
        )
        if not save_path:
            return

        try:
            reader = PdfReader(self.pdf_path)
            writer = PdfWriter()

            # collect all page indices (0-based), preserve order
            page_indices = []
            for (s, e) in self.ranges:
                for i in range(s - 1, e):
                    if i not in page_indices:
                        page_indices.append(i)
            page_indices.sort()

            for idx in page_indices:
                writer.add_page(reader.pages[idx])

            with open(save_path, "wb") as f:
                writer.write(f)

            total = len(page_indices)
            messagebox.showinfo(
                "Done! 🎉",
                f"Saved {total} page{'s' if total != 1 else ''} to:\n{save_path}"
            )
            self._set_status(f"✔  Saved {total} pages → {os.path.basename(save_path)}")

        except Exception as e:
            messagebox.showerror("Error", f"Failed to extract pages:\n{e}")

    def _set_status(self, msg):
        self.status_var.set(msg)


# ──────────────────────────────────────────────────
if __name__ == "__main__":
    root = tk.Tk()
    app = PDFCutterApp(root)
    root.mainloop()