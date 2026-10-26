import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";

export interface DaisyHeadlineProps extends ClassName {
	titleSize?: TextSize;
	margin?: boolean;
}
