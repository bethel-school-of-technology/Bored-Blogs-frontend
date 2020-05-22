export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    bio: string;
    //when u login u get a token
    token: string;
    isAdmin: boolean;
    lastLoggedIn: string;
    createdAt: string;

    color:string;//todo jacob should update this and bring backend closer to frontend
    
    constructor(id: number, email: string, password: string, firstNam: string, lastName: string, bio: string, lastLoggedIn: string, createdAt: string) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstNam;
        this.lastName = lastName;
        this.bio = bio;
        this.lastLoggedIn = lastLoggedIn;
        this.createdAt = createdAt;
    }
}