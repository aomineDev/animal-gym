package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.edu.utp.animalGym.model.Membresia;
import pe.edu.utp.animalGym.repository.MembresiaRepository;
import pe.edu.utp.animalGym.service.MembresiaService;

@Service
public class MembresiaServiceImpl implements MembresiaService {
    // tienes que traer la instancia
    @Autowired
    private MembresiaRepository membershipRepository;

    @Override
    public List<Membresia> findAll() {
        return membershipRepository.findAll();
    }

    @Override
    public Optional<Membresia> findById(Integer id) {
        return membershipRepository.findById(id);
    }

    @Override
    public Membresia save(Membresia entity) {
        return membershipRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        membershipRepository.deleteById(id);
    }

}
