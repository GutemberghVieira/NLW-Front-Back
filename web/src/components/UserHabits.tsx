

import { UserCirclePlus , X } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog'
import { useState } from 'react';

import {NewHabitForm} from './NewHabitForm'

import logoImage from '../assets/logo.svg'


//Estado => Variáveis monitorados pelo React

export function UserHabits(){
  const [isModalOpen, setIsModalOpen] = useState(false);


  // Imperativa vs. Declarativa
  //Js/HTML

  
   
   return(
       <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={logoImage} alt="Logo-Habits" />
       
       <Dialog.Root>

       <Dialog.Trigger
            type="button"
          

           className=" border border-orange-600 font-semibold rounded-lg px-6 py-4  shadow shadow-orange-700 flex gap-3 items-center  hover:border-orange-300   transition-colors duration-150   focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background "  
            >
           <UserCirclePlus className='text-orange-600  hover:text-orange-300' size={25} />
            Novo Hábito
          </Dialog.Trigger>


          <Dialog.Portal>

            <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
   
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

            <Dialog.Close className="absolute right-6 top-6 text-orange-400 hover:text-orange-300 focus:outline-none  focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-background rounded-lg">
              <X size={24} aria-label="Fechar"/>
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight font-extrabold">
              Criar hábito
            </Dialog.Title>
  
              
          <NewHabitForm/>
          </Dialog.Content>
            
           
          </Dialog.Portal>

       </Dialog.Root>
   
         


        </div>
   )
}