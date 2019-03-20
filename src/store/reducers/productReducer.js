const initState = {}

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_SUCCESS':
      console.log('add product success');
      return state;
    case 'ADD_PRODUCT_ERROR':
      console.log('add product error');
      return state;
    default:
      return state;
  }
};

export default productReducer;