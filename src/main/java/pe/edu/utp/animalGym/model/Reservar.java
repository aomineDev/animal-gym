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

public class Reservar {
    //@Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer reservaId;
    private LocalDate fecha;
    private String estado;
    //@ManyToOne
    //@JoinColumn(name = "claseId", nullable = false)
    private Clase clase;
    //@ManyToOne
    //@JoinColumn(name = "personaId", nullable = false)
    private Partner socio;
}