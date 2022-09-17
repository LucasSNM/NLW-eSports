//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react"
import '../styles/main.css'
import "keen-slider/keen-slider.min.css"
import logoImg from '../../assets/logo_nlw.svg'
import { GameBanner } from './components/GameBanner'
import { CreateAdBanner } from './components/CreateAdBanner'

import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { CreateAdModal } from './components/CreateAdModal'
import axios from 'axios'

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])
  const [width, setWindowWidth] = useState(0);
  const [numberBanner, setNumberBanner] = useState(5)

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(reponse => {
        setGames(reponse.data)
        // data.forEach((element: any) => {
        //   console.log(element)
        // });
      })
  }, [])

  const [sliderRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: Number(numberBanner),
        spacing: 15,
      },
    },
    // [ResizePlugin]
    [(slider: any) => {
      const observer = new ResizeObserver(function () {
        slider.update()
      })

      slider.on("created", () => {
        observer.observe(slider.container)
      })
      slider.on("destroyed", () => {
        observer.unobserve(slider.container)
      })
    }]
  )

  useEffect(() => {

    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () =>
      window.removeEventListener('resize', updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    if (width > 1536) setNumberBanner(7)
    else if (width > 1280) setNumberBanner(6)
    else if (width > 1024) setNumberBanner(5)
    else if (width > 768) setNumberBanner(4)
    else if (width > 640) setNumberBanner(3)
    else setNumberBanner(2)
  }

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 6,
      spacing: 15,
    },
  })

  return (
    <div className=" flex flex-col items-center my-12">
      <img className="animate-pulse" src={logoImg} alt=""></img>


      <h1 className="text-6xl text-white font-black mt-20 mb-16">Seu <span className="bg-duo-gradient text-transparent bg-clip-text underline decoration-sky-500/10">duo</span> está aqui,</h1>

        <div
          ref={sliderRef}
          className='keen-slider'
          style={{width: '95%',}}
          >
          {games.map(game => {
            return (
              <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              />
              )
            })}
        </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>

    </div>
  )
}

export default App
