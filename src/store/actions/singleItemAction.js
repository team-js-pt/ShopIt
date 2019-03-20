export const singleItemAdd = payload => 
(
  { 
    type: 'SINGLE',
    payload 
  }
);
export const singleItemDelete = () => 
(
  { 
    type: 'DELETE'
  }
);