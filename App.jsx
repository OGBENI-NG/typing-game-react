import React, {useContext} from "react"
import darkIcon from "./img/dark-icon.png"
import lightIcon from "./img/light-icon.png"
import { ThemeContext } from "./useThemeContext"
import useCustomHooks from "./Hooks/useCustomHooks"

function App() {
    const { 
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
    } = useCustomHooks()
    
    const {theme, toggleTheme} = useContext(ThemeContext)


    
    return(
        <div className={`container ${theme}-theme`}>
            <div className="container-inner">
                <div className="theme-container">
                    <div 
                        className="theme-container theme" 
                        onClick={toggleTheme}
                    >
                        <img 
                            src={theme === 'light' ? darkIcon : lightIcon} 
                            className="icon"
                        />
                    </div>
                    <div className="theme-container timer">
                        <span>Set timer:</span>
                        <div className="input-con">
                            <input 
                                value={timer}
                                type="number" 
                                onChange={handleInputChange}
                                disabled={isTimeRunning}
                                style={getInputStyles()}
                            />
                            <span 
                                className="notify-txt">
                                    {timer <= 0 || timer === 0 ?  "timer required"  : ''}
                            </span>
                        </div>
                    </div>
                </div>
                <h1>how fast can you type</h1>
                <textarea 
                    className={theme === 'light' ? 'txt-area-theme-one' : 'txt-area-theme-two'}
                    onChange={handleChange}
                    disabled={!isTimeRunning }
                    value={text}
                    
                    ref={txtBoxRef}
                />
                <div className="time-container">
                    <h3>Time remaining: {timeRemaining}</h3>
                    <h3>Word count: {wordCount}</h3>
                    <button     
                        className={theme === 'light' ? 'btn-color' : ''}
                        disabled={isTimeRunning || timer.length === 0 || timer <= 0}
                        onClick={startGame}
                    >start</button>
                </div>
            </div>
        </div>
    )
}

export default App