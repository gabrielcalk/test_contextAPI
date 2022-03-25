import { useContext, useState } from "react";

// Context
import { LanguageContext } from "./context/language";

function App() {
  const [inputLanguageInfo, setInputLanguageInfo] = useState<string>('')
  const {setLanguages, setStudents, students} = useContext(LanguageContext)

  function handleNewLanguage(){
    setLanguages(OldStateLanguage => [...OldStateLanguage, inputLanguageInfo])
    let newStudents = {
      ...students,
      height: 6
    }
    setStudents(newStudents)
  }


  return (
    <main>
      <input type="text" placeholder="Language" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setInputLanguageInfo(e.target.value)}}/>
      <button onClick={handleNewLanguage}>
        <p>Add Language</p>
      </button>
    </main>
  );
}

export default App;
