import { type } from '../action';
import * as $ from 'jquery'

const ebikeData = (state, action) => {
    console.log(action)
    //console.log($('.alert').is(':transitioned'))
    switch (action.type) {
        case type.TOGGLE_ALERT:
            return {
                ...state,
                alert: {
                    status: action.status,
                    text: action.text ? action.text : state.alert.text,
                    category: action.category ? action.category : state.alert.category,
                    canChange: 0
                }
            };
        case type.CHANGE_ALERT:
            return {
                ...state,
                alert: {
                    canChange: action.canChange
                }
            };

        case type.CHANGE_HEADER:
            console.log('ffffff')
            console.log(action.show)
            return {
                ...state,
                showHeader: action.show
        };    

        case type.CHANGE_PROFILE:
            console.log('profile');
            return {
                ...state,
                showProfile: !state.showProfile
        };  
        
        case type.CHANGE_TOP:
            const scrollProps = {...state.scrollProp, [action.data.routeName]: action.data.scrollTop}
            return {
                ...state, scrollProps
            }
        default:
            return {...state};
    }
};

export default ebikeData;