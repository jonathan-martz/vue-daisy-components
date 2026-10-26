import type { TextSize } from "../types/TextSize";
import type { BadgeSize } from "../types/BadgeSize";
import type { BadgeVariant } from "../types/BadgeVariant";
import type { ClassName } from "./ClassName";

export interface DaisyBadgeProps extends ClassName {
	labelSize?: TextSize;
	variant?: BadgeVariant;
	size?: BadgeSize;
	outline?: boolean;
	soft?: boolean;
	dash?: boolean;
	label?: string;
}
