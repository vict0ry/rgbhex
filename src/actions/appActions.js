export const CHANGED_CHANNEL_VALUE = 'CHANGED_CHANNEL_VALUE';
export const SWITCHED_CHANNEL = 'SWITCHED_CHANNEL';
export const REFRESH_HEX = 'REFRESH_HEX';
export const CHANGED_HEX_VALUE = 'CHANGED_HEX_VALUE';
export const REFRESH_RGB = 'REFRESH_RGB';

export function changedChannelValue(channelValue) {
    return {
        type: CHANGED_CHANNEL_VALUE,
        payload: {
            channelValue
        }
    }
}

export function canalChanged(canalName) {
    return {
        type: SWITCHED_CHANNEL,
        payload: {
            canalName
        }
    }
}

export function refreshHex() {
    return {
        type: REFRESH_HEX,
    }
}

export function hexChanged(hexValue) {
    return {
        type: CHANGED_HEX_VALUE,
        payload: {
            hexValue
        }
    }
}

export function refreshRGB(hexValue) {
    return {
        type: REFRESH_RGB,
        payload: {
            hexValue
        }
    }
}
