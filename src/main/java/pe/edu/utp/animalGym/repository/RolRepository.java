package pe.edu.utp.animalGym.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Rol;

@Repository
public class RolRepository {
    private List<Rol> roles = new ArrayList<>();
    private Integer nextId = 1;

    public RolRepository() {
        save(new Rol("Administrador"));
        save(new Rol("Entrenador"));
    }

    public List<Rol> findAll() {
        return roles;
    }

    public Optional<Rol> findById(Integer id) {
        return roles.stream()
                .filter(r -> r.getRolId().equals(id))
                .findFirst();
    }

    public Rol save(Rol rol) {
        if (rol.getRolId() == null) {
            rol.setRolId(nextId++);
        } else {
            deleteById(rol.getRolId());
        }
        roles.add(rol);
        return rol;
    }

    public void deleteById(Integer id) {
        roles.removeIf(r -> r.getRolId().equals(id));
    }
}