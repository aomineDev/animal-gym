import { toastBody, toastEl } from "./dom.js";

export function showToast(message, type = "info") {
  toastEl.className = "toast align-items-center border-0";

  // aplicar color según tipo
  switch (type) {
    case 1:
      toastEl.classList.add("text-bg-success");
      break;
    case 2:
      toastEl.classList.add("text-bg-danger");
      break;
    case 3:
      toastEl.classList.add("text-bg-warning");
      break;
    default:
      toastEl.classList.add("text-bg-info");
  }

  toastBody.textContent = message;

  const toast = new bootstrap.Toast(toastEl, { delay: 7000 });
  toast.show();
}

export function resetFormModalClose(modal, form) {
  if (!modal || !form) return;

  modal.addEventListener("hidden.bs.modal", () => {
    form.reset();
    form.classList.remove("was-validated");
  });
}
