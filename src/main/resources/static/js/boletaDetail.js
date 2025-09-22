//ver detalles
const boletaModal = document.getElementById('boletaModal');
if (boletaModal) {
    boletaModal.addEventListener('show.bs.modal', event => {
        const button = event.relatedTarget;

        document.getElementById('modalBoletaId').textContent = button.getAttribute('data-id');
        document.getElementById('modalFecha').textContent = button.getAttribute('data-fecha');
        document.getElementById('modalHora').textContent = button.getAttribute('data-hora');
        document.getElementById('modalEmpleado').textContent = button.getAttribute('data-empleado');
        document.getElementById('modalEstado').textContent = button.getAttribute('data-estado');
        document.getElementById('modalGrabado').textContent = button.getAttribute('data-grabado');
        document.getElementById('modalIgv').textContent = button.getAttribute('data-igv');
        document.getElementById('modalTotal').textContent = button.getAttribute('data-total');
    });
}