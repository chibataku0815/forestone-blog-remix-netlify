/**
 * アイコンコンポーネント
 * サイト全体のアイコンを提供します。
 *
 * @module Icon
 * @file app/components/ui/icon.tsx
 */

import type {
	IconDefinition,
	IconStyle,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import * as faSolid from "@fortawesome/pro-solid-svg-icons";
import * as faRegular from "@fortawesome/pro-regular-svg-icons";
import * as faLight from "@fortawesome/pro-light-svg-icons";
import * as faDuotone from "@fortawesome/pro-duotone-svg-icons";

/**
 * Props for the Icon component.
 */
type IconProps = {
	/** The name of the icon to display. */
	name: string;
	/** The style of the icon. Defaults to "solid". */
	style?: IconStyle;
	/** Additional CSS classes to apply to the icon. */
	className?: string;
	/** The size of the icon. Accepts FontAwesome size values. */
	size?: FontAwesomeIconProps["size"];
};

/**
 * A component for displaying FontAwesome Pro icons.
 *
 * This component allows you to easily use FontAwesome Pro icons in your React application.
 * It supports multiple icon styles (solid, regular, light, and duotone) and various customization options.
 *
 * @example
 * // Using a solid icon
 * <Icon name="user" style="solid" size="2x" className="text-blue-500" />
 * <Icon name="star" style="regular" />
 * <Icon name="heart" style="light" size="lg" />
 * <Icon name="bell" style="duotone" />
 *
 * @example
 * // Using a regular icon with custom size and class
 * <Icon name="star" style="regular" size="2x" className="text-yellow-500" />
 *
 * @param {IconProps} props - The props for the Icon component.
 * @returns {ReturnType<typeof FontAwesomeIcon> | null} FontAwesomeIcon component if the icon is found, null otherwise.
 *
 * @throws {Error} Throws an error if an invalid icon style is provided.
 *
 * @see {@link https://fontawesome.com/icons|FontAwesome Icon Library}
 * @see {@link https://fontawesome.com/docs/web/style/size|FontAwesome Icon Sizing}
 */
export const Icon: React.FC<IconProps> = ({
	name,
	style = "solid",
	className = "",
	size,
}) => {
	let icon: IconDefinition | undefined;

	switch (style) {
		case "regular":
			icon = faRegular[name as keyof typeof faRegular] as IconDefinition;
			break;
		case "light":
			icon = faLight[name as keyof typeof faLight] as IconDefinition;
			break;
		case "duotone":
			icon = faDuotone[name as keyof typeof faDuotone] as IconDefinition;
			break;
		case "solid":
			icon = faSolid[name as keyof typeof faSolid] as IconDefinition;
			break;
		default:
			throw new Error(`Invalid icon style: ${style}`);
	}

	if (!icon) {
		console.warn(`Icon "${name}" not found in the "${style}" style.`);
		return null;
	}

	return <FontAwesomeIcon icon={icon} className={className} size={size} />;
};
