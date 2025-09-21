package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

public class MembershipController {
    @GetMapping("/empleados")

    public String employee(Model model) {
        model.addAttribute("content", "empleados :: content");

        model.addAttribute("modal", "empleados :: modalActualizarEmpleado");

        model.addAttribute("activePage", "empleados");

        return "layout";
    }

}
