const forms = document.querySelectorAll('.needs-validation')
const modals = document.querySelectorAll('.modal')

forms.forEach((form) => {
  form.addEventListener(
    'submit',
    (event) => {
      event.preventDefault()
      event.stopPropagation()

      form.classList.add('was-validated')
    },
    false
  )
})

modals.forEach((modal) => {
  modal.addEventListener('hidden.bs.modal', (event) => {
    const form = modal.querySelector('form')

    if (!form) return

    form.reset()

    if (form.classList.contains('was-validated'))
      form.classList.remove('was-validated')
  })
})
