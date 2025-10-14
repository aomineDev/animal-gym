import {
  membershipForm,
  membershipFormModal,
  membershipFormModalTitle,
  membershipFormSubmit,
  membershipFormImage,
  membershipFormImagePreview,
} from '../dom.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import Service from '../../service/index.js'
import StorageService from '../../service/storage.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import {
  renderNewMembershipCard,
  renderUpdatedMembershipCard,
} from '../render.js'
import { membershipList } from '../store.js'

const membershipService = new Service('membresias')
const storageService = new StorageService('membresias')
const bsModal = bootstrap.Modal.getOrCreateInstance(membershipFormModal)
const defaultMembershipImage = '/img/membresias/default.png'
const defaultFormMembershipImage = '/img/form/image-preview.png'

async function handleFormSubmit(e) {
  if (!this.checkValidity()) return

  const nombre = this.nombre.value.trim()
  const precio = parseFloat(this.precio.value)
  const precioOferta = parseFloat(this.precioOferta.value) || null
  const inicioOferta = this.inicioOferta.value || null
  const finOferta = this.finOferta.value || null
  const descripcion = this.descripcion.value.trim() || null
  const estado = this.estado.value === 'activo'
  const duracion = parseInt(this.duracion.value)
  const limiteCupos = parseInt(this.limiteCupos.value)
  const file = this.file.files[0]
  let imagen =
    this.dataset.type === FORM_ACTIONS.CREATE
      ? defaultMembershipImage
      : membershipList[this.dataset.id].imagen

  // validacion calendario

  try {
    if (file) imagen = await storageService.upload(file)

    const membership = {
      nombre,
      precio,
      precioOferta,
      inicioOferta,
      finOferta,
      descripcion,
      estado,
      duracion,
      limiteCupos,
      imagen,
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await membershipService.save(membership)

      renderNewMembershipCard(data)

      membershipList[data.membresiaId] = data

      showToast('Membresia creada con exito!', TOAST_TYPES.SUCCESS)
    } else if (this.dataset.type === FORM_ACTIONS.UPDATE) {
      const id = this.dataset.id

      const data = await membershipService.update(membership, id)

      renderUpdatedMembershipCard(data)

      membershipList[data.membresiaId] = data

      showToast('Membresia actualizada con exito!', TOAST_TYPES.SUCCESS)
    }

    bsModal.hide()
  } catch (error) {
    showToast('No se pudo crear la membresia', TOAST_TYPES.ERROR)
    console.log(error)
  }
}

function handleImageChange(e) {
  const imageFile = this.files[0]

  const imageURL = URL.createObjectURL(imageFile)

  membershipFormImagePreview.src = imageURL
}

function fillMembershipForm(membership) {
  membershipForm.nombre.value = membership.nombre
  membershipForm.precio.value = membership.precio
  membershipForm.precioOferta.value = membership.precioOferta
  membershipForm.inicioOferta.value = membership.inicioOferta
  membershipForm.finOferta.value = membership.finOferta
  membershipForm.descripcion.value = membership.descripcion
  membershipForm.estado.value = membership.estado ? 'activo' : 'inactivo'
  membershipForm.duracion.value = membership.duracion
  membershipForm.limiteCupos.value = membership.limiteCupos

  if (membership.imagen === defaultMembershipImage)
    membershipFormImagePreview.src = defaultFormMembershipImage
  else membershipFormImagePreview.src = membership.imagen
}

export default function registerMembershipFormModalEvents() {
  membershipForm.addEventListener('submit', handleFormSubmit)

  membershipFormModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id

    if (id) {
      membershipForm.dataset.type = FORM_ACTIONS.UPDATE
      membershipForm.dataset.id = id
      membershipFormModalTitle.textContent = 'Actualizar Membersia'
      membershipFormSubmit.textContent = 'Guardar Membersia'

      fillMembershipForm(membershipList[id])
    } else {
      membershipForm.dataset.type = FORM_ACTIONS.CREATE
      membershipFormModalTitle.textContent = 'Nueva Membersia'
      membershipFormSubmit.textContent = 'Crear Membersia'
      membershipFormImagePreview.src = defaultFormMembershipImage
    }
  })

  membershipFormImage.addEventListener('change', handleImageChange)
}

// import { formulario, fileInput, vistaImg } from "../dom.js";
// import Service from "../../service/index.js"
// import { renderMembresiaCard } from "../render.js";
// import { showToast } from "../../utils.js";

