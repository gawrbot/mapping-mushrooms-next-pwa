import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getUserBySessionToken, User } from '../../database/users';

type Props = { user?: User };

export default function IntroMushrooms(props: Props) {
  if (!props.user) {
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
    <div className="pt-20 bg-[#95b0b6]">
      <Head>
        <title>Intro to Mushrooms</title>
        <meta name="description" content="Article on Mushrooms in general" />
      </Head>
      <div className="flex h-[80vh] lg:flex-row flex-col items-center bg-white border rounded-lg shadow-md hover:bg-gray-100">
        <img
          className="aspect-[3/4] object-cover lg:max-h-[100%] rounded-lg lg:w-1/3 w-full max-h-[50%]"
          src="/mushrooms-intro.jpg"
          alt="closeup of tintling mushrooms"
        />
        <div className="flex flex-col justify-between p-4 leading-normal vh-100 max-h-[100%] overflow-y-scroll">
          <h1 className="text-2xl font-bold tracking-tight text-black">
            Intro to Mushrooms
          </h1>
          <p>
            Mushrooms come in many different shapes and sizes. There are
            currently about 14,000 species of mushrooms described. Some of these
            are incredibly distinctive, while others are very generic and
            similar.
          </p>
          <p>
            Unfortunately, it can be these similarities that make mushrooms
            quite dangerous. That is why we separate some of the most common
            edible mushrooms from the poisonous ones.
          </p>
          <h3 className="text-lg mt-3 mb-1 font-bold">
            The Classification of Mushrooms
          </h3>
          <p>
            A mushroom is the fleshy body of a fungus. It bears spores, which
            are essentially the fruit and seeds of the mushroom. They can grow
            on the ground, in soil bags, or anywhere with a food source. Many
            people think of mushrooms as a plant. However, they are entirely
            separate from plants going all the way to the top of the
            classification system. Mushrooms fall into the{' '}
            <span className="underline decoration-solid">
              <Link href="https://en.wikipedia.org/wiki/Fungus">fungi</Link>
            </span>{' '}
            kingdom and are then separated from there. From that point, all
            mushrooms share the same{' '}
            <span className="underline decoration-solid">
              {' '}
              <Link href="https://en.wikipedia.org/wiki/Phylum">Phylum</Link>
            </span>{' '}
            called Basidiomycota. The Basidiomycota phylum is one of two
            subdivisions of the subkingdom Dikarya. These divisions make up what
            is often called the ‘higher fungi’ of the Fungi kingdom. All members
            of this phylum are called Basidiomycetes. The Basidiomycetes phylum
            falls into 14 groups:
          </p>

          <ul className="list-disc list-inside my-2">
            <li>Toadstools</li>
            <li>Puffballs</li>
            <li>Stinkhorns</li>
            <li>Polypores</li>
            <li>Jelly Fungi</li>
            <li>Boletes</li>
            <li>Chanterelles</li>
            <li>Earthstars</li>
            <li>Smuts</li>
            <li>Bunts</li>
            <li>Rusts</li>
            <li>Mirror yeasts</li>
            <li>Cryptococcus</li>
          </ul>
          <p>
            Some of these groups will contain the edible and poisonous mushroom
            species we cover below. Others are not mushrooms but can be pests or
            signs of disease and decay. Still others, such as the yeast
            Cryptococcus, is a human pathogenic yeast, meaning it can cause
            various infections and diseases in humans. We will focus on the
            mushroom or toadstool group.
          </p>
          <h3 className="text-lg mt-3 mb-1 font-bold">
            Types of Mushrooms: Edible and Poisonous Varieties
          </h3>
          <p>
            As we dig deeper into mushroom species, we will start with the
            characteristics of edible mushrooms and continue into poisonous
            species. Some fall into a grey area. For example, some of these
            aren’t necessarily edible or poisonous. Instead, when appropriately
            prepared, they can have characteristics useful in the medical field,
            or people can harness that for drug-related uses. We won’t cover
            these later species since they vary, and many of their applications
            have not been confirmed.
          </p>
          <h4 className="text-md mt-3 mb-1 font-bold">🍔 Edible Mushrooms</h4>
          <p>
            Before we get into some of the edible mushrooms, we need to develop
            a better understanding of what we mean by edible. There is a ranking
            system used to classify the edibility of mushrooms since it’s not
            always straightforward. The edibility status ranges from E1 to U. E1
            means ‘edibility confirmed.’ E2 stands for ‘edible but with
            conditions.’ These conditions almost always signify the degree of
            preparation you need to give a mushroom before eating it. For
            example, you will often need to cook the mushrooms on the stove or
            in a baked dish before the toxins in it break down to a point where
            they are no longer harmful. That is why there are some regions where
            the mushroom Gyromitra esculenta or False Morel is eaten and others
            where it is warned of as poisonous. The mushrooms are commonly eaten
            and even sold as a canned good in Poland, Finland, Sweden, and
            Estonia, among others. Yet, field guides put out heavy warnings
            about the mushroom in Spain and Italy. There have been deaths
            because of the mushroom, but it is infrequent since quick, proper
            preparation is all you need to make it edible. The other ratings for
            mushrooms are E3, ‘edibility uncertain,’ P for ‘poisonous, and U for
            ‘unconfirmed.’ If a mushroom falls into any of these latter three
            categories, it is best if you avoid it. All the edible mushrooms in
            the list below are either E1 or E2 mushrooms, most of them being E1
            species.
          </p>
          <h4 className="text-md mt-3 mb-1 font-bold">
            🚫 Poisonous Mushrooms
          </h4>
          <p>
            Certain toxic mushrooms will only cause digestive discomfort when
            consumed. However, others can be fatal if you consume them, even in
            small amounts. Typically poisonous mushrooms are separated into six
            categories based on the toxic compounds. Amatoxins are the most
            dangerous, likely killing you if you consume them. Mushrooms in this
            category almost all have common names that give you a clue to their
            poisonous tendencies. They include Destroying Angel, Deadly Parasol,
            and Fool’s mushroom. Gyromitrin toxins often cause digestive
            distress. However, they can cause enough damage to your kidneys and
            liver to kill you if consumed in large quantities. Gastrointestinal
            irritants are the largest group of toxic mushrooms. They are much
            less likely to kill you or send you to the hospital. However, they
            will cause gastrointestinal distress until they are expelled from
            your body. Muscarine messes with both your digestive system and your
            parasympathetic nervous system. It can cause tears, heavy sweating,
            and salvation, along with a drop in blood pressure. The symptoms
            will fade over 24 hours. It is rare for death by consuming these
            mushrooms, but not impossible. Mushrooms with the compound ‘coprine’
            are not toxic themselves. It is only when you eat them and consume
            alcohol that they can cause discomfort. Recovery happens within 24
            hours. Finally, ibotenic acid is a psychoactive compound. It often
            has psychedelic effects combined with confusion, loss of muscle
            coordination, sweating, chills, and hallucinations. It is typical to
            completely lose your memory of the experience with the mushroom
            after sleeping it off.
          </p>
          <p>
            Thank you for the content to outforia! Further reading here:{' '}
            <span className="underline decoration-solid">
              <Link href="https://outforia.com/types-of-mushrooms/">
                Outforia
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
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

  return {
    props: { user },
  };
}
