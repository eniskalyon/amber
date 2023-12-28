import type { NextApiRequest, NextApiResponse } from 'next';
import { Request } from 'express';
import multer from 'multer';
import { supabase } from '@/lib/supabaseClient';

interface NextApiRequestWithMulter extends NextApiRequest {
    file: Express.Multer.File;
  }

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // Example: 5MB limit
});

export default async function handler(
  req: NextApiRequestWithMulter,
  res: NextApiResponse
) {
  upload.single('accidentImages')(req as unknown as Request, res as any, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(500).json({ error: 'Unknown error occurred' });
    }

    const file = req.file;
    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const fileExt = file.originalname.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { data, error } = await supabase.storage
      .from('uploads')
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
      });

    if (error) {
      console.error('Error uploading to Supabase:', error.message);
      return res.status(500).json({ error: 'Error uploading file' });
    }

    const fileUrl = (data as any)?.publicUrl || '';
    res.status(200).json({ message: 'File uploaded successfully', fileUrl });
  });
}
