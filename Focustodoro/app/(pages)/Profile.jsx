import { View , Text , TouchableOpacity } from 'react-native'
import React from 'react'

import { useAuth } from '../../context/AuthContext';
import { db  } from '../../firebaseConfig';

export default function Profile() {

  const { user , logout  } = useAuth();
  const userId = user?.userId;
  const userName = user?.userName;

  const handleLogout = async () => {
    //console.log("Logging out...");
    let response = await logout();

    if(!response.success){
      console.log("Logged out unsuccessfully...");
    }

  }

  return (
    <View className="flex flex-1 bg-white items-center gap-3 pt-10" >
      <Text className="text-2xl font-bold" >{userName}</Text>
      <View className="w-[150] h-[150] bg-gray-500 rounded-full ">

      </View>
      <View className="flex flex-1" >

      </View>
      {/* <TouchableOpactity className="bg-blue-500 p-2 rounded-md" onPress={() => {}} >

      </TouchableOpactity> */}
      <View className="w-full p-4" >
        <TouchableOpacity className="bg-red-500 p-2 rounded-md mb-8 w-full" onPress={() => {handleLogout()}} >
          <Text className="text-xl font-bold text-white text-center" >Sign Out</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}