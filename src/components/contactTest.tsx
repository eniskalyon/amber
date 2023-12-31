import { useState } from 'react';
export const EmailComponent: React.FC = () => {
    const [senderName, setSenderName] = useState<string>('');
    const [telephone, setTelephone] = useState<string>('');
    const [accidentDate, setAccidentDate] = useState<string>('');
    const [personalInjury, setPersonalInjury] = useState<boolean>(false);
    const [creditHire, setCreditHire] = useState<boolean>(false);
    const [senderEmail, setSenderEmail] = useState<string>('');
    const [accidentImages, setAccidentImages] = useState<File[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setAccidentImages(Array.from(event.target.files));
        }
    };

    const sendEmail = async () => {

        setIsSending(true);
        setMessage('Sending, please wait...');

        const formData = new FormData();
        formData.append('senderName', senderName);
        formData.append('telephone', telephone);
        formData.append('accidentDate', accidentDate);
        formData.append('personalInjury', personalInjury.toString());
        formData.append('creditHire', creditHire.toString());
        formData.append('senderEmail', senderEmail);
        accidentImages.forEach(image => formData.append('accidentImages', image));

        try {
            const res = await fetch('/api/email', { method: 'POST', body: formData });
            const data = await res.json();
            console.log('Response:', data);
            setMessage('Thanks for reaching out!');
        } catch (error) {
            console.error('Error sending email:', error);
            setMessage('Failed to send email, please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <input
                name="senderName"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Your name"
                required
            />
            <input
                name="telephone"
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone number"
                required
            />
            <input
                name="accidentDate"
                type="date"
                value={accidentDate}
                onChange={(e) => setAccidentDate(e.target.value)}
                placeholder="Accident date"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={personalInjury}
                    onChange={(e) => setPersonalInjury(e.target.checked)}
                />
                Personal Injury
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={creditHire}
                    onChange={(e) => setCreditHire(e.target.checked)}
                />
                Credit Hire
            </label>
            <input
                name="senderEmail"
                type="email"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="Your email (optional)"
            />
            <input
                name="accidentImages"
                type="file"
                multiple
                accept="image/png, image/jpg, image/jpeg"
                onChange={handleImageChange}
            />
             {!isSending && !message && (
            <button type="submit" onClick={sendEmail}>
                Send e-mail to backend
            </button>
        )}

        {message && <div>{message}</div>}
        </>
    );
};
