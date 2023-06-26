export const ELEMENT_TYPE = {
    IMAGE: 'image',
    HEADER: 'header',
    PARAGRAPH: 'paragraph',
}

export const FONT_WEIGHT_OPTIONS = [
    {
        id: 1,
        label: "light",
        value: "light",
    },
    {
        id: 2,
        label: "regular",
        value: "regular",
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
        CONTENT_WIDTH: "100",
    },
    IMAGE: {
        CONTENT_WIDTH: "300px",
        CONTENT_HEIGHT: "200px",
    },
    HEADER: {
        COLOR: "#000000",
        FONT_SIZE: "36px",
        FONT_WEIGHT: "bold",
        CONTENT: "Header looks like this in template"
    },
    PARAGRAPH: {
        COLOR: "#000000",
        FONT_SIZE: "14px",
        FONT_WEIGHT: "regular",
        CONTENT: "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ALIGN: "center"
    }
}

export const TEMPLATES = [
    {
        id: 1,
        name: 'Starter template',
        props: {
            backgroundColor: DEFAULT_PROPS_VALUE.TEMPLATE.BACKGROUND_COLOR,
            contentWidth: DEFAULT_PROPS_VALUE.TEMPLATE.CONTENT_WIDTH,
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
        id: 2,
        name: 'Intermediate template',
        props: {
            backgroundColor: DEFAULT_PROPS_VALUE.TEMPLATE.BACKGROUND_COLOR,
            contentWidth: DEFAULT_PROPS_VALUE.TEMPLATE.CONTENT_WIDTH,
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
    }
];
