import type { ClassName } from "./ClassName";

export interface DaisyRangeProps extends ClassName {
	modelValue?: number;
	name?: string;
	min?: number;
	max?: number;
	step?: number;
	disabled?: boolean;
}
