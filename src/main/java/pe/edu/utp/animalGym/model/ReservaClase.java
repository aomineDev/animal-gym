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

public class ReservaClase {

    private Integer reservaClaseId;
    private LocalDate fecha;
    private Socio socio;

    public ReservaClase(LocalDate fecha, Socio socio) {
        this.fecha = fecha;
        this.socio = socio;
    }
}