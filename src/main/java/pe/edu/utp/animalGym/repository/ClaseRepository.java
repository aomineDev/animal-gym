package pe.edu.utp.animalGym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.edu.utp.animalGym.model.Clase;

@Repository
public interface ClaseRepository extends JpaRepository<Clase, Integer> {
}