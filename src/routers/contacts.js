import { Router } from "express";
import { getContactsController, getContactsByIdController, createContactController, patchContactController, deleteContactController } from "../controllers/contacts.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

import { validateBody } from "../middlewares/validateBody.js";
import { createContactSchema, updateContactSchema } from "../validation/contacts.js";
import { isValidId } from "../middlewares/isValidId.js";

const router = Router();

router.get('/contacts', ctrlWrapper(getContactsController));

router.get('/contacts/:contactId',
    isValidId,
    ctrlWrapper(getContactsByIdController));

// router.post('/contacts', ctrlWrapper(createContactController));

router.post(
    '/contacts',
    validateBody(createContactSchema),
    ctrlWrapper(createContactController),
);

router.patch(
    '/contacts/:contactId',
    isValidId,
    validateBody(updateContactSchema),
    ctrlWrapper(patchContactController),
);

// router.patch('/contacts/:contactId', ctrlWrapper(patchContactController));

router.delete('/contacts/:contactId',
    isValidId,
    ctrlWrapper(deleteContactController));

export default router;
