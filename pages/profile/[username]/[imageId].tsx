import { GetServerSidePropsContext } from 'next';
import { CldImage } from 'next-cloudinary';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Article, getArticleById } from '../../../database/articles';
import { getImageById, ImageType } from '../../../database/images';

type Props =
  | {
      error: string;
    }
  | {
      image: ImageType;
      article: Article | undefined;
    };

export default function SingleImage(props: Props) {
  const router = useRouter();
  if ('error' in props) {
    return (
      <div className="flex flex-col">
        <Head>
          <title>Image not found</title>
          <meta name="description" content="Article not found" />
        </Head>
        <h1 className="text-2xl mt-5 ml-6 font-bold">{props.error}</h1>
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
      <div className="pt-20 bg-[#95b0b6]">
        <Head>
          <title>{props.image.id}</title>
          <meta
            name="description"
            content={`Image with id ${props.image.id}`}
          />
        </Head>
        <div className="flex lg:h-[60vh] flex-col lg:flex-row flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100">
          <CldImage
            className="object-contain max-h-[100%] rounded-lg lg:w-1/3 w-2/3"
            width="200"
            height="200"
            src={props.image.image.slice(50)}
            sizes="100vw"
            alt={`Upload with id ${props.image.id}`}
          />

          <div className="flex flex-col justify-between p-4 leading-normal vh-100 max-h-[100%] overflow-y-scroll lg:min-w-[66%]">
            <h1 className="text-2xl font-bold tracking-tight text-black">
              Image
            </h1>
            <p>
              Uploaded on {props.image.date.toString().slice(0, 10)} at{' '}
              {props.image.time}
            </p>
            <h2 className="text-lg mt-3 mb-1 font-bold">Upload Note</h2>
            <p>{props.image.note}</p>
            {typeof props.article === 'undefined' ? null : (
              <div>
                <h2 className="text-lg mt-3 mb-1 font-bold">
                  Associated Article
                </h2>
                <h3 className="text-md mt-3 mb-1 font-bold">
                  {props.article.title}
                </h3>
                <p>{props.article.content}</p>
              </div>
            )}
            <button
              onClick={async () => {
                await router
                  .push(
                    `/map?lat=${props.image.latitude}&lng=${props.image.longitude}&zoom=25`,
                  )
                  .catch(() => {});
              }}
              className="bg-[#324b50] rounded-md text-white text-md px-2 py-1 mb-2 mt-4 text-center mr-auto"
            >
              See in map
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const imageId = await context.query.imageId;

  const foundImage = await getImageById(Number(imageId));

  if (typeof foundImage === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Image not found',
      },
    };
  }
  const articleId = foundImage.articlesId;

  const foundArticle = await getArticleById(Number(articleId));
  if (typeof foundArticle === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        image: JSON.parse(JSON.stringify(foundImage)),
      },
    };
  }

  return {
    props: {
      image: JSON.parse(JSON.stringify(foundImage)),
      article: foundArticle,
    },
  };
}
