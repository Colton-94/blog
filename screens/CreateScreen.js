import React, {useState,useContext}from 'react';
import {Text,View, StyleSheet,TextInput, Button} from 'react-native';
import {Context} from '../context/blogContext';
import BlogForm from '../components/BlogForm';




const CreateScreen=({navigation})=>{
    const { addBlog } =useContext(Context);

    return <View>
             <BlogForm onSubmit={(title,content)=>addBlog(title,content,()=>{navigation.navigate('Index')

             })}/>
        </View>
};



const Styles=StyleSheet.create({});

export default CreateScreen;
