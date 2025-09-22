package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import pe.edu.utp.animalGym.model.Socio;
import pe.edu.utp.animalGym.repository.SocioRepository;
import pe.edu.utp.animalGym.service.SocioService;

public class SocioServiceImpl implements SocioService {

    @Autowired
    private SocioRepository partnerRepository;

    @Override
    public List<Socio> findAll() {
        return partnerRepository.findAll();
    }

    @Override
    public Optional<Socio> findById(Integer id) {
        return partnerRepository.findById(id);
    }

    @Override
    public Socio save(Socio entity) {
        return partnerRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        partnerRepository.deleteById(id);
    }

}
