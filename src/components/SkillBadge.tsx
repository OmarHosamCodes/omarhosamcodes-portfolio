import type { SkillBadgeProps } from "@/lib/types";

function SkillBadge({ children }: SkillBadgeProps) {
	return (
		<span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
			{children}
		</span>
	);
}

export default SkillBadge;
