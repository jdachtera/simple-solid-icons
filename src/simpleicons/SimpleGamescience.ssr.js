import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Game Science</title>",
  _tmpl$2 = "<path d=\"M1.847 19.089c-.555-.137-.853-.305-1.213-.685-.613-.645-.76-1.273-.534-2.287.394-1.77 1.645-3.34 3.321-4.166 1.03-.508 1.64-.657 2.693-.656.759 0 .928.027 1.325.212l.456.213 4.263-2.841c2.344-1.563 4.276-2.828 4.294-2.81s-.177.987-.431 2.155c-.254 1.169-.462 2.176-.462 2.24 0 .063 1.865-1.167 4.144-2.734 4.153-2.856 4.42-3.037 4.265-2.883-.268.266-10.33 8.653-10.353 8.63-.015-.017.174-1.036.419-2.267s.436-2.28.426-2.334c-.011-.053-1.231.964-2.712 2.26l-2.693 2.356-.053.765c-.17 2.428-2.022 4.156-5.168 4.823-.69.146-1.42.15-1.987.009\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleGamescience(props) {
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