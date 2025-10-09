package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Boleta;

@Repository
public interface BoletaRepository extends JpaRepository<Boleta, Integer> {
    @Query("SELECT e FROM Boleta e WHERE e.fechaEmision = :fecha")
    List<Boleta> buscarPorFechaEmision(@Param("fecha") LocalDate fecha);
}
