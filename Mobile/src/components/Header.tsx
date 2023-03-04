import { View, TouchableOpacity, Text } from 'react-native';

import { Feather } from '@expo/vector-icons';

import colors from 'tailwindcss/colors'

import {useNavigation} from '@react-navigation/native'

import LogoSvg from '../assets/logo.svg';






export function Header(){
  const {navigate} = useNavigation()

    return (
        <View className="w-full flex-row items-center justify-between">

      <LogoSvg />
 
    <TouchableOpacity
    activeOpacity={0.7}
    className= "flex-row h-11 px-4 border border-orange-300 items-center rounded-lg"
    onPress={() => navigate('new')}
    >
        <Feather
        name= "plus"
        color={colors.orange[300]}
        size={20}
         />

         <Text className="text-white ml-3 font-semibold text-base">
            Novo
         </Text>
    </TouchableOpacity>
  </View>
    )
}