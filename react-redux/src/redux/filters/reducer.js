import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initalState from "./initialState";

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payload,
            }
        case COLORCHANGED:
            const { color, changeType } = action.type;
            switch (changeType) {
                case 'added':
                    return {
                        ...state,
                        colors: [...state.colors, color],
                    };
                case 'remove':
                    return {
                        ...state,
                        colors: state.colors.filter(
                            (exiistingColor) => exiistingColor !== color
                        )
                    }
                default:
                    return state;
            }

        default:
            return state;
    }
}
export default reducer;
