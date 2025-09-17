package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Partner extends Person {
    private LocalDate fechaVencimineto;
    private boolean activo;
    private int puntos;
    private double peso;
    private double altura;
    private Membership menbresia;
    // private Rutina Rutina;

}
