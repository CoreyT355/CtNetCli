export class Email {
    constructor(
        public fromEmail: string,
        public toEmail: string,
        public subject: string,
        public content: string) {

    }

    static fromJson({fromEmail, toEmail, subject, content}):Email {
        return new Email(
            fromEmail,
            toEmail,
            subject,
            content
        );
    }
}