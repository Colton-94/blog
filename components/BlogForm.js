import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';


const BlogForm=({onSubmit,initialValues})=>{
    const [title,setTitle]=useState(initialValues.title);
    const [content, setContent]=useState(initialValues.content);
  return  <View style={Styles.view}>
        <Text style={Styles.text}>Enter Title</Text>
          <TextInput style={Styles.input}
          value={title}
         onChangeText={text=>setTitle(text)}/>
         <Text style={Styles.text}>Enter Content</Text>
            <TextInput value={content}  
            onChangeText={text=>setContent(text)}
             style={Styles.input}/>
       <Button title="Save Blog" onPress={()=>onSubmit(title,content)} />
    </View>;
};
BlogForm.defaultProps={
    initialValues:{
        title: '',
        content:''
    }
}

const Styles=StyleSheet.create({
    input:{
        backgroundColor:'grey',
        fontSize:19,
        borderRadius:5,
        
    },
    view:{
        margin:10
    },
    text:{
        margin:5
    }
});    
export default BlogForm;