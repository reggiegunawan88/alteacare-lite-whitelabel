import { useEffect } from 'react';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const NProgressLoader = () => {
  NProgress.configure({ showSpinner: false });

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on('routeChangeStart', handleRouteStart);
    Router.events.on('routeChangeComplete', handleRouteDone);
    Router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // remove the event handler on unmount component
      Router.events.off('routeChangeStart', handleRouteStart);
      Router.events.off('routeChangeComplete', handleRouteDone);
      Router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);

  return null;
};

export default NProgressLoader;
