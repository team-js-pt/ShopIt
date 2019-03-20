const initState = {
  items:[{pic:'veglogo.png',name:'Vegetables'},{pic:'footlogo.jpeg',name:'Footwear'},{pic:'sportslogo.jpeg',name:'Sports'},{pic:'mobilelogo.jpeg',name:'Mobiles'},{pic:'beautylogo.jpeg',name:'Beauty'},{pic:'appliancelogo.jpeg',name:'Appliance'}],
  singleItem:''
}
const uiReducer = (state = initState, action) => {
  switch(action.type){
    case 'SINGLE':
      return {...state,singleItem:action.payload.selected}
    case 'DELETE':
      return {...state,singleItem:''}
    default:
      return state
  }
};
export default uiReducer;

