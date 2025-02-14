import { View, Text } from 'react-native'
import React , { useEffect , useState } from 'react'

import { useAuth } from '../../context/AuthContext';
import { collection , query , onSnapshot , orderBy }from "firebase/firestore"; 

import { db } from '../../firebaseConfig';

import DisplayCatogaries from '../../components/DisplayCatogaries';



import AddButtonComponent from '../../components/AddButtonComponent';
import LoadingPage from '../../components/LoadingPage';


export default function TaskPage() {

  const { user } = useAuth();
  const userId = user?.userId;

  const [ catogariesJSON , setCatogariesJSON ] = useState([]);
  const [ fetching , setFetching ] = useState(true);

  const [ selectedCatogaryId , setSelectedCatogaryId ] = useState('All');

  useEffect(() => {
    //Implement the functionality
    if(!userId) return;
    setFetching(true);
    const catogaryRef = collection(db , 'users' , userId , 'Catogaries');
    const q = query(catogaryRef ,orderBy('createdAt','asc'));

    let unsubscribe = onSnapshot(q , (querySnapshot) => {
      const allGroupsJSON = querySnapshot.docs.map( doc => {return({id: doc.id , ...doc.data()})});
      setCatogariesJSON(allGroupsJSON);
    });
    
    setFetching(false);

    return unsubscribe;

  },[userId]);

  return (
    <View className="flex flex-1 bg-white" >
      {fetching? (
        <LoadingPage>Fetching...</LoadingPage>
      ):(
        <View className="flex flex-1 bg-white" >
          <DisplayCatogaries catogariesJSON={catogariesJSON} selectedCatogaryId={selectedCatogaryId} setSelectedCatogaryId={setSelectedCatogaryId} />
          <AddButtonComponent />
        </View>
      )}
    </View>
  )
} 