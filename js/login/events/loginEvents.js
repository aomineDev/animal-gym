import { loginForm } from "../dom.js";
import { inputDNI, inputPassword } from "../dom.js";
import { setUser } from "../../service.js";

export const validationCredentialEvents = (empleados) => {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const user = empleados.find(
            (empleado) =>
                empleado.dni === inputDNI.value &&
                empleado.clave === inputPassword.value
        );

        if (user) {
            setUser(user)
            window.location.href = "home.html"
        } else {
            console.log("error")
        }
    });
};
