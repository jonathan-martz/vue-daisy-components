import type { ClassName } from "./ClassName";

export interface DaisyCalendarProps extends ClassName {
	modelValue?: string;
	name?: string;
	min?: string;
	max?: string;
	disabled?: boolean;
	inputClassName?: string;
}
