package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class Socio extends Persona {
    private LocalDate fechaVencimineto;
    private boolean activo;
    private int puntos;
    private double peso;
    private double altura;
    private String imagen;
    private Membresia menbresia;
    private List<Rutina> rutinas = new ArrayList<>();

    public Socio(Integer personaId, String dni, String nombre, String apellido, String telefono, String genero,
            String email, LocalDate fechaNacimiento, LocalDate fechaIngreso, LocalDate fechaVencimiento, boolean activo,
            int puntos, double peso, double altura, String imagen, Membresia membership, List<Rutina> rutinas) {
        super(personaId, dni, nombre, apellido, telefono, genero, email, fechaNacimiento, fechaIngreso);
        this.fechaVencimineto = fechaVencimiento;
        this.activo = activo;
        this.puntos = puntos;
        this.peso = peso;
        this.altura = altura;
        this.imagen = imagen;
        this.menbresia = membership;
        this.rutinas = rutinas;
    }
}
