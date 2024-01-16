"use client"

import { useForm } from 'react-hook-form';
import { FormStep1 } from './FormStep1';
import { useState } from 'react';
import { FormStep2 } from './FormStep2';
import { Button } from '@nextui-org/button';
import { FormStep0 } from './FormStep0';
import { FormStep3 } from './FormStep3';

export function MainForm() {

    const [ stepCounter, setStepCounter ] = useState(0)
    const nextStep = (data: any) => {
        console.log(data)
        setStepCounter(stepCounter+1)
    }
    const previousStep = () => setStepCounter(stepCounter-1)

    const { register, handleSubmit } = useForm()

    return (
            <form className={`w-3/5 mx-auto py-6`}
            onSubmit={handleSubmit(nextStep)}>
                <div className={`py-8 ${stepCounter == 0 || stepCounter == 3 ? "flex flex-col items-center justify-center" : ''}`}>
                    <h1 className="text-4xl">Candidadura CFN</h1>
                    <span className="text-2xl pl-1">{stepCounter == 3 ? "Obrigado" : "Insira seus Dados"}</span>
                </div>
                {stepCounter == 0 ? (
                    <FormStep0/>
                ): stepCounter == 1 ? (
                    <FormStep1
                    registerFunction={register}/>
                ): stepCounter == 2 ? (
                    <FormStep2
                    registerFunction={register}/>
                ): stepCounter == 3 ? (
                    <FormStep3/>
                ): ''}
                <div className={`flex flex-cols-2 py-10 ${stepCounter == 0 ? "justify-center" : "justify-between"}`}>
                    <Button onClick={() => previousStep()}
                    className={`bg-blue-700 text-white rounded-2xl w-1/3 h-10 text-xl font-bold hover:bg-blue-500
                    ${stepCounter == 0 || stepCounter == 3 ? 'hidden' : ''}`}>
                        Anterior
                    </Button>
                    <Button type="submit"
                     className={`bg-blue-700 text-white rounded-2xl w-1/3 h-10 text-xl font-bold hover:bg-blue-500
                     ${stepCounter == 3 && 'hidden'}`}>
                        Próximo
                    </Button>
                </div>
            </form>
    )
}