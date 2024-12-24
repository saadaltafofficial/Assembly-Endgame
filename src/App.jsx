import { languages } from "./languages"
import LanguageButton from "./components/LanguageButton"
import { useState } from "react"
import { getFarewellText } from "./utils"
import { getRandomWord } from "./utils"
import ReactConfetti from "react-confetti"

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [allLetters, setAllLetters] = useState([])
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const wrongGuesses = allLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameWon = currentWord.split("").every(letter => allLetters.includes(letter))
  const isGameLost = wrongGuesses >= languages.length - 1
  const isGameOver = isGameWon || isGameLost

  const lastGussedLetter = allLetters[allLetters.length - 1]
  const isLastGuessIncorrect = lastGussedLetter && !currentWord.includes(lastGussedLetter)


  const allLanguages = languages.map((item, index) => (
    <LanguageButton key={index} index={index} name={item.name} backgroundColor={item.backgroundColor} color={item.color} wrongGuesses={wrongGuesses} />
  ))

  const mapCurrentWord = currentWord.split('').map((item, index) => {
    const shouldRevealLetter = isGameLost || allLetters.includes(item)
    return (<span
      className={`px-4 py-3 bg-[#323231] mx-1 border-b-2 text-white mb-3 w-10 h-10 flex justify-center items-center ${isGameLost && !allLetters.includes(item) && "text-red-500"}`}
      key={index}
    >
      {shouldRevealLetter ? item.toUpperCase() : ""}
    </span>)})

  const onLetterClick = (letter) => {
    setAllLetters(prev =>
      prev.includes(letter) ? prev :
        [...prev, letter])
    // const letterSet = new Set(prev)
    // letterSet.add(letter)
    // return [...letterSet]
  }

  const allAlphabets = alphabet.split('').map((letter, index) => {
    const isGuessed = allLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)


    const className = `m-1 bg-[#FCBA29] py-2 px-4 rounded-[3px] border-white border h-10 w-10 flex justify-center items-center
    ${isCorrect ? 'bg-green-500' : 'bg-[#FCBA29]'}
    ${isWrong ? 'bg-red-500' : 'bg-[#FCBA29]'}
    ${isGameOver ? "bg-gray-400 cursor-not-allowed" : "hover:bg-[#c79408]"}
    `

    return (
      <button
        className={className}
        key={index}
        onClick={() => onLetterClick(letter)}
        value={letter}
        disabled={isGameOver}
        aria-disabled={allLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        >
        {letter.toUpperCase()}
      </button>)
  })

  function startNewGame(){
    setCurrentWord(getRandomWord())
    setAllLetters([])
  }


  return (
    <>
    {isGameOver && isGameWon ? <ReactConfetti recycle={false} numberOfPieces={1000} /> : null}
      <div className="bg-[#282725] h-[100vh] flex flex-col justify-center items-center text-center font-[inter] py-10">
        <header className="max-w-[40vw] min-w-[400px]">
          <div>
            <h1 className="text-[#F9F4DA] font-[inter] font-bold text-3xl">Assembly: Endgame</h1>
            <p className="text-[#8E8E8E] font-[inter] text-[1rem] pt-3">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
          </div>
        </header>
        <main className="max-w-[50vw] min-w-[350px]" aria-live="polite" role="status">
          {isGameOver ? (
            isGameWon ? (
              <section className="status-section ">
                <div className="bg-[#10A95B] text-white flex flex-col justify-center rounded-md py-3 px-3 my-10 font-normal text-xl h-24">
                  <p>You win!</p>
                  <p className="font-light text-sm">Congratulations! you have won the game🎉</p>
                </div>
              </section>

            ) : (
              <section className="status-section">
                <div className="bg-[#dd2d2d] text-white flex flex-col justify-center rounded-md py-3 px-3 my-10 font-normal text-xl h-24">
                  <p>Game Over!</p>
                  <p className="font-light text-sm">You lose! Better start learning Assembly😂</p>
                </div>
              </section>

            )) :
            <section className="status-section">
              <div className={`border border-dotted text-white flex justify-center flex-col items-center rounded-md py-3 px-3 my-10 font-normal text-xl h-24 ${!isGameOver && isLastGuessIncorrect ?"bg-[#945ea0]": ""}`}>
              {!isGameOver && isLastGuessIncorrect ?            
                <p className="font-light text-[1rem]">{getFarewellText(languages[wrongGuesses - 1].name)}</p>
                :
                ""
              }
              </div>
            </section>
          }

          <section className="flex flex-wrap justify-center">
            {mapCurrentWord}
          </section>
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center my-10 ">
            {allLanguages}
          </section>
          <section className={`flex gap-1 flex-wrap justify-center items-center`}>
            {allAlphabets}
          </section>
          {isGameOver ? <button onClick={startNewGame}
            className="bg-[#11B5E5] py-2 px-8 rounded-[3px] mt-10 border border-white font-medium h-10 "
          >New Game</button> :
            <button
              className="py-2 px-8 rounded-[3px] mt-10  font-medium h-10"
            >
            </button>
          }
        </main>
      </div>
    </>
  )
}

export default App
