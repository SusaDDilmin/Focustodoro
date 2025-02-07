import { StatusBar } from "react-native";
import { Slot , useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuth , AuthContextProvider } from '../context/AuthContext'

// your entry point
import { MenuProvider } from 'react-native-popup-menu';
import '../global.css'


const MainLayout = () => {

  const {isAuthenticated} = useAuth();
  const router = useRouter();


  useEffect(() => {
    if(typeof isAuthenticated === 'undefined'){
      return;
    }
    //const inApp = Segments[0] == '(pages)'
    //console.log(Segments);

    if(isAuthenticated){ 
      router.replace('/TasksPage');
    }else if(isAuthenticated == false){ 
      router.replace('/SignIn');
    }
    

  },[isAuthenticated]);

  

  return(
    <Slot/>
  );

}

export default function RootLayout() {
  return (
    <MenuProvider>
      <AuthContextProvider>
        <MainLayout />
        <StatusBar barStyle="dark-content" />
      </AuthContextProvider>
    </MenuProvider>
    
  );
}
