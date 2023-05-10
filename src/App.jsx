import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import theme from './theme/theme';
import Signup from './components/pages/Signup';
import { Global } from '@emotion/react';
import styles from './styles.css';
import { ViewTopic } from './components/pages/ViewTopic';
import { Layout } from './components/templates/Layout';

function App() {

  useEffect(() => {
    axios.defaults.withCredentials = true
    const getCsrfToken = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/csrf`
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
              <Route path="/topic" element={<ViewTopic />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App