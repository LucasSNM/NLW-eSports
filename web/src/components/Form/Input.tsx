import {InputHTMLAttributes} from 'react'

interface InputValues extends InputHTMLAttributes<HTMLInputElement>{

}

export function Input(props: InputValues) {
    return (
        <div>
            <input
                {...props}
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 border-zinc-500"
                autoComplete='off'
            />
        </div>
    )
}