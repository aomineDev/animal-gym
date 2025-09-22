package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EmpleadoServiceImpl;

@Controller
public class EmpleadoController {
    @Autowired
    private EmpleadoServiceImpl service;

    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");

        // modal añadir empleado
        // model.addAttribute("modal", "empleados :: modalAñadirEmpleado");

        // // // modal Actulizar empleado
        model.addAttribute("modal", "empleados :: modalActualizarEmpleado");
        // modal elimianr empleado
        // model.addAttribute("modal", "empleados :: modalEliminarEmpleado");

        model.addAttribute("activePage", "empleados");

        // pintar empleados en la tabla
        model.addAttribute("empleadoTabla", service.findAll());
        // guardarDatos
        return "layout";
    }

    // @PostMapping("/guardar")
    // public String guardarEmpleado(@ModelAttribute Employee empleado) {
    // service.save(empleado);
    // return "redirect:/empleados";
    //

}