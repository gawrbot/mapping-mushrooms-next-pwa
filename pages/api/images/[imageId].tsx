// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import { deleteImageById } from '../../../database/images';
import { getValidSessionByToken } from '../../../database/sessions';
import { getUserBySessionToken } from '../../../database/users';

export type ImageResponseBody =
  | { errors: { message: string }[] }
  | {
      image: {
        date?: number;
        time?: number;
        image?: string;
        longitude?: number;
        latitude?: number;
        userId?: number;
        userName?: string;
        note?: string;
        articleId?: number;
      };
    };

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<ImageResponseBody>,
) {
  const session =
    request.cookies.sessionToken &&
    (await getValidSessionByToken(request.cookies.sessionToken));

  if (!session) {
    response
      .status(400)
      .json({ errors: [{ message: 'No valid session token passed' }] });
    return;
  }

  // 2. Get the user from the token
  const user = await getUserBySessionToken(session.token);

  if (!user) {
    response
      .status(400)
      .json({ errors: [{ message: 'Session token not valid' }] });
    return;
  }

  const imageToDelete = await deleteImageById(request.body.id);

  response.status(200).json({
    image: {
      image: imageToDelete?.image,
      longitude: imageToDelete?.longitude,
      latitude: imageToDelete?.latitude,
      userId: imageToDelete?.userId,
      userName: imageToDelete?.usersUsername,
      note: imageToDelete?.note,
      articleId: imageToDelete?.articleId,
    },
  });
}
