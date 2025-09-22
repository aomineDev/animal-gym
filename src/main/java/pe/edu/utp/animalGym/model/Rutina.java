package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.util.ArrayList;
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
    private Employee empleado;
    private ArrayList<DetalleRutina> detalleRutinaList;

    public Rutina(String nombre, String descripcion, String objetivo, LocalDate fechaInicio, LocalDate fechaFin,
            Employee empleado, ArrayList<DetalleRutina> detalleRutinaList) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.objetivo = objetivo;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.empleado = empleado;
        this.detalleRutinaList = detalleRutinaList;
    }

}
