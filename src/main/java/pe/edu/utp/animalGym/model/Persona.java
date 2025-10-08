package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "personas")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Persona {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "persona_id")
    protected Integer personaId;

    @Column(name = "dni", unique = true, nullable = false, length = 8)
    protected String dni;

    @Column(name = "nombre", nullable = false, length = 20)
    protected String nombre;

    @Column(name = "apellido", nullable = false, length = 30)
    protected String apellido;

    @Column(name = "telefono", unique = true, nullable = false, length = 9)
    protected String telefono;

    @Column(name = "genero", nullable = false, length = 20)
    protected String genero;

    @Column(name = "email", unique = true, nullable = false, length = 100)
    protected String email;

    @Column(name = "fecha_nacimiento", nullable = false)
    protected LocalDate fechaNacimiento;

    @Column(name = "fecha_ingreso", nullable = false)
    protected LocalDate fechaIngreso;
}