// const servicioMembresia = new Service("membresias");

// export const crearMembresia = () => {

//   formulario.addEventListener('submit', async function (e) {

//     e.preventDefault();
//     e.stopPropagation();

//     if (!this.checkValidity()) {
//       this.classList.add("was-validated");
//       return;
//     }

//     const formData = new FormData(this);
//     const file = formData.get("file");
//     console.log(file);

//     // if (!file) {
//     //   showToast("Debes seleccionar una imagen", 0);
//     //   return;
//     // }

//     // subir imagen y obtener url
//     const urlImagen = await uploadFile(file);

//     const inicio = formData.get("inicioOferta");
//     const fin = formData.get("finOferta");
//     const precio = parseFloat(formData.get("precio"));
//     const precioOferta = parseFloat(formData.get("precioOferta"));
//     console.log(precio, precioOferta)
//     if (precioOferta >= precio) {
//       alert("El precio de oferta debe ser menor que el precio normal");
//       // showToast("El precio de oferta debe ser menor que el precio normal",2);
//       return;
//     }
//     if (!inicio || !fin || new Date(fin) <= new Date(inicio)) {
//       alert("Las fechas de inicio y fin no son válidas");
//       return;
//     }

//     const duracion = Math.ceil(
//       (new Date(fin) - new Date(inicio)) / (1000 * 60 * 60 * 24)
//     );

//     const estado = formData.get("estado") === "activo";

//     const objMembresiaData = {
//       nombre: formData.get("nombre"),
//       descripcion: formData.get("descripcion"),
//       duracion: duracion,
//       precio: precio,
//       precioOferta: precioOferta,
//       inicioOferta: inicio,
//       finOferta: fin,
//       estado: estado,
//       limiteCupos: parseInt(formData.get("limiteCupos"), 10),
//       imagen: urlImagen
//     };
//     // console.log('url imagen subida ruta: ' ,objMembresiaData.imagen);
//     // console.log("obj membresia", objMembresiaData);

//     // await servicioMembresia.create(objMembresiaData);

//     // showToast(`Membresia "${objMembresiaData.nombre}" creada con éxito`, 1);

//     /*private Integer menbresiaId;
//     private String nombre;
//     private String descripcion;
//     private int duracion;
//     private double precio;
//     private double precioOferta;
//     private LocalDate inicioOferta;
//     private LocalDate finOferta;
//     private String imagen;
//     private boolean estado;
//     private Integer limiteCupos;*/

//     try {
//       // enviar el obj al backend mediante el servicio
//       const membresiaCreado = await servicioMembresia.save(objMembresiaData);

//       // pasar el obj a renderizar en template
//       renderMembresiaCard(membresiaCreado);
//       // Limpiar el formulario y ocultar modal si exiiste
//       formulario.reset();
//       formulario.classList.remove("was-validated");
//       const modal = bootstrap.Modal.getInstance(
//         document.getElementById("modalCrearMembresia")
//       );
//       if (modal) modal.hide();

//       //showToast(`Se ha creado la membresia "${objMembresiaData.nombre}"`, 1);

//     } catch (error) {
//       console.error("Error al crear la membresia", error);
//     }

//   })
// }

// export const eliminarMembresia = () => {
//   // Escuchamos todos los clicks en botones de eliminar
//   document.body.addEventListener("click", async (e) => {
//     // console.log(e.target);
//     if (e.target.closest(".eliminarMembresia")) {
//       const id = e.target.closest(".eliminarMembresia").dataset.id;
//       console.log(id);

//       try {
//         //js/service/index.js
//         const response = await servicioMembresia.delete(id);

//         if (response.ok) {
//           const item = document.querySelector(`#membresiaCard__${id}`);
//           if (item) item.remove();

//           // Cerrar modal
//           const modal = bootstrap.Modal.getInstance(
//             document.getElementById(`eliminarMembresia__${id}`)
//           );
//           if (modal) modal.hide();

//           document.querySelector("#editarMembresia__" + id).remove();
//           document.querySelector("#eliminarMembresia__" + id).remove();

//           //showToast(`Membresia ${id} eliminado`, 2);

//         } else {
//           console.error("Error al eliminar la membresia.", response);
//         }

//       } catch (error) {
//         console.error("Error al eliminar membresia >> render:", error);
//         //showToast("No se pudo eliminar el membressia", 0);
//       }
//     }
//   });
// };

