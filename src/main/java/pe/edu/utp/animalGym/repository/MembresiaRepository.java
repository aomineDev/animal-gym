package pe.edu.utp.animalGym.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Membresia;

@Repository
public interface MembresiaRepository extends JpaRepository<Membresia, Integer> {
  @Query("select m from Membresia m where m.estado =:estado")
  List<Membresia> buscarPorEstado(@Param("estado") Boolean estado);

  @Query("select m from Membresia m where m.precio between :precioMin AND :precioMax")
  List<Membresia> buscarPorPrecio(@Param("precioMin") Double precioMin, @Param("precioMax") Double precioMax);

}
