export type BodyType = {tag: string, style?: {[key: string]: any}, content?: string | BodyType[]}

export type ContentType = {
    title: string,
    shortBody: BodyType,
    bodies: BodyType[]
}
export const defaultContent = {
    title: "Not Found",
    shortBody: {tag: "p", content: "Content not found"},
    bodies: [{tag: "p", content: "This page could not be found"}]
} as ContentType

export const allContent = {
    keyPartners: {
        title: "Key Partners",
        shortBody: {tag: "span", content: [
            {tag: "span", content: "Academic aid:"},
            {tag: "ol", content: [
                {tag: "li", content: [
                    {tag: "span", content: "Student volunteers"},
                    {tag: "ul", content: [{tag: "li", content: "Provides essential labour"}]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "Universities (NTNU, external)"},
                    {tag: "ul", content: [
                        {tag: "li", content: "Provides physical infrastructure"},
                        {tag: "li", content: "Expertise"}
                    ]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "Relevant organizations"},
                    {tag: "ul", content: [
                        {tag: "li", content: "NORA"},
                        {tag: "li", content: "Feministhuset"}
                    ]}
                ]}
            ]},
            {tag: "br"},
            {tag: "span", content: "Suppliers:"},
            {tag: "ul", content: [{tag: "li", content: "For edibles and refreshment"}]},
            {tag: "br"},
            {tag: "span", content: "Financial aid:"},
            {tag: "ol", content: [
                {tag: "li", content: [
                    {tag: "span", content: "Donators"},
                    {tag: "ul", content: [
                        {tag: "li", content: "Low end"},
                        {tag: "li", content: "High end"}
                    ]}
                ]},
                {tag: "li", content: [
                    {tag: "span", content: "Institutional relationships"},
                    {tag: "ul", content: [
                        {tag: "li", content: "Public grants"},
                        {tag: "li", content: "Funding"}
                    ]}
                ]}
            ]}
        ]},
        bodies: [{tag: "p", content: "Something about our key partners"}]
    },
    keyActivities: {
        title: "Key Activities",
        shortBody: {tag: "span", content: [
            {tag: "p", content: "Engage students as volunteers"},
            {tag: "p", content: "NTNU Seminars and workshops"},
            {tag: "p", content: "Collaborate with authors for book clubs"},
            {tag: "p", content: "Outreach through exibitions"}
        ]},
        bodies: [
            {tag: "h2", content: "Engage students as volunteers"},
            {tag: "p", content: "AInclusion collaborates with volunteers who support its activities and operations. Students are encouraged to take an active role in AInclusion’s workflow and contribute to many of the organization’s tasks. They can help organize events and seminars, run coffee stands, and support website development, while gaining valuable work experience that strengthens their CVs."},
            {tag: "h2", content: "NTNU Seminars and workshops"},
            {tag: "p", content: "AInclusion can arrange seminars and workshops aimed at NTNU students, making recent and relevant AI topics easier to understand, apply and teach responsible use, ethics, bias, and real-world implications about AI. These sessions create a low-threshold learning environment where students can build practical awareness, discuss dilemmas, and strengthen their confidence in engaging with AI critically and responsibly."},
            {tag: "h2", content: "Collaborate with authors for book clubs"},
            {tag: "p", content: "Identify relevant books and articles to feature on the website and contact authors to agree on a promotion plan. Selected excerpts, such as a few chapters, will be published along with author interviews or Q&A sessions (“chat with the author”). Highly engaged authors may also be encouraged to host short talks, webinars, or conference sessions about their book or its topic. All promotional activities on the AInclusion website will be coordinated in terms of content, permissions, and scheduling."},
            {tag: "h2", content: "Outreach through exibitions"},
            {tag: "p", content: "The use of art-based exhibitions and participation in external events to promote its activities and bring AI ethics and responsible AI into broader social and cultural spaces. By connecting AI themes to settings where people already engage with questions of power, identity, and justice, such as feminist exhibitions, class struggle and labor-focused art events, or immigration and integration talks: the organization makes topics like bias, accountability, and fairness more relatable and easier to discuss. These collaborations increase visibility beyond campus, reach new communities, and create opportunities for dialogue with audiences who may not normally attend AI-focused seminars, strengthening AInclusion’s role as a bridge between technology and society."}
        ]
    },
    keyResources: {
        title: "Key Resources",
        shortBody: {tag: "span", content: [
            {tag: "span", content: "Physical:"},
            {tag: "ul", content: [{tag: "li", content: "Available seminar spaces (NTNU)"}]},
            {tag: "br"},
            {tag: "span", content: "Human:"},
            {tag: "ul", content: [
                {tag: "li", content: "Voluntary event organisers"},
                {tag: "li", content: "Web development and content team"},
                {tag: "li", content: "Author outreach team"}
            ]},
            {tag: "br"},
            {tag: "span", content: "Digital:"},
            {tag: "ul", content: [{tag: "li", content: "Robust content website"}]},
        ]},
        bodies: [
            {tag: "Divider", content: "Physical"},
            {tag: "div", content: [
                {tag: "h2", content: "Avalible seminar spaces (NTNU)"},
                {tag: "p", content: "Access to NTNU seminar and workshop spaces is an essential resource for AInclusion’s on-campus activities. These venues make it possible to run regular student-focused seminars, workshops, book events, and dialogue sessions in an accessible and familiar environment."}
            ]},
            {tag: "Divider", content: "Human"},
            {tag: "h2", content: "Something 2"},
            {tag: "Divider", content: "Digital"},
            {tag: "h2", content: "Something 3"}
        ]
    },
    socialValueProposition: {
        title: "Social Value Proposition",
        shortBody: {tag: "span", content: [
            {tag: "p", content: "Making sure AI enhances, not replaces, human work"},
            {tag: "p", content: "Making sure AI does not empower already existing barriers in society, and in the long run to combat them"},
            {tag: "p", content: "Ensuring knowledge about ethics, bias and responsible use of AI"}
        ]},
        bodies: [
            {tag: "h2", content: "Making sure AI enhances, not replaces, human work"},
            {tag: "p", content: "Usage of AI to support people, not substitute them. The focus is to prioritizes human oversight, clear roles, and workflows where AI handles repetitive tasks while humans keep control of decisions, judgment, and accountability. The result is a healthier way of working where AI is used transparently and in harmony with human roles, strengthening trust without undermining human expertise."},
            {tag: "h2", content: "Making sure AI does not empower already existing barriers in society, and in the long run to combat them."},
            {tag: "p", content: "AI can unintentionally amplify existing inequalitiesEnsuring knowledge about ethics, bias and responsible use of AI."},
            {tag: "p", content: "AI systems are built on historical data, that is by nature biased towards the traditional dominant profiles; that is: Caucasian, heterosexual, upper-class, middle-aged Men. These systems can judge and profile people based on these standards in key aspects of society like employment agencies, police profiling and risk assessment, judicial processes, Bank profiling and social scoring for loans, Access to Education institutions."},
            {tag: "p", content: "AI should lower the barriers that prevent people from accessing knowledge, opportunities, services, and participation in society. Instead of amplifying existing inequalities, economic, linguistic, etc., AI should be a tool to reduce them."},
            {tag: "h2", content: "Ensuring knowledge about ethics, bias and responsible use of AI"},
            {tag: "p", content: "Cooperate with organisations and professionals, that work in \"Ethical use of AI\" field to spread out their knowledge to future and current workers and employers."},
            {tag: "p", content: "Ensure knowledge about ethics, bias, and responsible AI means giving people the tools and resources needed to use AI thoughtfully, critically, and safely. Since AI has become such an integral part of society, everyone who interacts with it should have basic AI literacy skills. This is to ensure that everyone who needs it has a basic understanding of how AI works, and where problems may arise."}
        ]
    },
    relations: {
        title: "Relations",
        shortBody: {tag: "span", content: [
            {tag: "p", content: "Co-Creation and peer collaboration"},
            {tag: "p", content: "Trust and mediation between different groups"},
            {tag: "p", content: "Relationship between members and providers"}
        ]},
        bodies: [{tag: "p", content: "..."}]
    },
    channels: {
        title: "Channels",
        shortBody: {tag: "span", content: [
            {tag: "span", content: "Digital:"},
            {tag: "ul", content: [
                {tag: "li", content: "Social media"},
                {tag: "li", content: "Online resource library"}
            ]},
            {tag: "br"},
            {tag: "span", content: "Physical:"},
            {tag: "ul", content: [
                {tag: "li", content: "Feministhuset"},
                {tag: "li", content: "Exhibitions and seminars"}
            ]},
            {tag: "br"},
            {tag: "span", content: "Interactive:"},
            {tag: "ul", content: [
                {tag: "li", content: "Workshops"},
                {tag: "li", content: "Book clubs"}
            ]}
        ]},
        bodies: [{tag: "p", content: "..."}]
    },
    stakeholders: {
        title: "Stakeholders",
        shortBody: {tag: "span", content: [
            {tag: "ol", content: [
                {tag: "li", content: [
                    {tag: "span", content: "Active prosumers"},
                    {tag: "ul", content: [{tag: "li", content: "Collaborative work"}]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "General public (regular members)"},
                    {tag: "ul", content: [{tag: "li", content: "Seek practical tools"}]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "Skilled professionals/mentors"},
                    {tag: "ul", content: [{tag: "li", content: "Contribute with expertise"}]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "Creatives and artists"},
                    {tag: "ul", content: [{tag: "li", content: "Collaborate on creative AI-projects"}]}
                ]},
                {tag: "br"},
                {tag: "li", content: [
                    {tag: "span", content: "Institutional stakeholders (?)"},
                    {tag: "ul", content: [
                        {tag: "li", content: "Partner organizations (Feministhuset)"},
                        {tag: "li", content: "Donors"},
                        {tag: "li", content: "Public institutions"}
                    ]}
                ]}
            ]}
        ]},
        bodies: [{tag: "p", content: "..."}]
    },
    costStructure: {
        title: "Cost Structure",
        shortBody: {tag: "div", style: {display: "flex"}, content: [
            {tag: "div", style: {flexGrow: "1"}, content: [
                {tag: "span", content: "Fixed costs:"},
                {tag: "ul", content: [
                    {tag: "li", content: "Outreach team"},
                    {tag: "li", content: [
                        {tag: "span", content: "Coffee stands"},
                        {tag: "ul", content: [
                            {tag: "li", content: "Volunteers"},
                            {tag: "li", content: "Coffee"}
                        ]}
                    ]},
                    {tag: "li", content: "Website management team"}
                ]}
            ]},
            {tag: "div", style: {flexGrow: "1"}, content: [
                {tag: "span", content: "Variable costs:"},
                {tag: "ul", content: [
                    {tag: "li", content: "Occasionally renting seminar rooms"},
                    {tag: "li", content: [
                        {tag: "span", content: "Travel and accomondation expenses"},
                        {tag: "ul", content: [
                            {tag: "li", content: "For other universities"},
                            {tag: "li", content: "For the Authors"}
                        ]}
                    ]},
                    {tag: "li", content: "Conferences expenses for edibles and refreshments"}
                ]}
            ]}
        ]},
        bodies: [{tag: "p", content: "..."}]
    },
    valueCapture: {
        title: "Value Capture",
        shortBody: {tag: "div", style: {display: "flex"}, content: [
            {tag: "div", style: {flexGrow: "1"}, content: [
                {tag: "span", content: "Financial:"},
                {tag: "ul", content: [
                    {tag: "li", content: "Public grants and institutional funding"},
                    {tag: "li", content: "Donations"},
                    {tag: "li", content: "Crowdfunding"}
                ]}
            ]},
            {tag: "div", style: {flexGrow: "1"}, content: [
                {tag: "span", content: "Non-financial:"},
                {tag: "ul", content: [
                    {tag: "li", content: "Portfolio building for students"},
                    {tag: "li", content: "Social recognition and reputation"},
                    {tag: "li", content: "Membership sign-ups"}
                ]}
            ]}
        ]},
        bodies: [{tag: "p", content: "..."}]
    }
} as {[key: string]: ContentType}
