// Icon component template (TSX)
import { mergeProps } from "solid-js";
import type { ComponentProps } from "solid-js";

type IconProps = ComponentProps<'svg'> & { size?: number | string };

export function ICON_NAME({ size = 24, width, height, ...inputProps }: IconProps) {
  const props = mergeProps(
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: width ?? size,
      height: height ?? size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    },
    inputProps
  );
  return <svg {...props}>SVG_PATHS</svg>;
}
