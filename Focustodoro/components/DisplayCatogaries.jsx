// To-Do : Complete
// To-Do : Add All groups to the selected group


import { View, Text , FlatList , TouchableOpacity , Alert } from 'react-native'
import React , { useState } from 'react'

import EditCatogaryModal from './EditCatogaryModal';

export default function DisplayGroups({catogariesJSON , selectedCatogaryId , setSelectedCatogaryId }) {

  const [ showEditCatogaryModal , setShowEditCatogaryModal ] = useState(false);
  const [ editCatogaryObject , setEditCatogaryObject ] = useState({});

  const handleSelectCatogary = (item) => () => { 
    //console.log(item);
    //Add all groups to the selected group
    setSelectedCatogaryId(item.id);
  }

  return (
    <View>
      <FlatList 
        data={[ { id: 'All' , catogary: 'All' }, ...catogariesJSON]}
        renderItem={({item}) => (
          <View className={`${selectedCatogaryId === item.id ? 'bg-red-500 border-red-500' : 'bg-red-100 border-red-300'} m-4 mx-2 p-2 px-4 rounded-full border border-2`} >
            <TouchableOpacity onPress={handleSelectCatogary(item)} 
              onLongPress={() => {
                if(item.id === 'All') {
                  return;
                }
                setEditCatogaryObject(item);
                setShowEditCatogaryModal(true);
              }} >
              <Text className={`text-base font-semibold ${selectedCatogaryId === item.id ? 'text-white' : 'text-red-400'}`} >
                {item.catogary}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {/* <Text>{JSON.stringify(catogariesJSON)}</Text> */}
      <EditCatogaryModal isVisible={showEditCatogaryModal} setIsVisible={setShowEditCatogaryModal} editCatogaryObject={editCatogaryObject} />
    </View>
  )
}