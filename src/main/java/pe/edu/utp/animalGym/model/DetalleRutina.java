package pe.edu.utp.animalGym.model;

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
@Table(name = "detalle_rutinas")
public class DetalleRutina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "detalle_rutina_id")
    private Integer detalleRutinaId;

    @Column(name = "dia_semana", length = 20, nullable = false)
    private String diaSemana;

    @Column(name = "serie", nullable = false)
    private Integer serie;

    @Column(name = "repeticiones", nullable = false)
    private Integer repeticiones;

    @Column(name = "peso", nullable = false)
    private double peso;

    @Column(name = "calorias", nullable = false)
    private Integer calorias;

    @Column(name = "tiempo_descanso", nullable = false)
    private Integer tiempoDescanso;

    @ManyToOne
    @JoinColumn(name = "ejercicio_id")
    private Ejercicio ejercicio;

}
