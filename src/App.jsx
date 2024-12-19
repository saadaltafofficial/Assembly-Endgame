

function App() {

  return (
    <>
      <div className="bg-[#282725] h-[100vh] flex flex-col justify-center items-center text-center font-[inter]">
        <header className="max-w-[28%]">
          <div className="">
            <h1 className="text-[#F9F4DA] font-[inter] font-bold text-3xl">Assembly: Endgame</h1>
            <p className="text-[#8E8E8E] font-[inter] text-[1rem] pt-3">Guess the word in under 8 attempts to keep the programming world safe from Assembly!</p>
            </div>
          <section className="status-section">
            <div className="bg-[#10A95B] text-white rounded-md py-4 my-10 font-normal text-xl">
              <p>You win!</p>
              <p className="font-light">Well done!🎉</p>
            </div>
          </section>
        </header>
        <main className="max-w-[24%]">
          <section className="programmingLanguages-section flex gap-1 flex-wrap justify-center">
             
          </section>
        </main>
      </div>
    </>
  )
}

export default App
