export const addProduct = (product) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection(product.category).add({
      ...product,
      addedOn: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_PRODUCT_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_PRODUCT_ERROR' }, err);
    });
  }
};
export const AddCart = (payload)=>{
    return (dispatch,getState,{getFirestore}) =>{
      const firestore = getFirestore();
      firestore.collection(users).add({
        ...payload,
        addedOn : new Date()
      }).then(()=>{
        dispatch({type:"ADD_CART_SUCCESS"})
      }).catch(err=>{
        dispatch({type: "ADD_CART_FAILED"})
      })
    }
}
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
  