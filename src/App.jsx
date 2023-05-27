import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import styles from "./styles.css?inline";
import { Layout } from './components/templates/Layout';
import { Global } from '@emotion/react';
import theme from './theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Signup } from './components/pages/Signup';
import { ViewTrack } from './components/pages/ViewTrack';
import { CreateTrack } from './components/pages/CreateTrack';
import { Account } from './components/pages/Account';
import { ErrorPage } from './components/pages/ErrorPage';

function App() {

  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/csrf`
      )
      axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
    }
    getCsrfToken()
  }, [])
  return (
    <>
      <Global styles={styles} />
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/track" element={<ViewTrack />} />
              <Route path="/createTrack" element={<CreateTrack />} />
              <Route path="/account" element={<Account />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App