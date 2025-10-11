package pe.edu.utp.animalGym.controller.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import pe.edu.utp.animalGym.service.impl.BoletaServiceImpl;

import org.springframework.ui.Model;

@Controller

public class BoletasController {
	@Autowired
	private BoletaServiceImpl servicio;

	@GetMapping("/boletas")
	public String Socio(Model model) {
		model.addAttribute("content", "boletas :: content");
		model.addAttribute("modal", "boletas :: modals");
		model.addAttribute("activePage", "boletas");
		model.addAttribute("script", "");

		model.addAttribute("tablaBoleta", servicio.findAll());
		return "dashboard";
	}
}
