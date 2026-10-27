import type { AlertVariant } from "../types/AlertVariant";
import type { BadgeVariant } from "../types/BadgeVariant";
import type { ButtonVariant } from "../types/ButtonVariant";

export const alertVariantClasses: Record<AlertVariant, string> = {
	info: "alert-info",
	success: "alert-success",
	warning: "alert-warning",
	error: "alert-error",
};

export const buttonVariantClasses: Record<ButtonVariant, string> = {
	primary: "btn-primary",
	secondary: "btn-secondary",
	accent: "btn-accent",
	neutral: "btn-neutral",
	ghost: "btn-ghost",
	link: "btn-link",
	info: "btn-info",
	success: "btn-success",
	warning: "btn-warning",
	error: "btn-error",
};

export const badgeVariantClasses: Record<BadgeVariant, string> = {
	primary: "badge-primary",
	secondary: "badge-secondary",
	accent: "badge-accent",
	neutral: "badge-neutral",
	info: "badge-info",
	success: "badge-success",
	warning: "badge-warning",
	error: "badge-error",
};
