package pe.edu.utp.animalGym.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import pe.edu.utp.animalGym.model.Membership;
import pe.edu.utp.animalGym.repository.MembershipRepository;
import pe.edu.utp.animalGym.service.MembershipService;

public class MembershipServiceImpl implements MembershipService {
    // tienes que traer la instancia
    @Autowired
    private MembershipRepository membershipRepository;

    @Override
    public List<Membership> findAll() {
        return membershipRepository.findAll();
    }

    @Override
    public Optional<Membership> findById(Integer id) {
        return membershipRepository.findById(id);
    }

    @Override
    public Membership save(Membership entity) {
        return membershipRepository.save(entity);
    }

    @Override
    public void deleteById(Integer id) {
        membershipRepository.deleteById(id);
    }

}
