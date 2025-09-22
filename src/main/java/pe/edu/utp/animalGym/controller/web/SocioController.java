package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SocioController {
    @GetMapping("/socios")

    public String Socio(Model model) {
        model.addAttribute("content", "socios :: content");

        model.addAttribute("modal", "socios :: modal");

        model.addAttribute("activePage", "socios");
        return "layout";
    }
}
