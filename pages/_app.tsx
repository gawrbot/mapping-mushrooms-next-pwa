import '../styles/globals.css';
import '../styles/geosearch.css';
import { Spinner } from 'flowbite-react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: any) {
  const [user, setUser] = useState();
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]);

  const refreshUserProfile = useCallback(async () => {
    const profileResponse = await fetch('/api/profile');
    const profileResponseBody = await profileResponse.json();

    if ('errors' in profileResponseBody) {
      setUser(undefined);
    } else {
      setUser(profileResponseBody.user);
    }
  }, []);

  useEffect(() => {
    refreshUserProfile().catch(() => console.log('api fetching failed'));
  }, [refreshUserProfile]);

  return (
    <Layout user={user}>
      {pageLoading ? (
        <div className="text-center">
          <Spinner aria-label="loading spinner" />
        </div>
      ) : (
        <Component
          {...pageProps}
          refreshUserProfile={refreshUserProfile}
          user={user}
        />
      )}
    </Layout>
  );
}

export default MyApp;
