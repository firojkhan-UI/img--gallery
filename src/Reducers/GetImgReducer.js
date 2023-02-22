const initialData = {
    getImg: {},
}

const imageReducer = ( state = initialData, action ) => {
    // console.log(action,'redcuer:::::')
    switch (action.type) {
        case "IMGTYPE": {
            return {...state, images: action.payload };
        }
        default: return state;
    }
}
export default imageReducer;