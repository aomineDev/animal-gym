package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.MembresiaServiceImpl;

@Controller
public class MembresiasController {
    @Autowired
    private MembresiaServiceImpl service;

    @GetMapping("/membresias")

    public String Membership(Model model) {
        model.addAttribute("title", "Animal GYM | Membresias");
        model.addAttribute("content", "membresias :: content");
        model.addAttribute("modal", "membresias :: modal");
        model.addAttribute("script", "");

        model.addAttribute("activePage", "membresias");
        model.addAttribute("detalleCardMenbresia", service.findAll());

        return "dashboard";
    }

}
