// To-Do need to implement delete catogary functionality

import { View , Text , Alert , Modal , TouchableWithoutFeedback , TextInput , TouchableOpacity , ActivityIndicator } from 'react-native'
import React , { useState , useEffect } from 'react'

import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useAuth } from '../context/AuthContext';
import { collection , query , onSnapshot , orderBy, doc, updateDoc }from "firebase/firestore"; 

import { db } from '../firebaseConfig';

export default function EditCatogaryModal({ isVisible , setIsVisible , editCatogaryObject }) {

    const { user } = useAuth();
    const userId = user?.userId;

    const [ enableEdit , setEnableEdit ] = useState(false);
    const [ CatogaryName , setCatogaryName ] = useState(editCatogaryObject.catogary);
    const [ isRenameLoading , setIsRenameLoading ] = useState(false);

    useEffect(() => {
        //Implement the functionality
        setCatogaryName(editCatogaryObject.catogary);

    },[editCatogaryObject]);

    const handleRename = async () => {  
        if(CatogaryName === ''){
            Alert.alert("Please enter a valid catogary name");
            return;
        }
        if(CatogaryName === editCatogaryObject.catogary){ 
            setIsVisible(false);
            return;
        }
        setIsRenameLoading(true);
        try {
            const docRef = doc(db , 'users' , userId , 'Catogaries' , editCatogaryObject.id);
            await updateDoc( docRef ,{
                catogary : CatogaryName
            });
            setIsVisible(false);
            setEnableEdit(false);

        }catch (error) {
            Alert.alert(error);
        }
        setIsRenameLoading(false);
    }

    return (
        <View>
        <Modal 
            transparent={true} 
            visible={isVisible} 
            animationType='fade' 
            onRequestClose={() => {
                setIsVisible(false);
                setCatogaryName(editCatogaryObject.catogary);
                setEnableEdit(false);
                //console.log(editCatogaryObject.catogary);
            }} 
        >
            <TouchableWithoutFeedback 
                onPress={() => {
                    setIsVisible(false);
                    setCatogaryName(editCatogaryObject.catogary);
                    setEnableEdit(false);
                }}
            >
                <View className="flex-1  justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} >
                    <TouchableWithoutFeedback>
                        <View className="flex flex-row bg-white m-2 rounded-lg justify-between items-center " >
                            <View className="flex flex-row items-center" >
                                <TextInput 
                                    value={CatogaryName}  
                                    editable={enableEdit}
                                    className= {`text-3xl font-semibold m-2 p-4 ${enableEdit?'text-black bg-gray-100 rounded-lg':'text-gray-400'} `}
                                    onChangeText={(text) => setCatogaryName(text)}
                                />
                                <TouchableOpacity onPress={() => setEnableEdit(!enableEdit)} >
                                    <FontAwesome name="edit" size={25} color={enableEdit?"rgb(239, 68, 68)":"gray"} />
                                </TouchableOpacity>
                                
                            </View>
                            <View className='mr-4 flex flex-row items-center gap-3' >
                                {isRenameLoading ? 
                                    (
                                        <ActivityIndicator size="large" color="rgb(68, 239, 68)"/>
                                    ) : (
                                        <TouchableOpacity onPress={handleRename} >
                                            <AntDesign name="checkcircle" size={30} color="rgb(68, 239, 68)" />
                                        </TouchableOpacity>
                                    )
                                }
                                
                                <TouchableOpacity>
                                    <MaterialIcons name="delete" size={35} color="red" />
                                </TouchableOpacity>
                            </View>
                            {/* <Text>{JSON.stringify(editCatogaryObject)}</Text> */}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
            
        </Modal>
        </View>
    )
}