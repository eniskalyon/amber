import { useState } from 'react';

export const EmailComponent: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [images, setImages] = useState<File[]>([]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImages(Array.from(event.target.files));
        }
    };

    const sendEmail = async () => {
        const formData = new FormData();
        formData.append('text', text);
        images.forEach(image => formData.append('images', image));
    
        try {
            const res = await fetch('/api/email', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();
            console.log('Response:', data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
      <>
         <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
         />
         <input 
            type="file"
            multiple
            accept="image/png, image/jpg, image/jpeg"
            onChange={handleFileChange}
         />
         <button type="submit" onClick={sendEmail}>
            Send e-mail to backend
         </button>
      </>
    );
};
