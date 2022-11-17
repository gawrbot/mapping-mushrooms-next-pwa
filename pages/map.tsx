import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import Head from 'next/head';
import {
  LocationMarker,
  Map,
  SavedSpots,
  Search,
  SpotMarker,
} from '../components/Map';
import { getUserBySessionToken, User } from '../database/users';

type Props = {
  user?: User;
};
const defaultCenter = [48.193453, 16.408898];

export default function HomeMap(props: Props) {
  if (!props.user) {
    return (
      <div className="pt-20">
        <Head>
          <title>No access - please register or log in</title>
          <meta
            name="description"
            content="No access, register or login required"
          />
        </Head>
        <h1>No access - please register or log in</h1>
      </div>
    );
  }
  return (
    <div className="pt-16">
      <Map
        className="w-screen h-[87vh]"
        zoom={15}
        center={defaultCenter}
        scrollWheelZoom={false}
      >
        {({ TileLayer }: any) => (
          <>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker />
            <SpotMarker />
            <SavedSpots />
            <Search />
          </>
        )}
      </Map>
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
