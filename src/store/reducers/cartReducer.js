// const initState = {
//   cart: [{ name: "apple", price: 50, image: "mango.png", no_of_items: 1 }, { name: "chudi", price: 1500, image: "chudi.jpg", no_of_items: 1 }]
// }

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            name: action.name,
            price: action.price,
            image: action.image,
            no_of_items: action.no_of_items
          }
        ]
      }
    case 'COUNT_OF_CART':
        console.log("count",action.count);
        return {...state,count:action.count}
    case 'ADD_TO_CART_SUCCESS': 
      console.log("Add cart success");
      return state;
    case 'ADD_TO_CART_FAILED': 
      console.log("Add cart failed");
      return state;
    default:
      return state
  }
};

export default cartReducer;