import { FileService } from './file_service'; // actually imports from __mocks__/
import { directConsumer } from './fs_consumer_direct';

// this makes mocks the imports of FileService for all imports above
jest.mock('./file_service');

it('should call uploadToS3SingleFile mock', () => {
  const fsMock = new FileService();
  const result = directConsumer(fsMock); // calls fsMock.uploadToS3SingleFile internally
  expect(result).toBe('testing'); // this is for demo sake but you should test using correct types and functionality
  expect(fsMock.uploadToS3SingleFile).toBeCalledTimes(1);
});
