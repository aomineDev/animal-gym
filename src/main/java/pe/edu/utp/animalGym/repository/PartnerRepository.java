package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Partner;

@Repository
public class PartnerRepository {

    private List<Partner> partnerList = new ArrayList<>();
    private Integer nextId = 1;

    public List<Partner> findAll() {
        return partnerList;
    }

    public Optional<Partner> findById(Integer id) {
        return partnerList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Partner save(Partner partner) {
        if (partner.getPersonaId() == null) {
            partner.setPersonaId(nextId++);
        } else {
            deleteById(partner.getPersonaId());
        }
        partnerList.add(partner);
        return partner;
    }

    public void deleteById(Integer id) {
        partnerList.removeIf(p -> p.getPersonaId() == id);
    }

}