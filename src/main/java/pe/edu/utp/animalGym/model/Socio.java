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

public class Socio extends Person {
    private LocalDate fechaVencimineto;
    private boolean activo;
    private int puntos;
    private double peso;
    private double altura;
    private Membresia menbresia;

    // private Rutina Rutina;
    public Socio(Integer personaId, String dni, String nombre, String apellido, String telefono, String genero,
            String email, LocalDate fechaNacimiento, LocalDate fechaIngreso, LocalDate fechaVencimiento, boolean activo,
            int puntos, double peso, double altura, Membresia membership) {
        super(personaId, dni, nombre, apellido, telefono, genero, email, fechaNacimiento, fechaIngreso);
        this.fechaVencimineto = fechaVencimiento;
        this.activo = activo;
        this.puntos = puntos;
        this.peso = peso;
        this.altura = altura;
        this.menbresia = membership;
    }
}
