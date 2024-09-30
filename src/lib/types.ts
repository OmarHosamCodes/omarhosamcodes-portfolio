import type { ReactNode } from "react";

export interface SkillBadgeProps {
	children: ReactNode;
}

export interface ProjectCardProps {
	title: string;
	description: string;
	tags: string[];
}
