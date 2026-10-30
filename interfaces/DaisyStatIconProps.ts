import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import type { ClassName } from "./ClassName";
import type { StatColor } from "../types/StatColor";

export interface DaisyStatIconProps extends ClassName {
	icon: IconDefinition;
	color?: StatColor;
}
