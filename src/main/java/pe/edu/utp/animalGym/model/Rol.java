package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Rol {

    private Integer rolId;
    private String nombre;

    public Rol(String nombre) {
        this.nombre = nombre;
    }

}