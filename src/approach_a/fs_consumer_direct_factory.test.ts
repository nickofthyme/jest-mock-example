import { FileService } from './file_service'; // actually imports module mock from factory below
import { directConsumer } from './fs_consumer_direct';

const uploadToS3SingleFileMock = jest.fn().mockReturnValue('local-mock');

// this makes mocks the imports from file_service for all imports above
jest.mock('./file_service', () => ({
  FileService: jest.fn().mockImplementation(() => ({ // required for classes, see https://github.com/facebook/jest/issues/5023#issuecomment-355151664
    uploadToS3SingleFile: uploadToS3SingleFileMock,
  })),
}));

it('should call uploadToS3SingleFile mock', () => {
  const fsMock = new FileService();
  const result = directConsumer(fsMock); // calls fsMock.uploadToS3SingleFile internally
  expect(result).toBe('local-mock'); // this is for demo sake but you should test using correct types and functionality
  expect(fsMock.uploadToS3SingleFile).toBeCalledTimes(1);
  expect(uploadToS3SingleFileMock).toBeCalledTimes(1); // equivalent to the line above
});
