package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class InscripcionController {
    @GetMapping("/inscripcion")
    public String inscripcion(Model model) {
        model.addAttribute("title", "Animal GYM | Inscripción");
        model.addAttribute("content", "inscripcion :: content");

        return "index";
    }
}
