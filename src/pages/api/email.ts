import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File, Fields, Files } from 'formidable';
import { promises as fs } from 'fs';

interface FormidableFiles extends Files {
    [key: string]: File[] | undefined;
}

interface ErrorResponse {
    response: {
        body: any;
    };
}

interface Attachment {
    content: string; // base64-encoded content
    filename: string;
    type: string;
    disposition: string;
}

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = new IncomingForm();

    form.parse(req, async (err, fields: Fields, files: FormidableFiles) => {
        if (err) {
            console.error('Formidable error:', err);
            res.status(500).json({ error: 'Error parsing form data' });
            return;
        }

        try {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

            const attachments = (await Promise.all(
                Object.entries(files).flatMap(([key, fileList]) => {
                    if (!fileList) return [];
                    return fileList.map(f => fs.readFile(f.filepath, { encoding: 'base64' }).then(content => ({
                        content,
                        filename: f.originalFilename,
                        type: f.mimetype,
                        disposition: 'attachment',
                    })));
                })
            )).filter((attachment): attachment is Attachment => attachment !== null);

            const msg = {
                to: 'eniskalyon@gmail.com', // Change to your recipient
                from: 'cuneicoder@gmail.com', // Change to your verified sender
                subject: 'This is a simple message',
                text: Array.isArray(fields.text) ? fields.text.join(' ') : fields.text || '',
                html: '<strong>and some html</strong>',
                attachments,
            };

            await sgMail.send(msg);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
                res.status(500).json({ error: 'Error sending email', details: error.message });
            } else {
                console.error('An unknown error occurred', error);
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
