package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
@Table(name = "socios")
public class Socio extends Persona {

    @Column(name = "fecha_vencimiento", nullable = false)
    private LocalDate fechaVencimiento;

    @Column(name = "estado", nullable = false)
    private boolean estado;

    @Column(name = "puntos", nullable = false)
    private int puntos;

    @Column(name = "peso")
    private double peso;

    @Column(name = "altura")
    private double altura;

    @Column(name = "imagen")
    private String imagen;

    @ManyToOne
    @JoinColumn(name = "membresia_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Membresia menbresia;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "socio_id")
    private List<Rutina> rutinas = new ArrayList<>();
}
