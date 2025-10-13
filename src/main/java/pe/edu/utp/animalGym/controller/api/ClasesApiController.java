package pe.edu.utp.animalGym.controller.api;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import pe.edu.utp.animalGym.model.Clase;
import pe.edu.utp.animalGym.service.ClaseService;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/clases")
public class ClasesApiController {

    @Autowired
    ClaseService claseService;

    @GetMapping
    public ResponseEntity<List<Clase>> findAll() {
        return ResponseEntity.ok(claseService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Clase> findById(@PathVariable Integer id) {
        return claseService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Clase> save(@RequestBody Clase clase) {

        return ResponseEntity.status(HttpStatus.CREATED).body(claseService.save(clase));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Clase> update(@PathVariable Integer id, @RequestBody Clase clase) {
        clase.setClaseId(id);
        return ResponseEntity.ok(claseService.save(clase));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        claseService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    /* Filtros */
    @GetMapping("/filtrar")
    public ResponseEntity<List<Clase>> filtrar(@RequestParam(required = false) String nombre,
            @RequestParam(required = false) String estado,
            @RequestParam(required = false) String intensidad) {
        return ResponseEntity.ok(claseService.filtrar(nombre, estado, intensidad));
    }

}
