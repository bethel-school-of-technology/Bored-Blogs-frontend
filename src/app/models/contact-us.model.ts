export class ContactUs {
    id: number;
    fName: string;
    lName: string;
    email: string;
    subject: string;
    body: string;
    constructor(
        id: number,
    fName: string,
    lName: string,
    email: string,
    subject: string,
    body: string
    ) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.subject = subject;
        this.body = body;
    }
}