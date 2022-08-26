// use the same mock for all instances, this could be a problem with parallel tests
const uploadToS3SingleFileMock = jest.fn().mockReturnValue('testing');

export class FileService {
  constructor () {
    console.log('Using FileService from __mocks__/'); // just to show when using this mock or not
  }

  public uploadToS3SingleFile = uploadToS3SingleFileMock;
}
