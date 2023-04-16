// import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import axios from 'axios'
import { ChakraProvider } from '@chakra-ui/react';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import theme from './theme/theme';

function App() {
  // useEffect(() => {
  //   axios.defaults.withCredentials = true
  //   const getCsrfToken = async () => {
  //     const { data } = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/csrf`
  //     )
  //     axios.defaults.headers.common['X-CSRF-Token'] = data.csrf_token
  //   }
  //   getCsrfToken()
  // }, [])
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App