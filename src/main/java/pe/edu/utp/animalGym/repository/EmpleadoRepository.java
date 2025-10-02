package pe.edu.utp.animalGym.repository;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Repository;

import pe.edu.utp.animalGym.model.Empleado;

@Repository
public class EmpleadoRepository {

    private List<Empleado> employeeList = new ArrayList<>();

    private Integer nextId = 5;

    public EmpleadoRepository() {
        save(new Empleado(1, "76454651", "Leonardo", "Murillo", "913582873", "Masculino",
                "loelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "uploads/empleados/emp11.JPG",
                1500, "Anual", "Abdominales"));
        save(new Empleado(2, "77454651", "Sebastian", "Pereze", "955582873", "Masculino",
                "lsonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "uploads/empleados/emp5.JPG",
                1500, "Indefinido", "Brazos"));
        save(new Empleado(3, "76464651", "Juan", "Carlos", "920582873", "Masculino",
                "leasdonardoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "uploads/empleados/emp6.JPG",
                1500, "Anual", "Piernas"));
        save(new Empleado(4, "76484651", "Tomas", "Torres", "915562873", "Masculino",
                "leona1211rdoelbaneado@gmail.com", LocalDate.of(2022, 3, 19), LocalDate.of(2022, 3, 19),
                "uploads/empleados/emp7.JPG",
                1500, "Anual", "Cabezasos"));
        //
        save(new Empleado(5, "76543210", "Albert", "Mantez", "987654321", "Femenino",
                "maria.gonzales@example.com", LocalDate.of(1995, 6, 15), LocalDate.of(2021, 1, 10),
                "uploads/empleados/emp8.JPG", 1800, "Mensual", "Piernas"));

        save(new Empleado(6, "78451236", "Carlos", "Ramírez", "912345678", "Masculino",
                "carlos.ramirez@example.com", LocalDate.of(1988, 11, 20), LocalDate.of(2020, 5, 22),
                "uploads/empleados/emp9.JPG", 2200, "Anual", "Piernas"));

        save(new Empleado(7, "79876543", "Lucía", "Fernández", "956123478", "Femenino",
                "lucia.fernandez@example.com", LocalDate.of(1999, 4, 8), LocalDate.of(2022, 8, 30),
                "uploads/empleados/emp10.JPG", 1600, "Mensual", "Piernas"));

        save(new Empleado(8, "75412369", "Andrés", "Pérez", "934567812", "Masculino",
                "andres.perez@example.com", LocalDate.of(1992, 9, 25), LocalDate.of(2019, 12, 5),
                "uploads/empleados/emp3.JPG", 2500, "Anual", "Piernas"));

        save(new Empleado(9, "72369854", "Luis", "Fernando", "945612378", "Femenino",
                "valeria.lopez@example.com", LocalDate.of(1997, 2, 12), LocalDate.of(2023, 3, 19),
                "uploads/empleados/emp1.JPG", 1750, "Mensual", "Piernas"));

        save(new Empleado(10, "70123498", "Jorge", "Martínez", "976543210", "Masculino",
                "jorge.martinez@example.com", LocalDate.of(1985, 7, 5), LocalDate.of(2018, 11, 14),
                "uploads/empleados/emp4.JPG", 3000, "Anual", "Piernas"));
    }

    public List<Empleado> findAll() {
        return employeeList;
    }

    public Optional<Empleado> findById(Integer id) {
        return employeeList.stream().filter(p -> p.getPersonaId() == id).findFirst();
    }

    public Empleado save(Empleado empleado) {
        if (empleado.getPersonaId() == null) {
            empleado.setPersonaId(nextId++);
        } else {
            deleteById(empleado.getPersonaId());
        }

        employeeList.add(empleado);
        return empleado;
    }

    public void deleteById(Integer id) {
        employeeList.removeIf(p -> p.getPersonaId() == id);
    }
}
