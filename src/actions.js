export function saveData(dispatch,newData){
    dispatch({
        type:"ADD_DATA",
        payload:newData
    })
}