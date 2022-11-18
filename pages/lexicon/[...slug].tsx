import { Card } from 'flowbite-react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Article, getArticleBySlug } from '../../database/articles';
import { getUserBySessionToken, User } from '../../database/users';

type Props =
  | {
      error: string;
    }
  | {
      article: Article;
      user?: User;
    };

export default function SingleArticle(props: Props) {
  if ('error' in props) {
    return (
      <div>
        <Head>
          <title>Article not found</title>
          <meta name="description" content="Article not found" />
        </Head>
        <div className="lg:max-w-xl sm:max-w-sm my-4 mx-5">
          <Card imgSrc="/404-placeholder-image.png" imgAlt="">
            <h1 className="text-2xl font-bold tracking-tight text-black">
              {props.error}
            </h1>
            <p className="font-normal text-gray-700">
              Sorry, please see{' '}
              <span className="underline decoration-solid">
                <Link href="/lexicon">the lexicon</Link>
              </span>
            </p>
          </Card>
        </div>
      </div>
    );
  } else if (!props.user) {
    return (
      <>
        <Head>
          <title>No access - please register or log in</title>
          <meta
            name="description"
            content="No access, register or login required"
          />
        </Head>
        <h1 className="text-2xl mt-5 ml-6 font-bold">
          No access - please register or log in
        </h1>
      </>
    );
  }
  return (
    <div className="pt-20 bg-[#95b0b6] ">
      <Head>
        <title>{props.article.title}</title>
        <meta
          name="description"
          content={`Article on ${props.article.title}`}
        />
      </Head>
      <div className="flex h-[80vh] flex-col lg:flex-row flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100">
        <img
          className="object-cover max-h-[100%] rounded-lg w-1/2"
          src={props.article.imagePreview}
          alt={`Article on ${props.article.title}`}
        />
        <div className="flex flex-col justify-between p-4 leading-normal vh-100 max-h-[100%] overflow-scroll">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            {props.article.title}
          </h1>
          <p className="font-normal text-black">{props.article.content}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<import('next').GetServerSidePropsResult<Props>> {
  const token = context.req.cookies.sessionToken;

  const user = token && (await getUserBySessionToken(token));

  if (!user) {
    return {
      redirect: {
        destination: '/login?returnTo=/private-profile',
        permanent: false,
      },
    };
  }
  const slug = await context.query.slug;

  const foundArticle = await getArticleBySlug(String(slug));

  if (typeof foundArticle === 'undefined') {
    context.res.statusCode = 404;
    return {
      props: {
        error: 'Article not found',
      },
    };
  }

  return {
    props: {
      article: foundArticle,
      user,
    },
  };
}
