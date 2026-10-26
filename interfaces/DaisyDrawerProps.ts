import type { ClassName } from "./ClassName";

export interface DaisyDrawerProps extends ClassName {
	id: string;
	open?: boolean;
	side?: "start" | "end";
}
