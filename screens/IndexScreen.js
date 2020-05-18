import React,{useContext} from 'react';

import {View,Text,StyleSheet,FlatList,Button,TouchableOpacity} from 'react-native';
import {Context} from '../context/blogContext';
import {Feather } from '@expo/vector-icons';


const IndexScreen=({navigation})=>{
    const {state,addBlog,delBlog}=useContext(Context);
    return <View>
        
        <FlatList 
        data={state}
        keyExtractor={(blogPost)=>blogPost.title}
        renderItem={({item})=>{
            return ( <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id })}>
                <View style={styles.row}>
                
                <Text style={styles.title}>{item.title}</Text> 
                <Text style={styles.title}>{item.id}</Text> 
                <TouchableOpacity onPress={()=>delBlog(item.id)}>
                <Feather style={styles.icon} name="trash" />
                
                </TouchableOpacity>
                </View>
                   </TouchableOpacity>)
        }
        }
        />
    </View>;
};

IndexScreen.navigationOptions=({navigation})=>{
    return {
       
        headerRight :()=> <TouchableOpacity onPress={()=>navigation.navigate('Create')} >
            <Feather name="plus" size={30} /> 
            </TouchableOpacity>
    };
};
const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:15

    },
    title:{
        fontSize:19


    },  
    icon:{
        fontSize:24
    }

});

export default IndexScreen;