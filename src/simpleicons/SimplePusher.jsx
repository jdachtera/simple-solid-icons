import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><title>Pusher</title><path d="M12 23.966v-6.0166a.0348.0348 0 01.0182-.031l7.7319-4.4645a.0348.0348 0 00.0181-.031v-1.711a.0356.0356 0 00-.0537-.031l-7.6608 4.423a.0356.0356 0 01-.0537-.031v-1.7117a.0356.0356 0 01.0181-.031l7.732-4.4645a.037.037 0 00.0181-.031v-1.711a.0363.0363 0 00-.0537-.031l-7.6608 4.4229a.0356.0356 0 01-.0537-.031v-1.711a.0348.0348 0 01.0181-.031l7.732-4.4622a.0356.0356 0 00.0181-.031V4.515a.0757.0757 0 00-.0356-.062L12.0356.0096a.0704.0704 0 00-.0712 0L10.5002.855a.0356.0356 0 000 .062L18.161 5.34a.0363.0363 0 010 .062l-1.4642.8452a.0757.0757 0 01-.0719 0L8.9286 1.8038a.0757.0757 0 00-.0757 0l-1.4597.8445a.0356.0356 0 000 .062l7.6593 4.4236a.0356.0356 0 010 .0621l-1.4634.8452a.0757.0757 0 01-.0757 0l-7.6926-4.444a.0757.0757 0 00-.0756 0l-1.5134.8762v15.0492a.0348.0348 0 00.0181.031l1.4816.8558a.0356.0356 0 00.0538-.031V5.433a.0356.0356 0 01.0537-.031l1.4824.8558a.0356.0356 0 01.0174.031v15.028a.0356.0356 0 00.0181.031l1.4816.8559a.0363.0363 0 00.0545-.0318V7.227a.0356.0356 0 01.0537-.031l1.4817.855a.0356.0356 0 01.0181.0311v15.0288a.037.037 0 00.0174.031l1.4862.855A.0356.0356 0 0012 23.966z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: simpleicons | License: CC0-1.0 (<https://github.com/simple-icons/simple-icons/blob/develop/LICENSE.md>)
import { mergeProps } from 'solid-js';
export function SimplePusher(props) {
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