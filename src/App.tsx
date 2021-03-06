import { useState, useEffect } from 'react'

interface Slip {
  id: number
  advice: string
}

interface Error {
  hasError: boolean
  message: string
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function App() {
  const [slip, setSlip] = useState<Slip>({ id: 0, advice: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>({ hasError: false, message: '' })

  const getSlip = async (id?: number, delay = 1000) => {
    setLoading(true)

    // starting with a base url
    const url = new URL('https://api.adviceslip.com/advice')

    // if there is an id, add it to the url
    if (id) url.pathname += `/${id}`

    // making sure the api has a break in between requests
    // don't want to overload them :)
    await sleep(delay)

    // use fetch api to get data
    const response = await fetch(url.toString())
    const data = await response.json()

    // if it has a slip, then we want to show it and remove the error
    if ('slip' in data) {
      setSlip(data.slip)
      setError({ hasError: false, message: '' })
    } else {
      // otherwise, we want to show the error
      setError({ hasError: true, message: data.message.text })
    }

    setLoading(false)
  }

  // get slip on initial load
  useEffect(() => {
    const id = new URL(document.location.toString()).searchParams.get('id')

    if (id) getSlip(parseInt(id))
    else getSlip(undefined, 0) // load first slip immediately
  }, [])

  return (
    <div className="min-h-screen bg-dark-blue grid place-items-center text-lightcyan font-manrope font-extrabold">
      <main className="bg-dark-grayish-blue rounded-xl shadow-2xl text-center grid relative px-8 py-10 gap-7 sm:w-[525px] m-4">
        <h1 className="text-neon-green text-xs tracking-widester">
          ADVICE #{slip.id}
        </h1>

        <p
          className={`text-28 ${
            error.hasError ? 'text-red-300' : 'text-light-cyan'
          }`}
        >
          {error.hasError ? error.message : slip.advice}
        </p>

        <picture>
          <source
            media="(min-width: 375px)"
            srcSet="/pattern-divider-desktop.svg"
          />
          <img
            className="mx-auto mb-6"
            src="/pattern-divider-mobile.svg"
            alt="divider"
          />
        </picture>

        <div className="absolute flex justify-center left-0 right-0 -bottom-8">
          {/* this piece is for the glowing background */}
          <div className="relative group">
            <div
              className={`absolute ${
                loading ? 'bg-neon-green/0' : 'bg-neon-green/75'
              } -inset-1 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200`}
            ></div>

            <button
              className="relative bg-neon-green p-5 rounded-full disabled:bg-grayish-blue disabled:cursor-wait transition duration-200"
              onClick={() => getSlip()}
              disabled={loading}
            >
              <img
                src="/icon-dice.svg"
                alt="dice button icon"
                className="icon"
              />
            </button>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 text-slate-400 m-4 text-sm text-center">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="text-neon-green"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/Jclong98/Frontend-Mentor-Advice-App"
          className="text-neon-green"
        >
          Jacob Long
        </a>
        .
      </footer>
    </div>
  )
}
