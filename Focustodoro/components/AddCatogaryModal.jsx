import { View, ActivityIndicator , Modal , TouchableWithoutFeedback , TextInput , TouchableOpacity , Alert} from 'react-native'
import React , { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

import { collection, addDoc , serverTimestamp } from "firebase/firestore"; 
import { useAuth } from '../context/AuthContext';
import { db } from '../firebaseConfig';

export default function AddCatogaryModal({ isVisible , setIsVisible }) {

    const { user } = useAuth();
    const userId = user?.userId;

    const [ newCatogary , setNewCatogary ] = useState('');
    const [ isLoading , setIsLoading ] = useState(false);

    const handleAddCatogary = async () => {
        //Implement the functionality
        if(newCatogary === '') {
            
            Alert.alert('Please enter a valid catogary');
            return;
        }

        setIsLoading(true);
        try {
            const docRef = await addDoc(collection(db , 'users' , userId , 'Catogaries') , {
                catogary: newCatogary , 
                createdAt: serverTimestamp(),
            })

        } catch (error) {
            Alert.alert(error.message);
            console.error(error);
        }
        setIsLoading(false);
        setNewCatogary('');
        setIsVisible(false);
    }

    return (
        <View>
            <Modal transparent={true} visible={isVisible} animationType='fade' onRequestClose={() => {setIsVisible(false)}}>
                <TouchableWithoutFeedback onPress={() => {setIsVisible(false)}}>
                    <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                        <TouchableWithoutFeedback>
                            <View className="bg-white p-2 px-4 rounded-lg flex flex-row gap-2 items-center" >
                                <TextInput 
                                    placeholder='Enter your catogary' 
                                    placeholderTextColor="gray" 
                                    onChangeText={(text) => {
                                        //Implement the functionality
                                        setNewCatogary(text)
                                    }} 
                                    className="bg-gray-200 p-4 rounded-md flex-1" 
                                    value= {newCatogary}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        //Implement the functionality
                                        handleAddCatogary();
                                    }}
                                >
                                    { isLoading ? <ActivityIndicator size="large" color="rgb(239, 68, 68)" /> : <AntDesign name="checkcircle" size={35} color="rgb(239, 68, 68)" />}
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}