import { extendTheme } from "@chakra-ui/react"
import blueImage from "../images/blue.jpg";

const useBreakpoint = {
  styles: {
    global: {
      body: {
        background: `url(${blueImage}) center/cover no-repeat`,
        minH: "100vh",
        color: "white",
      }
    }
  }
};

const theme = extendTheme({ ...useBreakpoint })



export default theme;