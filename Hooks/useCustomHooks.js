import { useState, useEffect, useRef } from "react"

function useCustomHooks(startingTime = 10) {
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(startingTime)
    const [wordCount, setWordCount] = useState(0)
    const [timer, setTimer] = useState(startingTime)
    const txtBoxRef = useRef()

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function handleInputChange(e) {
       const { value } = e.target
       setNumber(value)
       setTimer(value)
    }

    function calculateWordCount(text) {
        const wordArr = text.trim().split(' ')
        return wordArr.filter(word => word  !== '').length
    }

    function startGame() {
        setIsTimeRunning(true)
        setTimeRemaining(timer)
        setText('')
        setNumber(timer)
        setWordCount(0)
        txtBoxRef.current.disabled = false
        txtBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text))
        setNumber(timer)
        txtBoxRef.current.focus()
    }
    
    useEffect(() => {
        if(isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    function getInputStyles() {
        return {
          borderColor: timer > 0  ? "hsl(259, 100%, 65%)" : "hsl(0, 100%, 67%)",
          color: timer > 0 ? "hsl(259, 100%, 65%)" : "hsl(0, 100%, 67%)"
        }
    }

    return { 
        number, 
        handleChange, 
        text, 
        wordCount, 
        isTimeRunning,  
        timeRemaining, 
        txtBoxRef, 
        startGame, 
        handleInputChange,
        timer, 
        getInputStyles
    }
}

export default useCustomHooks