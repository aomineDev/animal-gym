
export const objetEmpleado = (empleados, roles) => {
    return empleados.map(empleado => {
        const rol = roles.find(r => r.id === empleado.rol_id)
        return {
            ...empleado,
            rolNombre: rol ? rol.nombre : "Sin rol"
        }
    })
}