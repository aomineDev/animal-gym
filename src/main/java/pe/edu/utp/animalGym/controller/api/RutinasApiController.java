package pe.edu.utp.animalGym.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.DetalleRutina;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.service.RutinaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/rutinas")
public class RutinasApiController {
    @Autowired
    RutinaService service;

    @GetMapping
    public ResponseEntity<List<Rutina>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rutina> findById(@PathVariable Integer id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Rutina> save(@RequestBody Rutina rutina) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(rutina));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rutina> update(@PathVariable Integer id, @RequestBody Rutina rutina) {
        return ResponseEntity.ok(service.save(rutina));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{rutinaId}/detalles")
    public ResponseEntity<Rutina> saveRutinaDetalle(
            @PathVariable Integer rutinaId,
            @RequestBody DetalleRutina detalle) {
        Rutina rutina = service.saveRutinaDetalle(rutinaId, detalle);
        return ResponseEntity.ok(rutina);
    }

}