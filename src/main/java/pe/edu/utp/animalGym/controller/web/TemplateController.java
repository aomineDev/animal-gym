package pe.edu.utp.animalGym.controller.web;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Controller;

@Controller
public class TemplateController {
  @GetMapping("/template")
  public String template(Model model) {
    model.addAttribute("title", "Animal GYM | Template");
    model.addAttribute("content", "template :: content");
    model.addAttribute("modal", "template :: modal");
    model.addAttribute("activePage", "template");

    return "layout";
  }
}
