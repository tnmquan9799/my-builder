export const ELEMENT_TYPE = {
    IMAGE: "image",
    HEADER: "header",
    PARAGRAPH: "paragraph",
    BUTTON: "button",
}

export const FONT_WEIGHT_OPTIONS = [
    {
        id: 1,
        label: "lighter",
        value: "lighter",
    },
    {
        id: 2,
        label: "normal",
        value: "normal",
    },
    {
        id: 3,
        label: "bold",
        value: "bold",
    }
]

export const ALIGN_OPTIONS = [
    {
        id: 1,
        label: "left",
        value: "left",
    },
    {
        id: 2,
        label: "center",
        value: "center",
    },
    {
        id: 3,
        label: "right",
        value: "right",
    },
    {
        id: 4,
        label: "justify",
        value: "justify",
    }
]

export const DEFAULT_PROPS_VALUE = {
    TEMPLATE: {
        BACKGROUND_COLOR: "#b3cee5",
        CONTENT_WIDTH: "100", // 100%
    },
    IMAGE: {
        CONTENT_WIDTH: 300, // pixel
        CONTENT_HEIGHT: 200, // pixel
    },
    HEADER: {
        COLOR: "#000000",
        FONT_SIZE: 36,
        FONT_WEIGHT: "bold",
        CONTENT: "Header looks like this in template"
    },
    PARAGRAPH: {
        COLOR: "#000000",
        FONT_SIZE: 14,
        FONT_WEIGHT: "normal",
        CONTENT: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ALIGN: "center"
    },
    BUTTON: {
        COLOR: "#000000",
        FONT_SIZE: 14,
        FONT_WEIGHT: "normal",
        CONTENT: "Button",
        BACKGROUND_COLOR: "#FFFFFF",
        BORDER_COLOR: "#000000",
        BORDER_RADIUS: "2", // 2%
        PADDING_X: 20, // 20px
        PADDING_Y: 8, // 8px
    }
}

export const TEMPLATES = [
    {
        id: 1,
        name: "Starter template",
        props: {
            backgroundColor: DEFAULT_PROPS_VALUE.TEMPLATE.BACKGROUND_COLOR,
            contentWidth: DEFAULT_PROPS_VALUE.TEMPLATE.CONTENT_WIDTH,
        },
        slots: [
            {
                id: 1,
                elements: [
                    {
                        id: 1,
                        type: ELEMENT_TYPE.IMAGE,
                        props: {
                            contentWidth: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_WIDTH,
                            contentHeight: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_HEIGHT
                        }
                    },
                ]
            },
            {
                id: 2,
                elements: [
                    {
                        id: 2,
                        type: ELEMENT_TYPE.HEADER,
                        props: {
                            color: DEFAULT_PROPS_VALUE.HEADER.COLOR,
                            fontSize: DEFAULT_PROPS_VALUE.HEADER.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.HEADER.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.HEADER.CONTENT
                        }
                    },
                ]
            },
            {
                id: 3,
                elements: [
                    {
                        id: 3,
                        type: ELEMENT_TYPE.PARAGRAPH,
                        props: {
                            color: DEFAULT_PROPS_VALUE.PARAGRAPH.COLOR,
                            fontSize: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.PARAGRAPH.CONTENT,
                            align: DEFAULT_PROPS_VALUE.PARAGRAPH.ALIGN,
                        }
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        name: "Intermediate template",
        props: {
            backgroundColor: DEFAULT_PROPS_VALUE.TEMPLATE.BACKGROUND_COLOR,
            contentWidth: DEFAULT_PROPS_VALUE.TEMPLATE.CONTENT_WIDTH,
        },
        slots: [
            {
                id: 1,
                styles: {
                    border: "1px solid #000000",
                },
                elements: [
                    {
                        id: 1,
                        type: ELEMENT_TYPE.IMAGE,
                        props: {
                            contentWidth: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_WIDTH,
                            contentHeight: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_HEIGHT
                        }
                    },
                ]
            },
            {
                id: 2,
                styles: {
                    borderBottom: "1px dashed #000000",
                },
                elements: [
                    {
                        id: 2,
                        type: ELEMENT_TYPE.HEADER,
                        props: {
                            color: DEFAULT_PROPS_VALUE.HEADER.COLOR,
                            fontSize: DEFAULT_PROPS_VALUE.HEADER.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.HEADER.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.HEADER.CONTENT
                        }
                    },
                ]
            },
            {
                id: 3,
                elements: [
                    {
                        id: 3,
                        type: ELEMENT_TYPE.PARAGRAPH,
                        props: {
                            color: DEFAULT_PROPS_VALUE.PARAGRAPH.COLOR,
                            fontSize: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.PARAGRAPH.CONTENT,
                            align: DEFAULT_PROPS_VALUE.PARAGRAPH.ALIGN,
                        }
                    }
                ]
            },
            {
                id: 4,
                elements: [
                    {
                        id: 4,
                        type: ELEMENT_TYPE.IMAGE,
                        props: {
                            contentWidth: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_WIDTH,
                            contentHeight: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_HEIGHT
                        }
                    },
                    {
                        id: 5,
                        type: ELEMENT_TYPE.IMAGE,
                        props: {
                            contentWidth: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_WIDTH,
                            contentHeight: DEFAULT_PROPS_VALUE.IMAGE.CONTENT_HEIGHT
                        }
                    },
                ]
            },
            {
                id: 5,
                styles: {
                    borderBottom: "1px dashed #000000"
                },
                elements: [
                    {
                        id: 6,
                        type: ELEMENT_TYPE.PARAGRAPH,
                        props: {
                            color: DEFAULT_PROPS_VALUE.PARAGRAPH.COLOR,
                            fontSize: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.PARAGRAPH.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.PARAGRAPH.CONTENT,
                            align: DEFAULT_PROPS_VALUE.PARAGRAPH.ALIGN,
                        }
                    },
                ]
            },
            {
                id: 7,
                elements: [
                    {
                        id: 7,
                        type: ELEMENT_TYPE.BUTTON,
                        props: {
                            color: DEFAULT_PROPS_VALUE.BUTTON.COLOR,
                            backgroundColor: DEFAULT_PROPS_VALUE.BUTTON.BACKGROUND_COLOR,
                            borderColor: DEFAULT_PROPS_VALUE.BUTTON.BORDER_COLOR,
                            borderRadius: DEFAULT_PROPS_VALUE.BUTTON.BORDER_RADIUS,
                            paddingY: DEFAULT_PROPS_VALUE.BUTTON.PADDING_Y,
                            paddingX: DEFAULT_PROPS_VALUE.BUTTON.PADDING_X,
                            fontSize: DEFAULT_PROPS_VALUE.BUTTON.FONT_SIZE,
                            fontWeight: DEFAULT_PROPS_VALUE.BUTTON.FONT_WEIGHT,
                            content: DEFAULT_PROPS_VALUE.BUTTON.CONTENT
                        }
                    },
                ]
            }
        ]
    },
 
];
