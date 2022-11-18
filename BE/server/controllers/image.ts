import express from 'express';
import imagesService from '../Util/imageservice';
// Import aws sdk

/*Processing Function*/
export async function UploadImage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    const base64Image = req.body.image;
    const imageName = req.body.imageName;
    const type = req.body.type;
    let response;

    try {
        response = await imagesService(imageName, base64Image, type);
    } catch (err:any) {
        console.error(`Error uploading image: ${err.message}`);
        return next(new Error(`Error uploading image: ${imageName}`));
    }
    res.send({link: response});
}

