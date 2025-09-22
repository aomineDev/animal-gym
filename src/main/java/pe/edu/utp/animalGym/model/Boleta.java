package pe.edu.utp.animalGym.model;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Boleta {

    private Integer boletaId;
    private LocalDate fecha;
    private LocalTime hora;
    private double grabado;
    private double precioTotal;
    private double igv;
    private boolean estado;
    private Socio socio;
    private Empleado empleado;

    public Boleta(LocalDate fecha, LocalTime hora, double grabado, double precioTotal, double igv, boolean estado,
            Socio socio, Empleado empleado) {
        this.fecha = fecha;
        this.hora = hora;
        this.grabado = grabado;
        this.precioTotal = precioTotal;
        this.igv = igv;
        this.estado = estado;
        this.socio = socio;
        this.empleado = empleado;
    }

}
