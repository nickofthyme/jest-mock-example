import { FileService } from './file_service'; // actually imports from __mocks__/
import { indirectConsumer } from './fs_consumer_indirect';

// this makes mocks the imports from file_service for all imports above
jest.mock('./file_service');

it('should call uploadToS3SingleFile mock', () => {
  const result = indirectConsumer(); // note we are not passing the mock here
  expect(result).toBe('testing'); // this is for demo sake but you should test using correct types and functionality
  const fsMock = new FileService();
  expect(fsMock.uploadToS3SingleFile).toBeCalledTimes(1);
});
