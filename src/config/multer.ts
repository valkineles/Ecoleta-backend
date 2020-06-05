import crypto from 'crypto';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename(req, file, callback) {
      const hash = crypto.randomBytes(6).toString('hex');

      const filename = `${hash}-${file.originalname}`;

      callback(null, filename);
    },
  }),
};
