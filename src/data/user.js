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
		title: "I'm Guillaume Roboam, software engineer at Datadog",
		description: `
		<p>I'm a software engineer at <b>Datadog</b>, on the RUM Resolve team. I work on agent interfaces: building, evaluating and monitoring the MCP tools that expose Real User Monitoring to AI agents.</p>
		<p>Before that, I was the founding engineering intern at an early-stage startup in Panama (LLM agents, RAG, full stack from scratch), and spent 15 months building a geospatial platform on contract (Django, PostgreSQL, Elasticsearch).</p>
		<p>In 2025 my team won 1st place out of 250+ teams at the Aleo × zSociety hackathon ($100k prize pool) with a zero-knowledge lending protocol: I built the SDKs, the on-chain price oracle and the frontend.</p>
		<p>Engineering degree from <b>Ensimag</b> (Grenoble INP), exchange semester at <b>KTH</b>. I'm interested in distributed systems and backend engineering, and I also build side projects, mostly tools I end up needing myself.</p>
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
