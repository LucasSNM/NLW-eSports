import {InputHTMLAttributes} from 'react'

interface InputValues extends InputHTMLAttributes<HTMLInputElement>{
    id: string,
    title: string,
}

export function InputLabel(props: InputValues) {
    return (
        <div className="flex flex-col gap-2">
            <label
                htmlFor={props.id}
                className="font-semibold">
                {props.title}
            </label>
            <input
                {...props}
                className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 border-zinc-500"
                autoComplete='off'
            />
        </div>
    )
}