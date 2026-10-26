import type { ClassName } from "./ClassName";

export interface DaisyIndicatorProps extends ClassName {
	position?:
		| "top-start"
		| "top-center"
		| "top-end"
		| "middle-start"
		| "middle-center"
		| "middle-end"
		| "bottom-start"
		| "bottom-center"
		| "bottom-end";
}
