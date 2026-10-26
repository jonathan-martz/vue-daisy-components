import type { ClassName } from "./ClassName";

export interface DaisyToastProps extends ClassName {
	position?:
		| "start"
		| "center"
		| "end"
		| "top"
		| "bottom"
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
