import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Express.com</title><path d="M18.904 10.081c-.774 0-1.484.362-1.484 1.24 0 .536.367.893 1.041 1l.756.123c.27.046.408.139.408.323 0 .316-.44.417-.68.417-.433 0-.734-.169-1.05-.455l-.693.45c.494.54 1.02.74 1.636.74.678 0 1.664-.203 1.664-1.295 0-.694-.597-.92-1.32-1.037l-.348-.057c-.346-.056-.506-.152-.506-.345 0-.235.307-.367.516-.367.382 0 .735.168.974.458l.688-.496c-.409-.454-1-.699-1.602-.699Zm3.494 0c-.775 0-1.484.362-1.484 1.24 0 .536.367.893 1.04 1l.755.123c.27.046.408.139.408.323 0 .316-.437.417-.678.417-.433 0-.735-.169-1.05-.455l-.694.45c.494.54 1.02.74 1.637.74.677 0 1.662-.203 1.662-1.295 0-.694-.596-.92-1.32-1.037l-.346-.057c-.348-.056-.506-.152-.506-.345 0-.235.307-.367.516-.367.382 0 .733.168.972.458l.69-.496c-.408-.454-1.001-.699-1.602-.699ZM0 10.185v3.632h2.824v-.705H.91v-.857h1.646v-.703H.909v-.664h1.765v-.703zm3.285 0 1.2 1.677-1.399 1.955h1.098l.86-1.357.837 1.357h1.11L5.6 11.862l1.194-1.677H5.707l-.658 1.107-.662-1.107Zm3.988 0v3.632h.918v-1.174H8.9c1.244 0 1.513-.745 1.513-1.23 0-.72-.36-1.228-1.34-1.228zm3.386 0v3.632h.908v-1.306h.577l.712 1.306h1.016l-.832-1.459c.454-.132.75-.51.75-.98 0-.816-.499-1.193-1.314-1.193zm3.492 0v3.632h2.824v-.705h-1.918v-.857h1.648v-.703h-1.648v-.664h1.766v-.703zm-5.972.672h.74c.415 0 .586.2.586.562 0 .28-.147.55-.56.55h-.766Zm3.388 0h.83c.291.005.485.153.485.49 0 .336-.194.484-.485.49h-.83z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimpleExpressdotcom(props) {
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