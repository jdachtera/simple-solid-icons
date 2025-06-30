import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Tile</title><path d="M7.486 8.483h1.617a.16.16 0 0 1 .15.15v9.706a.16.16 0 0 1-.15.15H7.486a.162.162 0 0 1-.15-.15V8.633c0-.075.075-.15.15-.15zm3.536-2.972h1.617c.076 0 .151.075.151.15v12.64c0 .075-.075.15-.15.15h-1.618a.162.162 0 0 1-.15-.15V5.66c0-.075.075-.15.15-.15zM5.68 8.483H1.918V5.66a.162.162 0 0 0-.15-.15H.15a.162.162 0 0 0-.15.15v7.787c0 2.746 2.257 5.003 5.003 5.003h.677c.075 0 .15-.075.15-.15v-1.618a.162.162 0 0 0-.15-.15h-.677a3.099 3.099 0 0 1-3.085-3.085v-3.084H5.68c.075 0 .15-.076.15-.15V8.595c0-.076-.075-.113-.15-.113zM22.533 9.95a5.018 5.018 0 0 0-7.035 0c-1.956 1.918-1.918 5.078 0 7.034 1.919 1.956 5.079 1.919 7.035 0a4.48 4.48 0 0 0 .865-1.166.08.08 0 0 0-.075-.075h-2.07l-.225.075c-1.279 1.129-3.235.978-4.363-.338-.339-.414-.602-.903-.678-1.43 0-.075.038-.113.113-.113h7.75c.075 0 .15-.075.15-.15v-.301a5.013 5.013 0 0 0-1.467-3.536zm-.903 2.257h-5.266c-.076 0-.113-.038-.113-.113a3.066 3.066 0 0 1 2.708-1.655c1.129 0 2.182.64 2.709 1.655 0 .038 0 .075-.038.113zM9.404 6.602a1.09 1.09 0 0 1-1.09 1.09 1.09 1.09 0 0 1-1.091-1.09 1.09 1.09 0 0 1 1.09-1.091 1.09 1.09 0 0 1 1.091 1.09Z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleTile(props) {
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
  return (() => {
    var _el$ = _$getNextElement(_tmpl$);
    _$spread(_el$, _$mergeProps(merged, {
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
    }), true, true);
    _$runHydrationEvents();
    return _el$;
  })();
}