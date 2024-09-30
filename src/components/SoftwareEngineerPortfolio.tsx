import { Github, Instagram, Mail } from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";

// Constants
const SKILLS = [
	"TypeScript",
	"React",
	"Node.js",
	"Tailwind CSS",
	"Express.js",
	"Next.js",
	"Vite",

	"Python",
	"FastAPI",

	"PHP",
	"mySQL",
	"WordPress",

	"Firebase",
	"MongoDB",
	"PostgreSQL",
	"Supabase",

	"Dart",
	"Flutter",
	"Dart Frog",

	"Docker",
];

const PROJECTS = [
	{
		title: "Quadrillion",
		description:
			"Developed a SaaS platform for managing reviews, referrals, points, customers and more.",
		tags: [
			"React",
			"Node.js",
			"Tailwindcss",
			"TypeScript",
			"Express.js",
			"Supabase",
			"PostgreSQL",
			"Docker",
			"Vite",
			"PHP",
			"mySQL",
			"WordPress",
		],
	},
	{
		title: "Odin Cloth Wear",
		description:
			"Built an e-commerce website for a clothing brand using Next.js and Tailwind CSS.",
		tags: ["React", "Next.js", "Tailwindcss", "TypeScript", "Firebase"],
	},
	{
		title: "Ahmed Fahmy Gallery",
		description:
			"Designed and developed a personal portfolio website for a Ahmed Fahmy.",
		tags: ["React", "Vite", "Tailwindcss", "TypeScript", "Firebase"],
	},
];

const ROLE = {
	title: "Senior Software Engineer",
	company: "School Of Marketing Agency",
	period: "2024 - Present",
	responsibilities: [
		"Lead development of microservices architecture",
		"Mentor junior developers and conduct code reviews",
		"Implement CI/CD pipelines and DevOps best practices",
		"Develop and maintain TypeScript-based projects",
	],
};

function SoftwareEngineerPortfolio() {
	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900">
			<header className="bg-white shadow dark:bg-gray-800">
				<div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900 dark:text-white">
						Omar Hosam
					</h1>
					<div className="flex space-x-4">
						<a
							nonce="github"
							href="https://github.com/OmarHosamCodes/"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<Github />
						</a>
						<a
							nonce="instagram"
							href="https://www.instagram.com/__o_m_a_r__01/"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<Instagram />
						</a>
						<a
							nonce="email"
							href="mailto:omarhosamcodes@gmail.com"
							className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
						>
							<Mail />
						</a>
					</div>
				</div>
			</header>

			<main className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<section className="mb-12">
						<h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
							About Me
						</h2>
						<p className="text-gray-700 dark:text-gray-300">
							Passionate software engineer from Egypt with 5 years of experience
							in full-stack development. Specialized in building scalable web
							applications and microservices.
						</p>
					</section>

					<section className="mb-12">
						<h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
							Skills
						</h2>
						<div className="flex flex-wrap gap-2">
							{SKILLS.map((skill, index) => (
								<SkillBadge key={index.toString()}>{skill}</SkillBadge>
							))}
						</div>
					</section>

					<section className="mb-12">
						<h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
							Latest Projects
						</h2>
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
							{PROJECTS.map((project, index) => (
								<ProjectCard
									key={index.toString()}
									title={project.title}
									description={project.description}
									tags={project.tags}
								/>
							))}
						</div>
					</section>

					<section>
						<h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
							Current Role
						</h2>
						<div className="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-lg">
							<div className="px-4 py-5 sm:px-6">
								<h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
									{ROLE.title}
								</h3>
								<p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-400">
									{ROLE.company} • {ROLE.period}
								</p>
							</div>
							<div className="border-t border-gray-200 dark:border-gray-700">
								<dl>
									<div className="px-4 py-5 bg-gray-50 dark:bg-gray-700 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
										<dt className="text-sm font-medium text-gray-500 dark:text-gray-300">
											Responsibilities
										</dt>
										<dd className="mt-1 text-sm text-gray-900 dark:text-white sm:mt-0 sm:col-span-2">
											<ul className="pl-5 space-y-1 list-disc">
												{ROLE.responsibilities.map((resp, index) => (
													<li key={index.toString()}>{resp}</li>
												))}
											</ul>
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</section>
				</div>
			</main>

			<footer className="mt-12 bg-white shadow dark:bg-gray-800">
				<div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<p className="text-center text-gray-500 dark:text-gray-400">
						© 2024 Omar Hosam Codes. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default SoftwareEngineerPortfolio;
