
export const addToCart = (payload,userid) =>{
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    let isAlreadyExits = false;
     await firestore.collection('users').doc(userid).collection('cart').get().then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.data().productName===payload.productName){
          isAlreadyExits = true;
          firestore.collection('users').doc(userid).collection('cart').doc(doc.id).update({
            noOfItems : doc.data().noOfItems+1
          }).then(()=>console.log("Document Updated"))
        }    
      });
  })
  if(!isAlreadyExits) {
    firestore.collection('users').doc(userid).collection('cart').add({
      productName : payload.productName,
      price : payload.price,
      noOfItems : 1,
      url:payload.url,
      addedOn: new Date()
    }).then(() => {
      dispatch({ type: 'ADD_TO_CART_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'ADD_TO_CART_ERROR' }, err);
    });
  }
}}
export const showCart = (userid)=>{
  console.log("in action")
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    let cartItems = []
    console.log("from return")
     await firestore.collection('users').doc(userid).collection('cart').get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log("doc",doc.data());
        cartItems.push(doc.data())
      }).then(()=>{
        dispatch({type:'SHOW_CART',cartItems})
      }).catch(err=>{
        dispatch({type:"SHOW_CART_ERROR",err})
      })
      
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
  