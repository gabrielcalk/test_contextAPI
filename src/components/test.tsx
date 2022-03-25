import { useContext } from "react";

// Context
import { LanguageContext } from "../context/language";

export function Test() {
    const {languages, students} = useContext(LanguageContext);
    console.log(students)
    return (
        <ul>
            {languages.map((language, index) => (
                <li key={index}>{language}</li>
            ))}
        </ul>
    );
}