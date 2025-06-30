import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>SonarQube Server</title>",
  _tmpl$2 = "<path d=\"M12 0a.774.774 0 0 0-.775.775c0 .43.346.776.775.776 5.762 0 10.45 4.687 10.45 10.449 0 .43.345.775.775.775A.774.774 0 0 0 24 12c0-6.616-5.384-12-12-12zm0 3.932a.774.774 0 0 0-.775.775c0 .43.346.775.775.775A6.524 6.524 0 0 1 18.518 12c0 .43.346.775.775.775.43 0 .775-.346.775-.775 0-4.448-3.62-8.068-8.068-8.068zm0 3.925a.774.774 0 0 0-.775.776c0 .43.346.775.775.775A2.597 2.597 0 0 1 14.592 12c0 .43.346.775.775.775.43 0 .776-.346.776-.775A4.145 4.145 0 0 0 12 7.857zM.775 11.225A.774.774 0 0 0 0 12c0 6.616 5.384 12 12 12 .43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.776C6.238 22.45 1.55 17.762 1.55 12a.774.774 0 0 0-.775-.775zm3.932 0a.774.774 0 0 0-.775.775c0 4.448 3.62 8.068 8.068 8.068.43 0 .775-.346.775-.775a.774.774 0 0 0-.775-.775A6.524 6.524 0 0 1 5.482 12a.774.774 0 0 0-.775-.775zm3.926 0a.774.774 0 0 0-.776.775A4.145 4.145 0 0 0 12 16.143c.43 0 .775-.347.775-.776a.774.774 0 0 0-.775-.775A2.597 2.597 0 0 1 9.408 12a.774.774 0 0 0-.775-.775z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleSonarqubeserver(props) {
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