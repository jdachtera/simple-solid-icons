import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>HCL</title>",
  _tmpl$2 = "<path d=\"M21.3968 10.4013l-1.0971 2.4399H24l-.3435.7629H17.294l1.4331-3.2028zm-6.3985 1.0896h2.4633c-.0152-.5377-.5358-.911-1.5672-1.0592-2.0348-.2994-4.2354-.1718-5.802.6934-1.2346.6859-1.329 1.7176-.099 2.2232 1.0357.4218 3.2106.4656 4.767.201 1.0077-.1712 1.7776-.502 2.2093-.9974H14.454c-.3262.251-.7526.376-1.25.3804-1.4124.0094-1.5988-.4182-1.3525-.9106.293-.5801.9075-.8966 1.8447-.9216.7381-.0199 1.1029.1436 1.3021.3908M0 13.6067h2.604l.5578-1.2789h2.553l-.5732 1.2771h2.635l1.4457-3.2031h-2.653l-.4769 1.0807H3.5421l.4831-1.0807-2.5781-.0006Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleHcl(props) {
  const merged = mergeProps({
    size: 32,
    color: 'currentColor',
    fill: 'currentColor',
    stroke: 'none',
    'stroke-width': 2,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round'
  }, props);
  return _$ssrElement("svg", _$mergeProps(merged, {
    get width() {
      return merged.width ?? merged.size;
    },
    get height() {
      return merged.height ?? merged.size;
    },
    get stroke() {
      return merged.stroke ?? merged.color;
    },
    get fill() {
      return merged.fill;
    }
  }), () => [_$ssr(_tmpl$), _$ssr(_tmpl$2)], true);
}