package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Clase {
    private Integer claseId;
    private String nombre;
    private String descripcion;
    private Integer capacidad;
    private LocalDate fecha;
    private LocalTime horaInicio;
    private LocalTime horaFin;
    private Integer duracion;
    private String estado;
    private String objetivo;
    private String intensidad;
    private String imagen;
    private Empleado empleado;
    private List<ReservaClase> reservas;

    public Clase(String nombre, String descripcion, Integer capacidad, LocalDate fecha,
            LocalTime horaInicio, LocalTime horaFin, Integer duracion,
            String estado, String objetivo, String intensidad, String imagen,
            Empleado empleado, List<ReservaClase> reservas) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.horaInicio = horaInicio;
        this.horaFin = horaFin;
        this.duracion = duracion;
        this.estado = estado;
        this.objetivo = objetivo;
        this.intensidad = intensidad;
        this.imagen = imagen;
        this.empleado = empleado;
        this.reservas = reservas;
    }
}