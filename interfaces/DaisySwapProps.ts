import type { ClassName } from "./ClassName";

export interface DaisySwapProps extends ClassName {
	modelValue?: boolean;
	disabled?: boolean;
	effect?: "rotate" | "flip";
}
