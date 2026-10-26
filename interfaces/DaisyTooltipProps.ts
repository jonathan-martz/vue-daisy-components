import type { ClassName } from "./ClassName";

export interface DaisyTooltipProps extends ClassName {
	tip: string;
	position?: "top" | "bottom" | "left" | "right";
}
