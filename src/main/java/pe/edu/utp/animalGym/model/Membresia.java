package pe.edu.utp.animalGym.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Membresia {
    private Integer menbresiaId;
    private String nombre;
    private String descripcion;
    private int duracion;
    private double precio;
    private double precioOferta;
    private LocalDate inicioOferta;
    private LocalDate finOferta;
    private String imagen;
    private boolean estado;
    private Integer limiteCupos;

    public Membresia(String nombre, String descripcion, int duracion, double precio, double precioOferta,
            LocalDate inicioOferta, LocalDate finOferta, String imagen, boolean estado, Integer limiteCupos) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.duracion = duracion;
        this.precio = precio;
        this.precioOferta = precioOferta;
        this.inicioOferta = inicioOferta;
        this.finOferta = finOferta;
        this.imagen = imagen;
        this.estado = estado;
        this.limiteCupos = limiteCupos;
    }
}
