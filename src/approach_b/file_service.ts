import multer from 'multer';
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

export class FileService {
  public uploadToS3SingleFile = (bucketName: string, formDataKey: string) =>
    multer({
      storage: multerS3({
        s3: new S3Client({}),
        bucket: bucketName,
        metadata: (req, file, cb) => {
          // Do something
        },
        key: (req, _file, cb) => {
          // Do something else
        },
      }),
      // fileFilter: this.fileFilter
    })
      .single(formDataKey);
}
