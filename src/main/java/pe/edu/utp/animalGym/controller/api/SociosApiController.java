package pe.edu.utp.animalGym.controller.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.model.Socio;
import pe.edu.utp.animalGym.service.SocioService;

@RestController
@RequestMapping("/api/socios")
public class SociosApiController {

    @Autowired
    SocioService socioService;

    @GetMapping
    public ResponseEntity<List<Socio>> findAll() {
        return ResponseEntity.ok(socioService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Socio> findById(@PathVariable Integer id) {
        return socioService.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Socio> save(@RequestBody Socio socio) {
        return ResponseEntity.status(HttpStatus.CREATED).body(socioService.save(socio));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Socio> update(@PathVariable Integer id, @RequestBody Socio socio) {
        return ResponseEntity.ok(socioService.save(socio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        socioService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // list rutina
    @PostMapping("/{socioId}/rutinas")
    public ResponseEntity<Socio> addRutina(
            @PathVariable Integer socioId,
            @RequestBody Rutina rutina) {
        Socio socio = socioService.addRutina(socioId, rutina);
        return ResponseEntity.ok(socio);
    }
}