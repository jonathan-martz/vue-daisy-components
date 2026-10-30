import type { ClassName } from "./ClassName";
import type { StatColor } from "../types/StatColor";
import type { TextSize } from "../types/TextSize";

export interface DaisyStatProps extends ClassName {
	orientation?: "horizontal" | "vertical";
	shadow?: boolean;
	title?: string;
	titleColor?: StatColor;
	titleSize?: TextSize;
	value?: string | number;
	valueColor?: StatColor;
	valueSize?: TextSize;
	desc?: string;
	descColor?: StatColor;
	descSize?: TextSize;
}
