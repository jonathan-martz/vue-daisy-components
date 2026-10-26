import type { ClassName } from "./ClassName";

export interface DaisyRatingProps extends ClassName {
	modelValue?: number;
	name: string;
	label?: string;
	max?: number;
	half?: boolean;
	allowClear?: boolean;
	disabled?: boolean;
	size?: "xs" | "sm" | "md" | "lg" | "xl";
}
