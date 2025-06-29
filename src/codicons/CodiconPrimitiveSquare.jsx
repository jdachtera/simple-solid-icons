// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: codicons | License: MIT (<https://github.com/microsoft/vscode-codicons/blob/main/LICENSE>)
import { mergeProps } from 'solid-js'

export function CodiconPrimitiveSquare({ size = 24, width, height, ...inputProps }) {
  const props = mergeProps(
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: width ?? size,
      height: height ?? size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': '2',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
    },
    inputProps
  )
  return <svg {...props}><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 4l.5-.5h8l.5.5v8l-.5.5H4l-.5-.5V4zm1 .5v7h7v-7h-7z"/></svg>
}
