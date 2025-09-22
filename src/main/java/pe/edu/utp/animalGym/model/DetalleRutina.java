package pe.edu.utp.animalGym.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DetalleRutina {

    private Integer detalleRutinaId;
    private String diaSemana;
    private int serie;
    private int repeticiones;
    private int peso;
    private int calorias;
    private int tiempoDescanso;
    private Ejercicio ejercicio;

    public DetalleRutina(String diaSemana, int serie, int repeticiones, int peso, int calorias, int tiempoDescanso,
            Ejercicio ejercicio) {
        this.diaSemana = diaSemana;
        this.serie = serie;
        this.repeticiones = repeticiones;
        this.peso = peso;
        this.calorias = calorias;
        this.tiempoDescanso = tiempoDescanso;
        this.ejercicio = ejercicio;
    }

}
