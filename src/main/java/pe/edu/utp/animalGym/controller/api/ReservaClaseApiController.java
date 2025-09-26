package pe.edu.utp.animalGym.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.ReservaClase;
import pe.edu.utp.animalGym.service.ReservaClaseService;
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
@RequestMapping("/api/reservaClase")
public class ReservaClaseApiController {
    @Autowired
    ReservaClaseService service;

    @GetMapping
    public ResponseEntity<List<ReservaClase>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReservaClase> findById(@PathVariable Integer id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<ReservaClase> save(@RequestBody ReservaClase reservaClase) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(reservaClase));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ReservaClase> update(@PathVariable Integer id, @RequestBody ReservaClase reservaClase) {
        return ResponseEntity.ok(service.save(reservaClase));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}