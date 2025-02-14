import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native-web';

export default function TabLayout() {
return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor: 'rgb(239, 68, 68)',
            tabBarInactiveTintColor: 'rgba(239, 68, 68, 0.65)',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopColor: 'black',
                borderTopWidth: 1,
                height: 70,
                justifyContent: 'center', 
                alignItems: 'center',     
                paddingTop: 10,       
            },
                tabBarItemStyle: {
                flex: 1,                 // Allows items to take full height
                justifyContent: 'center', // Centers items vertically
                alignItems: 'center',     // Centers items horizontally
            },
        }}
    >
        <Tabs.Screen 
            name="TasksPage" 
            options={{ 
                headerShown: false , 
                title:'Tasks' ,
                tabBarIcon:({color , focused }) => (
                <MaterialCommunityIcons 
                        name= {focused ? "view-list" : "view-list-outline"}
                        size={32} 
                        color={color} />
            )
            }} 
        />
        <Tabs.Screen 
            name="CalenderPage" 
            options={{ 
                headerShown: false , 
                title:'Calender' ,
                tabBarIcon:({color , focused }) => (
                <Ionicons 
                        name= {focused ? "calendar-number" : "calendar-number-outline"}
                        size={24} 
                        color={color} />
            )
            }} 
        />
        <Tabs.Screen 
            name="Profile" 
            options={{ 
                headerShown: false , 
                title:'Profile' ,
                tabBarIcon:({color , focused }) => (
                <Ionicons 
                        name= {focused ? "person-circle" : "person-circle-outline"}
                        size={24} 
                        color={color} />
            )
            }} 
        />
    </Tabs>
);
}
// <Ionicons name="calendar-number" size={24} color="black" />