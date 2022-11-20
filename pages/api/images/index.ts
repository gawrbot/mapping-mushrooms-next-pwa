// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { createImage, getAllImages } from '../../../database/images';
import { getValidSessionByToken } from '../../../database/sessions';

export type ImageResponseBody =
  | { errors: { message: string }[] }
  | {
      date?: number;
      time?: number;
      image?: string;
      longitude?: number;
      latitude?: number;
      userId?: number;
      userName?: string;
      note?: string;
      articlesId?: number;
    };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ImageResponseBody>,
) {
  if (request.method === 'POST') {
    const newImage = await createImage(
      request.body.image,
      request.body.longitude,
      request.body.latitude,
      request.body.userId,
      request.body.userName,
      request.body.note,
      request.body.articlesId,
    );

    response.status(200).json({
      image: newImage?.image,
      longitude: newImage?.longitude,
      latitude: newImage?.latitude,
      userId: newImage?.userId,
      userName: newImage?.usersUsername,
      note: newImage?.note,
      articlesId: newImage?.articlesId,
    });
  } else if (request.method === 'GET') {
    const session =
      request.cookies.sessionToken &&
      (await getValidSessionByToken(request.cookies.sessionToken));

    if (!session) {
      response
        .status(400)
        .json({ errors: [{ message: 'No valid session token passed' }] });
      return;
    }

    const images = await getAllImages();

    response.status(200).json(images as ImageResponseBody);
  } else {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
  }
}
