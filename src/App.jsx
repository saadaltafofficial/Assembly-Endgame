import { languages } from "./languages"
import LanguageButton from "./languageButton"
import { useState } from "react"

function App() {
  const [currentWord] = useState('react')
  const [allLetters, setAllLetters] = useState([])
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const wrongGuesses = allLetters.filter(letter => !currentWord.includes(letter)).length

  const isGameWon = currentWord.split("").every(letter => allLetters.includes(letter))
  const isGameLost = wrongGuesses >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  console.log(isGameOver)


  const allLanguages = languages.map((item, index) => (
    <LanguageButton key={index} index={index} name={item.name} backgroundColor={item.backgroundColor} color={item.color} wrongGuesses={wrongGuesses} />
  ))

  const mapCurrentWord = currentWord.split('').map((item, index) => (
    <span
      className="px-4 py-3 bg-[#323231] mx-1 border-b-2 text-white mb-2"
      key={index}
    >
      {allLetters.includes(item) ? item.toUpperCase() : ''}
    </span>))

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
    `

    return (
      <button
        className={className}
        key={index}
        onClick={() => onLetterClick(letter)}
        value={letter}>
        {letter.toUpperCase()}
      </button>)
  })


  return (
    <>
      <div className="bg-[#282725] h-[100vh] flex flex-col justify-center items-center text-center font-[inter] ">
        <header className="max-w-[40vw] min-w-[400px]">
          <div>
            <h1 className="text-[#F9F4DA] font-[inter] font-bold text-3xl">Assembly: Endgame</h1>
            <p className="text-[#8E8E8E] font-[inter] text-[1rem] pt-3">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
          </div>
        </header>
        <main className="max-w-[50vw] min-w-[400px]">
          {isGameOver ? (
            isGameWon ? (
            <section className="status-section ">
              <div className="bg-[#10A95B] text-white flex flex-col justify-center rounded-md py-3 px-3 my-10 font-normal text-xl h-24">
                <p>You win!</p>
                <p className="font-light text-sm">Well done!🎉</p>
              </div>
            </section>

            ) : (
            <section className="status-section">
              <div className="bg-[#dd2d2d] text-white flex flex-col justify-center rounded-md py-3 px-3 my-10 font-normal text-xl h-24">
                <p>Game Over!</p>
                <p className="font-light text-sm">You lose! Better start learning Assembly😂</p>
              </div>
            </section>

            )):
            <section className="status-section">
              <div className="border border-dotted text-white rounded-md py-3 px-3 my-10 font-normal text-xl h-24">
              </div>
            </section>
          }

          <section className="flex flex-wrap justify-center">
            {mapCurrentWord}
          </section>
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center my-10 ">
            {allLanguages}
          </section>
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center items-center">
            {allAlphabets}
          </section>
          {isGameOver ? <button
            className="bg-[#11B5E5] py-2 px-8 rounded-[3px] mt-10 border border-white font-medium h-10 "
          >New Game</button>:
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
