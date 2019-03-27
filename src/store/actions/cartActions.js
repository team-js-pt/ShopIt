
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
export const incrementItem = (userid,productName)=>{
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    firestore.collection('users').doc(userid).collection('cart').get().then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.data().productName===productName){
          firestore.collection('users').doc(userid).collection('cart').doc(doc.id).update({
            noOfItems : doc.data().noOfItems+1
          }).then(()=>console.log("incremented")).catch((err)=>console.log("error is",err))
        }
         
      });
  })
}}
export const decrementItem = (userid,productName)=>{
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    firestore.collection('users').doc(userid).collection('cart').get().then(snapshot => {
      snapshot.forEach(doc => {
        if(doc.data().productName===productName){
          firestore.collection('users').doc(userid).collection('cart').doc(doc.id).update({
            noOfItems : doc.data().noOfItems-1
          }).then(()=>console.log("decremented")).catch((err)=>console.log("error is",err))
        }
        if(doc.data().noOfItems===1 && doc.data().productName===productName){
            firestore.collection('users').doc(userid).collection('cart').doc(doc.id).delete().then(()=>console.log("document deleted")).catch(
              (err)=>console.log("error occured",err)
            )
        }
         
      });
  })
}}
export const clearCart = (userid)=>{
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    firestore.collection('users').doc(userid).collection('cart').get().then(snapshot => {
      snapshot.forEach(doc => {
             firestore.collection('users').doc(userid).collection('cart').doc(doc.id).delete().then(()=>console.log("document deleted")).catch(
               (err)=>console.log("error occured",err))         
      });
  })
}
}
export const countCart=(count)=>{
  console.log(count);
  return {
    type:'COUNT_OF_CART',
    count
  }
}
export const placeOrder =(cart,price,userid)=>{
  return async(dispatch,getState,{getFirestore})=>{
    const firestore = getFirestore();
    let orderid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    await firestore.collection('users').doc(userid).collection('orders').doc(orderid).set({
      price:price,
      date: new Date(),
      orderid: orderid
    }).then(()=>{
        cart.map(async(item)=>{
      await firestore.collection('users').doc(userid).collection('orders').doc(orderid).collection('items').add({
        productName : item.productName,
        price : item.price,
        noOfItems : item.noOfItems,
        url:item.url,
      })
    })
    })

  
    
  }
}