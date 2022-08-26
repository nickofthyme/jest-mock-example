import { FileService } from './file_service';
import { createFileServiceMock } from './file_service.mock';

const fakeConsumer = (fs: FileService) => {
  return fs.uploadToS3SingleFile('bucketName', 'formDataKey');
};

beforeEach(() => {
  jest.clearAllMocks();
});

it('should mock FileService with default', () => {
  const fsMock = createFileServiceMock();
  const result = fakeConsumer(fsMock);
  expect(fsMock.uploadToS3SingleFile).toBeCalledTimes(1);
  expect(result).toMatchObject({ mock: true });
});

it('should mock FileService', () => {
  const fsMock = createFileServiceMock({ name: 'testing' });
  const result = fakeConsumer(fsMock);
  expect(fsMock.uploadToS3SingleFile).toBeCalledTimes(1);
  expect(result).toMatchObject({ mock: true, mockName: 'testing' });
});
