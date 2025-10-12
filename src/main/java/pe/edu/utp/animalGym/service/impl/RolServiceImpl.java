package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Rol;
import pe.edu.utp.animalGym.repository.RolRepository;
import pe.edu.utp.animalGym.service.RolService;

@Service
public class RolServiceImpl implements RolService {

    @Autowired
    private RolRepository repository;

    @Override
    public List<Rol> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Rol> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public Rol save(Rol entity) {
        return repository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public List<Rol> buscarPorNombre(String nombre) {
        return repository.buscarPorNombre(nombre);
    }

}
