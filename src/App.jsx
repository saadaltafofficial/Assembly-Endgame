import { languages } from "./languages"
import LanguageButton from "./languageButton"
import { useState } from "react"

function App() {
  const [currentWord, setCurrentWord] = useState('ReactEndgame')

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const allLanguages = languages.map(item => (
    <LanguageButton key={item} name={item.name} backgroundColor={item.backgroundColor} color={item.color} />
  ))

  const mapCurrentWord = currentWord.split('').map((item, index) => (<span className="px-4 py-3 bg-[#323231] mx-1 border-b-2 text-white" key={index}>{item.toLocaleUpperCase()}</span>))
  console.log(mapCurrentWord)

  const allAlphabets = alphabet.split('').map((item, index) => (
    <button className="m-1 bg-[#FCBA29] py-4 px-4 rounded-md" key={index}>{item.toUpperCase()}</button>
  ))
  

  return (
    <>
      <div className="bg-[#282725] h-[100vh] flex flex-col justify-center items-center text-center font-[inter] ">
        <header className="max-w-[60vw]">
          <div className="">
            <h1 className="text-[#F9F4DA] font-[inter] font-bold text-3xl">Assembly: Endgame</h1>
            <p className="text-[#8E8E8E] font-[inter] text-[1rem] pt-3">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
        </header>
        <main className="max-w-[50vw] min-w-[400px]">
          <section className="status-section">
            <div className="bg-[#10A95B] text-white rounded-md py-4 my-10 font-normal text-xl">
              <p>You win!</p>
              <p className="font-light">Well done!🎉</p>
            </div>
          </section>
          <section className="flex flex-wrap justify-center">
            {mapCurrentWord}
          </section>
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center my-10 ">
             {allLanguages}
          </section>
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center">
             {allAlphabets}
          </section>
        </main>
      </div>
    </>
  )
}

export default App
