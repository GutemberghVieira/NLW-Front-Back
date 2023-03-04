import { useState , useCallback } from 'react';
import { View, Text, ScrollView, Alert} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

import dayjs from 'dayjs';

import { api } from '../lib/axios';



import { generateDateFromEndOfTime } from '../utils/Generate-Date-From-End-Of-Time'

import { HabitDay, Day_Size } from '../components/HabitDay';
import { Header } from '../components/Header';

import { Loading } from '../components/Loading';





const weekDays =  ['D', 'S' , 'T' , 'Q' , 'Q', 'S' , 'S']

const datesFromYearStart = generateDateFromEndOfTime();

const minimunSumaryDateSize = 18 * 5 ;

const amountOfDayToFill = minimunSumaryDateSize - datesFromYearStart.length;

type SummaryProps = Array<{
    id: string;
    date: string;
    amount: number;
    completed:number;
}>


export function Home(){
    

    const {navigate} = useNavigation();
    const [loading, setLoading] = useState(true);
  
  const [summary, setSummary] = useState<SummaryProps | null>(null);
  
    async function fetchData() {

      try {
          setLoading(true);
          const response = await api.get('/summary');
          
         console.log(response.data);
         
          setSummary(response.data);
          
      } catch (error) {
          Alert.alert('Ops', 'Não foi possivel carregar o sumário de hábitos');
          console.log(error);
      } finally {
          setLoading(false);
      }

  }

  useFocusEffect(useCallback(() => {
   fetchData();
  }, []));
  
  if(loading){
    return(
        <Loading />
    );
  }


 
    return(
        <View className="flex-1 bg-background px-8 pt-16">
  
     <Header />


     <View className="flex-row mt-6 mb-2">
        {
            weekDays.map((weekDay, i) => (

                <Text key={`${weekDay}-${i}`}
                 className="text-orange-400 text-center text-xl mx-1"
                 style={{width: Day_Size}}
                >
                    {weekDay}
                </Text>
            ))
        }
     </View>


     <ScrollView 
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{paddingBottom:100}}>
    
         {
            summary &&
            <View className="flex-row flex-wrap">
             {
             datesFromYearStart.map(date =>{
const dayWithHabits = summary.find(day => {
    return dayjs(date).isSame(day.date, 'day')
})
                return(
                <HabitDay
                key= {date.toISOString()}
                date= {date}
                amountOfHabits={dayWithHabits?.amount}
                amountCompleted ={dayWithHabits?.completed}

                onPress={() => navigate('habit', {date:date.toISOString()})}
                />
                )
})
             }
               {
           amountOfDayToFill > 0 && Array.from({
             length: amountOfDayToFill
           }).map((_ , index)=> (
            <View
            key={index}
             className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
            style={{width: Day_Size, height: Day_Size}}/>
           ))
          }
         </View>}
         
     </ScrollView>
    

        </View>
    )
}