package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.time.LocalTime;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name = "boletas")
public class Boleta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "boleta_id")
    private Integer boletaId;

    @Column(name = "fecha_emision", nullable = false)
    private LocalDate fechaEmision;

    @Column(name = "hora", nullable = false)
    private LocalTime hora;

    @Column(name = "grabado", nullable = false)
    private Double grabado;

    @Column(name = "precio_total", nullable = false)
    private Double precioTotal;

    @Column(name = "igv", nullable = false)
    private Double igv;

    @Column(name = "estado", nullable = false)
    private boolean estado;

    @ManyToOne
    @JoinColumn(name = "socio_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Socio socio;

    @ManyToOne
    @JoinColumn(name = "empleado_id")
    @OnDelete(action = OnDeleteAction.SET_NULL)
    private Empleado empleado;

}
