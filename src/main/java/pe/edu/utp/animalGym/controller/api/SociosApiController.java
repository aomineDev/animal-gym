package pe.edu.utp.animalGym.controller.api;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<Socio> saveRutina(
            @PathVariable Integer socioId,
            @RequestBody Rutina rutina) {
        Socio socio = socioService.saveRutina(socioId, rutina);
        return ResponseEntity.ok(socio);
    }

    @PutMapping("/{socioId}/rutinas/{rutinaId}")
    public ResponseEntity<Socio> updateRutina(
            @PathVariable Integer socioId,
            @PathVariable Integer rutinaId,
            @RequestBody Rutina rutina) {

        rutina.setRutinaId(rutinaId);
        Socio socio = socioService.saveRutina(socioId, rutina);
        return ResponseEntity.ok(socio);
    }

    @DeleteMapping("/{socioId}/rutinas/{rutinaId}")
    public ResponseEntity<Socio> eliminarReserva(
            @PathVariable Integer socioId,
            @PathVariable Integer rutinaId) {
        Socio socioActualizado = socioService.deleteRutina(socioId, rutinaId);
        return ResponseEntity.ok(socioActualizado);
    }

    // http://localhost:8080/api/socios/buscar?estado=false
    @GetMapping("/buscar")
    public ResponseEntity<List<Socio>> buscarPorEstado(@RequestParam Boolean estado) {
        List<Socio> resultados = socioService.buscarPorEstado(estado);
        return ResponseEntity.ok(resultados);
    }

    // http://localhost:8080/api/socios/buscar/vencimiento?inicio=2025-10-01&fin=2025-10-31
    @GetMapping("/buscar/vencimiento")
    public ResponseEntity<List<Socio>> buscarPorRangoVencimiento(
            @RequestParam("inicio") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate inicio,
            @RequestParam("fin") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate fin) {

        List<Socio> resultados = socioService.buscarPorRangoVencimiento(inicio, fin);
        return ResponseEntity.ok(resultados);
    }

    // http://localhost:8080/api/socios/buscar/membresia?membresiaId=1
    @GetMapping("/buscar/membresia")
    public ResponseEntity<List<Socio>> buscarPorMembresia(@RequestParam Integer membresiaId) {
        List<Socio> resultados = socioService.buscarPorMembresia(membresiaId);
        return ResponseEntity.ok(resultados);
    }

    // http://localhost:8080/api/socios/buscar/nombre?nombre=clever+david
    @GetMapping("/buscar/nombre")
    public ResponseEntity<List<Socio>> buscarPorNombre(@RequestParam String nombre) {
        List<Socio> resultados = socioService.buscarPorNombre(nombre);
        return ResponseEntity.ok(resultados);
    }
}