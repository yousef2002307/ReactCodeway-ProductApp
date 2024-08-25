import {v4 as uuid} from 'uuid'
import {IProduct} from '../Interface'
import { IUserdata } from '../Interface';
import { IFormdata } from '../Interface';
export const productlist : IProduct[] = [
    {
        id : uuid(),
        title : "title 1",
        description : "lorem ipuam hi man hashdjka adklasdsdalk  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ofde Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.. comes from a line in section 1.10.32.",
        imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    
        price : "555",
        colors : ["red","green","blue"],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id : uuid(),
        title : "title 2",
        description : "lorem ipuam hi man hashdjka adklasdsdalk2222222222",
        imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    
        price : "100",
        colors : ["yellow","green","blue"],
        catagory : {
            name : "cat 1",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
    {
        id : uuid(),
        title : "title 3",
        description : "33 lorem ipuam hi man hashdjka adklasdsdalk",
        imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    
        price : "37963",
        colors : ["red","green","gray"],
        catagory : {
            name : "cat 2",
            imageUrl : "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
        }
    },
]

export const formdata : IFormdata=[
    {
       label:"title",
       name:"title",
       type:"text",
       placeholder:"Enter your title",
       id:"name",

    },
    {
        label:"desc",
       name:"desc",
       type:"desc",
       placeholder:"Enter your desc",
       id:"email",
    },
    {
        label:"url",
       name:"url",
       type:"text",
       placeholder:"Enter your url",
       id:"url",
    },
    {
        label:"price",
       name:"price",
       type:"price",
       placeholder:"Enter your price",
       id:"price",
    }
]