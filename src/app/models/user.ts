export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
     //We can remove this userName since we decided not to have usernames? (Jackie)
    userName: string;
    //when u login u get a token
    token: string;
    constructor(id: number, email: string, password: string, firstNam: string, lastName: string, userName: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstNam;
        this.lastName = lastName;
        //We can remove this userName since we decided not to have usernames? (Jackie)
        this.userName = userName;
    }
}