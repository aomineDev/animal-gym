package pe.edu.utp.animalGym.service;

import java.time.LocalDate;
import java.util.List;

import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;

public interface SocioService extends ApiService<Socio> {

    Socio saveRutina(Integer socioId, Rutina nuevaRutina);

    Socio deleteRutina(Integer socioId, Integer rutinaId);

    List<Socio> buscarPorEstado(Boolean estado);

    List<Socio> buscarPorRangoVencimiento(LocalDate inicio, LocalDate fin);

    List<Socio> buscarPorMembresia(Integer membresiaId);

    List<Socio> buscarPorNombre(String nombre);
}
