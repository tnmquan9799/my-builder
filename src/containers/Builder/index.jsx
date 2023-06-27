import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import cloneObject from "../../helpers/logic/cloneObject";
import renderElement from "../../helpers/logic/renderElement";
import { TEMPLATE_DISPLAY_STYLE, ELEMENT_WRAPPER_STYLE, SLOT_STYLE } from "../../helpers/data/styles";
import { ELEMENT_TYPE, FONT_WEIGHT_OPTIONS, ALIGN_OPTIONS } from "../../helpers/data/templates";

import Input from "../../components/common/Input";
import TextArea from "../../components/common/TextArea";
import RangeSlider from "../../components/common/RangeSlider";
import ColorPicker from "../../components/common/ColorPicker";
import RadioButton from "../../components/common/RadioButton";

import styles from "./index.module.css";

const Builder = () => {
    const selectedTemplate = useSelector((state) => state?.commonReducer?.selectedTemplate);

    const [template, setTemplate] = useState({...selectedTemplate});
    const [selectedElement, setSelectedElement] = useState({});

    const handleSelectTemplate = (e) => {
        e.stopPropagation();
        setSelectedElement();
    }

    const handleSelectElement = (e, slotId,  element) => {
        e.stopPropagation();
        setSelectedElement({slotId, element});
    }

    const handleChangeTemplateProps = useCallback((type, value) => {
        const tempTemplate = cloneObject(template);

        tempTemplate.props[type] = value;

        setTemplate(tempTemplate);
    }, [template]);

    const handleChangeElementProps = useCallback((type, value) => {
        const tempTemplate = cloneObject(template);

        const slotToChange = tempTemplate?.slots?.find((slot) => slot?.id === selectedElement?.slotId);

        const elementToChange = slotToChange?.elements?.find((element) => element?.id === selectedElement?.element?.id);

        elementToChange.props[type] = value;

        const tempElements = tempTemplate?.slots?.map(slot => slotToChange?.id !== slot?.id ? {...slot} : {...slot, elements: slot?.elements?.map((element => elementToChange?.id !== element?.id ? {...element} : {...elementToChange}))})
            
        setTemplate({...tempTemplate, elements: tempElements});
    }, [selectedElement, template]);

    const renderSetting = useCallback(() => {
        if (!selectedElement?.slotId) {
            return (
                <>
                    <ColorPicker key="templateBackgroundColor" title="Background color" color={template?.props?.backgroundColor} onChange={(color) => handleChangeTemplateProps("backgroundColor", color)} />
                    <RangeSlider key="templateContentWidth" title="Content width" value={template?.props?.contentWidth} onChange={(value) => handleChangeTemplateProps("contentWidth", value)} />
                </>
            )
        } else {
            const { type, props, id } = selectedElement?.element;

            switch (type) {
                case ELEMENT_TYPE.IMAGE:
                    return (
                        <>
                            <Input key={`${type}-${id}-contentWidth`} type="number" title="Width" value={props?.contentWidth} onChange={(value) => handleChangeElementProps("contentWidth", value)} />
                            <Input key={`${type}-${id}-contentHeight`} type="number" title="Height" value={props?.contentHeight} onChange={(value) => handleChangeElementProps("contentHeight", value)} />
                        </>
                    )
                case ELEMENT_TYPE.HEADER:
                    return (
                        <>
                            <ColorPicker key={`${type}-${id}-color`} title="Color" color={props?.color} onChange={(color) => handleChangeElementProps("color", color)} />
                            <Input key={`${type}-${id}-fontSize`} type="number" title="Font size" value={props?.fontSize} onChange={(value) => handleChangeElementProps("fontSize", value)}  />
                            <RadioButton key={`${type}-${id}-fontWeight`} options={FONT_WEIGHT_OPTIONS} title="Font weight" value={props?.fontWeight} onChange={(value) => handleChangeElementProps("fontWeight", value)} />
                            <Input key={`${type}-${id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps("content", value)}  />
                        </>
                    )
                case ELEMENT_TYPE.PARAGRAPH:
                    return (
                        <>
                            <ColorPicker key={`${type}-${id}-color`} title="Color" color={props?.color} onChange={(color) => handleChangeElementProps("color", color)} />
                            <Input key={`${type}-${id}-fontSize`} type="number" title="Font size" value={props?.fontSize} onChange={(value) => handleChangeElementProps("fontSize", value)}  />
                            <RadioButton key={`${type}-${id}-fontWeight`} options={FONT_WEIGHT_OPTIONS} title="Font weight" value={props?.fontWeight} onChange={(value) => handleChangeElementProps("fontWeight", value)} />
                            <TextArea key={`${type}-${id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps("content", value)}  />
                            <RadioButton key={`${type}-${id}-align`} options={ALIGN_OPTIONS} title="Align" value={props?.align} onChange={(value) => handleChangeElementProps("align", value)} />
                        </>
                    )
                case ELEMENT_TYPE.BUTTON: 
                    return (
                        <>
                            <ColorPicker key={`${type}-${id}-color`} title="Color" color={props?.color} onChange={(color) => handleChangeElementProps("color", color)} />
                            <ColorPicker key={`${type}-${id}-backgroundColor`} title="Background color" color={props?.backgroundColor} onChange={(color) => handleChangeElementProps("backgroundColor", color)} />
                            <ColorPicker key={`${type}-${id}-borderColor`} title="Background color" color={props?.borderColor} onChange={(color) => handleChangeElementProps("borderColor", color)} />
                            <RangeSlider key={`${type}-${id}-borderRadius`} title="Border radius" value={props?.borderRadius} onChange={(value) => handleChangeElementProps("borderRadius", value)} />
                            <Input key={`${type}-${id}-paddingX`} type="number" title="Padding X" value={props?.paddingX} onChange={(value) => handleChangeElementProps("paddingX", value)}  />
                            <Input key={`${type}-${id}-fontSize`} type="number" title="Font size" value={props?.fontSize} onChange={(value) => handleChangeElementProps("fontSize", value)}  />
                            <Input key={`${type}-${id}-paddingY`} type="number" title="Padding Y" value={props?.paddingY} onChange={(value) => handleChangeElementProps("paddingY", value)}  />
                            <RadioButton key={`${type}-${id}-fontWeight`} options={FONT_WEIGHT_OPTIONS} title="Font weight" value={props?.fontWeight} onChange={(value) => handleChangeElementProps("fontWeight", value)} />
                            <Input key={`${type}-${id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps("content", value)}  />
                        </>
                    )
                default:
                    return <div>undefined setting</div>
            }
        }
    }, [selectedElement, template, handleChangeTemplateProps, handleChangeElementProps])

    return (
        <div className={styles.builderWrapper}>
            <section className={styles.templatePanel}>
                <div id="templateDisplay" style={{ ...TEMPLATE_DISPLAY_STYLE , backgroundColor: template?.props?.backgroundColor, width: template?.props?.contentWidth === "100" ? "auto" : `${template?.props?.contentWidth}%`}} onClick={(e) => handleSelectTemplate(e)}>
                    {template?.slots?.map(slot => (
                        <div key={slot?.id} style={{ ...SLOT_STYLE, ...slot?.styles }}>
                            {slot?.elements?.map(element => (
                                <div key={element?.id} style={{...ELEMENT_WRAPPER_STYLE}} className={selectedElement?.element?.id === element?.id ? styles.selectedElement : styles.elementWrapper} onClick={(e) => handleSelectElement(e, slot?.id, element)}>
                                    {renderElement(element)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.settingPanel}>
                <div className={styles.settingHeader}>
                    {selectedElement?.element?.type || "Template"} settings
                </div>
                <div className={styles.settingProps}>
                    {renderSetting()}
                </div>
            </section>
        </div>
    )
};

export default Builder;