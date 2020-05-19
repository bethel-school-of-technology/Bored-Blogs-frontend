/**
 * Author: Jacob Stanton
 * stores some frontend configurations
 *
 * @export
 * @class Config
 */
export class Config {
  //jacobs url for hist cloud backend server
<<<<<<< HEAD
  //ec2-52-91-103-255.compute-1.amazonaws.com  
  static STORAGE_KEY = "storage_key";    
  static weAreUsingCloud = true; //set to true if you want to use the cloud affects services
  static apiUrl = Config.weAreUsingCloud ? 'ec2-52-91-103-255.compute-1.amazonaws.com':"http://localhost:3001"; //:3001
=======
  //ec2-52-91-103-255.compute-1.amazonaws.com
  static STORAGE_KEY = "storage_key";
  static weAreUsingCloud = true; //set to true if you want to use the cloud affects services
  static apiUrl = Config.weAreUsingCloud
    ? "54.159.120.199"
    : "http://localhost:3001"; //:3001
>>>>>>> 43fc55ee9649c6ab59a50580e2737a3ae1f68bff
}
