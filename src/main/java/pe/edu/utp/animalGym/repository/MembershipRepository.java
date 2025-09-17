package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Membership;

@Repository
public class MembershipRepository {

    private List<Membership> membershipList = new ArrayList<>();
    private Integer nextId = 1;

    public List<Membership> findAll() {
        return membershipList;
    }

    public Optional<Membership> findById(Integer id) {
        return membershipList.stream().filter(m -> m.getMenbresiaId() == id).findFirst();
    }

    public Membership save(Membership membership) {
        if (membership.getMenbresiaId() == null) {
            membership.setMenbresiaId(nextId++);
        } else {
            deleteById(membership.getMenbresiaId());
        }
        membershipList.add(membership);
        return membership;
    }

    public void deleteById(Integer id) {
        membershipList.removeIf(m -> m.getMenbresiaId() == id);
    }

}
