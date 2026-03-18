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
			{tag: "ol", content: [{tag: "li", content: "Edibles and refreshment"}]},
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
		bodies: [
			{tag: "Divider", content: "Academic aid"},
			{tag: "div", content: [
				{tag: "h2", content: "Student volunteers"},
				{tag: "p", content: "They contribute directly to key activities such as organizing seminars and workshops, running coffee stands, supporting outreach events, and helping create and publish website content. Student volunteers also embody AInclusion’s mission: they are both the target group and active co-creators of a responsible AI culture on campus, making the initiative more credible, relatable, and sustainable."},
				{tag: "h2", content: "Universites (NTNU, External)"},
				{tag: "p", content: "The partnership with NTNU is essential: it provides the venues and infrastructure needed to host the events and, by taking place on campus, the activities become easy to access and more visible to students. NTNU’s academic setting also adds credibility to AInclusion’s work and helps attract participants by signaling quality and relevance. Collaboration with external universities can extend AInclusion’s reach beyond one campus, enabling the model to scale through joint events, shared content, and partnerships with student communities in other locations."},
				{tag: "h2", content: "Relevant organisations"},
				{tag: "p", content: "Partner organizations such as NORA and Feministihuset help AInclusion connect AI ethics to broader societal conversations and reach communities beyond campus. These partners contribute networks, expertise, and event platforms that support AInclusion’s outreach through exhibitions and public events."}
			]},
			{tag: "Divider", content: "Suppliers"},
			{tag: "div", content: [
				{tag: "h2", content: "Edibles and refreshment"},
				{tag: "p", content: "Suppliers that provide food, coffee, and refreshments are practical partners that support participation and community building at events. Small details like accessible refreshments can improve attendance, create a welcoming atmosphere, and strengthen social engagement around seminars, workshops, and book clubs."}
			]},
			{tag: "Divider", content: "Financial aid"},
			{tag: "div", content: [
				{tag: "h2", content: "Donators"},
				{tag: "p", content: "Donor support is directly linked to AInclusion’s ability to deliver consistent programming and keep activities accessible to students."},
				{tag: "h2", content: "Institutional relations"},
				{tag: "p", content: "Public institutions and grant providers are key partners for long-term sustainability and legitimacy. Their funding can cover larger operational needs such as event costs, outreach initiatives, and platform maintenance, especially when volunteer capacity is limited."}
			]},
		]
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
			{tag: "div", content: [
				{tag: "h2", content: "Voluntary event organisers"},
				{tag: "p", content: "Volunteer event organisers, primarily students, are essential to AInclusion’s ability to deliver activities with limited funding. They support the planning and execution of seminars, workshops, coffee stands, and outreach events by handling logistics, facilitation, promotion, and participant engagement."},
				{tag: "h2", content: "Web development and content team"},
				{tag: "p", content: "They build and maintain the digital platform where key materials are published, such as learning resources, author interviews, book excerpts, and event information. This team ensures that AInclusion’s knowledge-sharing is not limited to one-time events, but becomes reusable, accessible, and easy for students to engage with before and after seminars, strengthening continuity across the organization’s channels and activities."},
				{tag: "h2", content: "Author outreach team"},
				{tag: "p", content: "The author outreach team enables AInclusion’s book club and learning-campaign model by building relationships with relevant authors and experts in AI ethics, fairness, and responsible AI. They identify suitable authors, secure collaboration agreements, coordinate permissions for excerpts, and arrange interviews, Q&As, talks, or webinars."},
			]},
			{tag: "Divider", content: "Digital"},
			{tag: "div", content: [
				{tag: "h2", content: "Robust content website"},
				{tag: "p", content: "A robust content website functions as AInclusion’s main digital infrastructure and a key channel for student engagement. It acts as a hub for event promotion, learning resources, and community-driven content such as interviews, book-based discussion materials, and summaries of key ethical themes. The website supports low-threshold participation and helps AInclusion reach whomever may not attend every event. It also strengthens continuity in the growth model by connecting seminars, book clubs, and outreach into one coherent, easy to use, visible platform."}
			]},
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
		bodies: [
			{tag: "h2", content: "Co-Creation and peer collaboration"},
			{tag: "p", content: "(Co-Creation and peer collaboration)"},
			{tag: "h2", content: "Trust and mediation between different groups"},
			{tag: "p", content: "(Trust and mediation between different groups)"},
			{tag: "h2", content: "Relationship between members and providers"},
			{tag: "p", content: "(Relationship between members and providers)"}
		]
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
		bodies: [
			{tag: "Divider", content: "Digital"},
			{tag: "div", content: [
				{tag: "p", content: "The official website will serve as the main hub for updates, resources, and membership registration. Social media platforms such as LinkedIn, along with email communication, help reach and coordinate a broader international network. This could be expanded to use more social media platforms such as Facebook and Instagram."},
				{tag: "p", content: "Co-design workshops and project platforms to allow members to collaborate on open-source tools and learning resources through a commons-based peer production model."}
			]},
			{tag: "Divider", content: "Physical"},
			{tag: "div", content: [
				{tag: "h2", content: "Feministhuset"},
				{tag: "p", content: "(Feministhuset)"},
				{tag: "h2", content: "Exhibitions and seminars"},
				{tag: "p", content: "(Exhibitions and seminars)"}
			]},
			{tag: "Divider", content: "Interactive"},
			{tag: "div", content: [
				{tag: "h2", content: "Workshops"},
				{tag: "p", content: "(Workshops)"},
				{tag: "h2", content: "Book clubs"},
				{tag: "p", content: "(Book clubs)"}
			]},
		]
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
					{tag: "span", content: "General public"},
					{tag: "ul", content: [{tag: "li", content: "Seek practical tools"}]}
				]},
				{tag: "br"},
				{tag: "li", content: [
					{tag: "span", content: "Skilled professionals and mentors"},
					{tag: "ul", content: [{tag: "li", content: "Contribute with expertise"}]}
				]},
				{tag: "br"},
				{tag: "li", content: [
					{tag: "span", content: "Creatives and artists"},
					{tag: "ul", content: [{tag: "li", content: "Collaborate on creative AI-projects"}]}
				]},
				{tag: "br"},
				{tag: "li", content: [
					{tag: "span", content: "Institutional stakeholders"},
					{tag: "ul", content: [
						{tag: "li", content: "Partner organizations (Feministhuset)"},
						{tag: "li", content: "Donors"},
						{tag: "li", content: "Public institutions"}
					]}
				]}
			]}
		]},
		bodies: [
			{tag: "p", content: "We define the stakeholders and \"customer\" segments by their role in the value network. Since AINCLUSION is an NGO, the two groups will function as both beneficiaries and prosumers. The beneficiaries are the ones who receive value, and the prosumers are the ones who are contributing to the organisation's activities and value. We divide the stakeholders into five specific subgroups; Active prosumers, the general public, skilled professionals and mentors, interdisciplinary creatives and artists, and institutional stakeholders and partners."},
			{tag: "h2", content: "Active prosumers"},
			{tag: "p", content: "This is a key segment for the growth of AINCLUSION. The students are able to actively contribute to projects such as co-designing AI learning tools, seminars and communication. The students will in this way gain hands-on experience, build professional portfolios, and also receive recognition through their collaborative work."},
			{tag: "h2", content: "The general public"},
			{tag: "p", content: "The general public here refers to the less skilled beneficiaries. These are individuals with limited AI knowledge who participate in accessible workshops and other learning resources. They likely seek practical tools to help improve everyday life and work without requiring advanced technical skills and knowledge. The general public is a beneficiary."},
			{tag: "h2", content: "Skilled professionals and mentors"},
			{tag: "p", content: "These are AI experts and experienced professionals who acts as mentors, tutors and collaborators. They contribute with their expertise whilst benefiting from the networking possibilities and participation in interdisciplinary projects. The skilled professionals are prosumers."},
			{tag: "h2", content: "Interdisciplinary creatives and artists"},
			{tag: "p", content: "This refers to people interested in the intersection of AI, creativity and inclusion. They collaborate on creative AI projects and exhibitions without needing deep technical expertise, and are therefore prosumers."},
			{tag: "h2", content: "Institutional stakeholders and partners"},
			{tag: "p", content: "These are the organisations and supporters that sustain the initiative. This includes partners organisations such as Feministhuset, possible donors and benefactors, and public institutions interested in ethical and human-centered AI."},
			{tag: "h2", content: "Value network"},
			{tag: "p", content: "The can all be put together in a value network. Here, the professionals and mentors provide expertise to students who help develop and co-create tools. This way, the general public benefits from accessible AI learning. The creatives are able to expand their interdisciplinary projects and reach a new audience. Lastly, the donors and partners help support the infrastructure and funding. This results in a multi-sided platform, where different groups collaborate to produce and distribute knowledge about ethical, responsible, and inclusive AI."}
		]
	},
	costStructure: {
		title: "Cost Structure",
		shortBody: {tag: "div", style: {display: "flex"}, content: [
			{tag: "div", style: {flexGrow: "1"}, content: [
				{tag: "span", content: "Fixed costs:"},
				{tag: "ul", content: [
					{tag: "li", content: "Outreach team"},
					{tag: "li", content: "Coffee stands"},
					{tag: "li", content: "Website management team"}
				]}
			]},
			{tag: "div", style: {flexGrow: "1"}, content: [
				{tag: "span", content: "Variable costs:"},
				{tag: "ul", content: [
					{tag: "li", content: "Occasionally renting seminar rooms"},
					{tag: "li", content: "Travel and accomondation expenses"},
					{tag: "li", content: "Conferences expenses for edibles and refreshments"}
				]}
			]}
		]},
		bodies: [
			{tag: "Divider", content: "Fixed costs"},
			{tag: "div", content: [
				{tag: "h2", content: "Outreach team"},
				{tag: "p", content: "The outreach team represents a recurring cost linked to AInclusion’s visibility and partnerships beyond campus. This includes planning and coordination for exhibitions, collaborations with external organizations, and communication efforts that position AI ethics and responsible AI in broader social settings."},
				{tag: "h2", content: "Coffee stands"},
				{tag: "p", content: "Coffee and simple refreshments are recurring fixed costs because they are consistently used across seminars, workshops, and community events. Coffee stands are a stable, low-cost activity that supports community-building and student engagement. Costs may include basic equipment, supplies, small operational needs and coordination time."},
				{tag: "h2", content: "Website management team"},
				{tag: "p", content: "Maintaining the website creates ongoing costs related to hosting, updates, content publishing, and technical support. Since the website is a core channel and key resource, used for event promotion, learning materials, author interviews, and book-based content, this cost is essential for continuity and for ensuring the organization’s impact extends beyond one-time events."}
			]},
			{tag: "Divider", content: "Variable costs"},
			{tag: "div", content: [
				{tag: "h2", content: "Occasionally renting seminar rooms"},
				{tag: "p", content: "While NTNU often provides space, AInclusion may sometimes need to rent additional rooms or external venues for larger events or collaborations outside campus. These costs fluctuate depending on the scale and frequency of activities and allow the organization to expand capacity when needed."},
				{tag: "h2", content: "Travel and accomondation expenses"},
				{tag: "p", content: "If AInclusion collaborates with student groups at other universities, authors or external experts, travel and accommodation costs may arise for organisers or invited participants for the events, workshops, or conferences. These expenses can include transportation and short-term accommodation when participants need to travel to attend in person."},
				{tag: "h2", content: "Conferences expenses for edibles and refreshments"},
				{tag: "p", content: "Larger events and conferences typically require additional spending on refreshments and practical logistics. These variable costs scale with participant numbers and event length, and they support participation, comfort, and a positive event experience—important for attracting students and maintaining engagement."}
			]},
		]
	},
	valueCapture: {
		title: "Value Capture",
		shortBody: {tag: "div", style: {display: "flex"}, content: [
			{tag: "div", style: {flexGrow: "1"}, content: [
				{tag: "span", content: "Financial:"},
				{tag: "ul", content: [
					{tag: "li", content: "Public grants and institutional funding"},
					{tag: "li", content: "Donations"},
					{tag: "li", content: "Platform Subsidization"},
					{tag: "li", content: "Crowdfunding"},
					{tag: "li", content: "Complementary Services"},
					{tag: "li", content: "Data and Reputation Assets"},
				]}
			]},
			{tag: "div", style: {flexGrow: "1"}, content: [
				{tag: "span", content: "Non-financial:"},
				{tag: "ul", content: [
					{tag: "li", content: "Portfolio building for students"},
					{tag: "li", content: "Membership sign-ups"}
				]}
			]}
		]},
		bodies: [
			{tag: "Divider", content: "Financial"},
			{tag: "div", content: [
				{tag: "h2", content: "Public grants and institutional funding"},
				{tag: "p", content: "The fact that AINCLUSiON is an NGO means that a primary source of revenue involves securing funds from national or international organisations that finance social and educational activities. This means applying to targeted grants, which are specifically related to AI ethics, digital literacy for marginalised groups, or interdisciplinary innovation. Another source of income could be government subsidies, seeking support from educational or technological authorities interested in advocating for humanistic AI practices."},
				{tag: "h2", content: "Donations and benefactor support"},
				{tag: "p", content: "By following the model of Wikipedia, which provide a sort of public good, AINCLUSION can rely on voluntary contributions. These could be individual donations from members or the public who value the organisation's mission of making AI accessible to everyone. This could be done through a voluntary membership fee, or through a link on the page. It's also possible to get this kind of funding through donations from technology companies that want to demonstrate commitment to inclusive and ethical AI."},
				{tag: "h2", content: "Multisided Platform Subsidization"},
				{tag: "p", content: "Since AINCLUSION can operate as a multisided platform, the opportunity arises for one user group to subsidize. While students and the general public receive value for free, other segments could generate value. This could be done through certification fees, where skilled professionals or companies could pay for formal certification in inclusive AI practices or for access to a verified pool of talents, e.g. the student members. Another way to receive funding could be through corporate partnerships. Companies could pay to get help with their ethical AI needs. This could also function as a case for the members of AINCLUSION, giving hands-on experience."},
				{tag: "h2", content: "Crowdfunding and project-based revenue"},
				{tag: "p", content: "It is possible for AINCLUSION to raise funds for specific practical tools or interdisciplinary projects through digital platforms. This could be done through crowdfunding platforms to fund the development of specific AI learning tools, granting donors early access or recognition. Another option could be inviting the public to fund social impact projects, such as inclusive AI workshops for seniors or marginalized communities."},
				{tag: "h2", content: "Complementary Services"},
				{tag: "p", content: "If AINCLUSION wants to keep all seminars and tools completely free, the organisation can generate revenue through selling specialiszed add-ons. This could be advanced workshops that are intensive and innovative courses or masterclasses led by experts. It's also possible to provide paid expert advice to other organisations on how to implement ethical and inclusive frameworks for AI."},
				{tag: "h2", content: "Data and Reputation Assets"},
				{tag: "p", content: "While AINCLUSION focuses on human ethics, they might be able to generate revenue from their insights. Universities or research institutions may provide funding to access data and case studies generated by AINCLUSION's interdisciplinary projects. AINCLUSION might also capture value through improved reputation, which increases the likelihood of future grants and attracting high-value partners."}
			]},
			{tag: "Divider", content: "Non-financial"},
			{tag: "div", content: [
				{tag: "h2", content: "Portfolio building for students"},
				{tag: "p", content: "(Portfolio building for students)"},
				{tag: "h2", content: "Membership sign-ups"},
				{tag: "p", content: "(Membership sign-ups)"}
			]},
		]
	}
} as {[key: string]: ContentType}
