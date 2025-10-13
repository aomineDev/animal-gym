import {
  partnerForm,
  partnerFormModal,
  partnerFormModalTitle,
  partnerFormSubmit,
  partnerFormImage,
  partnerFormImagePreview,
} from '../dom.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import Service from '../../service/index.js'
import StorageService from '../../service/storage.js' //upload image
import { showToast, TOAST_TYPES } from '../../bootstrap/toast.js'
import {
  renderNewMembershipCard,
  renderUpdatedMembershipCard,
} from '../render.js'
import { partnerList } from '../store.js'

const partnerService = new Service('socios')
const storageService = new StorageService('socios')
const bsModal = bootstrap.Modal.getOrCreateInstance(partnerFormModal)
// const defaultPartnerImage = '/img/membresias/default.png'
// const defaultFormMembershipImage = '/img/form/image-preview.png'
