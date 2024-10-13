import { Router } from "express";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
    loginUserSchema,
    registerUserSchema,
    requestResetEmailSchema,
    resetPasswordSchema,
    loginWithGoogleOAuthSchema
} from "../validation/auth.js";
import {
    loginUserController,
    logoutUserController,
    refreshUserSessionController,
    registerUserController,
    requestResetEmailController,
    resetPasswordController,
    getGoogleOAuthUrlController,
    loginWithGoogleController
} from "../controllers/auth.js";
import { validateBody } from "../middlewares/validateBody.js";

const router = Router();

router.get(
    '/get-oauth-url',
    ctrlWrapper(getGoogleOAuthUrlController),
);

router.post(
    '/confirm-oauth',
    validateBody(loginWithGoogleOAuthSchema),
    ctrlWrapper(loginWithGoogleController),
);

router.post(
    '/register',
    validateBody(registerUserSchema),
    ctrlWrapper(registerUserController),
);

router.post(
    '/login',
    validateBody(loginUserSchema),
    ctrlWrapper(loginUserController),
);

router.post(
    '/logout',
    ctrlWrapper(logoutUserController),
);

router.post(
    '/refresh',
    ctrlWrapper(refreshUserSessionController),
);

router.post(
    '/send-reset-email',
    validateBody(requestResetEmailSchema),
    ctrlWrapper(requestResetEmailController),
);

router.post(
    '/reset-pwd',
    validateBody(resetPasswordSchema),
    ctrlWrapper(resetPasswordController),
);
export default router;
