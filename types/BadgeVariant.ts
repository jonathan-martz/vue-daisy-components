import type { Variant } from "./Variant";

export type BadgeVariant = Extract<
	Variant,
	| "primary"
	| "secondary"
	| "accent"
	| "neutral"
	| "info"
	| "success"
	| "warning"
	| "error"
>;
