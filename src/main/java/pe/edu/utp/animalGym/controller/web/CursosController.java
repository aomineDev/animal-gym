package pe.edu.utp.animalGym.controller.web;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CursosController {
  @GetMapping("/cursos")
  public String cursos(Model model) {
    model.addAttribute("title", "Animal GYM | Cursos");
    model.addAttribute("content", "cursos :: content");
    model.addAttribute("activePage", "cursos");

    ArrayList<String> cursos = new ArrayList<>();
    cursos.add("Corte y manejo de uñas");
    cursos.add("Baño y secado");
    cursos.add("Limpieza de oídos");

    model.addAttribute("cursos", cursos);

    return "layout";
  }
}
