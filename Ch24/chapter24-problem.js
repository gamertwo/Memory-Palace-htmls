document.addEventListener("DOMContentLoaded", () => {
  const openButtons = document.querySelectorAll("[data-open-prompt]");
  const closeButtons = document.querySelectorAll("[data-close-prompt]");

  function modalFromTrigger(trigger) {
    const target = trigger.getAttribute("data-open-prompt") || "prompt-modal";
    return document.getElementById(target);
  }

  function openModal(modal) {
    if (!modal) return;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  openButtons.forEach((button) => {
    button.addEventListener("click", () => openModal(modalFromTrigger(button)));
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => closeModal(button.closest(".modal")));
  });

  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.querySelectorAll("[data-copy-prompt]").forEach((button) => {
    button.addEventListener("click", async () => {
      const modal = button.closest(".modal");
      const textarea = modal ? modal.querySelector(".prompt-box") : null;
      if (!textarea) return;
      try {
        await navigator.clipboard.writeText(textarea.value);
      } catch (error) {
        textarea.focus();
        textarea.select();
      }
    });
  });
});
