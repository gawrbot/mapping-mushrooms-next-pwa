import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { getImageById, ImageType } from '../../../database/images';

type Props =
  | {
      error: string;
    }
  | {
      image: ImageType;
    };

export default function SingleImage(props: Props) {
  console.log('hi');
  if ('error' in props) {
    return (
      <div className="flex flex-col">
        <Head>
          <title>Image not found</title>
          <meta name="description" content="Article not found" />
        </Head>
        <h1 className="text-5xl font-bold mb-10">{props.error}</h1>
        <p>
          Sorry, please see{' '}
          <span className="underline decoration-solid">
            <Link href="/map">the map</Link>
          </span>
        </p>
      </div>
    );
  } else if ('image' in props) {
    return (
      <div>
        <Head>
          <title>{props.image.id}</title>
          <meta
            name="description"
            content={`Image with id ${props.image.id}`}
          />
        </Head>

        <h1 className="text-5xl font-bold mt-0">
          Image uploaded at about {props.image.longitude.toString().slice(0, 6)}{' '}
          longitude and {props.image.latitude.toString().slice(0, 6)} latitude
        </h1>

        <div className="container px-5 py-10 mx-auto">
          <div>
            <Image
              src={props.image.image}
              alt={`Image with id ${props.image.id}`}
              width={400}
              height={400}
              className="flex object-scale-down col-span-1"
            />
          </div>

          <div className="mt-2">
            <p>
              Uploaded on {props.image.date.toString().slice(0, 10)} at{' '}
              {props.image.time}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

// Get the robot that matches the id in the route from the backend database
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const imageId = await context.query.imageId;

  const foundImage = await getImageById(Number(imageId));

  if (typeof foundImage === 'undefined') {
    console.log('context', context);
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Image not found',
      },
    };
  }

  return {
    props: {
      image: JSON.parse(JSON.stringify(foundImage)),
    },
  };
}
