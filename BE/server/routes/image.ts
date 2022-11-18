import express from 'express';
const router = express.Router();

import multer from 'multer';
const upload = multer({ dest: 'images/' })

import {UploadImage} from '../controllers/image'; //single qoute must be consistent

/* POST request when a button is clicked */
// Process Login Page when Form Button is Submitted.
router.post('/image', UploadImage);
export default router;