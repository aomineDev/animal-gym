package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PagoMembresiaController {
    @GetMapping("/pago-membresia")
    public String index(Model model) {
        model.addAttribute("content", "pago-membresia :: content");

        return "index";
    }

}
