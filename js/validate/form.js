import { forms } from '../dom.js'

(() => {
    'use strict'

    Array.from(forms).forEach(form => {
        form.addEventListener("submit", event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add("was-validated")
        }, false)
    })
})()