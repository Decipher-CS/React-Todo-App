import TodoTable from "./components/TodoTable"
import "./styles/resets.css"
import "./styles/global.css"
import useMediaQuery from "@mui/material/useMediaQuery"
import { ThemeProvider, createTheme } from "@mui/material/styles"

import bgDesktopDark from "./assets/bg-desktop-dark.jpg"
import bgMobileDark from "./assets/bg-mobile-dark.jpg"

import bgDesktopLight from "./assets/bg-desktop-light.jpg"
import bgMobileLight from "./assets/bg-mobile-light.jpg"
import { useState } from "react"

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
})
const lightTheme = createTheme({
    palette: {
        mode: "light",
    },
})

function App() {
    const isSizeDesktop = useMediaQuery("(min-width:350px)")
    const [isDarkmode, setDarkMode] = useState(true)
    const Wallpaper = ({ bg }) => <img src={bg} className="bg-img-main" />
    return (
        <>
            <ThemeProvider theme={isDarkmode ? darkTheme : lightTheme}>
                <div className="bg-img-main-container">
                    {isSizeDesktop ? (
                        <Wallpaper
                            bg={isDarkmode ? bgDesktopDark : bgDesktopLight}
                        />
                    ) : (
                        <Wallpaper
                            bg={isDarkmode ? bgMobileDark : bgMobileLight}
                        />
                    )}
                </div>

                <TodoTable
                    toggleDarkmode={() => setDarkMode((prev) => !prev)}
                    isDarkmode={isDarkmode}
                />
            </ThemeProvider>
        </>
    )
}
export default App
