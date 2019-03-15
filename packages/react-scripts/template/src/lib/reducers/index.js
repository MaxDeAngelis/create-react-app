import Immutable from 'immutable';
import { ActionTypes } from '../actions';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['auth']
}

export default persistReducer(rootPersistConfig, function(state = {}, action) {
    switch (action.type) {
        case ActionTypes.SOMETHING:
            state.something = !state.something;
            return Immutable.fromJS(state).toJS();
        default:
            return state
    }
})