import type { ClassName } from "./ClassName";
import type { ToggleVariant } from "../types/ToggleVariant";

export interface DaisyToggleProps extends ClassName {
	modelValue?: boolean;
	name?: string;
	disabled?: boolean;
	variant?: ToggleVariant;
}
