

import * as Popover from "@radix-ui/react-popover"





import {ProgressBar} from "./Progressbar"

import  clsx  from 'clsx'
import dayjs from "dayjs"
import { useEffect, useState } from "react"
import { HabitList } from './HabitList';


 
//interface theProperties{
// completed : number 
//}


interface HabitDayProps {
    date: Date
    defaultCompleted?:number
    amount?: number
}


export function HabitDay({defaultCompleted = 0, amount = 0, date} : HabitDayProps){

    const [completed, setCompleted] = useState(defaultCompleted)

    const completedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0


    const dayAndMonth = dayjs(date).format('DD/MM')

    const dayOfWeek = dayjs(date).format('dddd')

    function handleCompletedChange(completed:number){
     setCompleted(completed)
    }


    
    return(
        <Popover.Root>

            <Popover.Trigger
             className={clsx('w-10 h-10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background', {
                
         ['bg-zinc-900 border-zinc-800']: completedPercentage === 0,
         
         ['bg-orange-900 border-orange-700']:completedPercentage > 0 &&  completedPercentage < 20,

         ['bg-orange-800 border-orange-600']:completedPercentage >= 20 &&  completedPercentage < 40,

         ['bg-orange-700 border-orange-500']:completedPercentage >= 40 &&  completedPercentage < 60,

         ['bg-orange-600 border-orange-400']:completedPercentage >= 60 &&  completedPercentage < 80,
         
        ['bg-orange-500 border-orange-300']: completedPercentage >= 80,
            

             })}

             />

            <Popover.Portal>
                <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
                    
                  
                <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
    <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

         
   <ProgressBar progress={ completedPercentage }/>

    <HabitList date={date} onCompletedChanged={ handleCompletedChange} />

                   <Popover.Arrow 
                   height={10}
                   width={16}
                   className="fill-zinc-900 "/> 
                </Popover.Content>
            </Popover.Portal>

        </Popover.Root>
    )
}