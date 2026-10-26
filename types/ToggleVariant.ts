import type { Variant } from "./Variant";

export type ToggleVariant = Extract<
	Variant,
	"primary" | "secondary" | "accent" | "neutral"
>;
