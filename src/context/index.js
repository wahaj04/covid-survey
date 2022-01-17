import React,{Context, createContext,useState} from 'react'

export const QuestionDateContext = createContext();

function QuestionsContext({children}) {
    const [Question, setQuestion] = useState([])
    return (
        <QuestionDateContext.Provider value={Question} >
                {
                    children
                }
        </QuestionDateContext.Provider>
    )
}

export default QuestionsContext
