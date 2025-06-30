import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Aqua</title><path d="M17.7875 18.6811c.7687 0 .7695.7105.7695.7517.0003.2888-.1047.4303-.2229.5535l-3.6066 3.6127c-.2547.2557-.5963.4006-.9567.401H.879c-.1444.0002-.2889-.0409-.4238-.1226-.2628-.1525-.46-.4826-.4551-.8042v-4.3921h17.7874zM23.0632.0001c.3202-.0053.6491.1893.8014.4518.0814.1348.1354.279.1354.4234V13.757c0 .3601-.1402.7054-.3946.9602l-3.5466 3.5524c-.137.1371-.274.2744-.6027.2744-.0411 0-.8225 0-.8225-.7681V.0001h4.4296zM4.5539 5.482s.824 0 .824.7699v12.0934H.0001v-8.0648c0-.361.1397-.7072.3945-.9625L3.95 5.757c.1372-.1376.2744-.275.6039-.275zM18.2983.0002v5.377H6.255c-.7669 0-.7669-.8233-.7669-.8233 0-.3292.137-.4663.2739-.6035L9.3087.398a1.3545 1.3545 0 01.9585-.3977h8.0311z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleAqua(props) {
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