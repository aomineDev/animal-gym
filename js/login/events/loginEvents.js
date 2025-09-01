import { loginForm } from "../dom.js";
import { inputDNI, inputPassword } from "../dom.js";

export const validationCredentialEvents = (empleados) => {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const isValid = empleados.some(
            (empleado) =>
                empleado.dni === inputDNI.value &&
                empleado.clave === inputPassword.value
        );

        if (isValid) {
            window.location.href = "home.html";
        } else {
            console.log("error")
        }
    });
};
