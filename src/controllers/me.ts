import type { RequestHandler } from 'express';
import { logger } from '@/utils';
import WhatsappService from "@/whatsapp/service";

export const getMe: RequestHandler = async (req, res) => {
  try {
    const session = WhatsappService.getSession(req.params.sessionId)!;
    const user = { ...session.authState.creds.me!, profilePicUrl: '' };
    user.profilePicUrl = (await session.profilePictureUrl(user.id, 'image'))!;
    res.status(200).json(user);
  } catch (e) {
    const message = 'An error occured during getting connecected user';
    logger.error(e, message);
    res.status(500).json({ error: message });
  }
};
