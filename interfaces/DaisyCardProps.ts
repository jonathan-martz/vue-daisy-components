import type { TextSize } from "../types/TextSize";
import type { CardBadgeVariant } from "../types/CardBadgeVariant";
import type { ClassName } from "./ClassName";
import type { DaisyCardAction } from "./DaisyCardAction";

export interface DaisyCardProps extends ClassName {
	titleSize?: TextSize;
	descriptionSize?: TextSize;
	actionSize?: TextSize;
	title?: string;
	description?: string;
	image?: string;
	imageAlt?: string;
	imageFull?: boolean;
	bordered?: boolean;
	compact?: boolean;
	side?: boolean;
	actions?: DaisyCardAction[];
	badge?: string;
	badgeVariant?: CardBadgeVariant;
}
