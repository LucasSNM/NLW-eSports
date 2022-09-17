import { MagnifyingGlassPlus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

export function CreateAdBanner() {
    return (
        <div className='pt-1 bg-duo-gradient rounded-lg rounded-b-xl overflow-hidden self-stretch mt-8 mx-32 sm:mx-10'>
            <div className='bg-[#2A2634] py-6 px-8 rounded-b-lg flex justify-between sm:flex-col md:flex-row '>
                <div>
                    <strong className='text-white font-bold text-lg'>Não encontrou seu duo?</strong>
                    <p className='text-zinc-400'>Publique um anúncio para encontrar novos players</p>
                </div>
                <Dialog.Trigger
                    className='bg-violet-500 text-white font-bold rounded py-3 px-4 hover:bg-violet-600 flex flex-row items-center place-content-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}