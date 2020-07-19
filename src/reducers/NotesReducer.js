const initialState = {
    list:[
        {title: 'Primeira nota', body:'testando'}
    ]
};

export default (state = initialState, action) => {

    switch(action.type){
        case 'ADD_NOTE' :

        break;
    }


    return state;
}