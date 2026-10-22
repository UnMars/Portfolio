const INFO = {
	main: {
		title: "Guillaume Roboam - Portfolio",
		name: "Guillaume Roboam",
		email: "guillaume_roboam@hotmail.fr",
		logo: "../avatar.png",
		resume_url: "/Resume_Guillaume_ROBOAM.pdf",
	},

	socials: {
		twitter: "https://x.com/UnMars_",
		github: "https://github.com/unmars",
		linkedin: "https://www.linkedin.com/in/guillaume-roboam/",
		instagram: "https://www.instagram.com/guillaume_rbm/",
	},

	homepage: {
		title: "Software Engineer at Datadog, backend & AI",
		description:
			"I'm a software engineer at <b>Datadog</b>, on the RUM Resolve team, where I build and evaluate the <b>MCP tools</b> that expose Real User Monitoring to AI agents. Before that I built products from scratch in <b>startups</b> and on contract, and won 1st place at the <b>Aleo × zSociety hackathon</b>. I like distributed systems, backend engineering and tools that people actually use.",
	},

	about: {
		title: "I'm Guillaume Roboam, I turn ideas into reliable software",
		description: `
		<p>I'm Guillaume Roboam, a software engineer at <b>Datadog</b> and an engineer who loves building software that lasts. I spend most of my time designing backend services, refining system architecture and automating everything that can be automated.</p>
		<p>My journey has taken me through early-stage startups, consulting missions and research projects. Along the way I've learned to own the full development cycle: from the first line of code to production deployment and continuous improvement.</p>
		<p>I thrive in collaborative teams, enjoy deep system-design discussions and keep a strong DevOps mindset. My favourite toolbox includes Python, Go, TypeScript, Docker, PostgreSQL and the occasional LLM experiment.</p>
		<p>Today I work on the RUM Resolve team, building the MCP tools that expose Real User Monitoring to AI agents. Want to talk tech, backend or system design? <a href="https://www.linkedin.com/in/guillaume-roboam/" target="_blank" rel="noreferrer" style="color:#666;">Let's&nbsp;talk</a>.</p>
		`,
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Bloom Filter",
			description:
				"Interactive demo to learn and explain Bloom Filters: compare with Python list, visualize hash bits, and tune parameters. Built to learn-by-doing.",
			tech: [
				{ icon: "PythonOriginal", label: "Python" },
			],
			linkText: "Open Demo",
			link: "/projects/bloom-filter",
			type: "school",
			date: "2025",
		},
		{
			title: "Prolific-Joiner",
			description:
				"Open-source bot to automate the detection and joining of paid studies on Prolific.co. Features include automatic authentication, ReCaptcha bypass, and 24/7 operation. Used by a small community to maximize study opportunities.",
			tech: [{ icon: "PythonOriginal", label: "Python" }],
			linkText: "View on GitHub",
			link: "https://github.com/UnMars/Prolific-Joiner",
			type: "pro",
			date: "2022",
		},
		{
			title: "Eosya",
			description:
				"Full-stack development and scaling of a indexing 800k+ points of interest. Led backend and infrastructure, implemented real-time autocomplete (Elasticsearch), and ensured secure, automated deployments.",
			tech: [
				{ icon: "PythonOriginal", label: "Python" },
				{ icon: "DjangoPlain", label: "Django" },
				{ icon: "DockerOriginal", label: "Docker" },
				{ icon: "PostgresqlOriginal", label: "PostgreSQL" },
				{ icon: "ElasticsearchOriginal", label: "Elasticsearch" },
				{ icon: "RedisOriginal", label: "Redis" },
			],
			linkText: "Visit Site",
			link: "https://explore.eosya.com",
			type: "pro",
			date: "2024",
		},
		{
			title: "Noticeable",
			description:
				"Early-stage startup. Designed and implemented the technical architecture from scratch, including LLM agent (LangGraph), RAG pipeline (Qdrant), and Dockerized infrastructure deployed on AWS. Key technical contributor from day one.",
			tech: [
				{ icon: "PythonOriginal", label: "Python" },
				{ icon: "DockerOriginal", label: "Docker" },
				{ icon: "AmazonwebservicesOriginalWordmark", label: "AWS" },
			],
			linkText: "Private Project",
			link: "#",
			type: "pro",
			date: "2025",
		},
		{
			title: "Nsigma Mobile App",
			description:
				"Cross-platform mobile app (React Native, Supabase) for real-time mission offers. Implemented secure backend, push notifications, and optimized development cycle. Projected to boost user engagement by 50%.",
			tech: [
				{ icon: "TypescriptPlain", label: "Typescript" },
				{ icon: "ReactOriginal", label: "React Native" },
				{ icon: "SupabaseOriginal", label: "Supabase" },
			],
			linkText: "Private Project",
			link: "#",
			type: "pro",
			date: "2024",
		},
		{
			title: "Nsigma Legal Documents RAG",
			description:
				"Conversational agent for automating internal workflows using RAG (Retrieval Augmented Generation). Improved API response quality and productivity for the team. Built with Python and LangChain.",
			tech: [
				{ icon: "PythonOriginal", label: "Python" },
				{ icon: "LangChainOriginal", label: "LangChain" },
			],
			linkText: "Private Project",
			link: "#",
			type: "pro",
			date: "2024",
		},
		{
			title: "Java Deca Compiler",
			description:
				"Software engineering project: Developed a compiler for a Java subset. Led CI pipelines, testing (250+ tests), and code quality (SonarQube). Produced full JavaDoc documentation.",
			tech: [
				{ icon: "JavaOriginal", label: "Java" },
				{ icon: "SonarqubeOriginal", label: "SonarQube" },
			],
			linkText: "Academic Project",
			link: "#",
			type: "school",
			date: "2025",
		},
		{
			title: "x86 OS Conception",
			description:
				"Advanced OS design project: Implemented user/kernel partitioning, memory paging, and security for a minimalist x86 OS. Led the user-mode isolation and memory management features.",
			tech: [
				{ icon: "COriginal", label: "C" },
				{ icon: "LinuxOriginal", label: "Linux" },
			],
			linkText: "Academic Project",
			link: "#",
			type: "school",
			date: "2025",
		},
	],
};

export default INFO;
