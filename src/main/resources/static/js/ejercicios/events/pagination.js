export const paginacion = () => {
  // document.addEventListener("DOMContentLoaded", async function() {
  console.log('paginacion activa')
  const rowsPerPage = 8 // cuántas filas por página
  const tableBody = document.getElementById('ejercicio-container')
  const rows = tableBody.getElementsByTagName('tr')
  const pagination = document.querySelector('.pagination')
  const totalRows = rows.length
  const totalPages = Math.ceil(totalRows / rowsPerPage)

  function showPage(page) {
    // ocultar todas
    for (let i = 0; i < totalRows; i++) {
      rows[i].style.display = 'none'
    }
    // mostrar las de la página actual
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage
    for (let i = start; i < end && i < totalRows; i++) {
      rows[i].style.display = ''
    }
    // actualizar botones activos
    ;[...pagination.children].forEach((li) => li.classList.remove('active'))
    pagination.children[page - 1].classList.add('active')
  }

  // crear botones de paginación
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li')
    li.classList.add('page-item')
    const a = document.createElement('a')
    a.classList.add('page-link')
    a.href = '#'
    a.textContent = i
    a.addEventListener('click', (e) => {
      e.preventDefault()
      showPage(i)
    })
    li.appendChild(a)
    pagination.appendChild(li)
  }

  // mostrar la primera página
  showPage(1)
  // });
}
