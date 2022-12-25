import { NextSeo } from 'next-seo';
import Head from 'next/head';

import { AppConfig } from '@/utils/AppConfig';

const Meta = props => {
  const { title, descriptions, canonical } = props;
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" key="apple" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" key="icon32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" key="icon16" />
        <link rel="icon" href="/favicon.ico" key="favicon" />
      </Head>
      <NextSeo
        title={title}
        description={descriptions}
        canonical={canonical}
        openGraph={{
          title: 'Alteacare Lite',
          description: descriptions,
          url: canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name
        }}
      />
    </>
  );
};

export default Meta;
