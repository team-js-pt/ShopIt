const initState = {
    cart:[{name:"apple",price:50,image:"mango.png",no_of_items:1},{name:"chudi",price:1500,image:"chudi.jpg",no_of_items:1}]
}

const cartReducer = (state= initState , action)=>{
    switch(action.type){
        case 'ADD_CART':
        return {
            ...state,
            cart:[
              ...state.cart,
              {
                name:action.name,
                price:action.price,
                image:action.image,
                no_of_items:action.no_of_items
              }
            ]
        }
      case "EDIT_CART":
          return {
            ...state,
            cart:
            state.cart.map((item,index)=>{
              if(item.name===action.name && item.price === action.price)
              {
                  
                 item.no_of_items=item.no_of_items+1;
                  return item
              }
              else {
                return item
                
              }
            }),
          }
      case 'INCREMENT':
       return {
         ...state,
         cart:state.cart.map((item,index)=>{
           if(index === action.id){
            item.no_of_items=item.no_of_items+1
            return item
           }
           else {
             return item;
           }
         })
       }
       case 'DECREMENT':
        return {
          ...state,
          cart: state.cart.map((item,index)=>{
            if(index === action.id)
            {  
              item.no_of_items=item.no_of_items-1
              return item;     
            }
            else {
              return item;
            }
          })
        }
        case 'REMOVE_ITEM':
         return {
           ...state,
           cart:state.cart.filter((item,index)=>{
              if(index!==action.id)
              {
                return item
              }
           })
         }
      default:
        return state
    }
  };
 
export default cartReducer;