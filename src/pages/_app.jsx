// _app.js

import React from 'react';
import { ClipLoader } from 'react-spinners';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@/src/styles/index.scss'; // Import your custom styles
import { useRouter } from 'next/router'; // Import the useRouter hook

function App({ Component, pageProps }) {
  const router = useRouter(); // Get the router instance
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      // Simulate a 2-second loading time
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className="preloader">
          <ClipLoader color="#2a8e5c" size={50} />
        </div>
      )}

      <Component {...pageProps} />

      {/* Other components or elements that should be present on every page */}
    </>
  );
}

export default App;
