package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

public class Employee extends Person {
    private double salario;
    private String tipoContrato;
    private String especialidad;

    // constructor con la herencia de persona para poder hacer los objetos
    public Employee(Integer personaId, String dni, String nombre, String apellido, String telefono,
            String genero, String email, LocalDate fechaNacimiento, LocalDate fechaIngreso,
            double salario, String tipoContrato, String especialidad) {
        super(personaId, dni, nombre, apellido, telefono, genero, email, fechaNacimiento, fechaIngreso);
        this.salario = salario;
        this.tipoContrato = tipoContrato;
        this.especialidad = especialidad;
    }

}
