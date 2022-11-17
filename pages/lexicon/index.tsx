import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Article, getAllArticles } from '../../database/articles';
import { getUserBySessionToken, User } from '../../database/users';

type Props = { errors: string } | { articles: Article[]; user?: User };

export default function Lexicon(props: Props) {
  if ('errors' in props) {
    return (
      <h1 className="text-2xl mt-5 ml-6 font-bold">
        Sorry, something went wrong
      </h1>
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
    <>
      <h1 className="text-2xl mt-5 ml-6 font-bold">Lexicon </h1>
      <div className="w-full px-4 py-8">
        <div className="text-white">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-2/3 justify-between rounded-t-lg bg-[#7d4d2b] px-4 py-2 text-left text-sm font-medium hover:mediumgreen focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                  <h2 className="text-xl font-extrabold">Mushrooms</h2>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-4 text-sm text-black border-4 border-[#7d4d2b] w-2/3 rounded-b-lg">
                  <div className="bg-red-600 rounded-md text-white py-2 px-2 mb-4 text-center">
                    <p className="mb-3">
                      Please be very careful when collecting mushrooms. This
                      article or list obviously does not even come near covering
                      everything there is to know about the fungi kingdom.{' '}
                    </p>
                    <p>
                      <strong>
                        Do not rely on the article(s) to identify mushrooms!
                      </strong>
                    </p>
                  </div>

                  <ul className="list-inside">
                    <Link href="/lexicon/mushrooms-intro">
                      <li
                        key="mushrooms"
                        className="flex mb-4 items-center p-3 justify-center rounded-md border-2 border-black"
                      >
                        <h3 className="text-lg mt-3 mb-1 font-bold">
                          🍄{' '}
                          <span className="underline decoration-solid">
                            An intro to Mushrooms
                          </span>
                        </h3>
                      </li>
                    </Link>
                    {props.articles.map((article) => {
                      if (article.type === 'mushroom') {
                        return (
                          <Link
                            href={`/lexicon/${article.slug}`}
                            key={article.title}
                          >
                            <li
                              key={article.id}
                              className="flex mb-4 items-center border-2 border-black p-3 rounded-md"
                            >
                              <Image
                                alt={article.title}
                                src={article.imagePreview}
                                width={80}
                                height={80}
                                className="mr-2"
                              />

                              <h3 className="text-lg mt-3 mb-1 font-bold">
                                {article.title}
                              </h3>
                            </li>
                          </Link>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-2/3 justify-between rounded-t-lg bg-[#7d4d2b] px-4 py-2 text-left text-white text-sm font-medium hover:bg-mediumgreen focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <h2 className="text-xl font-extrabold">Crows</h2>
                  <ChevronUpIcon
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-black border-4 border-[#7d4d2b] w-2/3 rounded-b-lg">
                  <ul className="list-inside">
                    <Link href="/lexicon/crows-intro">
                      <li
                        key="mushrooms"
                        className="flex mb-4 items-center border-2 border-black p-3 justify-center rounded-md"
                      >
                        <h3 className="text-lg mt-3 mb-1 font-bold">
                          <span className="underline decoration-solid">
                            An intro to Crows
                          </span>
                        </h3>
                      </li>
                    </Link>
                    {props.articles.map((article) => {
                      if (article.type === 'crow') {
                        return (
                          <Link
                            href={`/lexicon/${article.slug}`}
                            key={article.title}
                          >
                            <li
                              key={article.id}
                              className="flex mb-4 items-center border-2 border-black p-3 rounded-md"
                            >
                              <Image
                                alt={article.title}
                                src={article.imagePreview}
                                width={100}
                                height={100}
                                className="mr-2"
                              />

                              <h3 className="text-lg mt-3 mb-1 font-bold">
                                {article.title}
                              </h3>
                            </li>
                          </Link>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(
  context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<Props>> {
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
  const articles = await getAllArticles();

  if (typeof articles === 'undefined') {
    return {
      props: {
        errors: '400 - Bad request',
      },
    };
  }

  return {
    props: { articles: articles, user },
  };
}
