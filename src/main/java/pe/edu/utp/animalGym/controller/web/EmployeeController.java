package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.EmployeeServiceImpl;

@Controller
public class EmployeeController {
    @Autowired
    private EmployeeServiceImpl service;

    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");

        // // // modal Actulizar empleado
        model.addAttribute("modal1", "empleados :: modalActualizarEmpleado");
        // modal elimianr empleado
        model.addAttribute("modal2", "empleados :: modalEliminarEmpleado");
        // modal añadir empleado
        model.addAttribute("modal3", "empleados :: modalAñadirEmpleado");

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