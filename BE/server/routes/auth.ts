import express from 'express';
const router = express.Router();

import {ProcessLoginPage, ProcessRegisterPage, ProcessLogoutPage} from '../controllers/auth'; //single qoute must be consistent

/* POST request when a button is clicked */
// Process Login Page when Form Button is Submitted.
router.post('/login', ProcessLoginPage);

/* GET Register page. */
// Process Register Page when Form Button is Submitted.
router.post('/register', ProcessRegisterPage);

/* GET for link */
router.get('/logout', ProcessLogoutPage);
export default router;