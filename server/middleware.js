import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import dotenv from 'dotenv';

dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
  region: 'ap-northeast-2',
});

export const multerImg = multer({
  storage: multerS3({
    s3: s3,
    acl: 'public-read',
    bucket: 'today-date-side/image',
    key: function (req, file, cb) {
      cb(null, `${file.fieldname}_${Date.now().toString()}`);
    },
  }),
});
