package pe.edu.utp.animalGym.service;

import pe.edu.utp.animalGym.model.DetalleRutina;
import pe.edu.utp.animalGym.model.Rutina;

public interface RutinaService extends ApiService<Rutina> {

    Rutina saveRutinaDetalle(Integer rutinaId, DetalleRutina nuevoDetalle);

    Rutina deleteRutinaDetalle(Integer rutinaId, Integer detalleRutinaId);

}
