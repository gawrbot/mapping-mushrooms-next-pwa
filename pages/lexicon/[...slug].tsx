import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Article, getArticleBySlug } from '../../database/articles';

type Props =
  | {
      error: string;
    }
  | {
      article: Article;
    };

export default function SingleArticle(props: Props) {
  if ('error' in props) {
    return (
      <div className="flex flex-col">
        <Head>
          <title>Article not found</title>
          <meta name="description" content="Article not found" />
        </Head>
        <h1 className="text-5xl font-bold mb-10">{props.error}</h1>
        <p>
          Sorry, please see{' '}
          <span className="underline decoration-solid">
            <Link href="/lexicon">the lexicon</Link>
          </span>
        </p>
      </div>
    );
  } else if ('article' in props) {
    return (
      <div>
        <Head>
          <title>{props.article.title}</title>
          <meta
            name="description"
            content={`Article on ${props.article.title}`}
          />
        </Head>

        <h1 className="text-5xl font-bold mt-0">{props.article.title}</h1>

        <div className="grid justify-items-start w-2/3">
          <div className="grid grid-cols-3 gap-4 mt-5">
            <div>
              <Image
                src={props.article.imagePreview}
                alt={`Article on ${props.article.title}`}
                width={500}
                height={500}
                className="flex object-scale-down col-span-1"
              />
            </div>

            <div className="mt-2">
              <span className="font-bold">Article...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Get the robot that matches the id in the route from the backend database
export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<import('next').GetServerSidePropsResult<Props>> {
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
    },
  };
}
