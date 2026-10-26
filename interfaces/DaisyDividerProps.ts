import type { ClassName } from "./ClassName";

export interface DaisyDividerProps extends ClassName {
	orientation?: "horizontal" | "vertical";
	label?: string;
}
