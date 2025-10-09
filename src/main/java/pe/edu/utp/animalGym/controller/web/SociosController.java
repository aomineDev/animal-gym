package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.MembresiaServiceImpl;
import pe.edu.utp.animalGym.service.impl.SocioServiceImpl;

@Controller
public class SociosController {

    @Autowired
    private SocioServiceImpl socioRepository;
    @Autowired
    private MembresiaServiceImpl memRepository;

    @GetMapping("/socios")
    public String Socio(Model model) {
        model.addAttribute("title", "Animal GYM | Socios");

        model.addAttribute("content", "socios :: content");
        model.addAttribute("modal", "socios :: modal");
        model.addAttribute("script", "");

        model.addAttribute("activePage", "socios");

        model.addAttribute("socios", socioRepository.findAll());
        model.addAttribute("membresias", memRepository.findAll());
        return "dashboard";
    }
}
