package pe.edu.utp.animalGym.controller.api;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import pe.edu.utp.animalGym.model.Ejercicio;
import pe.edu.utp.animalGym.service.EjercicioService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/ejercicios")
public class EjercicioApiController {
    @Autowired
    private EjercicioService service;

    @GetMapping
    public ResponseEntity<List<Ejercicio>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ejercicio> findById(@PathVariable Integer id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Ejercicio> save(@RequestBody Ejercicio Ejercicio) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(Ejercicio));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ejercicio> update(@PathVariable Integer id, @RequestBody Ejercicio ejercicio) {
        // Aseguramos que el id del path sea el usado
        ejercicio.setEjercicioId(id);
        return ResponseEntity.ok(service.save(ejercicio));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            String carpetaUploads = "uploads/ejercicios/";
            String nombreArchivo = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path ruta = Paths.get(carpetaUploads + nombreArchivo);

            Files.write(ruta, file.getBytes());

            return ResponseEntity.ok("/uploads/ejercicios/" + nombreArchivo);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error al subir la imagen");
        }
    }

    /* --- Filtros --- */
    @GetMapping("/buscar")
    public ResponseEntity<List<Ejercicio>> buscarPorNombre(@RequestParam(required = false) String nombre) {
        List<Ejercicio> resultados = service.buscarPorNombre(nombre);
        return ResponseEntity.ok(resultados);
    }

}
