import Head from 'next/head';
import { Fragment, memo } from 'react';

const HomeNextPage = memo(function HomeNextPage() {
  return (
    <Fragment>
      <Head>
        <title>{'Richill Capital'}</title>
        <meta
          name='description'
          content=''
        />
        <meta
          name='keywords'
          content=''
        />
      </Head>
      <h1>Hello NEXT 0__0</h1>
    </Fragment>
  );
});

export default HomeNextPage;
