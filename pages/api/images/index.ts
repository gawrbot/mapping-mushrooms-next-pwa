// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { createImage, getAllImages } from '../../../database/images';
import { getValidSessionByToken } from '../../../database/sessions';

export type ImageResponseBody =
  | { errors: { message: string }[] }
  | {
      image: {
        day?: number;
        time?: number;
        image?: string;
        longitude?: number;
        latitude?: number;
        userId?: number;
        note?: string;
        articleId?: number;
      };
    };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ImageResponseBody>,
) {
  if (request.method === 'POST') {
    //   // 1. make sure the data exist
    //   if (
    //     typeof request.body.image !== 'string' ||
    //     typeof request.body.longitude !== 'number' ||
    //     typeof request.body.latitude !== 'number' ||
    //     typeof request.body.userId !== 'number' ||
    //     // typeof request.body.note !== 'string' ||
    //     // typeof request.body.articleId !== 'number' ||
    //     !request.body.image ||
    //     !request.body.longitude ||
    //     !request.body.latitude ||
    //     !request.body.userId
    //     // !request.body.note ||
    //     // !request.body.articleId
    //   ) {
    //     return response
    //       .status(400)
    //       .json({ errors: [{ message: 'Necessary data not provided' }] });
    //   }

    // 4. sql query to create the record
    const newImage = await createImage(
      request.body.image,
      request.body.longitude,
      request.body.latitude,
      request.body.userId,
      request.body.note,
      request.body.articleId,
    );

    response.status(200).json({
      image: {
        image: newImage?.image,
        longitude: newImage?.longitude,
        latitude: newImage?.latitude,
        userId: newImage?.userId,
        note: newImage?.note,
        articleId: newImage?.articleId,
      },
    });
  } else if (request.method === 'GET') {
    // 1. Get the cookie from the request and use it to validate the session
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

    // if ('images' in images) {
    response.status(200).json(images);
    // }
    // else {
    //   response
    //     .status(304)
    //     .json({ errors: [{ message: 'Up to date' }] });
    // }
  } else {
    response.status(401).json({ errors: [{ message: 'Method not allowed' }] });
  }
}
