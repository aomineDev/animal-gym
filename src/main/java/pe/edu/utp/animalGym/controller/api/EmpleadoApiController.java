package pe.edu.utp.animalGym.controller.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.edu.utp.animalGym.model.Empleado;
import pe.edu.utp.animalGym.service.EmpleadoService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoApiController {
    @Autowired
    private EmpleadoService service;

    // metodo que tira todo un json del array de empleados
    @GetMapping
    public ResponseEntity<List<Empleado>> findAll() {

        return ResponseEntity.ok(service.findAll());

    }

    // metodo que devulve und id
    @GetMapping("/{id}")
    public ResponseEntity<Empleado> buscarPorId(@PathVariable Integer id) {
        return service.findById(id).map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Empleado> save(@RequestBody Empleado empleado) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(empleado));
    }

}
