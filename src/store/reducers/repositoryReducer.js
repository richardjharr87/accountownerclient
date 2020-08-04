import * as actionTypes from '../actions/actionTypes';

const initialState = {
    data: null,
    showSuccessModal: false,
    ownersLoading: false
}

const executeGetDataSuccess = (state, action) => {
    return {
        ...state,
        data: action.data,
        ownersLoading: false
    }
}

const executePostDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executePutDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executeDeleteDataSuccess = (state, action) => {
    return {
        ...state,
        showSuccessModal: true
    }
}

const executeCloseSuccessModal = (state, action) => {
    action.props.history.push(action.url);
    return {
        ...state,
        showSuccessModal: false
    }
}

const executeOwnersLoading = (state, action) => {
    return {
        ...state,
        ownersLoading: true
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_SUCCESS:
            return executeGetDataSuccess(state, action);
        case actionTypes.POST_DATA_SUCCESS:
            return executePostDataSuccess(state, action);
        case actionTypes.PUT_DATA_SUCCESS:
            return executePutDataSuccess(state, action);
        case actionTypes.DELETE_DATA_SUCCESS:
            return executeDeleteDataSuccess(state, action);
        case actionTypes.CLOSE_SUCCESS_MODAL:
            return executeCloseSuccessModal(state, action);
        case actionTypes.OWNERS_LOADING:
            return executeOwnersLoading(state, action);
        default:
            return state;
    }
}

export default reducer;