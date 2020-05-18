
import createDataContext from './createDataContext';

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'edit_blog':
           
            return state.map(blogPost=>{
                return  blogPost.id===action.payload.id ? action.payload : blogPost ;
            });
        case 'del_blog':
            return state.filter(blogPost=>blogPost.id!==action.payload);
        case 'add_blog':
            return [
                ...state,
                {   
                    id:Math.floor(Math.random()*9999),
                    title : action.payload.title,
                    content : action.payload.content
                }
            ];
        default :
        return state;
    }

}   
const addBlog=(dispatch)=>{
    return (title,content,callback)=>{
                dispatch({type:'add_blog',payload:{title,content} });
                callback();
                };
 };

 const delBlog=(dispatch)=>{
     return(id)=>{
         dispatch({type:'del_blog',payload:id})
     };
    
 };

 const editBlog=(dispatch)=>{
     return (id,title,content,callback)=>{
         dispatch({
             type:'edit_blog',
             payload: {id,title,content}
        });
        if(callback){
        callback();
        }
     };

 };


export const {Context,Provider}=createDataContext(blogReducer,{addBlog,delBlog,editBlog},[]);

