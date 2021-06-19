import React from 'react'
import { Provider } from 'react-redux'
import Head from 'next/head'
import { CssBaseline, LinearProgress } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import theme from '../src/theme'
import Layout from '../components/Layout'
import { useStore } from '../store'

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  const persistor = persistStore(store, {}, function () {
    persistor.persist()
  })

  return (
    <Provider store={store}>
      <PersistGate loading={<LinearProgress />} persistor={persistor}>
        <Head>
          <title>Desafio Stoom</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
