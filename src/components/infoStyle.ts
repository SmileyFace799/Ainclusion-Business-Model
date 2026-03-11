export type StyleType = {
    color: "blue" | "red" | "bluered" | undefined,
    css: {[key: string]: any}
}

export const defaultStyle = {css: {}} as StyleType;

export const allStyles = {
    keyPartners: {
        color: "blue",
        css: {gridRow: '1 / 3', gridColumn: '1 / 3'}
    },
    keyActivities: {
        color: "blue",
        css: {gridRow: '1', gridColumn: '3 / 5'}
    },
    keyResources: {
        color: "blue",
        css: {gridRow: '2', gridColumn: '3 / 5'}
    },
    socialValueProposition: {
        color: "bluered",
        css: {gridRow: '1 / 3', gridColumn: '5 / 7'}
    },
    relations: {
        color: "red",
        css: {gridRow: '1', gridColumn: '7 / 9'}
    },
    channels: {
        color: "red",
        css: {gridRow: '2', gridColumn: '7 / 9'}
    },
    stakeholders: {
        color: "red",
        css: {gridRow: '1 / 3', gridColumn: '9 / 11'}
    },
    costStructure: {
        color: "blue",
        css: {gridRow: '3', gridColumn: '1 / 6'}
    },
    valueCapture: {
        color: "red",
        css: {gridRow: '3', gridColumn: '6 / 11'}
    },
} as {[key: string]: StyleType};