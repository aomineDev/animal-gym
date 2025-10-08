package pe.edu.utp.animalGym.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Socio;

@Repository
public interface SocioRepository extends JpaRepository<Socio, Integer> {

}