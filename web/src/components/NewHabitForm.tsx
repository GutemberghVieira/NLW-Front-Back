import { Check } from "phosphor-react";

import * as Checkbox from '@radix-ui/react-checkbox'

import { FormEvent} from 'react/index'

import {useState} from 'react'
import { api } from "../lib/axios";


const availableWeekDays = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
]

export function NewHabitForm(){


   
    const [title, setTitle] = useState('')

     const [weekDays, setweekDays] = useState<number[]>([])
    


  async  function createNewHabit(event : FormEvent) {
   event.preventDefault()
   
   if(!title || weekDays.length === 0){
    return 
   }
  
  await api.post('habits', {
    title,
    weekDays,
   })
   setTitle('')
   setweekDays([])

   alert('Hábito criado com sucesso!')
    }



    function handleToggleWeekDay(weekDay: number){
    if(weekDays.includes(weekDay)){
    const weekDaysWithRemoveOne = weekDays.filter(day =>  day === weekDay)

     
    setweekDays(weekDaysWithRemoveOne)
    }else {
        const weekDaysWithAddedOne = [...weekDays, weekDay]
 
        setweekDays(weekDaysWithAddedOne)
     }
    }

return( 
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">

        <label  htmlFor="title" className="font-semibold leading-tight">Qual seu comprometimento?</label>
 
        <input 
        type="text"
        id="title"
        placeholder="ex.: Exercícios, Beber Água, etc..."
        className="p-4 rounded-lg mt-3  bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background rounded-lg"
        autoFocus
        value={title}
        onChange={event => setTitle(event.target.value)}

        />

        <label htmlFor="" className="font-semibold leading-tight  mt-4">
            Qual a Recorrência
        </label> 

        <div className="flex flex-col gap-2 mt-3">

           {
            availableWeekDays.map((weekDay, index) => {
                return(
                    <Checkbox.Root 

                    key={weekDay}

                    className="flex items-center gap-3 group focus:outline-none  " 
                    checked={weekDays.includes(index)}
                    onCheckedChange={() => handleToggleWeekDay(index) }
                    >

                     
                     <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-orange-500 group-data-[state=checked]:border-orange-500 transition-colors   group-focus:ring-offset-2  group-focus:ring-offset-background   group-focus:ring-2 group-focus:ring-orange-500">
                         <Checkbox.Indicator>
                         <Check size={20} className="text-white "/>
 
                         </Checkbox.Indicator>
                     </div>
                  
                  <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                    {weekDay}
                  </span>
 
                    </Checkbox.Root>
                )
            })
           }
   </div>

       <button type="submit" className="mt-6 flex items-center justify-center font-semibold gap-3 bg-orange-500 rounded-lg p-4 hover:bg-orange-600 transition-colors  focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background ">
        <Check size={20} weight="bold"
        />
        Confirmar
       </button>

    </form>
)
}