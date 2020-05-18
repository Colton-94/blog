import React, {useState,useContext}from 'react';
import { StyleSheet} from 'react-native';
import {Context} from '../context/blogContext';
import BlogForm from '../components/BlogForm';

const EditScreen=({navigation})=>{
    const {state,editBlog}=useContext(Context); 

    const id=navigation.getParam('id');

    const blogPost=state.find((blogPost)=>blogPost.id===navigation.getParam('id'));
    console.log(blogPost);
    return  <BlogForm 
      initialValues={ {title:blogPost.title,content:blogPost.content} }
        onSubmit={(title,content)=>{
            editBlog(id,title,content,()=>navigation.pop());
        }}
         />


};

const Styles=StyleSheet.create({});    

export default EditScreen;
