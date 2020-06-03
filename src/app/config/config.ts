/**
 * Author: Jacob Stanton
 * stores some frontend configurations
 *
 * @export
 * @class Config
 */
export class Config {
  //jacobs url for hist cloud backend server
  //ec2-52-91-103-255.compute-1.amazonaws.com
  static STORAGE_KEY = "storage_key";
  static weAreUsingCloud = !false; //set to true if you want to use the cloud affects services
  static apiUrl = !Config.weAreUsingCloud
    ? "http://54.159.120.199/api"//jacob setup for api proxy pass
    //? "http://54.159.120.199:3001"//jacob setup direct connection
    : "http://localhost:3001"; //:3001

  static GOOGLE_API_KEY = "AIzaSyCyUj8Iop26HzwdeMKyKH6CxEwoZe0VROk";
}
