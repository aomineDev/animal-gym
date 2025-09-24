package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EmpleadoServiceImpl;
import pe.edu.utp.animalGym.service.impl.RolServiceImpl;
import pe.edu.utp.animalGym.service.impl.UsuarioServiceImpl;

@Controller
public class EmpleadosController {
    @Autowired
    private EmpleadoServiceImpl serviceEmpleado;

    @Autowired
    private RolServiceImpl serviceRol;

    @Autowired
    private UsuarioServiceImpl serviceUsuario;

    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");

        // Modales
        model.addAttribute("modal", "empleados :: modals");
        model.addAttribute("activePage", "empleados");

        // pintar empleados en la tabla
        // model.addAttribute("empleadoTabla", serviceEmpleado.findAll());
        // pintar el rol
        model.addAttribute("contenedorRol", serviceRol.findAll());
        model.addAttribute("contenedorUser", serviceUsuario.findAll());
        // guardarDatos
        return "layout";
    }

}