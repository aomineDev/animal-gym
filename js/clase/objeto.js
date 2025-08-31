export const objectClase = (clases, empleados) => {

    return clases.map(clase => {
        const entrenador = empleados.find(emp => emp.id === clase.entrenador_id)

        return { ...clase, entrenador }
    })

}