import { ssrElement as _$ssrElement } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { ssr as _$ssr } from "solid-js/web";
var _tmpl$ = "<title>Li-Ning</title>",
  _tmpl$2 = "<path d=\"M8.926 8.815c-.261-.004-.696.011-1.422.084-1.937.194-2.398.828-2.398.828L0 15.177h1.017c4.279-4.664 8.291-6.278 8.291-6.278s.052-.075-.382-.084Zm2.332 1.571c-1.71-.008-3.181.092-3.803.366-1.422.625-3.838 2.271-6.035 4.425 0 0 .864.115 1.902-.48 0 0 3.416-2.586 6.165-2.07 2.75.516 5.169 1.829 5.169 1.829s1.751 1 3.39.438c1.64-.563 5.954-2.898 5.954-2.898s-3.266-.776-6.265-1.182c-1.687-.229-4.279-.418-6.477-.428Z\"></path>";
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleLining(props) {
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