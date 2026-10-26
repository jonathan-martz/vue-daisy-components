import type { ClassName } from "./ClassName";

export interface DaisyDropdownProps extends ClassName {
	position?: "top" | "bottom" | "left" | "right" | "end";
	open?: boolean;
}
