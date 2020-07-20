const initialState = {
    list:[ 
        {title: '0 nota1', body:'testando'},
        {title: 'Primeira nota1', body:'testando'},
    ]
};

export default (state = initialState, action) => {

    switch(action.type){
        case 'ADD_NOTE' :

        break;
    }

    return state;
}