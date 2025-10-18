package pe.edu.utp.animalGym.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.service.EmpleadoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoApiController {

    @Autowired
    private EmpleadoService service;

    @GetMapping
    public ResponseEntity<List<Empleado>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Empleado> findById(@PathVariable Integer id) {
        return service.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Empleado> save(@RequestBody Empleado empleado) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(empleado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Empleado> update(@PathVariable Integer id, @RequestBody Empleado empleado) {
        empleado.setPersonaId(id);
        return ResponseEntity.ok(service.save(empleado));

    }

    @GetMapping("/buscar")
    public ResponseEntity<List<Empleado>> buscarPorNombre(@RequestParam String nombre) {
        List<Empleado> resultados = service.buscarPorNombre(nombre);
        return ResponseEntity.ok(resultados);
    }

}
