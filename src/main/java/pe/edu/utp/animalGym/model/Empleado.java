package pe.edu.utp.animalGym.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "empleados")
public class Empleado extends Persona {
    @Column(name = "imagen", nullable = false)
    private String imagen;

    @Column(name = "salario", nullable = false)
    private double salario;

    @Column(name = "tipo_contrato", nullable = false, length = 50)
    private String tipoContrato;

    @Column(name = "especialidad", nullable = false, length = 30)
    private String especialidad;
}
