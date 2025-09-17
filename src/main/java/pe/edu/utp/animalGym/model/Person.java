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

public class Person {
    private Integer personaId;
    private String dni;
    private String nombre;
    private String apellido;
    private String telefono;
    private String genero;
    private String email;
    private LocalDate fechaNacimiento;
    private LocalDate fechaIngreso;

}
