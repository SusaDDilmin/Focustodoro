// To-Do need to add loading for Sing up and Sign in buttons...

import { View, Text , TextInput , Pressable , Alert , TouchableOpacity } from 'react-native'
import React, { useRef , useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';


export default function SignUp() {

    const {register} = useAuth();

    const router = useRouter();

    const emailRef = useRef("");
    const passwordRef = useRef("");
    const userNameRef = useRef("");

    const [showPassword , setShowPassword] = useState(false);

    const handleRegister = async () => { 
        if(emailRef.current === "" || passwordRef.current === "" || userNameRef.current === ""){
                    Alert.alert("Please fill all the fields");
                    return;
                }

        let response = await register(emailRef.current , passwordRef.current , userNameRef.current);

        if(!response.success){
            if(response.error === "Firebase: Error (auth/invalid-email)."){
                Alert.alert("Please enter a valid email address");
                return;
            }
            if(response.error === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                Alert.alert("Password should be at least 6 characters");
                return;
            }
            Alert.alert(response.error);
            //console.log(response.error);
        } 
    }
    

return (
    <View className='flex-1 justify-center items-center bg-white' >
        <View className='justify-center items-center bg-white p-4 rounded-lg w-[300] h-[320] gap-3' >
            <Text className="text-2xl font-bold pb-4" >SignUp</Text>

            <View className='w-full gap-2'>
                <Text className="text-base font-semibold" >User Name :</Text>
                <TextInput
                    onChangeText={(text) => userNameRef.current = text}
                    placeholder="User Name"
                    className="bg-gray-100 rounded-lg p-2 w-full"
                />
            </View>
            <View className='w-full gap-2'>
                <Text className="text-base font-semibold" >Email :</Text>
                <TextInput
                    onChangeText={(text) => emailRef.current = text}
                    placeholder="Email"
                    className="bg-gray-100 rounded-lg p-2 w-full"
                />
            </View>
            <View className='w-full gap-2'>
                <Text className="text-base font-semibold" >Password :</Text>
                <View className='flex-row justify-between items-center gap-2 w-full bg-gray-100 rounded-lg' >
                    <TextInput
                        onChangeText={(text) => passwordRef.current = text}
                        placeholder="Password"
                        className="p-2"
                        secureTextEntry={!showPassword}
                    />
                    <TouchableOpacity onPress={() => {setShowPassword(!showPassword)}} className='px-3' >
                        <Entypo name={showPassword? "eye-with-line" : "eye"} size={18} color="black" />
                    </TouchableOpacity>
                    
                </View>
                
            </View>
            <View className='items-center justify-center gap- w-full mt-2' >
                <Pressable onPress = {handleRegister} className='w-full bg-red-600 p-2 rounded-lg items-center' >
                    <Text className='text-white font-semibold ' >Sign Up</Text>
                </Pressable>
            </View>
            <View className='flex-row items-center justify-center gap-2 mt-1' >
                <Text className='text-sm'>Already have an account? </Text>
                <Pressable onPress = {() => router.replace('/SignIn')} >
                    <Text className='text-sm font-semibold text-red-600' >Go to Sign In</Text>
                </Pressable>
            </View>
        </View>
        
        
    </View>
)
}