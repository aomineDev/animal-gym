package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.DetalleRutina;
import pe.edu.utp.animalGym.repository.DetalleRutinaRepository;
import pe.edu.utp.animalGym.service.DetalleRutinaService;

@Service
public class DetalleRutinaServiceImpl implements DetalleRutinaService {

    @Autowired
    private DetalleRutinaRepository repository;

    @Override
    public List<DetalleRutina> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<DetalleRutina> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public DetalleRutina save(DetalleRutina entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
