export const defaultContent = {
    title: "Not Found",
    shortBody: "Content not found",
    body: "This page could not be found"
}

export type ContentType = typeof defaultContent

export const allContent = {
    keyPartners: {
        title: "Key Partners",
        shortBody: "",
        body: "Something about our key partners"
    },
    keyActivities: {
        title: "Key Activities",
        shortBody: "",
        body: "..."
    },
    keyResources: {
        title: "Key Resources",
        shortBody: "",
        body: "..."
    },
    socialValueProposition: {
        title: "Social Value Proposition",
        shortBody: "",
        body: "This is what the business model aims to create for its members"
    },
    relations: {
        title: "Relations",
        shortBody: "",
        body: "..."
    },
    channels: {
        title: "Channels",
        shortBody: "",
        body: "..."
    },
    stakeholders: {
        title: "Stakeholders",
        shortBody: "",
        body: "..."
    },
    costStructure: {
        title: "Cost Structure",
        shortBody: "",
        body: "..."
    },
    revenueStreams: {
        title: "Revenue Streams",
        shortBody: "",
        body: "..."
    }
} as {[key: string]: ContentType}
