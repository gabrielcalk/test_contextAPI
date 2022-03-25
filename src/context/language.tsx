import {createContext, ReactNode, useState} from "react";

interface LanguageContextProps {
    children: ReactNode
}

interface StudentData{
    name: string,
    height?: number,
    technologies: string[],
}

interface LanguageContextData {
    languages: string[],
    setLanguages: React.Dispatch<React.SetStateAction<string[]>>,
    students: StudentData,
    setStudents: React.Dispatch<React.SetStateAction<{
        name: string;
        technologies: string[];
        height: number
    }>>
}

export const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData)

export const LanguageProvider = ({children}: LanguageContextProps) => {
    const [languages, setLanguages] = useState(["Portuguese", "English"]);
    const [students, setStudents] = useState({
        name: "Gabriel",
        technologies: [],
        height: 0
    })

    return (
        <LanguageContext.Provider value={{languages, setLanguages, students, setStudents}}>
            {children}
        </LanguageContext.Provider>

    );
}