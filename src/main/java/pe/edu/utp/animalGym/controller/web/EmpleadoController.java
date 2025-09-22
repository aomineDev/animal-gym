package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EmpleadoServiceImpl;
import pe.edu.utp.animalGym.service.impl.RolServiceImpl;

@Controller
public class EmpleadoController {
    @Autowired
    private EmpleadoServiceImpl serviceEmpleado;

    @Autowired
    private RolServiceImpl serviceRol;

    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");

        // Modales
        model.addAttribute("modal", "empleados :: modals");
        model.addAttribute("activePage", "empleados");

        // pintar empleados en la tabla
        model.addAttribute("empleadoTabla", serviceEmpleado.findAll());
        // pintar el rol
        model.addAttribute("contenedorRol", serviceRol.findAll());
        // guardarDatos
        return "layout";
    }

    // @PostMapping("/guardar")
    // public String guardarEmpleado(@ModelAttribute Employee empleado) {
    // service.save(empleado);
    // return "redirect:/empleados";
    //

}