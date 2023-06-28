import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { Layout } from './components/templates/Layout';
import theme from './theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Signup } from './components/pages/Signup';
import { ViewTrack } from './components/pages/ViewTrack';
import { CreateTrack } from './components/pages/CreateTrack';
import { Account } from './components/pages/Account';
import { ErrorPage } from './components/pages/ErrorPage';
import { SearchTrack } from './components/pages/SearchTrack';
import { HomeTrack } from './components/pages/HomeTrack';

function App() {

  useEffect(() => {
    // スマホ版の場合はCSRFトークンを取得しない
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      axios.defaults.withCredentials = true;
      const getCsrfToken = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/csrf`
        );
        axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token;
      };
      getCsrfToken();
    }
  }, []);
  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/tracks" element={<HomeTrack />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/tracks" element={<ViewTrack />} />
              <Route path="/account/createTrack" element={<CreateTrack />} />
              <Route path="/account/createTrack/search" element={<SearchTrack />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App