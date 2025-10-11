package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "membresias")
public class Membresia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membresia_id")
    private Integer membresiaId;

    @Column(name = "nombre", nullable = false, length = 50)
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "duracion", nullable = false)
    private Integer duracion;

    @Column(name = "precio", nullable = false)
    private Double precio;

    @Column(name = "precio_oferta")
    private Double precioOferta;

    @Column(name = "inicio_oferta")
    private LocalDate inicioOferta;

    @Column(name = "fin_oferta")
    private LocalDate finOferta;

    @Column(name = "imagen", nullable = false)
    private String imagen;

    @Column(name = "estado", nullable = false)
    private boolean estado;

    @Column(name = "limite_cupos", nullable = false)
    private Integer limiteCupos;
}
