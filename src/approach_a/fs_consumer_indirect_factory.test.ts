import { indirectConsumer } from './fs_consumer_indirect';

const uploadToS3SingleFileMock = jest.fn().mockReturnValue('local-mock');

// this makes mocks the imports from file_service for all imports above
jest.mock('./file_service', () => ({
  FileService: jest.fn().mockImplementation(() => ({ // required for classes, see https://github.com/facebook/jest/issues/5023#issuecomment-355151664
    uploadToS3SingleFile: uploadToS3SingleFileMock,
  })),
}));

it('should call uploadToS3SingleFile mock', () => {
  const result = indirectConsumer(); // note we are not passing the mock here
  expect(result).toBe('local-mock'); // this is for demo sake but you should test using correct types and functionality
  expect(uploadToS3SingleFileMock).toBeCalledTimes(1);
});
