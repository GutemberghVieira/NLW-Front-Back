import './styles/global.css'
import './lib/dayjs'

import { UserHabits } from './components/UserHabits'

import {SumaryTable} from './components/Sumary-Table'





//import {Habit} from './components/Habit'



export function App() {
  return(
    <div className= "w-screen h-screen flex justify-center items-center">

      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
 
      <UserHabits  />
     
     <SumaryTable />

      </div>
    
    </div>
  )
}

//Componente: Reaproveitar / isolar
//Propriedade: uma Informação enviada para modificar um componente visual ou comportamental

export default App
