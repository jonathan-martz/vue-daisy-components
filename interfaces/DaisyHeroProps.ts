import type { TextSize } from "../types/TextSize";
import type { ClassName } from "./ClassName";
import type { ButtonVariant } from "../types/ButtonVariant";

export interface DaisyHeroProps extends ClassName {
	titleSize?: TextSize;
	descriptionSize?: TextSize;
	actionSize?: TextSize;
	title?: string;
	description?: string;
	ctaText?: string;
	imageUrl?: string;
	imageAlt?: string;
	layout?: "center" | "side" | "side-reverse";
	bgImage?: string;
	variant?: ButtonVariant;
}
