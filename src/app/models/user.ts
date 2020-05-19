export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    //when u login u get a token
    token: string;
    isAdmin: boolean;
    createdAt: string;
    lastLoggedIn: string;
    
    constructor(id: number, email: string, password: string, firstNam: string, lastName: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstNam;
        this.lastName = lastName;
    }
}