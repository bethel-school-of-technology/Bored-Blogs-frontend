export class ContactUs {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    body: string;
    constructor (
        id: number,
    firstName: string,
    lastName: string,
    email: string,
    subject: string,
    body: string
    ) 
    
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.body = body;
    }
}
