const initState = {
  items:[{pic:'veglogo.png',name:'Vegetables'},{pic:'footlogo.jpeg',name:'Footwear'},{pic:'sportslogo.jpeg',name:'Sports'},{pic:'mobilelogo.jpeg',name:'Mobiles'},{pic:'beautylogo.jpeg',name:'Beauty'},{pic:'appliancelogo.jpeg',name:'Appliance'}],
  vegetables:[{name:'carrot',img:'carrot.jpeg',price:'Rs.36',offer:'2%',Description:'this is a vegetable',title:'Vegetables'},{name:'onion',img:'onions.jpeg',price:'Rs.20',offer:'5%',Description:'this is a vegetable',title:'Vegetables'},{name:'capsicum',img:'capsicum.jpeg',price:'Rs.25',offer:'10%',Description:'this is a vegetable',title:'Vegetables'},{name:'cucumber',img:'cucumber.jpeg',price:'Rs.50',offer:'7%',Description:'this is a vegetable',title:'Vegetables'},{name:'flower',img:'flower.jpeg',price:'Rs.10',offer:'6%',Description:'this is a vegetable',title:'Vegetables'}],
  Appliances:[{name:'grinder',img:'grinder.jpeg',price:'Rs.1000',offer:'2%',Description:'this is a Appliance',title:'Appliance'},{name:'washing machine',img:'washing.jpeg',price:'Rs.15000',offer:'2%',Description:'this is a Appliance',title:'Appliance'},{name:'fridge',img:'fridge.jpeg',price:'Rs.30000',offer:'2%',Description:'this is a Appliance',title:'Appliance'},{name:'mixy',img:'mixy.jpeg',price:'Rs.700',offer:'2%',Description:'this is a Appliance',title:'Appliance'},{name:'cooker',img:'cooker.jpeg',price:'Rs.2999',offer:'2%',Description:'this is a Appliance',title:'Appliance'}],
  sandals:[{name:'women sandals',img:'women.jpeg',price:'Rs.220',offer:'2%',Description:'these are sandals',title:'Footwear'},{name:'men cheppals',img:'men.jpeg',price:'Rs.200',offer:'2%',Description:'these are sandals',title:'Footwear'},{name:'high heel',img:'high.jpeg',price:'Rs.500',offer:'2%',Description:'these are sandals',title:'Footwear'},{name:'normal',img:'normal.jpeg',price:'Rs.150',offer:'2%',Description:'these are sandals',title:'Footwear'},{name:'thread',img:'thread.jpeg',price:'Rs.350',offer:'2%',Description:'these are sandals',title:'Footwear'}],
  sports:[{name:'bat',img:'cricket.jpeg',price:'Rs.2000',offer:'2%',Description:'this is sports kit',title:'Sports'},{name:'hockey stick',img:'hockey.jpeg',price:'Rs.5000',offer:'2%',Description:'this is sports kit',title:'Sports'},{name:'rugby',img:'rugby.jpeg',price:'Rs.3000',offer:'2%',Description:'this is sports kit',title:'Sports'},{name:'football',img:'football.jpeg',price:'Rs.1000',offer:'2%',Description:'this is sports kit',title:'Sports'},{name:'throwball',img:'throw.jpeg',price:'Rs.999',offer:'2%',Description:'this is sports kit',title:'Sports'}],
  beauty:[{name:'linear',img:'liner.jpeg',price:'Rs.499',offer:'2%',Description:'this is beauty product',title:'Beauty'},{name:'nail paint',img:'nail.jpeg',price:'Rs.199',offer:'2%',Description:'this is beauty product',title:'Beauty'},{name:'perfume',img:'perfume.jpeg',price:'Rs.299',offer:'2%',Description:'this is beauty product',title:'Beauty'},{name:'makeup kit',img:'kit.jpeg',price:'Rs.2000',offer:'2%',Description:'this is beauty product',title:'Beauty'},{name:'watch',img:'watch.jpeg',price:'Rs.599',offer:'2%',Description:'this is beauty product',title:'Beauty'}],
  mobiles:[{name:'asus',img:'asus.jpeg',price:'Rs.4999',offer:'2%',Description:'this is mobile',title:'Mobiles'},{name:'samsung',img:'samsung.jpeg',price:'Rs.5999',offer:'2%',Description:'this is mobile',title:'Mobiles'},{name:'iphone',img:'iphone.jpeg',price:'Rs.99999',offer:'2%',Description:'this is mobile',title:'Mobiles'},{name:'micromax',img:'micromax.jpeg',price:'Rs.5000',offer:'2%',Description:'this is a mobile',title:'Mobiles'},{name:'redmi',img:'redmi.jpeg',price:'Rs.5999',offer:'2%',Description:'this is a mobile',title:'Mobiles'}],
  singleItem:''
}
const uiReducer = (state = initState, action) => {
  switch(action.type){
    case 'SINGLE':
      return Object.assign({},state,[state.singleItem=action.payload.selected])
    case 'DELETE':
      return Object.assign({},state,[state.singleItem=''])
    default:
      return state
  }
};
export default uiReducer;

