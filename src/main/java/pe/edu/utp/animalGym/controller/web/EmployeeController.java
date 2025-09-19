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
        model.addAttribute("modal", "empleados :: modal");
        model.addAttribute("activePage", "empleados");
        // pintar empleados en la tabla
        model.addAttribute("empleados", service.findAll());

        return "layout";
    }

}
