package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Socio;

@Repository
public interface SocioRepository extends JpaRepository<Socio, Integer> {

  @Query("SELECT s FROM Socio s WHERE s.estado = :estado")
  List<Socio> buscarPorEstado(@Param("estado") Boolean estado);

  @Query("SELECT s FROM Socio s WHERE s.fechaVencimiento BETWEEN :inicio AND :fin")
  List<Socio> buscarPorRangoVencimiento(@Param("inicio") LocalDate inicio, @Param("fin") LocalDate fin);

  @Query("SELECT s FROM Socio s WHERE s.menbresia.menbresiaId = :membresiaId")
  List<Socio> buscarPorMembresia(@Param("membresiaId") Integer membresiaId);

  @Query("SELECT s FROM Socio s WHERE LOWER(s.nombre) LIKE LOWER(CONCAT('%', :nombre, '%'))")
  List<Socio> buscarPorNombre(@Param("nombre") String nombre);
}