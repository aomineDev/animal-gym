package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Membership {
    private Integer menbresiaId;
    private String nombre;
    private String descripcion;
    private int duracion;
    private double precio;
    private double precioOferta;
    private LocalDate inicioOferta;
    private LocalDate finOferta;
}
