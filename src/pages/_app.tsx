import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { Fragment, memo } from 'react';
import Head from 'next/head';

const App: NextPage<AppProps> = memo(function App(props) {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Head>
        <title>{'Richill Capital'}</title>
      </Head>

      <Fragment>
        <Component {...pageProps}></Component>
      </Fragment>
    </Fragment>
  );
});

export default App;
