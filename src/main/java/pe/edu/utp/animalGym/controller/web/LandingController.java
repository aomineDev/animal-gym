package pe.edu.utp.animalGym.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LandingController {
  @GetMapping("/landingPage")
  public String index(Model model) {
    model.addAttribute("content", "landing :: content");
    model.addAttribute("content", "landing :: modal");

    return "index";
  }

}
