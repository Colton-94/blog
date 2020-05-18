import React,{useContext} from 'react';
import {Text, View,StyleSheet,TouchableOpacity} from 'react-native';
import { Context } from '../context/blogContext';
import { Entypo } from '@expo/vector-icons'; 

const ShowScreen=({navigation})=>{
    const {state}=useContext(Context);
    
    const blogPost=state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    console.log(blogPost);
    return <View>
        <Text>{blogPost.title}</Text>
    </View>;
};

ShowScreen.navigationOptions=({navigation})=>{
    const id=navigation.getParam('id');
    return {
       
        headerRight :()=> <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id})} >
            <Entypo name="edit" size={24} color="black" />
            </TouchableOpacity>
    };
};



const styles=StyleSheet.create({});

export default ShowScreen;