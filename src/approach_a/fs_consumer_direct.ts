import { FileService } from './file_service';

export const directConsumer = (fs: FileService) => {
  return fs.uploadToS3SingleFile('bucketName', 'formDataKey');
};
