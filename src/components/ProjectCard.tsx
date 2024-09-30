import type { ProjectCardProps } from "@/lib/types";
import SkillBadge from "@/components/SkillBadge";

function ProjectCard({ title, description, tags }: ProjectCardProps) {
	return (
		<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
			<div className="flex flex-wrap gap-2 mt-4">
				{tags.map((tag, index) => (
					<SkillBadge key={index.toString()}>{tag}</SkillBadge>
				))}
			</div>
		</div>
	);
}

export default ProjectCard;
