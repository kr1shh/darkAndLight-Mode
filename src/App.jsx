import { useContext, useEffect } from "react";
import ThemeContext from "./context/themeContext";

function App() {


  const { theme,setTheme } = useContext(ThemeContext)

  const toggleChange = (e) => {
    let toggle = e.target.checked
    setTheme(toggle)
  }

  useEffect(() => {

    const page = document.documentElement

    if (theme){
      page.classList.add("dark")
    }else{
      page.classList.remove("dark")
    }
  },[theme])


  

  return (
    <>
    <div
    className="w-full h-screen flex justify-center items-center dark:bg-gray-800">
      <div
      className="p-10 bg-purple-400 rounded-xl flex flex-col gap-4 justify-center items-center">
        <h1 
        className="text-[40px] font-black dark:text-white">Hai !</h1>

        <div className="relative inline-block w-16 h-9">
          <input
            type="checkbox"
            id="toggleSwitch"
            className="opacity-0 w-0 h-0"
            onChange={toggleChange}
            checked={theme}
          />
          <label
            htmlFor="toggleSwitch"
            className="slider block absolute inset-0 cursor-pointer bg-gray-300 rounded-full transition duration-400"
          ></label>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
