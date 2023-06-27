import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import cloneObject from '../../helpers/logic/cloneObject';
import { TEMPLATE_DISPLAY_STYLE, ELEMENT_WRAPPER_STYLE } from '../../helpers/data/styles';
import { ELEMENT_TYPE, FONT_WEIGHT_OPTIONS, ALIGN_OPTIONS } from '../../helpers/data/templates';

import Input from '../../components/common/Input';
import TextArea from '../../components/common/TextArea';
import RangeSlider from '../../components/common/RangeSlider';
import ColorPicker from '../../components/common/ColorPicker';
import RadioButton from '../../components/common/RadioButton';

import imagePlaceholder from '../../assets/images/image-placeholder.png';

import styles from './index.module.css';

const Builder = () => {
    const selectedTemplate = useSelector((state) => state?.commonReducer?.selectedTemplate);

    const [template, setTemplate] = useState({...selectedTemplate});
    const [selectedElement, setSelectedElement] = useState({});

    const handleSelectTemplate = (e) => {
        e.stopPropagation();
        setSelectedElement();
    }

    const handleSelectElement = (e, item) => {
        e.stopPropagation();
        setSelectedElement(item);
    }

    const renderElement = (item) => {
        const { props } = item;

        switch (item?.type) {
            case ELEMENT_TYPE.IMAGE:
                return <img src={imagePlaceholder} alt='placeholder' style={{width: `${props?.contentWidth}px`, height: `${props?.contentHeight}px`}} />
            case ELEMENT_TYPE.HEADER:
                return <h1 style={{color: props?.color, fontSize: `${props?.fontSize}px`, fontWeight: props?.fontWeight, textAlign: "center"}}>{props?.content}</h1>
            
            case ELEMENT_TYPE.PARAGRAPH:
                return <p style={{color: props?.color, fontSize: `${props?.fontSize}px`, fontWeight: props?.fontWeight, textAlign: props?.align, width: "100%"}}>{props?.content}</p>
            default:
                return <div>undefined element</div>
        }
    }

    const handleChangeTemplateProps = useCallback((type, value) => {
        const tempTemplate = cloneObject(template);

        tempTemplate.props[type] = value;

        setTemplate(tempTemplate);
    }, [template]);

    const handleChangeElementProps = useCallback((type, value) => {
        const tempTemplate = cloneObject(template);

        const elementToChange = tempTemplate?.elements?.find((item) => item?.id === selectedElement?.id);

        elementToChange.props[type] = value;

        const tempElements = tempTemplate?.elements?.map((element) => element?.id === elementToChange?.id ? {...elementToChange} : {...element})
            
        setTemplate({...tempTemplate, elements: tempElements});
    }, [selectedElement, template]);

    const renderSetting = useCallback(() => {
        if (!selectedElement?.id) {
            return (
                <>
                    <ColorPicker key="templateBackgroundColor" title="Background color" color={template?.props?.backgroundColor} onChange={(color) => handleChangeTemplateProps('backgroundColor', color)} />
                    <RangeSlider key="templateContentWidth" title="Content width" value={template?.props?.contentWidth} onChange={(value) => handleChangeTemplateProps('contentWidth', value)} />
                </>
            )
        } else {
            const { props } = selectedElement;

            switch (selectedElement?.type) {
                case ELEMENT_TYPE.IMAGE:
                    return (
                        <>
                            <Input key={`${selectedElement?.type}-${selectedElement?.id}-contentWidth`} type="number" title="Width" value={props?.contentWidth} onChange={(value) => handleChangeElementProps('contentWidth', value)} />
                            <Input key={`${selectedElement?.type}-${selectedElement?.id}-contentHeight`} type="number" title="Height" value={props?.contentHeight} onChange={(value) => handleChangeElementProps('contentHeight', value)} />
                        </>
                    )
                case ELEMENT_TYPE.HEADER:
                    return (
                        <>
                            <ColorPicker key={`${selectedElement?.type}-${selectedElement?.id}-color`} title="Color" color={props?.color} onChange={(color) => handleChangeElementProps('color', color)} />
                            <Input key={`${selectedElement?.type}-${selectedElement?.id}-fontSize`} type="number" title="Font size" value={props?.fontSize} onChange={(value) => handleChangeElementProps('fontSize', value)}  />
                            <RadioButton key={`${selectedElement?.type}-${selectedElement?.id}-fontWeight`} options={FONT_WEIGHT_OPTIONS} title="Font weight" value={props?.fontWeight} onChange={(value) => handleChangeElementProps('fontWeight', value)} />
                            <Input key={`${selectedElement?.type}-${selectedElement?.id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps('content', value)}  />
                        </>
                    )
                
                case ELEMENT_TYPE.PARAGRAPH:
                    return (
                        <>
                            <ColorPicker key={`${selectedElement?.type}-${selectedElement?.id}-color`} title="Color" color={props?.color} onChange={(color) => handleChangeElementProps('color', color)} />
                            <Input key={`${selectedElement?.type}-${selectedElement?.id}-fontSize`} type="number" title="Font size" value={props?.fontSize} onChange={(value) => handleChangeElementProps('fontSize', value)}  />
                            <RadioButton key={`${selectedElement?.type}-${selectedElement?.id}-fontWeight`} options={FONT_WEIGHT_OPTIONS} title="Font weight" value={props?.fontWeight} onChange={(value) => handleChangeElementProps('fontWeight', value)} />
                            {/* <Input key={`${selectedElement?.type}-${selectedElement?.id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps('content', value)}  /> */}
                            <TextArea key={`${selectedElement?.type}-${selectedElement?.id}-content`} title="Content" value={props?.content} onChange={(value) => handleChangeElementProps('content', value)}  />
                            <RadioButton key={`${selectedElement?.type}-${selectedElement?.id}-align`} options={ALIGN_OPTIONS} title="Align" value={props?.align} onChange={(value) => handleChangeElementProps('align', value)} />
                            
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
                <div id='templateDisplay' style={{ ...TEMPLATE_DISPLAY_STYLE , backgroundColor: template?.props?.backgroundColor, width: template?.props?.contentWidth === "100" ? "auto" : `${template?.props?.contentWidth}%`}} onClick={(e) => handleSelectTemplate(e)}>
                    {template?.elements?.map(item => (
                        <div key={item?.id} style={{...ELEMENT_WRAPPER_STYLE}} className={selectedElement?.id === item?.id ? styles.selectedElement : ""} onClick={(e) => handleSelectElement(e, item)}>
                            {renderElement(item)}
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.settingPanel}>
                <div className={styles.settingHeader}>
                    {selectedElement?.type || "Template"} settings
                </div>
                <div className={styles.settingProps}>
                    {renderSetting()}
                </div>
            </section>
        </div>
    )
};

export default Builder;