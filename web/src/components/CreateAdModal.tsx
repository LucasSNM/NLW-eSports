import { Check, Checks, GameController } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { InputLabel } from './Form/InputLabel'
import { Input } from './Form/Input'

import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { useState, useEffect, FormEvent } from 'react'
import axios from 'axios'

interface Game {
  id: string,
  title: string,
}

export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChat, setUseVoiceChat] = useState(false)


  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(reponse => {
        setGames(reponse.data)
        // data.forEach((element: any) => {
        //   console.log(element)
        // });
      })
  }, [])

  function handleCreateAd(event: FormEvent) {
    event.preventDefault()

    const fromData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(fromData)

    try {

      axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        houtsStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChat
      })

      alert('Anúncio criado com sucesso!')
    } catch (err) {
      alert('Erro ao criar o anúncio!')
      console.log(err)
    }
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />
      <Dialog.Content className='bg-[#2A2634] fixed rounded-lg px-10 py-8 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>
        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>

          <label
            htmlFor='game'
            className="font-semibold">
            Qual o game?
          </label>
          <select
            id="game"
            name="game"
            className="bg-zinc-900 py-3 px-4 rounded text-sm font-semibold border-zinc-900 appearance-none"
            defaultValue={''}
          >
            <option disabled className="text-zinc-500" value="">Selecione o game que deseja jogar</option>
            {games.map(game => {
              return (<option key={game.id} value={game.id}>{game.title}</option>)
            })}
          </select>

          <InputLabel id="name" name="name" title='Seu nome (ou nickname)' placeholder='Como te chamam dentro do game?' type='text' />

          <div className='grid grid-cols-2 gap-6'>
            <InputLabel id="yearsPlaying" name='yearsPlaying' title='Joga há quantos anos?' placeholder='Tudo bem ser ZERO' type='number' />
            <InputLabel id="discord" name='discord' title='Qual seu Discord?' placeholder='Usuario#0000' type='text' />
          </div>

          <div className='flex gap-6'>

            <div className='flex flex-col gap-2'>
              <label htmlFor='weekDays'>Quando costuma jogar?</label>

              <ToggleGroup.Root type="multiple" className='grid grid-cols-7 gap-2' value={weekDays} onValueChange={setWeekDays}>
                <ToggleGroup.Item value="0" title="Domingo" className={` rounded w-6 h-6 ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                <ToggleGroup.Item value="1" title="Segunda-feira" className={` rounded w-6 h-6 ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="2" title="Terça-feira" className={` rounded w-6 h-6 ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                <ToggleGroup.Item value="3" title="Quarta-feira" className={` rounded w-6 h-6 ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="4" title="Quinta-feira" className={` rounded w-6 h-6 ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                <ToggleGroup.Item value="5" title="Sexta-feira" className={` rounded w-6 h-6 ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                <ToggleGroup.Item value="6" title="Sábado" className={` rounded w-6 h-6 ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
              </ToggleGroup.Root>

            </div>

            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor='hourStart'>Qual horário do dia?</label>
              <div className='flex flex-row gap-2'>
                <Input id="hourStart" name='hourStart' type="time" placeholder='De' />
                <Input id="hourEnd" name='hourEnd' type="time" placeholder='Até' />
              </div>
            </div>

          </div>

          <div className='mt-2 flex gap-2 items-center text-sm'>
            <Checkbox.Root
              checked={useVoiceChat}
              className='w-6 h-6 p-0.25 rounded bg-zinc-900'
              onCheckedChange={(checked) => {
                if (checked === true) setUseVoiceChat(true)
                else setUseVoiceChat(false)
              }}
            >
              <Checkbox.Indicator>
                <Check className='w-6 h-6 text-emerald-400' />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </div>

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close type="button" className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancelar</Dialog.Close>
            <button type='submit' className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600'>
              <GameController size={24} />
              Encontrar Duo
            </button>
          </footer>

        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}