import { ELEMENT_TYPE } from "../data/templates";

import imagePlaceholder from "../../assets/images/image-placeholder.png";

const renderElement = (item) => {
    const { props } = item;

    switch (item?.type) {
        case ELEMENT_TYPE.IMAGE:
            return <img src={imagePlaceholder} alt="placeholder" style={{width: `${props?.contentWidth}px`, height: `${props?.contentHeight}px`}} />
        case ELEMENT_TYPE.HEADER:
            return <h1 style={{color: props?.color, fontSize: `${props?.fontSize}px`, fontWeight: props?.fontWeight, textAlign: "center"}}>{props?.content}</h1>
        case ELEMENT_TYPE.PARAGRAPH:
            return <p style={{color: props?.color, fontSize: `${props?.fontSize}px`, fontWeight: props?.fontWeight, textAlign: props?.align, width: "100%"}}>{props?.content}</p>
        case ELEMENT_TYPE.BUTTON:
            return <button style={{color: props?.color, backgroundColor: props?.backgroundColor, border: "1px solid #000000", borderColor: props?.borderColor, borderRadius: `${props?.borderRadius}%`, padding: `${props?.paddingY}px ${props?.paddingX}px`, fontSize: `${props?.fontSize}px`, fontWeight: props?.fontWeight}}>{props?.content}</button>
        default:
            return <div>undefined element</div>
    }
}

export default renderElement;