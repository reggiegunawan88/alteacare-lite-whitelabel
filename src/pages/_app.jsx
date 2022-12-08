import React, { useEffect } from 'react';

import '@/styles/global.css';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import { wrapper } from '@/store';
import { closeBottomSheet } from '@/store/slices/BottomSheet';
import { hideSnackbar } from '@/store/slices/Snackbar';

// import dynamic component to prevent increasing bundle load
const BottomSheet = dynamic(() => import('@/components/BottomSheet/Container'));
const Snackbar = dynamic(() => import('@/components/Reusable/Snackbar'));
const TopProgressBar = dynamic(
  () => {
    return import('@/components/NProgress');
  },
  { ssr: false }
);

const MyApp = ({ Component, pageProps, router }) => {
  const dispatch = useDispatch();
  // close global component when route changes
  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      dispatch(closeBottomSheet());
      dispatch(hideSnackbar());
    });
    return () => {
      router.events.off('routeChangeComplete', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <Head>
        <title>AlteaCare - Lite</title>
        <meta name="description" value="Alteacare Lite Web App" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:type" content="website" />
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content="#61C7B5" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      {getLayout(
        <>
          <TopProgressBar />
          <Component {...pageProps} key={router.route} />
        </>
      )}
      <BottomSheet />
      <Snackbar />
    </>
  );
};

export default wrapper.withRedux(MyApp);
