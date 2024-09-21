'use client'

import {useState} from 'react'

export default function Newsletter() {
    const [isError, setIsError] = useState<boolean>()
    const [returnMessage, setReturnMessage] = useState<string>('')
    const [email, setEmail] = useState<string>('');

    function validateEmail(email: string) {
        const regex = /\S+@\S+\.\S+/
        return regex.test(email)
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (!validateEmail(email)) {
            setIsError(true)
            setReturnMessage('Email is not valid')
            return
        }

        try {
            const response = await fetch('https://adchitects-cms-cbbaa5b528fe.herokuapp.com/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`adchitects:jsrulezzz`)}`,
                },
                body: JSON.stringify({email}),
            })

            if (response.ok) {
                setIsError(false)
                setReturnMessage('Thank you for signing up for the Breally newsletter.')
                setEmail('')
            } else {
                setIsError(true);
                setReturnMessage('An error occurred. Please try again.')
            }
        } catch {
            setIsError(true);
            setReturnMessage('An error occurred. Please try again.')
        }
    }

    return (
        <div className='h-[678px] flex items-center flex-col px-12'>
            <span className='text-[56px] font-medium text-center mt-[170px]'>Sign up for Newsletter</span>
            <form className='flex flex-col md:flex-row gap-[18px] w-full mt-[87px] justify-center items-center'
                  onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Type your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full md:max-w-[570px] outline-none px-8 rounded-full bg-c-white text-c-black text-base lg:text-2xl h-12 lg:h-16`}
                />
                <button
                    className='bg-c-purple h-12 lg:h-16 max-w-48 md:max-w-[unset] px-12 lg:px-[85px] rounded-full text-base lg:text-2xl'
                    type="submit"
                >
                    Submit
                </button>
            </form>
            <div className={`h-20 w-full text-center ${isError ? 'text-red-400' : 'text-c-lime'} text-xl`}>
                {returnMessage}
            </div>
        </div>
    );
}