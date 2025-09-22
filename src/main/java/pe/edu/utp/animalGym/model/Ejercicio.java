package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Ejercicio {

    private Integer ejercicioId;
    private String nombre;
    private String descripcion;
    private String grupoMuscular;
    private String equipo;

    public Ejercicio(String nombre, String descripcion, String grupoMuscular, String equipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grupoMuscular = grupoMuscular;
        this.equipo = equipo;
    }

}