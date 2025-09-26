package pe.edu.utp.animalGym.controller.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.MembresiaServiceImpl;
import pe.edu.utp.animalGym.service.impl.SocioServiceImpl;

@Controller
public class SociosController {
    
    // @Autowired
    // private SocioServiceImpl socio;
    @Autowired
    private SocioServiceImpl socioRepository;
     @Autowired
    private MembresiaServiceImpl membresiaRepository;
    
    @GetMapping("/socios")
    public String Socio(Model model) {

        model.addAttribute("content", "socios :: content");

        model.addAttribute("modal", "socios :: modal");

        model.addAttribute("activePage", "socios");
        model.addAttribute("socios", socioRepository.findAll());
        model.addAttribute("membresias", membresiaRepository.findAll());
        return "layout";
    }
}
