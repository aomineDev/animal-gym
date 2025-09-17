package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import pe.edu.utp.animalGym.model.Partner;
import pe.edu.utp.animalGym.repository.PartnerRepository;
import pe.edu.utp.animalGym.service.PartnerService;

public class PartnerServiceImpl implements PartnerService {

    @Autowired
    private PartnerRepository partnerRepository;

    @Override
    public List<Partner> findAll() {
        return partnerRepository.findAll();
    }

    @Override
    public Optional<Partner> findById(Integer id) {
        return partnerRepository.findById(id);
    }

    @Override
    public Partner save(Partner entity) {
        return partnerRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        partnerRepository.deleteById(id);
    }

}
