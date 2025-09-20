package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Clase {
    // @Id
    // @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    //@ManyToOne
    //@JoinColumn(name = "personaId", nullable = false)
    private Employee empleado;
}