// export const actualizarMembresia = () => {

//   document.body.addEventListener("click", async function (e) {

//     const btn = e.target.closest(".actualizarMembresia");
//     // console.log(btn);
//     if (btn) {
//       e.preventDefault();
//       const id = btn.dataset.id;//data-id
//       const formValid = document.querySelector("#editarMembresia__" + id + " #editarMembresiaForm");

//       const formData = new FormData(formValid)
//       // for (const [key, value] of formData.entries()) {
//       //   console.log(`${key}: ${value}`);
//       // }
//       // return;
//       // Si ya hay una imagen guardada en el backend
//       let urlImagen = formData.get("imagenActual");

//       // Si el usuario selecciona un archivo nuevo
//       const file = formData.get("file");
//       if (file && file.size > 0) {
//         urlImagen = await uploadFile(file); // sube el nuevo y reemplaza
//       }
//       console.log(file);
//       // urlImagen = await uploadFile(file);
//       // if (!file) {
//       //   showToast("Debes seleccionar una imagen", 0);
//       //   return;
//       // }

//       // subir imagen y obtener url
//       // const urlImagen = await uploadFile(file);

//       const inicio = formData.get("inicioOferta");
//       const fin = formData.get("finOferta");
//       const precio = parseFloat(formData.get("precio"));
//       const precioOferta = parseFloat(formData.get("precioOferta"));
//       console.log(precio, precioOferta)
//       if (precioOferta >= precio) {
//         alert("El precio de oferta debe ser menor que el precio normal");
//         // showToast("El precio de oferta debe ser menor que el precio normal",2);
//         return;
//       }
//       if (!inicio || !fin || new Date(fin) <= new Date(inicio)) {
//         alert("Las fechas de inicio y fin no son válidas");
//         return;
//       }

//       const duracion = Math.ceil(
//         (new Date(fin) - new Date(inicio)) / (1000 * 60 * 60 * 24)
//       );

//       const estado = formData.get("estado") === "activo";

//       // menbresiaId: id,
//       const objMembresiaData = {
//         nombre: formData.get("nombre"),
//         descripcion: formData.get("descripcion"),
//         duracion: duracion,
//         precio: precio,
//         precioOferta: precioOferta,
//         inicioOferta: inicio,
//         finOferta: fin,
//         estado: estado,
//         limiteCupos: parseInt(formData.get("limiteCupos"), 10),
//         imagen: urlImagen
//       };

//       try {
//         const membresiaActualizado = await servicioMembresia.update(objMembresiaData, id);

//         const edit = document.getElementById("membresiaCard__" + id);
//         if (edit) {
//           edit.remove();
//         }

//         renderMembresiaCard(membresiaActualizado);

//         formValid.reset();
//         formValid.classList.remove("was-validated");
//         const modal = bootstrap.Modal.getInstance(
//           document.getElementById("editarMembresia__" + id)
//         );
//         if (modal) modal.hide();

//         document.querySelector("#editarMembresia__" + id).remove();
//         document.querySelector("#eliminarMembresia__" + id).remove();

//         showToast(`Se ha editado la membresia "${objMembresiaData.nombre}"`, 1);

//       } catch (error) {
//         console.error("Error al actualizar:", error);
//       }
//     }

//   });

// }

// //Funcion para recuperar imagen en string
// const uploadFile = async (file) => {
//   //evaluar que la imagen exista
//   if (!file) return null;
//   console.log(file);
//   const formData = new FormData();
//   formData.append("file", file);

//   const response = await fetch("/api/membresias/upload", {
//     method: "POST",
//     body: formData,
//   })
//   //hacer una peticion al controlarEmpelado el controlador usara el file como parametro para almacenar ese file en la pc y esa direccion donde se
//   //almaceno devolvera en string, ese string se recupera en text(); y ya tenemos el string que servira para la subida de fotos
//   return await response.text();
// };

// export const cargarImagen = () => {
//   document.body.addEventListener("change", (e) => {
//   if (e.target.matches('input[type="file"][data-preview]')) {
//     const file = e.target.files[0];
//     const previewId = e.target.dataset.preview;
//     const previewImg = document.getElementById(previewId);

//     if (file && previewImg) {
//       const objectUrl = URL.createObjectURL(file);
//       previewImg.src = objectUrl;
//       previewImg.onload = () => URL.revokeObjectURL(objectUrl);
//     }
//   }
// });
// }
