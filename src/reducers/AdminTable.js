const adminTable = (state = [], action) => {
    if(action.type === "SET_ADMIN_REVIEW"){
        console.log('this is our table data', action.payload);
        return action.payload
    }
    return state;
}
export default adminTable;