export default  (contacts =[],action) => {
switch(action.type){
 case 'FETCH_ALL':
return action.payload;
    case 'CREATE':
return [ action.payload];
default:
    return contacts; 
      






}
}