package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Socio;

@Repository
public class SocioRepository {

    private List<Socio> partnerList = new ArrayList<>();
    private Integer nextId = 1;

    public List<Socio> findAll() {
        return partnerList;
    }

    public Optional<Socio> findById(Integer id) {
        return partnerList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Socio save(Socio partner) {
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