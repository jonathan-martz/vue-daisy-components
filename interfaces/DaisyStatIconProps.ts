import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ClassName } from "./ClassName";
import type { StatColor } from "../types/StatColor";
import type { IconSize } from "../types/IconSize";

export interface DaisyStatIconProps extends ClassName {
	icon: IconDefinition;
	color?: StatColor;
	size?: IconSize;
}
