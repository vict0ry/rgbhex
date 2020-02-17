import {hexToRGB, rgbToHex} from "../helpers";
import {
    CHANGED_CHANNEL_VALUE,
    CHANGED_HEX_VALUE,
    REFRESH_HEX,
    REFRESH_RGB,
    SWITCHED_CHANNEL
} from "../actions/appActions";

const initState = {
    hexValue: '#741435',
    selectedChannel: 'R',
    rgbValue: {
        R: 116,
        G: 20,
        B: 53
    }
};
export default function colorReducer(state = initState, action) {
    switch (action.type) {
        case REFRESH_HEX:
            return {
                ...state,
                hexValue: rgbToHex(state.rgbValue.R, state.rgbValue.G, state.rgbValue.B)
            };
        case CHANGED_HEX_VALUE:
            return {
                ...state,
                hexValue: action.payload.hexValue
            };
        case REFRESH_RGB:
            return {
                ...state,
                rgbValue: hexToRGB(action.payload.hexValue)
            };
        case SWITCHED_CHANNEL:
            return {
                ...state,
                selectedChannel: action.payload.canalName
            };
        case CHANGED_CHANNEL_VALUE:
            const clonedObject = (key) => {
                switch (key) {
                    case 'R':
                        return {
                            ...state,
                            rgbValue: {
                                ...state.rgbValue,
                                R: action.payload.channelValue
                            },
                        };
                    case 'G':
                        return {
                            ...state,
                            rgbValue: {
                                ...state.rgbValue,
                                G: action.payload.channelValue
                            },
                        };
                    default:
                        return {
                            ...state,
                            rgbValue: {
                                ...state.rgbValue,
                                B: action.payload.channelValue
                            },
                        }
                }
            };
            return {
                ...state,
                ...clonedObject(state.selectedChannel),
            };
        default:
            return state;
    }
}
