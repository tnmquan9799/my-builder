import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import cloneObject from '../../helpers/logic/cloneObject';
import { ELEMENT_TYPE } from '../../helpers/data/templates';

import RangeSlider from '../../components/common/RangeSlider';
import ColorPicker from '../../components/common/ColorPicker';

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
                return <img src={imagePlaceholder} alt='image-placeholder' style={{width: props?.contentWidth, height: props?.contentHeight}} />
            case ELEMENT_TYPE.HEADER:
                return <h1 style={{color: props?.color, fontSize: props?.fontSize, fontWeight: props?.fontWeight}}>{props?.content}</h1>
            
            case ELEMENT_TYPE.PARAGRAPH:
                return <p style={{color: props?.color, fontSize: props?.fontSize, fontWeight: props?.fontWeight, textAlign: props?.align}}>{props?.content}</p>
            default:
                return <div>undefined element</div>
        }
    }

    const handleChangeTemplateProps = (type, value) => {
        const tempTemplate = cloneObject(template);

        tempTemplate.props[type] = value;

        setTemplate(tempTemplate);
    }

    const renderSetting = useCallback(() => {
        if (!selectedElement?.id) {
            return (
                <>
                    <ColorPicker color={template?.props?.backgroundColor} onChange={(color) => handleChangeTemplateProps('backgroundColor', color)} />
                    <RangeSlider value={template?.props?.contentWidth} onChange={(value) => handleChangeTemplateProps('contentWidth', value)} />
                </>
            )
        }
    }, [selectedElement. template])

    return (
        <div className={styles.builderWrapper}>
            <section className={styles.templatePanel}>
                <div className={styles.templateDisplay} style={{backgroundColor: template?.props?.backgroundColor, width: `${template?.props?.contentWidth}%`}} onClick={(e) => handleSelectTemplate(e)}>
                    {template?.elements?.map(item => (
                        <div key={item?.id} className={`${styles.elementWrapper} ${selectedElement?.id === item?.id ? styles.selectedElement : ""}`} onClick={(e) => handleSelectElement(e, item)}>
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