package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Boleta;
import pe.edu.utp.animalGym.repository.BoletaRepository;
import pe.edu.utp.animalGym.service.BoletaService;

@Service
public class BoletaServiceImpl implements BoletaService {

    @Autowired
    private BoletaRepository repository;

    @Override
    public List<Boleta> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Boleta> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Boleta save(Boleta entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }
}
