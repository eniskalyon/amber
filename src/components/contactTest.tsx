"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';

import SubmitBtn from './submit-btn'
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

    const { ref } = useSectionInView('Contact');

    return (
        <motion.section id="contact" ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 mt-44 w-[min(100%,38rem)] text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}>
             <SectionHeading>Let's get you covered!</SectionHeading>
        <div className='flex flex-col gap-1 mb-4'>
          <p className='text-gray-700 -mt-6'>Fill out the form below to get in contact with our Accident Claims team.
          </p>
          <br />
          <p className='text-gray-700 -mt-6'>
          Our advisers will get back to you as soon as possible.</p>
        </div>
            <form className='flex flex-col'>
                <input
                    name="senderName"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    required
                    className='h-14 px-4 rounded-lg border borderBlack'
                />
                <input
                    name="telephone"
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Telephone number"
                    required
                    className='h-14 px-4 my-3 rounded-lg border borderBlack'
                />
                <input
                    name="accidentDate"
                    type="date"
                    value={accidentDate}
                    onChange={(e) => setAccidentDate(e.target.value)}
                    placeholder="Accident date"
                    required
                    className='h-14 px-4 my-3 rounded-lg border borderBlack'
                />
                    <p className='text-gray-700 pb-2 pt-6'>Check below if you would like to claim personal injury, credit hire, or both (optional)</p>

                <div className='flex items-center pb-6 justify-center gap-4 text-xl'>
                    <label>
                        <input
                            type="checkbox"
                            checked={personalInjury}
                            onChange={(e) => setPersonalInjury(e.target.checked)}
                            className='form-checkbox h-5 w-5'
                        />
                        Personal Injury
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={creditHire}
                            onChange={(e) => setCreditHire(e.target.checked)}
                            className='form-checkbox h-5 w-5'
                        />
                        Credit Hire
                    </label>
                </div>
                <input
                    name="senderEmail"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="Your email (optional)"
                    className='h-14 px-4 my-3 rounded-lg border borderBlack'
                />
                  <p>You can add any accident related images by clicking below</p>

                <input
                    name="accidentImages"
                    type="file"
                    multiple
                    accept="image/png, image/jpg, image/jpeg"
                    onChange={handleImageChange}
                    className='h-14 px-4 my-3' 
                />
                 {!isSending && !message && (
                <SubmitBtn onClick={sendEmail} isSending={isSending} />

                        )}
            </form>

        {message && <div>{message}</div>}
        </motion.section>
    );
};
