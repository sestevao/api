import nodemailer, { Transporter } from 'nodemailer';
import handlebars from 'handlebars';
import fs from 'fs';

class SendMailService{
    private client: Transporter;

    //constructor doesn't allow using async await
    constructor(){
        nodemailer.createTestAccount().then((account) => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });

            this.client = transporter;
        });
    }

    async execute(to: string, subject: string, variables: object, path: string){
        //take the exact dir of the app
        //const npsPath = resolve(__dirname,"..","views","emails","npsMail.hbs");
        const templateFileContent = fs.readFileSync(path).toString("utf-8");
        const mailTemplateParse = handlebars.compile(templateFileContent);
        const html = mailTemplateParse(variables);
        const message = await this.client.sendMail({
            to, 
            subject, 
            html, 
            from: "NPS <noreplay@nps.com>"
        });

        console.log('Message sent: %s', message.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
    }    
}

export default new SendMailService();