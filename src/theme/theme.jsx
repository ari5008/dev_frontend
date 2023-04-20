import { extendTheme } from "@chakra-ui/react"

const useBreakpoint = {
  styles: {
    global: {
      body: {
        background: 'url(https://source.unsplash.com/NZ0HxSy55hY) center/cover no-repeat',
        h: "100vh",
        color: "white",
      }
    }
  }
};

const theme = extendTheme({ ...useBreakpoint })



export default theme;