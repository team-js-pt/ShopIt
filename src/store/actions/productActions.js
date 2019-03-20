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