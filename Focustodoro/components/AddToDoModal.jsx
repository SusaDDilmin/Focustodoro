import { View, Text , Modal , TouchableWithoutFeedback , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function AddCatogaryModal({ isVisible , setIsVisible }) {


    return (
        <View>
            <Modal transparent={true} visible={isVisible} animationType='fade' onRequestClose={() => {setIsVisible(false)}}>
                <TouchableWithoutFeedback onPress={() => {setIsVisible(false)}}>
                    <View className="flex-1  justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                        <TouchableWithoutFeedback>
                            
                            <View className="bg-white p-2 px-4 rounded-lg " >
                                <View className="flex flex-row gap-2 items-center" >
                                    <TextInput 
                                        placeholder='To Do title' 
                                        placeholderTextColor="gray" 
                                        onChangeText={() => {
                                            //Implement the functionality
                                        }} 
                                        className="bg-gray-200 p-4 rounded-md flex-1" 
                                    />
                                    <TouchableOpacity
                                        onPress={() => {
                                            //Implement the functionality
                                        }}

                                    >
                                        <AntDesign name="checkcircle" size={35} color="rgb(239, 68, 68)" />
                                    </TouchableOpacity>
                                </View>
                                <View className="flex flex-row gap-6 items-center" >
                                    <TouchableOpacity>
                                        <View className="bg-red-200 my-2 p-2 px-4 rounded-full" >
                                            {/* Logic for select Catogary */}
                                            <Text className="text-base font-semibold text-gray-600" >Catogary</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <TouchableOpacity>
                                            <Entypo name="calendar" size={30} color="gray" />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Ionicons name="time-sharp" size={35} color="gray" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}