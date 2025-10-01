package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.repository.SocioRepository;

@Controller
public class SociosController {

    @Autowired
    private SocioRepository socioRepository;

    @GetMapping("/socios")
    public String Socio(Model model) {
        model.addAttribute("content", "socios :: content");

        model.addAttribute("modal", "socios :: modal");

        model.addAttribute("activePage", "socios");
        model.addAttribute("socios", socioRepository.findAll());
        return "layout";
    }
}
