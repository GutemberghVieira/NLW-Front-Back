import { TouchableOpacity,Dimensions, TouchableOpacityProps } from "react-native";

import dayjs from "dayjs"
import clsx from "clsx";

const week_Days = 7; 
const screen_Horinzontal_Padding = (32*2) / 5 ;

import {generateProgressPercentage} from "../utils/generateprogresspercentage";


export const Day_Margin_BetWeen = 8;

export const Day_Size = Dimensions.get('screen').width / week_Days - (screen_Horinzontal_Padding + 5 )

interface Props extends TouchableOpacityProps {
    amountOfHabits?: number;
    amountCompleted?: number;
    date: Date;
};

export function HabitDay({amountOfHabits = 0 , amountCompleted = 0 , date, ...rest}: Props) {

    const amountAcomplishedPercentage = amountOfHabits > 0 ?generateProgressPercentage(amountOfHabits, amountCompleted): 0;

    const today = dayjs().startOf('day').toDate();
    const isCurrentDay = dayjs(date).isSame(today);

    return(
        <TouchableOpacity 
        className={clsx("rounded-lg border-2 m-1", {
            ['bg-zinc-900 border-zinc-800'] : amountAcomplishedPercentage === 0, 
            ["bg-orange-900 border-orange-700"]: amountAcomplishedPercentage > 0 && amountAcomplishedPercentage < 20,

            ["bg-orange-800 border-orange-600"]: amountAcomplishedPercentage >= 20 && amountAcomplishedPercentage < 40,

            ["bg-orange-700 border-orange-500"]: amountAcomplishedPercentage >= 40 && amountAcomplishedPercentage < 60,

            ["bg-orange-600 border-orange-400"]: amountAcomplishedPercentage > 60 && amountAcomplishedPercentage < 80,

            ["bg-orange-500 border-orange-400"]: amountAcomplishedPercentage >= 80,
            ["border-white border-4"]: isCurrentDay
        })}
        style = {{width: Day_Size, height: Day_Size }}
        activeOpacity={0.7}
        {...rest}
        />
     
    );
    
}