import { extendTheme } from "@chakra-ui/react"

const useBreakpoint = {
    styles: {
        global: {
            body: {
                backgroundColor: "white",
                color: "purple.800"
            },
        }

    }
};

const theme = extendTheme({...useBreakpoint})



export default theme;