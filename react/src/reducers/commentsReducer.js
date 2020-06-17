import { CHANGE_TEXT_COMMENT, CHANGE_TITLE_COMMENT, COMMENT_CREATED_SUCCESS, RESET_CREATED_SUCCESS } from '../actions/comments';

export const initialState = {
    form: {
        title: '',
        comment: '',
    },
    createSuccess: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_TEXT_COMMENT:
            return {
                ...state,
                form: {
                    ...state.form,
                    comment: action.payload,
                }

            };
            case CHANGE_TITLE_COMMENT:
                return {
                    ...state,
                    form: {
                        ...state.form,
                        title: action.payload,
                    }
                };
            case COMMENT_CREATED_SUCCESS:
                return {
                    ...state,
                    createSuccess: action.payload
    
                };
            case RESET_CREATED_SUCCESS:
                return {
                    ...state,
                    createSuccess: false
    
                };
            default:
                return state;
    }
}