package pe.edu.utp.animalGym.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Prueba;
import pe.edu.utp.animalGym.model.Rutina;
import pe.edu.utp.animalGym.service.PruebaService;
import pe.edu.utp.animalGym.service.RutinaService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/pruebas")
public class PruebaApiController {
  @Autowired
  PruebaService service;

  @GetMapping
  public ResponseEntity<List<Prueba>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Prueba> findById(@PathVariable Integer id) {
    return service.findById(id)
        .map(ResponseEntity::ok)
        .orElseGet(() -> ResponseEntity.notFound().build());
  }

  @PostMapping
  public ResponseEntity<Prueba> save(@RequestBody Prueba prueba) {
    return ResponseEntity.status(HttpStatus.CREATED).body(service.save(prueba));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Prueba> update(@PathVariable Integer id, @RequestBody Prueba prueba) {
    return ResponseEntity.ok(service.save(prueba));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
    service.deleteById(id);
    return ResponseEntity.noContent().build();
  }

}
