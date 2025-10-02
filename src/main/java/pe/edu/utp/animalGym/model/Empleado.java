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

public class Empleado extends Persona {
    private String foto;
    private double salario;
    private String tipoContrato;
    private String especialidad;

    // constructor con la herencia de persona para poder hacer los objetos
    public Empleado(Integer personaId, String dni, String nombre, String apellido, String telefono,
            String genero, String email, LocalDate fechaNacimiento, LocalDate fechaIngreso, String foto,
            double salario, String tipoContrato, String especialidad) {
        super(personaId, dni, nombre, apellido, telefono, genero, email, fechaNacimiento, fechaIngreso);
        this.foto = foto;
        this.salario = salario;
        this.tipoContrato = tipoContrato;
        this.especialidad = especialidad;
    }

}
