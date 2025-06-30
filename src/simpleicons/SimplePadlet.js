import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Padlet</title><path d="M11.2582 2.3987c-.2791.0038-.573.1774-.6906.4496l-4.9783 11.566h.001l1.7144 6.3107c.1384.6059.7421.9857 1.3488.8481l2.6047-.5912-.4004-5.013.0005-.0009-5.2671-1.5532 5.2666.753zm.001 0 .3965 12.769 5.2714-.7533-4.9784-11.5661h.0005c-.1176-.2722-.411-.4457-.69-.4496ZM.4407 7.5341c-.3107.0029-.5609.35-.3797.6662l5.7242 9.9861-.9681-3.562a.7983.7983 0 0 1 .037-.526l1.4594-3.391L.6612 7.5918a.4446.4446 0 0 0-.2204-.0576Zm19.173 1.6802-3.419 1.4758 1.4669 3.4083h.001a.7968.7968 0 0 1 .037.5255l-.924 3.4008 5.621-8.8104zm2.7829 0-.669 2.4636 1.795.8528c.2914.1384.5896-.177.4351-.46h-.0005zm-5.4696 5.2005-5.2676 1.5541-.4004 5.013 2.6047.5912c.6067.1376 1.2102-.2422 1.3479-.848z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePadlet(props) {
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