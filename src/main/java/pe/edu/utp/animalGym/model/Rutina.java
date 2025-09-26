package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Rutina {

    private Integer rutinaId;
    private String nombre;
    private String descripcion;
    private String objetivo;
    private LocalDate fechaInicio;
    private LocalDate fechaFin;
    private boolean estado;
    private Empleado empleado;
    private List<DetalleRutina> detalleRutinaList = new ArrayList<>();

    public Rutina(String nombre, String descripcion, String objetivo, LocalDate fechaInicio, LocalDate fechaFin,
            boolean estado,
            Empleado empleado, ArrayList<DetalleRutina> detalleRutinaList) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.objetivo = objetivo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.empleado = empleado;
        this.detalleRutinaList = detalleRutinaList;
    }

}
