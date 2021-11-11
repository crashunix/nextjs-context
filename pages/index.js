import { useContext } from "react";
import Header from "../components/header";
import ThemeContext from "../stores/themeContext";

export default function Home() {

  const { theme } = useContext(ThemeContext);
  
  return (
    <div className={theme}>
      <div className="w-screen h-screen bg-gray-100 dark:bg-gray-800 transition-colors">
        <Header></Header>
        a
      </div>
    </div>
  )
}
