import { Bio } from './bio';

export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    bio: Bio;
    //when u login u get a token
    token: string;
    isAdmin: boolean;
    lastLoggedIn: string;
    lastLoggedInDate: Date;
    createdAt: string;
    createdAtDate: Date;
    style:string;//todo jacob should update this and bring backend closer to frontend
    url: String;

    name:string;//backend doesnt give a concated name but service can glue them together;

    constructor() {

    }
}