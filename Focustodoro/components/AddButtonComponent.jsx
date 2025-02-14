// To-Do : Add small rotating animation when button touch : 
// reanimatted Link : https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/your-first-animation/

import { View, Text , TouchableOpacity , Modal , TouchableWithoutFeedback , StatusBar } from 'react-native'
import React , { useState } from 'react'

import Ionicons from '@expo/vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

import AddCatogaryModal from './AddCatogaryModal';
import AddToDoModal from './AddToDoModal';

export default function AddButtonComponent() {

    const [ ButtonRotation , setButtonRotation ] = useState(0);
    const [ ModalVisible , setModalVisible ] = useState(false);
    const [ isVisibleButton , setIsVisibleButton ] = useState(true);

    const [ isVisibleAddCatogaryModal , setIsVisibleAddCatogaryModal ] = useState(false);
    const [ isVisibleAddToDoModal , setIsVisibleAddToDoModal ] = useState(false);




    return (
        <View className={`items-end flex-1 justify-end`} >
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <TouchableOpacity 
                onPress={() => {
                        setModalVisible(!ModalVisible);
                        setIsVisibleButton(false);
                    }
                } 
                className={`${isVisibleButton? 'flex' : 'hidden'}`}
            >
                <LottieView style={{ width: 120, height: 120 }} source={require('../assets/images/AddAnimation.json')} autoPlay loop speed={0.5} />
            </TouchableOpacity>
            <Modal transparent={true} visible={ModalVisible} animationType='fade' 
                onRequestClose={() => {
                    //Alert.alert('Modal has been closed.');
                    setModalVisible(!ModalVisible);
                }}
            > 
                <TouchableWithoutFeedback 
                    onPress={() => {
                        setModalVisible(false);
                        setIsVisibleButton(true);
                    }}
                >
                    <View className="flex-1 justify-end items-end " style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                        <TouchableWithoutFeedback>
                            <View className="items-end mb-[70] " >
                                <TouchableOpacity onPress={() => { setIsVisibleAddCatogaryModal(true)} } >
                                    <View className="bg-red-500 p-4 rounded-lg mr-[15]" >
                                        <Text className="text-white font-bold" >Catogary</Text>
                                    </View>
                                </TouchableOpacity>

                                <View className="flex flex-row items-end" >
                                    <TouchableOpacity onPress={() => { setIsVisibleAddToDoModal(true)} } >
                                        <View className="bg-red-500 p-4 rounded-lg mb-[35]" >
                                            <Text className="text-white font-bold" >To Do</Text>
                                        </View>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity 
                                        onPress={() => {
                                            setModalVisible(false);
                                            setIsVisibleButton(true);
                                        }}  
                                    >
                                        <LottieView style={{ width: 120, height: 120 , transform: [{ rotate: `45deg` }] }} source={require('../assets/images/AddAnimation.json')} autoPlay loop speed={0.5} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <AddCatogaryModal isVisible={isVisibleAddCatogaryModal} setIsVisible={setIsVisibleAddCatogaryModal} />
            <AddToDoModal isVisible={isVisibleAddToDoModal} setIsVisible={setIsVisibleAddToDoModal} />
        </View>
    )
}
