import { FileService } from './file_service';

export const indirectConsumer = () => {
  const fs = new FileService();
  return fs.uploadToS3SingleFile('bucketName', 'formDataKey');
};
