package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

// @Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Rol {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer rolId;
    private String nombre;
}