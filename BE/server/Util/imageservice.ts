import AWS from 'aws-sdk';

import path from 'path';
import * as DBConfig from '../config/db';
 const s3 = new AWS.S3({
    accessKeyId: DBConfig.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: DBConfig.AWS_S3_SECRET_ACCESS_KEY,
  })

async function upload(imageName, base64Image, type) {
    const signedUrlExpireSeconds = 30* 24* 60 * 60 * 1
    const params = {
        Bucket: `${DBConfig.BUCKET_NAME}/images`,
        Key: imageName,
        Body: Buffer.from(base64Image.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
        Type: type
    };
    let data;
    try {
        data = await promiseUpload(params);
    } catch (err) {
        console.error(err);
        return "";
    }
    const url = s3.getSignedUrl('getObject', {
        Bucket: `${DBConfig.BUCKET_NAME}/images`,
        Key: imageName,
        Expires: signedUrlExpireSeconds
    })
    //return data.Location;
    return url;
}
/**
 * @description Promise an upload to S3
 * @param params S3 bucket params
 * @return data/err S3 response object
 */
 function promiseUpload(params) {
    return new Promise(function (resolve, reject) {
        console.log(params);
        s3.upload(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

export default upload;


//  //Connect to S3
//  const s3 = new AWS.S3({
//     accessKeyId: DBConfig.AWS_S3_ACCESS_KEY_ID,
//     secretAccessKey: DBConfig.AWS_S3_SECRET_ACCESS_KEY,
//   })
  
//   const image = path.join(__dirname, '../../client/assets/images/image-search-1600-x-840-px-62c6dc4ff1eee-sej-760x400.png')
  
//   const fileContent = fs.readFileSync(image, 'utf8');
  
//   const params = {
//     Bucket: DBConfig.BUCKET_NAME as string,
//     Key: 'cat.jpg',
//     Body: fileContent
//   };
  
//   const x = s3.upload(params, function(err, data) {
//     console.log("Tring to connect");
//     if (err) console.log(err, err.stack);
//     else console.log('File upload successfully', data.Location);
//   });
  
//   console.log(x);