import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { generateRangeBetweenDates } from '../utils/generate-range-between-dates'
import {HabitDay} from './HabitDay'

const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
]

const sumaryDates = generateRangeBetweenDates()

const minimumSumaryDateSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSumaryDateSize - sumaryDates.length


type  Summary = {
  id: string;
  date:string;
  amount:number;
  completed:number;
}[]


export function SumaryTable(){
    
  const [summary, setSummary] = useState<Summary>([])

 useEffect(() => {
  api.get('summary').then(response => {
   setSummary(response.data)
  })
 }, [])

  return(
    <div  className="w-full flex">
<div className="grid grid-rows-7 grid-flow-row gap-3 ">

     {weekDays.map((weekDays ,i) => {
            return(

        <div key={ `${weekDays}-${i}` } 
        className="text-orange-300  text-xl h-10 w-10 flex items-center justify-center font-bold">
                    {weekDays}
                </div>
                
            )})}

        

    </div>

    <div className="grid grid-rows-7 grid-flow-col gap-3">
      
       {
      summary.length > 0 &&   sumaryDates.map(date => 
          {
  
            const dayInSummary = summary.find(day => {
              return dayjs(date).isSame(day.date, 'day')
            })

            return (<HabitDay 
            key={date.toString()}
            date={date}
             amount= {dayInSummary?.amount} 
             defaultCompleted={dayInSummary?.completed} 
             />)
          })
       }


           {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_ ,i) => {
              return (
                <div
                 key={i}
                 className="opacity-40 cursor-not w-10 h-10 bg-zinc-900 border-2  border-zinc-800 rounded-lg cursor-not-allowed" />
            )
            })}

    </div>
    </div>
  )

}