function registerFloatingActionButtons() {
  document.querySelectorAll('.fab-container').forEach((fab) => {
    const mainBtn = fab.querySelector('.fab-main')
    mainBtn.addEventListener('click', () => {
      fab.classList.toggle('active')
    })
  })
}

document.addEventListener('DOMContentLoaded', registerFloatingActionButtons)
