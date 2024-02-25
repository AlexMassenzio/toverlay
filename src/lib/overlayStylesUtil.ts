import { OVERLAY_STYLES, type OverlayStyles } from "./types/overlayStles"

export const convertToOverlayStyle = (possibleOverlayStyle: string): OverlayStyles => {
    let overlayStyle: OverlayStyles = OVERLAY_STYLES.DEFUALT;
    Object.values(OVERLAY_STYLES).forEach(value => {
        if (possibleOverlayStyle == value) {
            overlayStyle = value;
        }
    })
    return overlayStyle
}