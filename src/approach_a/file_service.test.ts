// example for testing the file_service itself

import { FileService } from './file_service';
import { Multer } from 'multer';

const defaultMock: Partial<Multer> = {
  single: jest.fn(() => {
    return {
      test: 'anything',
    } as any;
  }),
};

// you may want to mock multer or multer-s3 modules
jest.mock('multer', () => {
  return {
    ...jest.requireActual('multer'),
    __esModule: true, // required when mocking a default export, see https://jestjs.io/docs/next/jest-object#jestmockmodulename-factory-options
    default () {
      return defaultMock;
    },
  };
});

it('should mock multer single method', () => {
  const fs = new FileService();
  const result = fs.uploadToS3SingleFile('bucketName', 'formDataKey');
  expect(result).toMatchObject({ test: 'anything' });
  expect(defaultMock.single).toBeCalledTimes(1);
});
