export const AddCart = (payload)=>(
    {
        type:"ADD_CART",
        name:payload.name,
        price:payload.price,
        image:payload.image,
        no_of_items:payload.no_of_items
       
  } )
  
  export const EditCart = (payload)=>({
    type:"EDIT_CART",
    name:payload.name,
    price:payload.price,
    image:payload.image,
    no_of_items:payload.no_of_items
  })

  export const ItemIncrement = (type,index)=>({
      type:type,
      id:index
  })

  export const ItemDecrement = (type,index)=>({
    type:type,
    id:index
})
  