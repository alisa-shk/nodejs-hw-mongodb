import { Router } from "express";
// import { getAllContacts, getContactById } from './services/contacts.js';
import { getContactsController, getContactsByIdController, createContactController, patchContactController, deleteContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId', ctrlWrapper(getContactsByIdController));

router.post('/contacts', ctrlWrapper(createContactController));

router.patch('/contacts', ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId', ctrlWrapper(deleteContactController));

export default router;
