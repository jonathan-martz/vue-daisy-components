import type { ClassName } from "./ClassName";

export interface DaisyLinkProps extends ClassName {
	href: string;
	target?: string;
	rel?: string;
	underline?: boolean;
}
