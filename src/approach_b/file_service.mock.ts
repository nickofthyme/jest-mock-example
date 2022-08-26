// approach 1
import { RequestHandler } from 'express';
import { FileService } from './file_service';

// combined approach
export const createFileServiceMock = (options?: { name?: string }): jest.Mocked<FileService> => {
  // jest attempts to create an automock of the modules exports, not great for classes
  const FileServiceMock = jest.createMockFromModule<{ FileService: new() => FileService }>(
    './file_service.ts',
  ).FileService;
  const fullMockService = new FileServiceMock();
  return {
    ...fullMockService,
    uploadToS3SingleFile: jest.fn<RequestHandler, [bucketName: string, formDataKey: string]>((bucketName, formDataKey) => {
      // add custom mock behaviors here
      console.log(bucketName, formDataKey);
      return { mock: true, mockName: options?.name } as any;
    }),
  } as jest.Mocked<FileService>;
};
