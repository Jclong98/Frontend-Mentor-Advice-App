import { useState, useEffect } from 'react'

interface Slip {
  id: number
  advice: string
}

interface Error {
  hasError: boolean
  message: string
}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

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

    const response = await fetch(url.toString())
    const data = await response.json()

    if ('slip' in data) {
      setSlip(data.slip)
      setError({ hasError: false, message: '' })
    } else {
      setError({ hasError: true, message: data.message.text })
    }

    setLoading(false)
  }

  // get slip on initial load
  useEffect(() => {
    const id = new URL(document.location.toString()).searchParams.get('id')

    if (id) getSlip(parseInt(id))
    else getSlip(undefined, 0)
  }, [])

  return (
    <div className="min-h-screen bg-slate-800 grid place-items-center text-lightcyan font-manrope font-extrabold">
      <main className="bg-slate-700 rounded-xl shadow-2xl text-center grid relative px-8 py-10 gap-7 sm:w-[525px] m-4">
        <h1 className="text-emerald-400 text-xs tracking-widester">
          ADVICE #{slip.id}
        </h1>

        <p
          className={`text-28 ${
            error.hasError ? 'text-red-300' : 'text-slate-300'
          }`}
        >
          {error.hasError ? error.message : slip.advice}
        </p>

        <img
          className="mx-auto mb-4"
          src="/pattern-divider-desktop.svg"
          alt="divider"
        />

        <div className="absolute flex justify-center left-0 right-0 -bottom-6">
          {/* this piece is for the glowing background */}
          <div className="relative group">
            <div
              className={`absolute ${
                loading ? 'bg-emerald-500/0' : 'bg-emerald-500/75'
              } -inset-1 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-200`}
            ></div>

            <button
              className="relative bg-emerald-400 p-4 rounded-full disabled:bg-slate-500 disabled:cursor-wait transition duration-200"
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
          className="text-emerald-400"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://github.com/Jclong98/Frontend-Mentor-Advice-App"
          className="text-emerald-400"
        >
          Jacob Long
        </a>
        .
      </footer>
    </div>
  )
}
