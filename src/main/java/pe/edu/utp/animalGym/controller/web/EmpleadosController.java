package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.EmpleadoService;
import pe.edu.utp.animalGym.service.RolService;
import pe.edu.utp.animalGym.service.UsuarioService;

@Controller
public class EmpleadosController {

    @Autowired
    private RolService serviceRol;

    @Autowired
    private UsuarioService serviceUsuario;

    @Autowired
    private EmpleadoService serviceEmpleado;

    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");
        model.addAttribute("modal", "empleados :: modals");
        model.addAttribute("activePage", "empleados");
        model.addAttribute("empleadoTabla", serviceEmpleado.findAll());
        model.addAttribute("contenedorRol", serviceRol.findAll());
        model.addAttribute("contenedorUser", serviceUsuario.findAll());
        return "layout";
    }

}