package pe.edu.utp.animalGym.service;

import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;

public interface SocioService extends ApiService<Socio> {

    Socio addRutina(Integer socioId, Rutina nuevaRutina);

}
