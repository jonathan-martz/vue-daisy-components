import type { Variant } from "./Variant";

export type AlertVariant = Extract<
	Variant,
	"info" | "success" | "warning" | "error"
>;
