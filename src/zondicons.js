import { template as _$template } from "solid-js/web";
import { getNextElement as _$getNextElement } from "solid-js/web";
import { runHydrationEvents as _$runHydrationEvents } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { mergeProps as _$mergeProps } from "solid-js/web";
import { memo as _$memo } from "solid-js/web";
var _tmpl$ = /*#__PURE__*/_$template(`<svg><path d="M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z">`),
  _tmpl$2 = /*#__PURE__*/_$template(`<svg><path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z">`),
  _tmpl$3 = /*#__PURE__*/_$template(`<svg><path d="M10 2v16a8 8 0 1 0 0-16zm0 18a10 10 0 1 1 0-20 10 10 0 0 1 0 20z">`),
  _tmpl$4 = /*#__PURE__*/_$template(`<svg><path d="M8.4 12H2.8L1 15H0V5h1l1.8 3h5.6L6 0h2l4.8 8H18a2 2 0 1 1 0 4h-5.2L8 20H6l2.4-8z">`),
  _tmpl$5 = /*#__PURE__*/_$template(`<svg><path d="M0 0h20v20H0V0zm10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z">`),
  _tmpl$6 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM4 5h12v2H4V5zm0 8h12v2H4v-2z">`),
  _tmpl$7 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h18v2H1V5zm0 8h18v2H1v-2z">`),
  _tmpl$8 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM1 5h12v2H1V5zm0 8h12v2H1v-2z">`),
  _tmpl$9 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm0 8h18v2H1V9zm0 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2z">`),
  _tmpl$0 = /*#__PURE__*/_$template(`<svg><path d="M4.34 15.66A7.97 7.97 0 0 0 9 17.94V10H5V8h4V5.83a3 3 0 1 1 2 0V8h4v2h-4v7.94a7.97 7.97 0 0 0 4.66-2.28l-1.42-1.42h5.66l-2.83 2.83a10 10 0 0 1-14.14 0L.1 14.24h5.66l-1.42 1.42zM10 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$1 = /*#__PURE__*/_$template(`<svg><path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z">`),
  _tmpl$10 = /*#__PURE__*/_$template(`<svg><path d="M7 0H6L0 3v6l4-1v12h12V8l4 1V3l-6-3h-1a3 3 0 0 1-6 0z">`),
  _tmpl$11 = /*#__PURE__*/_$template(`<svg><polygon points="9 16.172 2.929 10.101 1.515 11.515 10 20 10.707 19.293 18.485 11.515 17.071 10.101 11 16.172 11 0 9 0">`),
  _tmpl$12 = /*#__PURE__*/_$template(`<svg><polygon points="3.828 9 9.899 2.929 8.485 1.515 0 10 .707 10.707 8.485 18.485 9.899 17.071 3.828 11 20 11 20 9 3.828 9">`),
  _tmpl$13 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2-8V5h4v5h3l-5 5-5-5h3z">`),
  _tmpl$14 = /*#__PURE__*/_$template(`<svg><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm2 0a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm8-2h5v4h-5v3l-5-5 5-5v3z">`),
  _tmpl$15 = /*#__PURE__*/_$template(`<svg><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z">`),
  _tmpl$16 = /*#__PURE__*/_$template(`<svg><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm2 8v5H8v-5H5l5-5 5 5h-3z">`),
  _tmpl$17 = /*#__PURE__*/_$template(`<svg><polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9">`),
  _tmpl$18 = /*#__PURE__*/_$template(`<svg><path d="M7 10V2h6v8h5l-8 8-8-8h5z">`),
  _tmpl$19 = /*#__PURE__*/_$template(`<svg><path d="M10 13h8V7h-8V2l-8 8 8 8v-5z">`),
  _tmpl$20 = /*#__PURE__*/_$template(`<svg><path d="M10 7H2v6h8v5l8-8-8-8v5z">`),
  _tmpl$21 = /*#__PURE__*/_$template(`<svg><path d="M7 10v8h6v-8h5l-8-8-8 8h5z">`),
  _tmpl$22 = /*#__PURE__*/_$template(`<svg><path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z">`),
  _tmpl$23 = /*#__PURE__*/_$template(`<svg><path d="M3.828 9l6.071-6.071-1.414-1.414L0 10l.707.707 7.778 7.778 1.414-1.414L3.828 11H20V9H3.828z">`),
  _tmpl$24 = /*#__PURE__*/_$template(`<svg><path d="M16.172 9l-6.071-6.071 1.414-1.414L20 10l-.707.707-7.778 7.778-1.414-1.414L16.172 11H0V9z">`),
  _tmpl$25 = /*#__PURE__*/_$template(`<svg><path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z">`),
  _tmpl$26 = /*#__PURE__*/_$template(`<svg><polygon points="9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828">`),
  _tmpl$27 = /*#__PURE__*/_$template(`<svg><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zM1.85 15.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z">`),
  _tmpl$28 = /*#__PURE__*/_$template(`<svg><path d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">`),
  _tmpl$29 = /*#__PURE__*/_$template(`<svg><path d="M15 3H7a7 7 0 1 0 0 14h8v-2H7A5 5 0 0 1 7 5h8a3 3 0 0 1 0 6H7a1 1 0 0 1 0-2h8V7H7a3 3 0 1 0 0 6h8a5 5 0 0 0 0-10z">`),
  _tmpl$30 = /*#__PURE__*/_$template(`<svg><path d="M0 10l7-7h13v14H7l-7-7zm14.41 0l2.13-2.12-1.42-1.42L13 8.6l-2.12-2.13-1.42 1.42L11.6 10l-2.13 2.12 1.42 1.42L13 11.4l2.12 2.13 1.42-1.42L14.4 10z">`),
  _tmpl$31 = /*#__PURE__*/_$template(`<svg><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z">`),
  _tmpl$32 = /*#__PURE__*/_$template(`<svg><path d="M19 5v10l-9-5 9-5zm-9 0v10l-9-5 9-5z">`),
  _tmpl$33 = /*#__PURE__*/_$template(`<svg><path d="M10 12a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4 2.75V20l-4-4-4 4v-8.25a6.97 6.97 0 0 0 8 0z">`),
  _tmpl$34 = /*#__PURE__*/_$template(`<svg><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7zm5 0h4v6h-4V7z">`),
  _tmpl$35 = /*#__PURE__*/_$template(`<svg><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7zm5 0h4v6H8V7z">`),
  _tmpl$36 = /*#__PURE__*/_$template(`<svg><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v8h16V6H2zm1 1h4v6H3V7z">`),
  _tmpl$37 = /*#__PURE__*/_$template(`<svg><path d="M9 18v-7L0 2V0h20v2l-9 9v7l5 1v1H4v-1l5-1zm2-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">`),
  _tmpl$38 = /*#__PURE__*/_$template(`<svg><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm16.32-4.9L5.09 16.31A8 8 0 0 0 16.32 5.09zm-1.41-1.42A8 8 0 0 0 3.68 14.91L14.91 3.68z">`),
  _tmpl$39 = /*#__PURE__*/_$template(`<svg><path d="M9.41 0l6 6-4 4 4 4-6 6H9v-7.59l-3.3 3.3-1.4-1.42L8.58 10l-4.3-4.3L5.7 4.3 9 7.58V0h.41zM11 4.41V7.6L12.59 6 11 4.41zM12.59 14L11 12.41v3.18L12.59 14z">`),
  _tmpl$40 = /*#__PURE__*/_$template(`<svg><path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z">`),
  _tmpl$41 = /*#__PURE__*/_$template(`<svg><path d="M6 4H5a1 1 0 1 1 0-2h11V1a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1h-7v8l-2-2-2 2V4z">`),
  _tmpl$42 = /*#__PURE__*/_$template(`<svg><polygon points="18 12 18 13 8 13 8 18 2 12 8 6 8 11 16 11 16 2 18 2">`),
  _tmpl$43 = /*#__PURE__*/_$template(`<svg><polygon points="3.5 13 12 13 12 18 18 12 12 6 12 11 4 11 4 2 2 2 2 13">`),
  _tmpl$44 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4zm5 5V5h2v2h2v2h-2v2H9V9H7V7h2z">`),
  _tmpl$45 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2zm2 0v15l6-3 6 3V2H4z">`),
  _tmpl$46 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v18l-8-4-8 4V2z">`),
  _tmpl$47 = /*#__PURE__*/_$template(`<svg><path d="M11 11v6h6v-6h-6zm0-2h6V3h-6v6zm-2 2H3v6h6v-6zm0-2V3H3v6h6zm-8 9V1h18v18H1v-1z">`),
  _tmpl$48 = /*#__PURE__*/_$template(`<svg><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h18v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm4-8h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm4-12h2v2h-2V1zm0 8h2v2h-2V9zm4-8h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z">`),
  _tmpl$49 = /*#__PURE__*/_$template(`<svg><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h18v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 8h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$50 = /*#__PURE__*/_$template(`<svg><path d="M9 9V1h2v8h8v2h-8v8H9v-8H1V9h8zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 8h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 16h2v2H5v-2zm8-16h2v2h-2V1zm0 16h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 8h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$51 = /*#__PURE__*/_$template(`<svg><path d="M1 1h2v18H1V1zm4 0h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$52 = /*#__PURE__*/_$template(`<svg><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$53 = /*#__PURE__*/_$template(`<svg><path d="M2 19H1V1h18v18H2zm1-2h14V3H3v14zm10-8h2v2h-2V9zM9 9h2v2H9V9zM5 9h2v2H5V9zm4-4h2v2H9V5zm0 8h2v2H9v-2z">`),
  _tmpl$54 = /*#__PURE__*/_$template(`<svg><path d="M5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v2H9V1zm0 4h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-16h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zM1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM17 1h2v18h-2V1z">`),
  _tmpl$55 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zm4-8h2v2H5V9zm0 8h2v2H5v-2zM9 5h2v2H9V5zm0 4h2v2H9V9zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V9zm0 8h2v2h-2v-2zm4-12h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$56 = /*#__PURE__*/_$template(`<svg><path d="M1 1h2v2H1V1zm0 4h2v2H1V5zm0 4h2v2H1V9zm0 4h2v2H1v-2zm0 4h2v2H1v-2zM5 1h2v2H5V1zm0 8h2v2H5V9zm0 8h2v2H5v-2zM9 1h2v18H9V1zm4 0h2v2h-2V1zm0 8h2v2h-2V9zm0 8h2v2h-2v-2zm4-16h2v2h-2V1zm0 4h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z">`),
  _tmpl$57 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z">`),
  _tmpl$58 = /*#__PURE__*/_$template(`<svg><path d="M10 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zM9 4a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm4.54 1.05a1 1 0 1 1 1.41 1.41 1 1 0 1 1-1.41-1.41zM16 9a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-1.05 4.54a1 1 0 1 1-1.41 1.41 1 1 0 1 1 1.41-1.41zM11 16a1 1 0 1 1-2 0 1 1 0 1 1 2 0zm-4.54-1.05a1 1 0 1 1-1.41-1.41 1 1 0 1 1 1.41 1.41zM4 11a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm1.05-4.54a1 1 0 1 1 1.41-1.41 1 1 0 1 1-1.41 1.41z">`),
  _tmpl$59 = /*#__PURE__*/_$template(`<svg><path d="M10 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM9 1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V1zm6.65 1.94a1 1 0 1 1 1.41 1.41l-1.4 1.4a1 1 0 1 1-1.41-1.41l1.4-1.4zM18.99 9a1 1 0 1 1 0 2h-1.98a1 1 0 1 1 0-2h1.98zm-1.93 6.65a1 1 0 1 1-1.41 1.41l-1.4-1.4a1 1 0 1 1 1.41-1.41l1.4 1.4zM11 18.99a1 1 0 1 1-2 0v-1.98a1 1 0 1 1 2 0v1.98zm-6.65-1.93a1 1 0 1 1-1.41-1.41l1.4-1.4a1 1 0 1 1 1.41 1.41l-1.4 1.4zM1.01 11a1 1 0 1 1 0-2h1.98a1 1 0 1 1 0 2H1.01zm1.93-6.65a1 1 0 1 1 1.41-1.41l1.4 1.4a1 1 0 1 1-1.41 1.41l-1.4-1.4z">`),
  _tmpl$60 = /*#__PURE__*/_$template(`<svg><path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z">`),
  _tmpl$61 = /*#__PURE__*/_$template(`<svg><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2zm8 3l4 5H6l4-5z">`),
  _tmpl$62 = /*#__PURE__*/_$template(`<svg><path d="M0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm2 2v12h16V5H2z">`),
  _tmpl$63 = /*#__PURE__*/_$template(`<svg><path d="M15.3 14.89l2.77 2.77a1 1 0 0 1 0 1.41 1 1 0 0 1-1.41 0l-2.59-2.58A5.99 5.99 0 0 1 11 18V9.04a1 1 0 0 0-2 0V18a5.98 5.98 0 0 1-3.07-1.51l-2.59 2.58a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41l2.77-2.77A5.95 5.95 0 0 1 4.07 13H1a1 1 0 1 1 0-2h3V8.41L.93 5.34a1 1 0 0 1 0-1.41 1 1 0 0 1 1.41 0l2.1 2.1h11.12l2.1-2.1a1 1 0 0 1 1.41 0 1 1 0 0 1 0 1.41L16 8.41V11h3a1 1 0 1 1 0 2h-3.07c-.1.67-.32 1.31-.63 1.89zM15 5H5a5 5 0 1 1 10 0z">`),
  _tmpl$64 = /*#__PURE__*/_$template(`<svg><path d="M17.16 6.42a8.03 8.03 0 0 0-3.58-3.58l-1.34 2.69a5.02 5.02 0 0 1 2.23 2.23l2.69-1.34zm0 7.16l-2.69-1.34a5.02 5.02 0 0 1-2.23 2.23l1.34 2.69a8.03 8.03 0 0 0 3.58-3.58zM6.42 2.84a8.03 8.03 0 0 0-3.58 3.58l2.69 1.34a5.02 5.02 0 0 1 2.23-2.23L6.42 2.84zM2.84 13.58a8.03 8.03 0 0 0 3.58 3.58l1.34-2.69a5.02 5.02 0 0 1-2.23-2.23l-2.69 1.34zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">`),
  _tmpl$65 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm3 1v2h10V3H5zm0 4v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9zm4 0v6h2v-6h-2zm-8 4v2h2v-2H5zm4 0v2h2v-2H9z">`),
  _tmpl$66 = /*#__PURE__*/_$template(`<svg><path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z">`),
  _tmpl$67 = /*#__PURE__*/_$template(`<svg><path d="M0 6c0-1.1.9-2 2-2h3l2-2h6l2 2h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm10 10a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z">`),
  _tmpl$68 = /*#__PURE__*/_$template(`<svg><path d="M1 10h3v10H1V10zM6 0h3v20H6V0zm5 8h3v12h-3V8zm5-4h3v16h-3V4z">`),
  _tmpl$69 = /*#__PURE__*/_$template(`<svg><path d="M19.95 11A10 10 0 1 1 9 .05V11h10.95zm-.08-2.6H11.6V.13a10 10 0 0 1 8.27 8.27z">`),
  _tmpl$70 = /*#__PURE__*/_$template(`<svg><path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z">`),
  _tmpl$71 = /*#__PURE__*/_$template(`<svg><path d="M10 15l-4 4v-4H2a2 2 0 0 1-2-2V3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-8zM5 7v2h2V7H5zm4 0v2h2V7H9zm4 0v2h2V7h-2z">`),
  _tmpl$72 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z">`),
  _tmpl$73 = /*#__PURE__*/_$template(`<svg><path d="M0 11l2-2 5 5L18 3l2 2L7 18z">`),
  _tmpl$74 = /*#__PURE__*/_$template(`<svg><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z">`),
  _tmpl$75 = /*#__PURE__*/_$template(`<svg><path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z">`),
  _tmpl$76 = /*#__PURE__*/_$template(`<svg><path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm-.7 10.54L5.75 9l1.41-1.41L10 10.4l2.83-2.82L14.24 9 10 13.24l-.7-.7z">`),
  _tmpl$77 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm8-10a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM7.46 9.3L11 5.75l1.41 1.41L9.6 10l2.82 2.83L11 14.24 6.76 10l.7-.7z">`),
  _tmpl$78 = /*#__PURE__*/_$template(`<svg><path d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zM2 10a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm10.54.7L9 14.25l-1.41-1.41L10.4 10 7.6 7.17 9 5.76 13.24 10l-.7.7z">`),
  _tmpl$79 = /*#__PURE__*/_$template(`<svg><path d="M0 10a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm10 8a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm.7-10.54L14.25 11l-1.41 1.41L10 9.6l-2.83 2.8L5.76 11 10 6.76l.7.7z">`),
  _tmpl$80 = /*#__PURE__*/_$template(`<svg><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z">`),
  _tmpl$81 = /*#__PURE__*/_$template(`<svg><path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z">`),
  _tmpl$82 = /*#__PURE__*/_$template(`<svg><path d="M7.03 2.6a3 3 0 0 1 5.94 0L15 3v1h1a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4zM5 6H4v12h12V6h-1v1H5V6zm5-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$83 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z">`),
  _tmpl$84 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM11.4 10l2.83-2.83-1.41-1.41L10 8.59 7.17 5.76 5.76 7.17 8.59 10l-2.83 2.83 1.41 1.41L10 11.41l2.83 2.83 1.41-1.41L11.41 10z">`),
  _tmpl$85 = /*#__PURE__*/_$template(`<svg><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z">`),
  _tmpl$86 = /*#__PURE__*/_$template(`<svg><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z">`),
  _tmpl$87 = /*#__PURE__*/_$template(`<svg><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1z">`),
  _tmpl$88 = /*#__PURE__*/_$template(`<svg><path d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z">`),
  _tmpl$89 = /*#__PURE__*/_$template(`<svg><path d="M4 11H2a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2V1h14v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zm0-2V5H2v4h2zm-2 8v-1h18v1l-4 2H6l-4-2z">`),
  _tmpl$90 = /*#__PURE__*/_$template(`<svg><path d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z">`),
  _tmpl$91 = /*#__PURE__*/_$template(`<svg><path d="M9 20v-1.7l.01-.24L15.07 12h2.94c1.1 0 1.99.89 1.99 2v4a2 2 0 0 1-2 2H9zm0-3.34V5.34l2.08-2.07a1.99 1.99 0 0 1 2.82 0l2.83 2.83a2 2 0 0 1 0 2.82L9 16.66zM0 1.99C0 .9.89 0 2 0h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$92 = /*#__PURE__*/_$template(`<svg><path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z">`),
  _tmpl$93 = /*#__PURE__*/_$template(`<svg><path d="M7 17H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-5l4 2v1H3v-1l4-2zM2 2v11h16V2H2z">`),
  _tmpl$94 = /*#__PURE__*/_$template(`<svg><path d="M18 16h2v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1v-1h2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v12zM4 4v9h12V4H4zm4 11v1h4v-1H8z">`),
  _tmpl$95 = /*#__PURE__*/_$template(`<svg><path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z">`),
  _tmpl$96 = /*#__PURE__*/_$template(`<svg><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2z">`),
  _tmpl$97 = /*#__PURE__*/_$template(`<svg><path d="M18 6V4H2v2h16zm0 4H2v6h16v-6zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm4 8h4v2H4v-2z">`),
  _tmpl$98 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-5h1a3 3 0 0 0 0-6H7.99a1 1 0 0 1 0-2H14V5h-3V3H9v2H8a3 3 0 1 0 0 6h4a1 1 0 1 1 0 2H6v2h3v2h2v-2z">`),
  _tmpl$99 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z">`),
  _tmpl$100 = /*#__PURE__*/_$template(`<svg><path d="M15 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h2V0h2v2h6V0h2v2zM3 6v12h14V6H3zm6 5V9h2v2h2v2h-2v2H9v-2H7v-2h2z">`),
  _tmpl$101 = /*#__PURE__*/_$template(`<svg><path d="M5 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm5-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$102 = /*#__PURE__*/_$template(`<svg><path d="M10 0l10 10-10 10L0 10 10 0zM6 10v3h2v-3h3v3l4-4-4-4v3H8a2 2 0 0 0-2 2z">`),
  _tmpl$103 = /*#__PURE__*/_$template(`<svg><path d="M9 10V8h2v2h2v2h-2v2H9v-2H7v-2h2zm-5 8h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z">`),
  _tmpl$104 = /*#__PURE__*/_$template(`<svg><path d="M4 18h12V6h-4V2H4v16zm-2 1V0h12l4 4v16H2v-1z">`),
  _tmpl$105 = /*#__PURE__*/_$template(`<svg><path d="M10 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$106 = /*#__PURE__*/_$template(`<svg><path d="M10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$107 = /*#__PURE__*/_$template(`<svg><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z">`),
  _tmpl$108 = /*#__PURE__*/_$template(`<svg><path d="M6 6V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h4zm2 0h4a2 2 0 0 1 2 2v4h4V2H8v4zM2 8v10h10V8H2zm4 4v-2h2v2h2v2H8v2H6v-2H4v-2h2z">`),
  _tmpl$109 = /*#__PURE__*/_$template(`<svg><path d="M14 16H6a2 2 0 0 1-2-2V6H0V4h4V0h2v14h14v2h-4v4h-2v-4zm0-3V6H7V4h7a2 2 0 0 1 2 2v7h-2z">`),
  _tmpl$110 = /*#__PURE__*/_$template(`<svg><path d="M9.77 11.5l5.34 3.91c.44.33 1.24.59 1.79.59H20L6.89 6.38A3.5 3.5 0 1 0 5.5 8.37L7.73 10 5.5 11.63a3.5 3.5 0 1 0 1.38 1.99l2.9-2.12zM3.5 7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM15.1 4.59A3.53 3.53 0 0 1 16.9 4H20l-7.5 5.5L10.45 8l4.65-3.41z">`),
  _tmpl$111 = /*#__PURE__*/_$template(`<svg><path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z">`),
  _tmpl$112 = /*#__PURE__*/_$template(`<svg><path d="M3.33 8L10 12l10-6-10-6L0 6h10v2H3.33zM0 8v8l2-2.22V9.2L0 8zm10 12l-5-3-2-1.2v-6l7 4.2 7-4.2v6L10 20z">`),
  _tmpl$113 = /*#__PURE__*/_$template(`<svg><path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z">`),
  _tmpl$114 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 5h2v6H9V5zm0 8h2v2H9v-2z">`),
  _tmpl$115 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 5v6h2V5H9zm0 8v2h2v-2H9z">`),
  _tmpl$116 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7.88 7.88l-3.54 7.78 7.78-3.54 3.54-7.78-7.78 3.54zM10 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">`),
  _tmpl$117 = /*#__PURE__*/_$template(`<svg><path d="M10.5 20H0V7l5 3.33V7l5 3.33V7l5 3.33V0h5v20h-9.5z">`),
  _tmpl$118 = /*#__PURE__*/_$template(`<svg><path d="M1 5l9 5-9 5V5zm9 0l9 5-9 5V5z">`),
  _tmpl$119 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm6 0v12h8V4H6zM2 5v2h2V5H2zm0 4v2h2V9H2zm0 4v2h2v-2H2zm14-8v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zM8 7l5 3-5 3V7z">`),
  _tmpl$120 = /*#__PURE__*/_$template(`<svg><path d="M12 12l8-8V0H0v4l8 8v8l4-4v-4z">`),
  _tmpl$121 = /*#__PURE__*/_$template(`<svg><path d="M7.667 12H2v8H0V0h12l.333 2H20l-3 6 3 6H8l-.333-2z">`),
  _tmpl$122 = /*#__PURE__*/_$template(`<svg><path d="M13 7v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7L5 5V3h10v2l-2 2zM9 8v1a1 1 0 1 0 2 0V8a1 1 0 0 0-2 0zM5 0h10v2H5V0z">`),
  _tmpl$123 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2zm7 4V8h2v2h2v2h-2v2H9v-2H7v-2h2z">`),
  _tmpl$124 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2 2v10h16V6H2z">`),
  _tmpl$125 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z">`),
  _tmpl$126 = /*#__PURE__*/_$template(`<svg><path d="M3 19V1h8a5 5 0 0 1 3.88 8.16A5.5 5.5 0 0 1 11.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 1 0 0-5zM7 4v4h3a2 2 0 1 0 0-4H7z">`),
  _tmpl$127 = /*#__PURE__*/_$template(`<svg><path d="M16 9v8h-2V9h-4V7h10v2h-4zM8 5v12H6V5H0V3h15v2H8z">`),
  _tmpl$128 = /*#__PURE__*/_$template(`<svg><path d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z">`),
  _tmpl$129 = /*#__PURE__*/_$template(`<svg><path d="M16 9A6 6 0 1 1 4 9V1h3v8a3 3 0 0 0 6 0V1h3v8zM2 17h16v2H2v-2z">`),
  _tmpl$130 = /*#__PURE__*/_$template(`<svg><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z">`),
  _tmpl$131 = /*#__PURE__*/_$template(`<svg><path d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0 1 10 .76 3 3 0 0 1 14.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$132 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-2.25a8 8 0 0 0 4-2.46V9a2 2 0 0 1-2-2V3.07a7.95 7.95 0 0 0-3-1V3a2 2 0 0 1-2 2v1a2 2 0 0 1-2 2v2h3a2 2 0 0 1 2 2v5.75zm-4 0V15a2 2 0 0 1-2-2v-1h-.5A1.5 1.5 0 0 1 4 10.5V8H2.25A8.01 8.01 0 0 0 8 17.75z">`),
  _tmpl$133 = /*#__PURE__*/_$template(`<svg><path d="M17 16a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4.01V4a1 1 0 0 1 1-1 1 1 0 0 1 1 1v6h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v8h1V1a1 1 0 1 1 2 0v9h1V2a1 1 0 0 1 1-1 1 1 0 0 1 1 1v13h1V9a1 1 0 0 1 1-1h1v8z">`),
  _tmpl$134 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10.4 5.6A5 5 0 1 0 15 12V5l-2.6 2.6zM10 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM6 3v2h4V3H6zM4 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$135 = /*#__PURE__*/_$template(`<svg><path d="M16 8A6 6 0 1 0 4 8v11H2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2V8a8 8 0 1 1 16 0v3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2V8zm-4 2h3v10h-3V10zm-7 0h3v10H5V10z">`),
  _tmpl$136 = /*#__PURE__*/_$template(`<svg><path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z">`),
  _tmpl$137 = /*#__PURE__*/_$template(`<svg><path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z">`),
  _tmpl$138 = /*#__PURE__*/_$template(`<svg><path d="M10 0s8 7.58 8 12a8 8 0 1 1-16 0c0-1.5.91-3.35 2.12-5.15A3 3 0 0 0 10 6V0zM8 0a3 3 0 1 0 0 6V0z">`),
  _tmpl$139 = /*#__PURE__*/_$template(`<svg><path d="M3 18a7 7 0 0 1 4-6.33V8.33A7 7 0 0 1 3 2H1V0h18v2h-2a7 7 0 0 1-4 6.33v3.34A7 7 0 0 1 17 18h2v2H1v-2h2zM5 2a5 5 0 0 0 4 4.9V10h2V6.9A5 5 0 0 0 15 2H5z">`),
  _tmpl$140 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM5 9l2-2 2 2 4-4 2 2-6 6-4-4z">`),
  _tmpl$141 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM9 8V5h2v3h3l-4 4-4-4h3z">`),
  _tmpl$142 = /*#__PURE__*/_$template(`<svg><path d="M14 14h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2zM0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4 2h12v2H4V4zm0 3h12v2H4V7zm0 3h12v2H4v-2z">`),
  _tmpl$143 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm14 12h4V2H2v12h4c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2z">`),
  _tmpl$144 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM5 6v8l-4-4 4-4z">`),
  _tmpl$145 = /*#__PURE__*/_$template(`<svg><path d="M1 1h18v2H1V1zm6 8h12v2H7V9zm-6 8h18v2H1v-2zM7 5h12v2H7V5zm0 8h12v2H7v-2zM1 6l4 4-4 4V6z">`),
  _tmpl$146 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z">`),
  _tmpl$147 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM9 11v4h2V9H9v2zm0-6v2h2V5H9z">`),
  _tmpl$148 = /*#__PURE__*/_$template(`<svg><path d="M12.26 11.74L10 14H8v2H6v2l-2 2H0v-4l8.26-8.26a6 6 0 1 1 4 4zm4.86-4.62A3 3 0 0 0 15 2a3 3 0 0 0-2.12.88l4.24 4.24z">`),
  _tmpl$149 = /*#__PURE__*/_$template(`<svg><path d="M0 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6zm2 0v2h2V6H2zm1 3v2h2V9H3zm-1 3v2h2v-2H2zm3 0v2h10v-2H5zm11 0v2h2v-2h-2zM6 9v2h2V9H6zm3 0v2h2V9H9zm3 0v2h2V9h-2zm3 0v2h2V9h-2zM5 6v2h2V6H5zm3 0v2h2V6H8zm3 0v2h2V6h-2zm3 0v2h4V6h-4z">`),
  _tmpl$150 = /*#__PURE__*/_$template(`<svg><path d="M10 1l10 6-10 6L0 7l10-6zm6.67 10L20 13l-10 6-10-6 3.33-2L10 15l6.67-4z">`),
  _tmpl$151 = /*#__PURE__*/_$template(`<svg><path d="M0 6l10-6 10 6v2H0V6zm0 12h20v2H0v-2zm2-2h16v2H2v-2zm0-8h4v8H2V8zm6 0h4v8H8V8zm6 0h4v8h-4V8z">`),
  _tmpl$152 = /*#__PURE__*/_$template(`<svg><path d="M7 13.33a7 7 0 1 1 6 0V16H7v-2.67zM7 17h6v1.5c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0 1 7 18.5V17zm2-5.1V14h2v-2.1a5 5 0 1 0-2 0z">`),
  _tmpl$153 = /*#__PURE__*/_$template(`<svg><path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z">`),
  _tmpl$154 = /*#__PURE__*/_$template(`<svg><path d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2v3zM0 3h10v2H0V3zm0 8h10v2H0v-2zm0-4h10v2H0V7zm0 8h10v2H0v-2z">`),
  _tmpl$155 = /*#__PURE__*/_$template(`<svg><path d="M1 4h2v2H1V4zm4 0h14v2H5V4zM1 9h2v2H1V9zm4 0h14v2H5V9zm-4 5h2v2H1v-2zm4 0h14v2H5v-2z">`),
  _tmpl$156 = /*#__PURE__*/_$template(`<svg><path d="M17 12h-6v4h1v4H8v-4h1v-4H3v4h1v4H0v-4h1v-4a2 2 0 0 1 2-2h6V6H7V0h6v6h-2v4h6a2 2 0 0 1 2 2v4h1v4h-4v-4h1v-4z">`),
  _tmpl$157 = /*#__PURE__*/_$template(`<svg><path d="M0 0l20 8-8 4-2 8z">`),
  _tmpl$158 = /*#__PURE__*/_$template(`<svg><path d="M18 11v7a2 2 0 0 1-4 0v-5h-2V3a3 3 0 0 1 3-3h3v11zM4 10a2 2 0 0 1-2-2V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v4h1V1a1 1 0 0 1 2 0v7a2 2 0 0 1-2 2v8a2 2 0 0 1-4 0v-8z">`),
  _tmpl$159 = /*#__PURE__*/_$template(`<svg><path d="M13 18h1v2H0v-2h1V2c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v16zM3 2v6h8V2H3zm10 8h1a2 2 0 0 1 2 2v3a1 1 0 0 0 2 0v-5l-2-2V6l-2-2 1-1 5 5v7a3 3 0 0 1-6 0v-3h-1v-2z">`),
  _tmpl$160 = /*#__PURE__*/_$template(`<svg><path d="M2 12h18v6h-2v-2H2v2H0V2h2v10zm8-6h8a2 2 0 0 1 2 2v3H10V6zm-4 5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z">`),
  _tmpl$161 = /*#__PURE__*/_$template(`<svg><path d="M8 1.88V0h2v16h10l-4 4H2l-2-4h8v-2H0v-.26A24.03 24.03 0 0 0 8 1.88zM19.97 14H10v-.36A11.94 11.94 0 0 0 10 .36v-.2A16.01 16.01 0 0 1 19.97 14z">`),
  _tmpl$162 = /*#__PURE__*/_$template(`<svg><path d="M5.33 12.77A4 4 0 1 1 3 5.13V5a4 4 0 0 1 5.71-3.62 3.5 3.5 0 0 1 6.26 1.66 2.5 2.5 0 0 1 2 2.08 4 4 0 1 1-2.7 7.49A5.02 5.02 0 0 1 12 14.58V18l2 1v1H6v-1l2-1v-3l-2.67-2.23zM5 10l3 3v-3H5z">`),
  _tmpl$163 = /*#__PURE__*/_$template(`<svg><path d="M12 16H9l2-4.5V9c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v2.5l2 4.5h-3v4h-4v-4zm-5-3h2V9a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4h2v7h4v-7zM5 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z">`),
  _tmpl$164 = /*#__PURE__*/_$template(`<svg><path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z">`),
  _tmpl$165 = /*#__PURE__*/_$template(`<svg><path d="M10 20S3 10.87 3 7a7 7 0 1 1 14 0c0 3.87-7 13-7 13zm0-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">`),
  _tmpl$166 = /*#__PURE__*/_$template(`<svg><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">`),
  _tmpl$167 = /*#__PURE__*/_$template(`<svg><path d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">`),
  _tmpl$168 = /*#__PURE__*/_$template(`<svg><path d="M0 0l6 4 8-4 6 4v16l-6-4-8 4-6-4V0zm7 6v11l6-3V3L7 6z">`),
  _tmpl$169 = /*#__PURE__*/_$template(`<svg><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">`),
  _tmpl$170 = /*#__PURE__*/_$template(`<svg><path d="M9 18v-1.06A8 8 0 0 1 2 9h2a6 6 0 1 0 12 0h2a8 8 0 0 1-7 7.94V18h3v2H6v-2h3zM6 4a4 4 0 1 1 8 0v5a4 4 0 1 1-8 0V4z">`),
  _tmpl$171 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm5-9v2H5V9h10z">`),
  _tmpl$172 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm5-11H5v2h10V9z">`),
  _tmpl$173 = /*#__PURE__*/_$template(`<svg><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$174 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 3a6 6 0 0 1-11.32 0h11.32z">`),
  _tmpl$175 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 3H4.34a6 6 0 0 0 11.32 0z">`),
  _tmpl$176 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM7 13h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z">`),
  _tmpl$177 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM7 13a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H7z">`),
  _tmpl$178 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM6.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm7 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm2.16 6H4.34a6 6 0 0 1 11.32 0z">`),
  _tmpl$179 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM6.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm2.16 6a6 6 0 0 0-11.32 0h11.32z">`),
  _tmpl$180 = /*#__PURE__*/_$template(`<svg><path d="M4 9V6A6 6 0 0 1 9 .08V9H4zm0 2v3a6 6 0 1 0 12 0v-3H4zm12-2V6a6 6 0 0 0-5-5.92V9h5z">`),
  _tmpl$181 = /*#__PURE__*/_$template(`<svg><path d="M15.75 8l-3.74-3.75a3.99 3.99 0 0 1 6.82-3.08A4 4 0 0 1 15.75 8zm-13.9 7.3l9.2-9.19 2.83 2.83-9.2 9.2-2.82-2.84zm-1.4 2.83l2.11-2.12 1.42 1.42-2.12 2.12-1.42-1.42zM10 15l2-2v7h-2v-5z">`),
  _tmpl$182 = /*#__PURE__*/_$template(`<svg><path d="M20 2.5V0L6 2v12.17A3 3 0 0 0 5 14H3a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V5.71L18 4.3v7.88a3 3 0 0 0-1-.17h-2a3 3 0 0 0 0 6h2a3 3 0 0 0 3-3V2.5z">`),
  _tmpl$183 = /*#__PURE__*/_$template(`<svg><path d="M16 17a3 3 0 0 1-3 3h-2a3 3 0 0 1 0-6h2a3 3 0 0 1 1 .17V1l6-1v4l-4 .67V17zM0 3h12v2H0V3zm0 4h12v2H0V7zm0 4h12v2H0v-2zm0 4h6v2H0v-2z">`),
  _tmpl$184 = /*#__PURE__*/_$template(`<svg><path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$185 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z">`),
  _tmpl$186 = /*#__PURE__*/_$template(`<svg><path d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z">`),
  _tmpl$187 = /*#__PURE__*/_$template(`<svg><path d="M4 8a6 6 0 0 1 4.03-5.67 2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8zm8 10a2 2 0 1 1-4 0h4z">`),
  _tmpl$188 = /*#__PURE__*/_$template(`<svg><path d="M6 8v7h8V8a4 4 0 1 0-8 0zm2.03-5.67a2 2 0 1 1 3.95 0A6 6 0 0 1 16 8v6l3 2v1H1v-1l3-2V8a6 6 0 0 1 4.03-5.67zM12 18a2 2 0 1 1-4 0h4z">`),
  _tmpl$189 = /*#__PURE__*/_$template(`<svg><path d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z">`),
  _tmpl$190 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6h2v8H7V6zm4 0h2v8h-2V6z">`),
  _tmpl$191 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zM7 6v8h2V6H7zm4 0v8h2V6h-2z">`),
  _tmpl$192 = /*#__PURE__*/_$template(`<svg><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z">`),
  _tmpl$193 = /*#__PURE__*/_$template(`<svg><path d="M11 9.27V0l6 11-4 6H7l-4-6L9 0v9.27a2 2 0 1 0 2 0zM6 18h8v2H6v-2z">`),
  _tmpl$194 = /*#__PURE__*/_$template(`<svg><path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z">`),
  _tmpl$195 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11 9l-3-3-6 6h16l-5-5-2 2zm4-4a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">`),
  _tmpl$196 = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd d="M10 12v8A10 10 0 0 1 8.17.17L10 2h5a5 5 0 0 1 5 4.99v9.02A4 4 0 0 1 16 20v-2a2 2 0 1 0 0-4h-4l-2-2zm5.5-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$197 = /*#__PURE__*/_$template(`<svg><path d="M11 12h6v-1l-3-1V2l3-1V0H3v1l3 1v8l-3 1v1h6v7l1 1 1-1v-7z">`),
  _tmpl$198 = /*#__PURE__*/_$template(`<svg><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM7 6l8 4-8 4V6z">`),
  _tmpl$199 = /*#__PURE__*/_$template(`<svg><path d="M4 4l12 6-12 6z">`),
  _tmpl$200 = /*#__PURE__*/_$template(`<svg><path d="M20 14v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-2-2 2 2 0 0 0-2 2v2H6a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2h2V6c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v4h-2a2 2 0 0 0-2 2 2 2 0 0 0 2 2h2z">`),
  _tmpl$201 = /*#__PURE__*/_$template(`<svg><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z">`),
  _tmpl$202 = /*#__PURE__*/_$template(`<svg><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z">`),
  _tmpl$203 = /*#__PURE__*/_$template(`<svg><path d="M17.4 18H20v2H0v-2h2.6L8 0h4l5.4 18zm-3.2-4H5.8l-1.2 4h10.8l-1.2-4zm-2.4-8H8.2L7 10h6l-1.2-4z">`),
  _tmpl$204 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm2-13c0 .28-.21.8-.42 1L10 9.58c-.57.58-1 1.6-1 2.42v1h2v-1c0-.29.21-.8.42-1L13 9.42c.57-.58 1-1.6 1-2.42a4 4 0 1 0-8 0h2a2 2 0 1 1 4 0zm-3 8v2h2v-2H9z">`),
  _tmpl$205 = /*#__PURE__*/_$template(`<svg><path d="M0 2h20v4H0V2zm0 8h20v2H0v-2zm0 6h20v2H0v-2z">`),
  _tmpl$206 = /*#__PURE__*/_$template(`<svg><path d="M12 10a2 2 0 0 1-3.41 1.41A2 2 0 0 1 10 8V0a9.97 9.97 0 0 1 10 10h-8zm7.9 1.41A10 10 0 1 1 8.59.1v2.03a8 8 0 1 0 9.29 9.29h2.02zm-4.07 0a6 6 0 1 1-7.25-7.25v2.1a3.99 3.99 0 0 0-1.4 6.57 4 4 0 0 0 6.56-1.42h2.1z">`),
  _tmpl$207 = /*#__PURE__*/_$template(`<svg><path d="M20 9v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h13.8L.74 1.97 1.26.03 20 5.06V9zm-5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM2 8v2h16V8H2zm1.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6.5-1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$208 = /*#__PURE__*/_$template(`<svg><path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z">`),
  _tmpl$209 = /*#__PURE__*/_$template(`<svg><path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z">`),
  _tmpl$210 = /*#__PURE__*/_$template(`<svg><path d="M18 17v-2.99A4 4 0 0 0 14 10h-3v5L5 9l6-6v5h3a6 6 0 0 1 6 6v3h-2zM6 6V3L0 9l6 6v-3L3 9l3-3z">`),
  _tmpl$211 = /*#__PURE__*/_$template(`<svg><path d="M15 17v-2.99A4 4 0 0 0 11 10H8v5L2 9l6-6v5h3a6 6 0 0 1 6 6v3h-2z">`),
  _tmpl$212 = /*#__PURE__*/_$template(`<svg><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z">`),
  _tmpl$213 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h14l4 4v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5 0v6h10V2H5zm6 1h3v4h-3V3z">`),
  _tmpl$214 = /*#__PURE__*/_$template(`<svg><path d="M2.8 15.8L0 13v7h7l-2.8-2.8 4.34-4.32-1.42-1.42L2.8 15.8zM17.2 4.2L20 7V0h-7l2.8 2.8-4.34 4.32 1.42 1.42L17.2 4.2zm-1.4 13L13 20h7v-7l-2.8 2.8-4.32-4.34-1.42 1.42 4.33 4.33zM4.2 2.8L7 0H0v7l2.8-2.8 4.32 4.34 1.42-1.42L4.2 2.8z">`),
  _tmpl$215 = /*#__PURE__*/_$template(`<svg><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z">`),
  _tmpl$216 = /*#__PURE__*/_$template(`<svg><path d="M0 0l20 10L0 20V0zm0 8v4l10-2L0 8z">`),
  _tmpl$217 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9zm0 7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2zM12 2v2h2V2h-2zm4 0v2h2V2h-2zm-4 7v2h2V9h-2zm4 0v2h2V9h-2zm-4 7v2h2v-2h-2zm4 0v2h2v-2h-2z">`),
  _tmpl$218 = /*#__PURE__*/_$template(`<svg><path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7L4.5 5.5l1.42 1.4L9 3.84z">`),
  _tmpl$219 = /*#__PURE__*/_$template(`<svg><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z">`),
  _tmpl$220 = /*#__PURE__*/_$template(`<svg><path d="M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z">`),
  _tmpl$221 = /*#__PURE__*/_$template(`<svg><path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z">`),
  _tmpl$222 = /*#__PURE__*/_$template(`<svg><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$223 = /*#__PURE__*/_$template(`<svg><path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z">`),
  _tmpl$224 = /*#__PURE__*/_$template(`<svg><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z">`),
  _tmpl$225 = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd d="M4.16 4.16l1.42 1.42A6.99 6.99 0 0 0 10 18a7 7 0 0 0 4.42-12.42l1.42-1.42a9 9 0 1 1-11.69 0zM9 0h2v8H9V0z">`),
  _tmpl$226 = /*#__PURE__*/_$template(`<svg><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z">`),
  _tmpl$227 = /*#__PURE__*/_$template(`<svg><path d="M9 11.73a2 2 0 1 1 2 0V20H9v-8.27zm5.24 2.51l-1.41-1.41A3.99 3.99 0 0 0 10 6a4 4 0 0 0-2.83 6.83l-1.41 1.41a6 6 0 1 1 8.49 0zm2.83 2.83l-1.41-1.41a8 8 0 1 0-11.31 0l-1.42 1.41a10 10 0 1 1 14.14 0z">`),
  _tmpl$228 = /*#__PURE__*/_$template(`<svg><path d="M17 10.27V4.99a1 1 0 0 0-2 0V15a5 5 0 0 1-10 0v-1.08A6 6 0 0 1 0 8V2C0 .9.9 0 2 0h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1H2v6a4 4 0 1 0 8 0V2H9a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1a2 2 0 0 1 2 2v6a6 6 0 0 1-5 5.92V15a3 3 0 0 0 6 0V5a3 3 0 0 1 6 0v5.27a2 2 0 1 1-2 0z">`),
  _tmpl$229 = /*#__PURE__*/_$template(`<svg><path d="M18 9.87V20H2V9.87a4.25 4.25 0 0 0 3-.38V14h10V9.5a4.26 4.26 0 0 0 3 .37zM3 0h4l-.67 6.03A3.43 3.43 0 0 1 3 9C1.34 9 .42 7.73.95 6.15L3 0zm5 0h4l.7 6.3c.17 1.5-.91 2.7-2.42 2.7h-.56A2.38 2.38 0 0 1 7.3 6.3L8 0zm5 0h4l2.05 6.15C19.58 7.73 18.65 9 17 9a3.42 3.42 0 0 1-3.33-2.97L13 0z">`),
  _tmpl$230 = /*#__PURE__*/_$template(`<svg><path d="M0 0h20v5H0V0zm0 7h20v4H0V7zm0 6h20v3H0v-3zm0 5h20v2H0v-2z">`),
  _tmpl$231 = /*#__PURE__*/_$template(`<svg><path d="M18 12v1H8v5l-6-6 6-6v5h8V2h2z">`),
  _tmpl$232 = /*#__PURE__*/_$template(`<svg><path d="M3.5 13H12v5l6-6-6-6v5H4V2H2v11z">`),
  _tmpl$233 = /*#__PURE__*/_$template(`<svg><path d="M9 6a4 4 0 1 1 8 0v8h3l-4 4-4-4h3V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v8a4 4 0 1 1-8 0V6H0l4-4 4 4H5v8a2 2 0 0 0 2 2 2 2 0 0 0 2-2V6z">`),
  _tmpl$234 = /*#__PURE__*/_$template(`<svg><path d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 0v14h12V2H4zm6 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2z">`),
  _tmpl$235 = /*#__PURE__*/_$template(`<svg><path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$236 = /*#__PURE__*/_$template(`<svg><path d="M17.94 11H13V9h4.94A8 8 0 0 0 11 2.06V7H9V2.06A8 8 0 0 0 2.06 9H7v2H2.06A8 8 0 0 0 9 17.94V13h2v4.94A8 8 0 0 0 17.94 11zM10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20z">`),
  _tmpl$237 = /*#__PURE__*/_$template(`<svg><path d="M0 0h6v6H0V0zm2 2v2h2V2H2zm12-2h6v6h-6V0zm2 2v2h2V2h-2zm-2 12h6v6h-6v-6zm2 2v2h2v-2h-2zM0 14h6v6H0v-6zm2 2v2h2v-2H2zM6 2h8v2H6V2zm0 14h8v2H6v-2zM16 6h2v8h-2V6zM2 6h2v8H2V6zm5 1h6v2H7V7zm2 2h2v4H9V9z">`),
  _tmpl$238 = /*#__PURE__*/_$template(`<svg><path d="M12 5h-2v12H8V3h8v2h-2v12h-2V5zM8 3a4 4 0 1 0 0 8V3z">`),
  _tmpl$239 = /*#__PURE__*/_$template(`<svg><path d="M9 11.17V7h2v4.17a3 3 0 1 1-2 0zm-1-.63a4 4 0 1 0 4 0V4a2 2 0 1 0-4 0v6.53zM6 9.53V4a4 4 0 0 1 8 0v5.53A5.99 5.99 0 0 1 10 20 6 6 0 0 1 6 9.53z">`),
  _tmpl$240 = /*#__PURE__*/_$template(`<svg><path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z">`),
  _tmpl$241 = /*#__PURE__*/_$template(`<svg><path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z">`),
  _tmpl$242 = /*#__PURE__*/_$template(`<svg><path d="M20 12v5H0v-5a2 2 0 1 0 0-4V3h20v5a2 2 0 1 0 0 4zM3 5v10h14V5H3zm7 7.08l-2.92 2.04L8.1 10.7 5.27 8.56l3.56-.08L10 5.12l1.17 3.36 3.56.08-2.84 2.15 1.03 3.4L10 12.09z">`),
  _tmpl$243 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z">`),
  _tmpl$244 = /*#__PURE__*/_$template(`<svg><path d="M16.32 7.1A8 8 0 1 1 9 4.06V2h2v2.06c1.46.18 2.8.76 3.9 1.62l1.46-1.46 1.42 1.42-1.46 1.45zM10 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM7 0h6v2H7V0zm5.12 8.46l1.42 1.42L10 13.4 8.59 12l3.53-3.54z">`),
  _tmpl$245 = /*#__PURE__*/_$template(`<svg><path d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z">`),
  _tmpl$246 = /*#__PURE__*/_$template(`<svg><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z">`),
  _tmpl$247 = /*#__PURE__*/_$template(`<svg><path d="M13 18H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zM4 5v6h5V5H4zm7 0v6h5V5h-5zM5 2v1h10V2H5zm.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$248 = /*#__PURE__*/_$template(`<svg><path d="M2 14v-3H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h8l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3zm13.86-5L13 4H7L4.14 9h11.72zM5.5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$249 = /*#__PURE__*/_$template(`<svg><path d="M14 5h2v14H4V5h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1zm3 0h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V5zM3 5v14H2a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h1zm5-1v1h4V4H8z">`),
  _tmpl$250 = /*#__PURE__*/_$template(`<svg><path d="M12 3h2l4 7h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1l4-7h2V1h4v2zm3.86 7L13 5H7l-2.86 5h11.72zM5.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$251 = /*#__PURE__*/_$template(`<svg><path d="M12 18H8l-2 2H3l2-2a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2l2 2h-3l-2-2zM5 5v6h10V5H5zm1.5 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM8 2v1h4V2H8z">`),
  _tmpl$252 = /*#__PURE__*/_$template(`<svg><path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z">`),
  _tmpl$253 = /*#__PURE__*/_$template(`<svg><path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z">`),
  _tmpl$254 = /*#__PURE__*/_$template(`<svg><path d="M17 16v4h-2v-4h-2v-3h6v3h-2zM1 9h6v3H1V9zm6-4h6v3H7V5zM3 0h2v8H3V0zm12 0h2v12h-2V0zM9 0h2v4H9V0zM3 12h2v8H3v-8zm6-4h2v12H9V8z">`),
  _tmpl$255 = /*#__PURE__*/_$template(`<svg><path d="M13 10v6H7v-6H2l8-8 8 8h-5zM0 18h20v2H0v-2z">`),
  _tmpl$256 = /*#__PURE__*/_$template(`<svg><path d="M15 8v2h-4V4h2l-3-4-3 4h2v8H5V9.73a2 2 0 1 0-2 0V12a2 2 0 0 0 2 2h4v2.27a2 2 0 1 0 2 0V12h4a2 2 0 0 0 2-2V8h1V4h-4v4h1z">`),
  _tmpl$257 = /*#__PURE__*/_$template(`<svg><path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z">`),
  _tmpl$258 = /*#__PURE__*/_$template(`<svg><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z">`),
  _tmpl$259 = /*#__PURE__*/_$template(`<svg><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM7 6v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm-3.65 8.44a8 8 0 0 0 13.3 0 15.94 15.94 0 0 0-13.3 0z">`),
  _tmpl$260 = /*#__PURE__*/_$template(`<svg><path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm7 4v2a3 3 0 1 0 6 0V6a3 3 0 1 0-6 0zm11 9.14A15.93 15.93 0 0 0 10 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z">`),
  _tmpl$261 = /*#__PURE__*/_$template(`<svg><path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z">`),
  _tmpl$262 = /*#__PURE__*/_$template(`<svg><path d="M12 4h4.27a2 2 0 1 1 0 2h-2.14a9 9 0 0 1 4.84 7.25 2 2 0 1 1-2 .04 7 7 0 0 0-4.97-6V8H8v-.71a7 7 0 0 0-4.96 6 2 2 0 1 1-2-.04A9 9 0 0 1 5.86 6H3.73a2 2 0 1 1 0-2H8V3h4v1z">`),
  _tmpl$263 = /*#__PURE__*/_$template(`<svg><path d="M16 7l4-4v14l-4-4v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v3zm-8 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$264 = /*#__PURE__*/_$template(`<svg><path d="M16 16v2H4v-2H0V4h4V2h12v2h4v12h-4zM14 5.5V4H6v12h8V5.5zm2 .5v8h2V6h-2zM4 6H2v8h2V6z">`),
  _tmpl$265 = /*#__PURE__*/_$template(`<svg><path d="M12 4H8v12h4V4zm2 0v12h4V4h-4zM6 4H2v12h4V4zM0 2h20v16H0V2z">`),
  _tmpl$266 = /*#__PURE__*/_$template(`<svg><path d="M12.81 4.36l-1.77 1.78a4 4 0 0 0-4.9 4.9l-2.76 2.75C2.06 12.79.96 11.49.2 10a11 11 0 0 1 12.6-5.64zm3.8 1.85c1.33 1 2.43 2.3 3.2 3.79a11 11 0 0 1-12.62 5.64l1.77-1.78a4 4 0 0 0 4.9-4.9l2.76-2.75zm-.25-3.99l1.42 1.42L3.64 17.78l-1.42-1.42L16.36 2.22z">`),
  _tmpl$267 = /*#__PURE__*/_$template(`<svg><path d="M0 3h20v2H0V3zm0 4h20v2H0V7zm0 4h20v2H0v-2zm0 4h20v2H0v-2z">`),
  _tmpl$268 = /*#__PURE__*/_$template(`<svg><path d="M.2 10a11 11 0 0 1 19.6 0A11 11 0 0 1 .2 10zm9.8 4a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z">`),
  _tmpl$269 = /*#__PURE__*/_$template(`<svg><path d="M0 0h9v9H0V0zm2 2v5h5V2H2zm-2 9h9v9H0v-9zm2 2v5h5v-5H2zm9-13h9v9h-9V0zm2 2v5h5V2h-5zm-2 9h9v9h-9v-9zm2 2v5h5v-5h-5z">`),
  _tmpl$270 = /*#__PURE__*/_$template(`<svg><path d="M7 7H3v6h4l5 5V2L7 7zm8.54 6.54l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z">`),
  _tmpl$271 = /*#__PURE__*/_$template(`<svg><path d="M9 7H5v6h4l5 5V2L9 7z">`),
  _tmpl$272 = /*#__PURE__*/_$template(`<svg><path d="M15 8.59l-2.12-2.13-1.42 1.42L13.6 10l-2.13 2.12 1.42 1.42L15 11.4l2.12 2.13 1.42-1.42L16.4 10l2.13-2.12-1.42-1.42L15 8.6zM4 7H0v6h4l5 5V2L4 7z">`),
  _tmpl$273 = /*#__PURE__*/_$template(`<svg><path d="M5 7H1v6h4l5 5V2L5 7zm11.36 9.36l-1.41-1.41a6.98 6.98 0 0 0 0-9.9l1.41-1.41a8.97 8.97 0 0 1 0 12.72zm-2.82-2.82l-1.42-1.42a3 3 0 0 0 0-4.24l1.42-1.42a4.98 4.98 0 0 1 0 7.08z">`),
  _tmpl$274 = /*#__PURE__*/_$template(`<svg><path d="M0 4c0-1.1.9-2 2-2h15a1 1 0 0 1 1 1v1H2v1h17a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm16.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z">`),
  _tmpl$275 = /*#__PURE__*/_$template(`<svg><path d="M11 9h2v2H9V7h2v2zm-5.82 6.08a6.98 6.98 0 0 1 0-10.16L6 0h8l.82 4.92a6.98 6.98 0 0 1 0 10.16L14 20H6l-.82-4.92zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z">`),
  _tmpl$276 = /*#__PURE__*/_$template(`<svg><path d="M6.47 9.8A5 5 0 0 1 .2 3.22l3.95 3.95 2.82-2.83L3.03.41a5 5 0 0 1 6.4 6.68l10 10-2.83 2.83L6.47 9.8z">`),
  _tmpl$277 = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 4 4 0 1 1 0-8 4 4 0 1 0 0-8zm0 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z">`),
  _tmpl$278 = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM7 7V5h2v2h2v2H9v2H7V9H5V7h2z">`),
  _tmpl$279 = /*#__PURE__*/_$template(`<svg><path fill-rule=evenodd d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zM5 7h6v2H5V7z">`);
// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Icon set: zondicons | License: MIT (MIT_URL)
import { mergeProps } from 'solid-js';
import { zondiconsDefaultProps } from './zondiconsdefaultProps';
export function ZondiconAddOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
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
export function ZondiconAddSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$2 = _$getNextElement(_tmpl$2);
    _$spread(_el$2, _$mergeProps(merged, {
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
    return _el$2;
  })();
}
export function ZondiconAdjust(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$3 = _$getNextElement(_tmpl$3);
    _$spread(_el$3, _$mergeProps(merged, {
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
    return _el$3;
  })();
}
export function ZondiconAirplane(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$4 = _$getNextElement(_tmpl$4);
    _$spread(_el$4, _$mergeProps(merged, {
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
    return _el$4;
  })();
}
export function ZondiconAlbum(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$5 = _$getNextElement(_tmpl$5);
    _$spread(_el$5, _$mergeProps(merged, {
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
    return _el$5;
  })();
}
export function ZondiconAlignCenter(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$6 = _$getNextElement(_tmpl$6);
    _$spread(_el$6, _$mergeProps(merged, {
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
    return _el$6;
  })();
}
export function ZondiconAlignJustified(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$7 = _$getNextElement(_tmpl$7);
    _$spread(_el$7, _$mergeProps(merged, {
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
    return _el$7;
  })();
}
export function ZondiconAlignLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$8 = _$getNextElement(_tmpl$8);
    _$spread(_el$8, _$mergeProps(merged, {
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
    return _el$8;
  })();
}
export function ZondiconAlignRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$9 = _$getNextElement(_tmpl$9);
    _$spread(_el$9, _$mergeProps(merged, {
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
    return _el$9;
  })();
}
export function ZondiconAnchor(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$0 = _$getNextElement(_tmpl$0);
    _$spread(_el$0, _$mergeProps(merged, {
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
    return _el$0;
  })();
}
export function ZondiconAnnouncement(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$1 = _$getNextElement(_tmpl$1);
    _$spread(_el$1, _$mergeProps(merged, {
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
    return _el$1;
  })();
}
export function ZondiconApparel(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$10 = _$getNextElement(_tmpl$10);
    _$spread(_el$10, _$mergeProps(merged, {
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
    return _el$10;
  })();
}
export function ZondiconArrowDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$11 = _$getNextElement(_tmpl$11);
    _$spread(_el$11, _$mergeProps(merged, {
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
    return _el$11;
  })();
}
export function ZondiconArrowLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$12 = _$getNextElement(_tmpl$12);
    _$spread(_el$12, _$mergeProps(merged, {
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
    return _el$12;
  })();
}
export function ZondiconArrowOutlineDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$13 = _$getNextElement(_tmpl$13);
    _$spread(_el$13, _$mergeProps(merged, {
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
    return _el$13;
  })();
}
export function ZondiconArrowOutlineLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$14 = _$getNextElement(_tmpl$14);
    _$spread(_el$14, _$mergeProps(merged, {
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
    return _el$14;
  })();
}
export function ZondiconArrowOutlineRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$15 = _$getNextElement(_tmpl$15);
    _$spread(_el$15, _$mergeProps(merged, {
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
    return _el$15;
  })();
}
export function ZondiconArrowOutlineUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$16 = _$getNextElement(_tmpl$16);
    _$spread(_el$16, _$mergeProps(merged, {
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
    return _el$16;
  })();
}
export function ZondiconArrowRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$17 = _$getNextElement(_tmpl$17);
    _$spread(_el$17, _$mergeProps(merged, {
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
    return _el$17;
  })();
}
export function ZondiconArrowThickDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$18 = _$getNextElement(_tmpl$18);
    _$spread(_el$18, _$mergeProps(merged, {
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
    return _el$18;
  })();
}
export function ZondiconArrowThickLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$19 = _$getNextElement(_tmpl$19);
    _$spread(_el$19, _$mergeProps(merged, {
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
    return _el$19;
  })();
}
export function ZondiconArrowThickRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$20 = _$getNextElement(_tmpl$20);
    _$spread(_el$20, _$mergeProps(merged, {
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
    return _el$20;
  })();
}
export function ZondiconArrowThickUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$21 = _$getNextElement(_tmpl$21);
    _$spread(_el$21, _$mergeProps(merged, {
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
    return _el$21;
  })();
}
export function ZondiconArrowThinDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$22 = _$getNextElement(_tmpl$22);
    _$spread(_el$22, _$mergeProps(merged, {
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
    return _el$22;
  })();
}
export function ZondiconArrowThinLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$23 = _$getNextElement(_tmpl$23);
    _$spread(_el$23, _$mergeProps(merged, {
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
    return _el$23;
  })();
}
export function ZondiconArrowThinRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$24 = _$getNextElement(_tmpl$24);
    _$spread(_el$24, _$mergeProps(merged, {
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
    return _el$24;
  })();
}
export function ZondiconArrowThinUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$25 = _$getNextElement(_tmpl$25);
    _$spread(_el$25, _$mergeProps(merged, {
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
    return _el$25;
  })();
}
export function ZondiconArrowUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$26 = _$getNextElement(_tmpl$26);
    _$spread(_el$26, _$mergeProps(merged, {
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
    return _el$26;
  })();
}
export function ZondiconArtist(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$27 = _$getNextElement(_tmpl$27);
    _$spread(_el$27, _$mergeProps(merged, {
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
    return _el$27;
  })();
}
export function ZondiconAtSymbol(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$28 = _$getNextElement(_tmpl$28);
    _$spread(_el$28, _$mergeProps(merged, {
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
    return _el$28;
  })();
}
export function ZondiconAttachment(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$29 = _$getNextElement(_tmpl$29);
    _$spread(_el$29, _$mergeProps(merged, {
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
    return _el$29;
  })();
}
export function ZondiconBackspace(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$30 = _$getNextElement(_tmpl$30);
    _$spread(_el$30, _$mergeProps(merged, {
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
    return _el$30;
  })();
}
export function ZondiconBackwardStep(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$31 = _$getNextElement(_tmpl$31);
    _$spread(_el$31, _$mergeProps(merged, {
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
    return _el$31;
  })();
}
export function ZondiconBackward(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$32 = _$getNextElement(_tmpl$32);
    _$spread(_el$32, _$mergeProps(merged, {
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
    return _el$32;
  })();
}
export function ZondiconBadge(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$33 = _$getNextElement(_tmpl$33);
    _$spread(_el$33, _$mergeProps(merged, {
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
    return _el$33;
  })();
}
export function ZondiconBatteryFull(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$34 = _$getNextElement(_tmpl$34);
    _$spread(_el$34, _$mergeProps(merged, {
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
    return _el$34;
  })();
}
export function ZondiconBatteryHalf(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$35 = _$getNextElement(_tmpl$35);
    _$spread(_el$35, _$mergeProps(merged, {
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
    return _el$35;
  })();
}
export function ZondiconBatteryLow(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$36 = _$getNextElement(_tmpl$36);
    _$spread(_el$36, _$mergeProps(merged, {
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
    return _el$36;
  })();
}
export function ZondiconBeverage(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$37 = _$getNextElement(_tmpl$37);
    _$spread(_el$37, _$mergeProps(merged, {
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
    return _el$37;
  })();
}
export function ZondiconBlock(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$38 = _$getNextElement(_tmpl$38);
    _$spread(_el$38, _$mergeProps(merged, {
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
    return _el$38;
  })();
}
export function ZondiconBluetooth(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$39 = _$getNextElement(_tmpl$39);
    _$spread(_el$39, _$mergeProps(merged, {
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
    return _el$39;
  })();
}
export function ZondiconBolt(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$40 = _$getNextElement(_tmpl$40);
    _$spread(_el$40, _$mergeProps(merged, {
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
    return _el$40;
  })();
}
export function ZondiconBookReference(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$41 = _$getNextElement(_tmpl$41);
    _$spread(_el$41, _$mergeProps(merged, {
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
    return _el$41;
  })();
}
export function ZondiconBookmarkCopy2(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$42 = _$getNextElement(_tmpl$42);
    _$spread(_el$42, _$mergeProps(merged, {
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
    return _el$42;
  })();
}
export function ZondiconBookmarkCopy3(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$43 = _$getNextElement(_tmpl$43);
    _$spread(_el$43, _$mergeProps(merged, {
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
    return _el$43;
  })();
}
export function ZondiconBookmarkOutlineAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$44 = _$getNextElement(_tmpl$44);
    _$spread(_el$44, _$mergeProps(merged, {
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
    return _el$44;
  })();
}
export function ZondiconBookmarkOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$45 = _$getNextElement(_tmpl$45);
    _$spread(_el$45, _$mergeProps(merged, {
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
    return _el$45;
  })();
}
export function ZondiconBookmark(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$46 = _$getNextElement(_tmpl$46);
    _$spread(_el$46, _$mergeProps(merged, {
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
    return _el$46;
  })();
}
export function ZondiconBorderAll(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$47 = _$getNextElement(_tmpl$47);
    _$spread(_el$47, _$mergeProps(merged, {
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
    return _el$47;
  })();
}
export function ZondiconBorderBottom(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$48 = _$getNextElement(_tmpl$48);
    _$spread(_el$48, _$mergeProps(merged, {
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
    return _el$48;
  })();
}
export function ZondiconBorderHorizontal(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$49 = _$getNextElement(_tmpl$49);
    _$spread(_el$49, _$mergeProps(merged, {
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
    return _el$49;
  })();
}
export function ZondiconBorderInner(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$50 = _$getNextElement(_tmpl$50);
    _$spread(_el$50, _$mergeProps(merged, {
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
    return _el$50;
  })();
}
export function ZondiconBorderLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$51 = _$getNextElement(_tmpl$51);
    _$spread(_el$51, _$mergeProps(merged, {
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
    return _el$51;
  })();
}
export function ZondiconBorderNone(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$52 = _$getNextElement(_tmpl$52);
    _$spread(_el$52, _$mergeProps(merged, {
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
    return _el$52;
  })();
}
export function ZondiconBorderOuter(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$53 = _$getNextElement(_tmpl$53);
    _$spread(_el$53, _$mergeProps(merged, {
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
    return _el$53;
  })();
}
export function ZondiconBorderRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$54 = _$getNextElement(_tmpl$54);
    _$spread(_el$54, _$mergeProps(merged, {
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
    return _el$54;
  })();
}
export function ZondiconBorderTop(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$55 = _$getNextElement(_tmpl$55);
    _$spread(_el$55, _$mergeProps(merged, {
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
    return _el$55;
  })();
}
export function ZondiconBorderVertical(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$56 = _$getNextElement(_tmpl$56);
    _$spread(_el$56, _$mergeProps(merged, {
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
    return _el$56;
  })();
}
export function ZondiconBox(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$57 = _$getNextElement(_tmpl$57);
    _$spread(_el$57, _$mergeProps(merged, {
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
    return _el$57;
  })();
}
export function ZondiconBrightnessDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$58 = _$getNextElement(_tmpl$58);
    _$spread(_el$58, _$mergeProps(merged, {
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
    return _el$58;
  })();
}
export function ZondiconBrightnessUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$59 = _$getNextElement(_tmpl$59);
    _$spread(_el$59, _$mergeProps(merged, {
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
    return _el$59;
  })();
}
export function ZondiconBrowserWindowNew(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$60 = _$getNextElement(_tmpl$60);
    _$spread(_el$60, _$mergeProps(merged, {
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
    return _el$60;
  })();
}
export function ZondiconBrowserWindowOpen(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$61 = _$getNextElement(_tmpl$61);
    _$spread(_el$61, _$mergeProps(merged, {
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
    return _el$61;
  })();
}
export function ZondiconBrowserWindow(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$62 = _$getNextElement(_tmpl$62);
    _$spread(_el$62, _$mergeProps(merged, {
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
    return _el$62;
  })();
}
export function ZondiconBug(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$63 = _$getNextElement(_tmpl$63);
    _$spread(_el$63, _$mergeProps(merged, {
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
    return _el$63;
  })();
}
export function ZondiconBuoy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$64 = _$getNextElement(_tmpl$64);
    _$spread(_el$64, _$mergeProps(merged, {
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
    return _el$64;
  })();
}
export function ZondiconCalculator(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$65 = _$getNextElement(_tmpl$65);
    _$spread(_el$65, _$mergeProps(merged, {
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
    return _el$65;
  })();
}
export function ZondiconCalendar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$66 = _$getNextElement(_tmpl$66);
    _$spread(_el$66, _$mergeProps(merged, {
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
    return _el$66;
  })();
}
export function ZondiconCamera(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$67 = _$getNextElement(_tmpl$67);
    _$spread(_el$67, _$mergeProps(merged, {
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
    return _el$67;
  })();
}
export function ZondiconChartBar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$68 = _$getNextElement(_tmpl$68);
    _$spread(_el$68, _$mergeProps(merged, {
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
    return _el$68;
  })();
}
export function ZondiconChartPie(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$69 = _$getNextElement(_tmpl$69);
    _$spread(_el$69, _$mergeProps(merged, {
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
    return _el$69;
  })();
}
export function ZondiconChart(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$70 = _$getNextElement(_tmpl$70);
    _$spread(_el$70, _$mergeProps(merged, {
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
    return _el$70;
  })();
}
export function ZondiconChatBubbleDots(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$71 = _$getNextElement(_tmpl$71);
    _$spread(_el$71, _$mergeProps(merged, {
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
    return _el$71;
  })();
}
export function ZondiconCheckmarkOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$72 = _$getNextElement(_tmpl$72);
    _$spread(_el$72, _$mergeProps(merged, {
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
    return _el$72;
  })();
}
export function ZondiconCheckmark(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$73 = _$getNextElement(_tmpl$73);
    _$spread(_el$73, _$mergeProps(merged, {
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
    return _el$73;
  })();
}
export function ZondiconCheveronDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$74 = _$getNextElement(_tmpl$74);
    _$spread(_el$74, _$mergeProps(merged, {
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
    return _el$74;
  })();
}
export function ZondiconCheveronLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$75 = _$getNextElement(_tmpl$75);
    _$spread(_el$75, _$mergeProps(merged, {
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
    return _el$75;
  })();
}
export function ZondiconCheveronOutlineDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$76 = _$getNextElement(_tmpl$76);
    _$spread(_el$76, _$mergeProps(merged, {
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
    return _el$76;
  })();
}
export function ZondiconCheveronOutlineLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$77 = _$getNextElement(_tmpl$77);
    _$spread(_el$77, _$mergeProps(merged, {
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
    return _el$77;
  })();
}
export function ZondiconCheveronOutlineRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$78 = _$getNextElement(_tmpl$78);
    _$spread(_el$78, _$mergeProps(merged, {
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
    return _el$78;
  })();
}
export function ZondiconCheveronOutlineUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$79 = _$getNextElement(_tmpl$79);
    _$spread(_el$79, _$mergeProps(merged, {
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
    return _el$79;
  })();
}
export function ZondiconCheveronRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$80 = _$getNextElement(_tmpl$80);
    _$spread(_el$80, _$mergeProps(merged, {
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
    return _el$80;
  })();
}
export function ZondiconCheveronUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$81 = _$getNextElement(_tmpl$81);
    _$spread(_el$81, _$mergeProps(merged, {
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
    return _el$81;
  })();
}
export function ZondiconClipboard(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$82 = _$getNextElement(_tmpl$82);
    _$spread(_el$82, _$mergeProps(merged, {
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
    return _el$82;
  })();
}
export function ZondiconCloseOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$83 = _$getNextElement(_tmpl$83);
    _$spread(_el$83, _$mergeProps(merged, {
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
    return _el$83;
  })();
}
export function ZondiconCloseSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$84 = _$getNextElement(_tmpl$84);
    _$spread(_el$84, _$mergeProps(merged, {
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
    return _el$84;
  })();
}
export function ZondiconClose(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$85 = _$getNextElement(_tmpl$85);
    _$spread(_el$85, _$mergeProps(merged, {
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
    return _el$85;
  })();
}
export function ZondiconCloudUpload(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$86 = _$getNextElement(_tmpl$86);
    _$spread(_el$86, _$mergeProps(merged, {
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
    return _el$86;
  })();
}
export function ZondiconCloud(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$87 = _$getNextElement(_tmpl$87);
    _$spread(_el$87, _$mergeProps(merged, {
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
    return _el$87;
  })();
}
export function ZondiconCode(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$88 = _$getNextElement(_tmpl$88);
    _$spread(_el$88, _$mergeProps(merged, {
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
    return _el$88;
  })();
}
export function ZondiconCoffee(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$89 = _$getNextElement(_tmpl$89);
    _$spread(_el$89, _$mergeProps(merged, {
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
    return _el$89;
  })();
}
export function ZondiconCog(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$90 = _$getNextElement(_tmpl$90);
    _$spread(_el$90, _$mergeProps(merged, {
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
    return _el$90;
  })();
}
export function ZondiconColorPalette(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$91 = _$getNextElement(_tmpl$91);
    _$spread(_el$91, _$mergeProps(merged, {
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
    return _el$91;
  })();
}
export function ZondiconCompose(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$92 = _$getNextElement(_tmpl$92);
    _$spread(_el$92, _$mergeProps(merged, {
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
    return _el$92;
  })();
}
export function ZondiconComputerDesktop(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$93 = _$getNextElement(_tmpl$93);
    _$spread(_el$93, _$mergeProps(merged, {
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
    return _el$93;
  })();
}
export function ZondiconComputerLaptop(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$94 = _$getNextElement(_tmpl$94);
    _$spread(_el$94, _$mergeProps(merged, {
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
    return _el$94;
  })();
}
export function ZondiconConversation(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$95 = _$getNextElement(_tmpl$95);
    _$spread(_el$95, _$mergeProps(merged, {
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
    return _el$95;
  })();
}
export function ZondiconCopy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$96 = _$getNextElement(_tmpl$96);
    _$spread(_el$96, _$mergeProps(merged, {
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
    return _el$96;
  })();
}
export function ZondiconCreditCard(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$97 = _$getNextElement(_tmpl$97);
    _$spread(_el$97, _$mergeProps(merged, {
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
    return _el$97;
  })();
}
export function ZondiconCurrencyDollar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$98 = _$getNextElement(_tmpl$98);
    _$spread(_el$98, _$mergeProps(merged, {
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
    return _el$98;
  })();
}
export function ZondiconDashboard(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$99 = _$getNextElement(_tmpl$99);
    _$spread(_el$99, _$mergeProps(merged, {
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
    return _el$99;
  })();
}
export function ZondiconDateAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$100 = _$getNextElement(_tmpl$100);
    _$spread(_el$100, _$mergeProps(merged, {
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
    return _el$100;
  })();
}
export function ZondiconDialPad(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$101 = _$getNextElement(_tmpl$101);
    _$spread(_el$101, _$mergeProps(merged, {
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
    return _el$101;
  })();
}
export function ZondiconDirections(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$102 = _$getNextElement(_tmpl$102);
    _$spread(_el$102, _$mergeProps(merged, {
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
    return _el$102;
  })();
}
export function ZondiconDocumentAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$103 = _$getNextElement(_tmpl$103);
    _$spread(_el$103, _$mergeProps(merged, {
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
    return _el$103;
  })();
}
export function ZondiconDocument(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$104 = _$getNextElement(_tmpl$104);
    _$spread(_el$104, _$mergeProps(merged, {
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
    return _el$104;
  })();
}
export function ZondiconDotsHorizontalDouble(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$105 = _$getNextElement(_tmpl$105);
    _$spread(_el$105, _$mergeProps(merged, {
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
    return _el$105;
  })();
}
export function ZondiconDotsHorizontalTriple(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$106 = _$getNextElement(_tmpl$106);
    _$spread(_el$106, _$mergeProps(merged, {
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
    return _el$106;
  })();
}
export function ZondiconDownload(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$107 = _$getNextElement(_tmpl$107);
    _$spread(_el$107, _$mergeProps(merged, {
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
    return _el$107;
  })();
}
export function ZondiconDuplicate(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$108 = _$getNextElement(_tmpl$108);
    _$spread(_el$108, _$mergeProps(merged, {
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
    return _el$108;
  })();
}
export function ZondiconEditCopy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$109 = _$getNextElement(_tmpl$96);
    _$spread(_el$109, _$mergeProps(merged, {
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
    return _el$109;
  })();
}
export function ZondiconEditCrop(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$110 = _$getNextElement(_tmpl$109);
    _$spread(_el$110, _$mergeProps(merged, {
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
    return _el$110;
  })();
}
export function ZondiconEditCut(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$111 = _$getNextElement(_tmpl$110);
    _$spread(_el$111, _$mergeProps(merged, {
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
    return _el$111;
  })();
}
export function ZondiconEditPencil(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$112 = _$getNextElement(_tmpl$111);
    _$spread(_el$112, _$mergeProps(merged, {
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
    return _el$112;
  })();
}
export function ZondiconEducation(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$113 = _$getNextElement(_tmpl$112);
    _$spread(_el$113, _$mergeProps(merged, {
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
    return _el$113;
  })();
}
export function ZondiconEnvelope(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$114 = _$getNextElement(_tmpl$113);
    _$spread(_el$114, _$mergeProps(merged, {
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
    return _el$114;
  })();
}
export function ZondiconExclamationOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$115 = _$getNextElement(_tmpl$114);
    _$spread(_el$115, _$mergeProps(merged, {
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
    return _el$115;
  })();
}
export function ZondiconExclamationSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$116 = _$getNextElement(_tmpl$115);
    _$spread(_el$116, _$mergeProps(merged, {
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
    return _el$116;
  })();
}
export function ZondiconExplore(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$117 = _$getNextElement(_tmpl$116);
    _$spread(_el$117, _$mergeProps(merged, {
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
    return _el$117;
  })();
}
export function ZondiconFactory(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$118 = _$getNextElement(_tmpl$117);
    _$spread(_el$118, _$mergeProps(merged, {
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
    return _el$118;
  })();
}
export function ZondiconFastForward(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$119 = _$getNextElement(_tmpl$118);
    _$spread(_el$119, _$mergeProps(merged, {
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
    return _el$119;
  })();
}
export function ZondiconFastRewind(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$120 = _$getNextElement(_tmpl$32);
    _$spread(_el$120, _$mergeProps(merged, {
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
    return _el$120;
  })();
}
export function ZondiconFilm(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$121 = _$getNextElement(_tmpl$119);
    _$spread(_el$121, _$mergeProps(merged, {
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
    return _el$121;
  })();
}
export function ZondiconFilter(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$122 = _$getNextElement(_tmpl$120);
    _$spread(_el$122, _$mergeProps(merged, {
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
    return _el$122;
  })();
}
export function ZondiconFlag(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$123 = _$getNextElement(_tmpl$121);
    _$spread(_el$123, _$mergeProps(merged, {
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
    return _el$123;
  })();
}
export function ZondiconFlashlight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$124 = _$getNextElement(_tmpl$122);
    _$spread(_el$124, _$mergeProps(merged, {
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
    return _el$124;
  })();
}
export function ZondiconFolderOutlineAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$125 = _$getNextElement(_tmpl$123);
    _$spread(_el$125, _$mergeProps(merged, {
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
    return _el$125;
  })();
}
export function ZondiconFolderOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$126 = _$getNextElement(_tmpl$124);
    _$spread(_el$126, _$mergeProps(merged, {
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
    return _el$126;
  })();
}
export function ZondiconFolder(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$127 = _$getNextElement(_tmpl$125);
    _$spread(_el$127, _$mergeProps(merged, {
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
    return _el$127;
  })();
}
export function ZondiconFormatBold(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$128 = _$getNextElement(_tmpl$126);
    _$spread(_el$128, _$mergeProps(merged, {
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
    return _el$128;
  })();
}
export function ZondiconFormatFontSize(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$129 = _$getNextElement(_tmpl$127);
    _$spread(_el$129, _$mergeProps(merged, {
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
    return _el$129;
  })();
}
export function ZondiconFormatItalic(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$130 = _$getNextElement(_tmpl$128);
    _$spread(_el$130, _$mergeProps(merged, {
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
    return _el$130;
  })();
}
export function ZondiconFormatTextSize(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$131 = _$getNextElement(_tmpl$127);
    _$spread(_el$131, _$mergeProps(merged, {
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
    return _el$131;
  })();
}
export function ZondiconFormatUnderline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$132 = _$getNextElement(_tmpl$129);
    _$spread(_el$132, _$mergeProps(merged, {
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
    return _el$132;
  })();
}
export function ZondiconForwardStep(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$133 = _$getNextElement(_tmpl$130);
    _$spread(_el$133, _$mergeProps(merged, {
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
    return _el$133;
  })();
}
export function ZondiconForward(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$134 = _$getNextElement(_tmpl$118);
    _$spread(_el$134, _$mergeProps(merged, {
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
    return _el$134;
  })();
}
export function ZondiconGift(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$135 = _$getNextElement(_tmpl$131);
    _$spread(_el$135, _$mergeProps(merged, {
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
    return _el$135;
  })();
}
export function ZondiconGlobe(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$136 = _$getNextElement(_tmpl$132);
    _$spread(_el$136, _$mergeProps(merged, {
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
    return _el$136;
  })();
}
export function ZondiconHandStop(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$137 = _$getNextElement(_tmpl$133);
    _$spread(_el$137, _$mergeProps(merged, {
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
    return _el$137;
  })();
}
export function ZondiconHardDrive(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$138 = _$getNextElement(_tmpl$134);
    _$spread(_el$138, _$mergeProps(merged, {
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
    return _el$138;
  })();
}
export function ZondiconHeadphones(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$139 = _$getNextElement(_tmpl$135);
    _$spread(_el$139, _$mergeProps(merged, {
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
    return _el$139;
  })();
}
export function ZondiconHeart(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$140 = _$getNextElement(_tmpl$136);
    _$spread(_el$140, _$mergeProps(merged, {
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
    return _el$140;
  })();
}
export function ZondiconHome(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$141 = _$getNextElement(_tmpl$137);
    _$spread(_el$141, _$mergeProps(merged, {
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
    return _el$141;
  })();
}
export function ZondiconHot(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$142 = _$getNextElement(_tmpl$138);
    _$spread(_el$142, _$mergeProps(merged, {
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
    return _el$142;
  })();
}
export function ZondiconHourGlass(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$143 = _$getNextElement(_tmpl$139);
    _$spread(_el$143, _$mergeProps(merged, {
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
    return _el$143;
  })();
}
export function ZondiconInboxCheck(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$144 = _$getNextElement(_tmpl$140);
    _$spread(_el$144, _$mergeProps(merged, {
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
    return _el$144;
  })();
}
export function ZondiconInboxDownload(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$145 = _$getNextElement(_tmpl$141);
    _$spread(_el$145, _$mergeProps(merged, {
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
    return _el$145;
  })();
}
export function ZondiconInboxFull(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$146 = _$getNextElement(_tmpl$142);
    _$spread(_el$146, _$mergeProps(merged, {
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
    return _el$146;
  })();
}
export function ZondiconInbox(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$147 = _$getNextElement(_tmpl$143);
    _$spread(_el$147, _$mergeProps(merged, {
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
    return _el$147;
  })();
}
export function ZondiconIndentDecrease(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$148 = _$getNextElement(_tmpl$144);
    _$spread(_el$148, _$mergeProps(merged, {
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
    return _el$148;
  })();
}
export function ZondiconIndentIncrease(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$149 = _$getNextElement(_tmpl$145);
    _$spread(_el$149, _$mergeProps(merged, {
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
    return _el$149;
  })();
}
export function ZondiconInformationOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$150 = _$getNextElement(_tmpl$146);
    _$spread(_el$150, _$mergeProps(merged, {
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
    return _el$150;
  })();
}
export function ZondiconInformationSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$151 = _$getNextElement(_tmpl$147);
    _$spread(_el$151, _$mergeProps(merged, {
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
    return _el$151;
  })();
}
export function ZondiconKey(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$152 = _$getNextElement(_tmpl$148);
    _$spread(_el$152, _$mergeProps(merged, {
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
    return _el$152;
  })();
}
export function ZondiconKeyboard(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$153 = _$getNextElement(_tmpl$149);
    _$spread(_el$153, _$mergeProps(merged, {
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
    return _el$153;
  })();
}
export function ZondiconLayers(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$154 = _$getNextElement(_tmpl$150);
    _$spread(_el$154, _$mergeProps(merged, {
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
    return _el$154;
  })();
}
export function ZondiconLibrary(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$155 = _$getNextElement(_tmpl$151);
    _$spread(_el$155, _$mergeProps(merged, {
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
    return _el$155;
  })();
}
export function ZondiconLightBulb(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$156 = _$getNextElement(_tmpl$152);
    _$spread(_el$156, _$mergeProps(merged, {
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
    return _el$156;
  })();
}
export function ZondiconLink(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$157 = _$getNextElement(_tmpl$153);
    _$spread(_el$157, _$mergeProps(merged, {
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
    return _el$157;
  })();
}
export function ZondiconListAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$158 = _$getNextElement(_tmpl$154);
    _$spread(_el$158, _$mergeProps(merged, {
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
    return _el$158;
  })();
}
export function ZondiconListBullet(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$159 = _$getNextElement(_tmpl$155);
    _$spread(_el$159, _$mergeProps(merged, {
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
    return _el$159;
  })();
}
export function ZondiconList(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$160 = _$getNextElement(_tmpl$155);
    _$spread(_el$160, _$mergeProps(merged, {
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
    return _el$160;
  })();
}
export function ZondiconLoadBalancer(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$161 = _$getNextElement(_tmpl$156);
    _$spread(_el$161, _$mergeProps(merged, {
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
    return _el$161;
  })();
}
export function ZondiconLocationCurrent(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$162 = _$getNextElement(_tmpl$157);
    _$spread(_el$162, _$mergeProps(merged, {
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
    return _el$162;
  })();
}
export function ZondiconLocationFood(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$163 = _$getNextElement(_tmpl$158);
    _$spread(_el$163, _$mergeProps(merged, {
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
    return _el$163;
  })();
}
export function ZondiconLocationGasStation(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$164 = _$getNextElement(_tmpl$159);
    _$spread(_el$164, _$mergeProps(merged, {
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
    return _el$164;
  })();
}
export function ZondiconLocationHotel(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$165 = _$getNextElement(_tmpl$160);
    _$spread(_el$165, _$mergeProps(merged, {
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
    return _el$165;
  })();
}
export function ZondiconLocationMarina(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$166 = _$getNextElement(_tmpl$161);
    _$spread(_el$166, _$mergeProps(merged, {
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
    return _el$166;
  })();
}
export function ZondiconLocationPark(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$167 = _$getNextElement(_tmpl$162);
    _$spread(_el$167, _$mergeProps(merged, {
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
    return _el$167;
  })();
}
export function ZondiconLocationRestroom(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$168 = _$getNextElement(_tmpl$163);
    _$spread(_el$168, _$mergeProps(merged, {
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
    return _el$168;
  })();
}
export function ZondiconLocationShopping(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$169 = _$getNextElement(_tmpl$164);
    _$spread(_el$169, _$mergeProps(merged, {
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
    return _el$169;
  })();
}
export function ZondiconLocation(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$170 = _$getNextElement(_tmpl$165);
    _$spread(_el$170, _$mergeProps(merged, {
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
    return _el$170;
  })();
}
export function ZondiconLockClosed(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$171 = _$getNextElement(_tmpl$166);
    _$spread(_el$171, _$mergeProps(merged, {
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
    return _el$171;
  })();
}
export function ZondiconLockOpen(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$172 = _$getNextElement(_tmpl$167);
    _$spread(_el$172, _$mergeProps(merged, {
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
    return _el$172;
  })();
}
export function ZondiconMap(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$173 = _$getNextElement(_tmpl$168);
    _$spread(_el$173, _$mergeProps(merged, {
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
    return _el$173;
  })();
}
export function ZondiconMenu(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$174 = _$getNextElement(_tmpl$169);
    _$spread(_el$174, _$mergeProps(merged, {
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
    return _el$174;
  })();
}
export function ZondiconMic(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$175 = _$getNextElement(_tmpl$170);
    _$spread(_el$175, _$mergeProps(merged, {
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
    return _el$175;
  })();
}
export function ZondiconMinusOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$176 = _$getNextElement(_tmpl$171);
    _$spread(_el$176, _$mergeProps(merged, {
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
    return _el$176;
  })();
}
export function ZondiconMinusSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$177 = _$getNextElement(_tmpl$172);
    _$spread(_el$177, _$mergeProps(merged, {
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
    return _el$177;
  })();
}
export function ZondiconMobileDevices(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$178 = _$getNextElement(_tmpl$173);
    _$spread(_el$178, _$mergeProps(merged, {
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
    return _el$178;
  })();
}
export function ZondiconMoodHappyOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$179 = _$getNextElement(_tmpl$174);
    _$spread(_el$179, _$mergeProps(merged, {
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
    return _el$179;
  })();
}
export function ZondiconMoodHappySolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$180 = _$getNextElement(_tmpl$175);
    _$spread(_el$180, _$mergeProps(merged, {
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
    return _el$180;
  })();
}
export function ZondiconMoodNeutralOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$181 = _$getNextElement(_tmpl$176);
    _$spread(_el$181, _$mergeProps(merged, {
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
    return _el$181;
  })();
}
export function ZondiconMoodNeutralSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$182 = _$getNextElement(_tmpl$177);
    _$spread(_el$182, _$mergeProps(merged, {
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
    return _el$182;
  })();
}
export function ZondiconMoodSadOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$183 = _$getNextElement(_tmpl$178);
    _$spread(_el$183, _$mergeProps(merged, {
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
    return _el$183;
  })();
}
export function ZondiconMoodSadSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$184 = _$getNextElement(_tmpl$179);
    _$spread(_el$184, _$mergeProps(merged, {
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
    return _el$184;
  })();
}
export function ZondiconMouse(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$185 = _$getNextElement(_tmpl$180);
    _$spread(_el$185, _$mergeProps(merged, {
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
    return _el$185;
  })();
}
export function ZondiconMusicAlbum(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$186 = _$getNextElement(_tmpl$5);
    _$spread(_el$186, _$mergeProps(merged, {
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
    return _el$186;
  })();
}
export function ZondiconMusicArtist(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$187 = _$getNextElement(_tmpl$181);
    _$spread(_el$187, _$mergeProps(merged, {
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
    return _el$187;
  })();
}
export function ZondiconMusicNotes(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$188 = _$getNextElement(_tmpl$182);
    _$spread(_el$188, _$mergeProps(merged, {
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
    return _el$188;
  })();
}
export function ZondiconMusicPlaylist(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$189 = _$getNextElement(_tmpl$183);
    _$spread(_el$189, _$mergeProps(merged, {
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
    return _el$189;
  })();
}
export function ZondiconNavigationMore(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$190 = _$getNextElement(_tmpl$184);
    _$spread(_el$190, _$mergeProps(merged, {
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
    return _el$190;
  })();
}
export function ZondiconNetwork(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$191 = _$getNextElement(_tmpl$185);
    _$spread(_el$191, _$mergeProps(merged, {
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
    return _el$191;
  })();
}
export function ZondiconNewsPaper(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$192 = _$getNextElement(_tmpl$186);
    _$spread(_el$192, _$mergeProps(merged, {
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
    return _el$192;
  })();
}
export function ZondiconNotification(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$193 = _$getNextElement(_tmpl$187);
    _$spread(_el$193, _$mergeProps(merged, {
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
    return _el$193;
  })();
}
export function ZondiconNotificationsOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$194 = _$getNextElement(_tmpl$188);
    _$spread(_el$194, _$mergeProps(merged, {
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
    return _el$194;
  })();
}
export function ZondiconNotifications(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$195 = _$getNextElement(_tmpl$187);
    _$spread(_el$195, _$mergeProps(merged, {
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
    return _el$195;
  })();
}
export function ZondiconPaste(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$196 = _$getNextElement(_tmpl$189);
    _$spread(_el$196, _$mergeProps(merged, {
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
    return _el$196;
  })();
}
export function ZondiconPauseOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$197 = _$getNextElement(_tmpl$190);
    _$spread(_el$197, _$mergeProps(merged, {
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
    return _el$197;
  })();
}
export function ZondiconPauseSolid(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$198 = _$getNextElement(_tmpl$191);
    _$spread(_el$198, _$mergeProps(merged, {
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
    return _el$198;
  })();
}
export function ZondiconPause(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$199 = _$getNextElement(_tmpl$192);
    _$spread(_el$199, _$mergeProps(merged, {
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
    return _el$199;
  })();
}
export function ZondiconPenTool(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$200 = _$getNextElement(_tmpl$193);
    _$spread(_el$200, _$mergeProps(merged, {
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
    return _el$200;
  })();
}
export function ZondiconPhone(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$201 = _$getNextElement(_tmpl$194);
    _$spread(_el$201, _$mergeProps(merged, {
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
    return _el$201;
  })();
}
export function ZondiconPhoto(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$202 = _$getNextElement(_tmpl$195);
    _$spread(_el$202, _$mergeProps(merged, {
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
    return _el$202;
  })();
}
export function ZondiconPhpElephant(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$203 = _$getNextElement(_tmpl$196);
    _$spread(_el$203, _$mergeProps(merged, {
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
    return _el$203;
  })();
}
export function ZondiconPin(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$204 = _$getNextElement(_tmpl$197);
    _$spread(_el$204, _$mergeProps(merged, {
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
    return _el$204;
  })();
}
export function ZondiconPlayOutline(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$205 = _$getNextElement(_tmpl$198);
    _$spread(_el$205, _$mergeProps(merged, {
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
    return _el$205;
  })();
}
export function ZondiconPlay(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$206 = _$getNextElement(_tmpl$199);
    _$spread(_el$206, _$mergeProps(merged, {
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
    return _el$206;
  })();
}
export function ZondiconPlaylist(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$207 = _$getNextElement(_tmpl$183);
    _$spread(_el$207, _$mergeProps(merged, {
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
    return _el$207;
  })();
}
export function ZondiconPlugin(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$208 = _$getNextElement(_tmpl$200);
    _$spread(_el$208, _$mergeProps(merged, {
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
    return _el$208;
  })();
}
export function ZondiconPortfolio(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$209 = _$getNextElement(_tmpl$201);
    _$spread(_el$209, _$mergeProps(merged, {
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
    return _el$209;
  })();
}
export function ZondiconPrinter(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$210 = _$getNextElement(_tmpl$202);
    _$spread(_el$210, _$mergeProps(merged, {
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
    return _el$210;
  })();
}
export function ZondiconPylon(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$211 = _$getNextElement(_tmpl$203);
    _$spread(_el$211, _$mergeProps(merged, {
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
    return _el$211;
  })();
}
export function ZondiconQuestion(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$212 = _$getNextElement(_tmpl$204);
    _$spread(_el$212, _$mergeProps(merged, {
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
    return _el$212;
  })();
}
export function ZondiconQueue(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$213 = _$getNextElement(_tmpl$205);
    _$spread(_el$213, _$mergeProps(merged, {
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
    return _el$213;
  })();
}
export function ZondiconRadarCopy2(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$214 = _$getNextElement(_tmpl$206);
    _$spread(_el$214, _$mergeProps(merged, {
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
    return _el$214;
  })();
}
export function ZondiconRadar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$215 = _$getNextElement(_tmpl$206);
    _$spread(_el$215, _$mergeProps(merged, {
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
    return _el$215;
  })();
}
export function ZondiconRadio(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$216 = _$getNextElement(_tmpl$207);
    _$spread(_el$216, _$mergeProps(merged, {
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
    return _el$216;
  })();
}
export function ZondiconRefresh(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$217 = _$getNextElement(_tmpl$208);
    _$spread(_el$217, _$mergeProps(merged, {
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
    return _el$217;
  })();
}
export function ZondiconReload(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$218 = _$getNextElement(_tmpl$209);
    _$spread(_el$218, _$mergeProps(merged, {
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
    return _el$218;
  })();
}
export function ZondiconReplyAll(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$219 = _$getNextElement(_tmpl$210);
    _$spread(_el$219, _$mergeProps(merged, {
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
    return _el$219;
  })();
}
export function ZondiconReply(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$220 = _$getNextElement(_tmpl$211);
    _$spread(_el$220, _$mergeProps(merged, {
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
    return _el$220;
  })();
}
export function ZondiconRepost(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$221 = _$getNextElement(_tmpl$212);
    _$spread(_el$221, _$mergeProps(merged, {
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
    return _el$221;
  })();
}
export function ZondiconSaveDisk(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$222 = _$getNextElement(_tmpl$213);
    _$spread(_el$222, _$mergeProps(merged, {
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
    return _el$222;
  })();
}
export function ZondiconScreenFull(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$223 = _$getNextElement(_tmpl$214);
    _$spread(_el$223, _$mergeProps(merged, {
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
    return _el$223;
  })();
}
export function ZondiconSearch(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$224 = _$getNextElement(_tmpl$215);
    _$spread(_el$224, _$mergeProps(merged, {
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
    return _el$224;
  })();
}
export function ZondiconSend(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$225 = _$getNextElement(_tmpl$216);
    _$spread(_el$225, _$mergeProps(merged, {
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
    return _el$225;
  })();
}
export function ZondiconServers(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$226 = _$getNextElement(_tmpl$217);
    _$spread(_el$226, _$mergeProps(merged, {
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
    return _el$226;
  })();
}
export function ZondiconShare01(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$227 = _$getNextElement(_tmpl$218);
    _$spread(_el$227, _$mergeProps(merged, {
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
    return _el$227;
  })();
}
export function ZondiconShareAlt(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$228 = _$getNextElement(_tmpl$219);
    _$spread(_el$228, _$mergeProps(merged, {
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
    return _el$228;
  })();
}
export function ZondiconShare(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$229 = _$getNextElement(_tmpl$220);
    _$spread(_el$229, _$mergeProps(merged, {
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
    return _el$229;
  })();
}
export function ZondiconShield(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$230 = _$getNextElement(_tmpl$221);
    _$spread(_el$230, _$mergeProps(merged, {
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
    return _el$230;
  })();
}
export function ZondiconShoppingCart(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$231 = _$getNextElement(_tmpl$222);
    _$spread(_el$231, _$mergeProps(merged, {
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
    return _el$231;
  })();
}
export function ZondiconShowSidebar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$232 = _$getNextElement(_tmpl$223);
    _$spread(_el$232, _$mergeProps(merged, {
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
    return _el$232;
  })();
}
export function ZondiconShuffle(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$233 = _$getNextElement(_tmpl$224);
    _$spread(_el$233, _$mergeProps(merged, {
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
    return _el$233;
  })();
}
export function ZondiconStandBy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$234 = _$getNextElement(_tmpl$225);
    _$spread(_el$234, _$mergeProps(merged, {
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
    return _el$234;
  })();
}
export function ZondiconStarFull(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$235 = _$getNextElement(_tmpl$226);
    _$spread(_el$235, _$mergeProps(merged, {
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
    return _el$235;
  })();
}
export function ZondiconStation(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$236 = _$getNextElement(_tmpl$227);
    _$spread(_el$236, _$mergeProps(merged, {
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
    return _el$236;
  })();
}
export function ZondiconStepBackward(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$237 = _$getNextElement(_tmpl$31);
    _$spread(_el$237, _$mergeProps(merged, {
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
    return _el$237;
  })();
}
export function ZondiconStepForward(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$238 = _$getNextElement(_tmpl$130);
    _$spread(_el$238, _$mergeProps(merged, {
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
    return _el$238;
  })();
}
export function ZondiconStethoscope(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$239 = _$getNextElement(_tmpl$228);
    _$spread(_el$239, _$mergeProps(merged, {
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
    return _el$239;
  })();
}
export function ZondiconStoreFront(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$240 = _$getNextElement(_tmpl$229);
    _$spread(_el$240, _$mergeProps(merged, {
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
    return _el$240;
  })();
}
export function ZondiconStrokeWidth(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$241 = _$getNextElement(_tmpl$230);
    _$spread(_el$241, _$mergeProps(merged, {
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
    return _el$241;
  })();
}
export function ZondiconSubdirectoryLeft(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$242 = _$getNextElement(_tmpl$231);
    _$spread(_el$242, _$mergeProps(merged, {
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
    return _el$242;
  })();
}
export function ZondiconSubdirectoryRight(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$243 = _$getNextElement(_tmpl$232);
    _$spread(_el$243, _$mergeProps(merged, {
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
    return _el$243;
  })();
}
export function ZondiconSwap(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$244 = _$getNextElement(_tmpl$233);
    _$spread(_el$244, _$mergeProps(merged, {
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
    return _el$244;
  })();
}
export function ZondiconTablet(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$245 = _$getNextElement(_tmpl$234);
    _$spread(_el$245, _$mergeProps(merged, {
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
    return _el$245;
  })();
}
export function ZondiconTag(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$246 = _$getNextElement(_tmpl$235);
    _$spread(_el$246, _$mergeProps(merged, {
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
    return _el$246;
  })();
}
export function ZondiconTarget(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$247 = _$getNextElement(_tmpl$236);
    _$spread(_el$247, _$mergeProps(merged, {
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
    return _el$247;
  })();
}
export function ZondiconTextBox(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$248 = _$getNextElement(_tmpl$237);
    _$spread(_el$248, _$mergeProps(merged, {
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
    return _el$248;
  })();
}
export function ZondiconTextDecoration(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$249 = _$getNextElement(_tmpl$238);
    _$spread(_el$249, _$mergeProps(merged, {
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
    return _el$249;
  })();
}
export function ZondiconThermometer(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$250 = _$getNextElement(_tmpl$239);
    _$spread(_el$250, _$mergeProps(merged, {
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
    return _el$250;
  })();
}
export function ZondiconThumbsDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$251 = _$getNextElement(_tmpl$240);
    _$spread(_el$251, _$mergeProps(merged, {
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
    return _el$251;
  })();
}
export function ZondiconThumbsUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$252 = _$getNextElement(_tmpl$241);
    _$spread(_el$252, _$mergeProps(merged, {
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
    return _el$252;
  })();
}
export function ZondiconTicket(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$253 = _$getNextElement(_tmpl$242);
    _$spread(_el$253, _$mergeProps(merged, {
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
    return _el$253;
  })();
}
export function ZondiconTime(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$254 = _$getNextElement(_tmpl$243);
    _$spread(_el$254, _$mergeProps(merged, {
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
    return _el$254;
  })();
}
export function ZondiconTimer(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$255 = _$getNextElement(_tmpl$244);
    _$spread(_el$255, _$mergeProps(merged, {
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
    return _el$255;
  })();
}
export function ZondiconToolsCopy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$256 = _$getNextElement(_tmpl$138);
    _$spread(_el$256, _$mergeProps(merged, {
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
    return _el$256;
  })();
}
export function ZondiconTranslate(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$257 = _$getNextElement(_tmpl$245);
    _$spread(_el$257, _$mergeProps(merged, {
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
    return _el$257;
  })();
}
export function ZondiconTrash(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$258 = _$getNextElement(_tmpl$246);
    _$spread(_el$258, _$mergeProps(merged, {
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
    return _el$258;
  })();
}
export function ZondiconTravelBus(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$259 = _$getNextElement(_tmpl$247);
    _$spread(_el$259, _$mergeProps(merged, {
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
    return _el$259;
  })();
}
export function ZondiconTravelCar(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$260 = _$getNextElement(_tmpl$248);
    _$spread(_el$260, _$mergeProps(merged, {
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
    return _el$260;
  })();
}
export function ZondiconTravelCase(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$261 = _$getNextElement(_tmpl$249);
    _$spread(_el$261, _$mergeProps(merged, {
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
    return _el$261;
  })();
}
export function ZondiconTravelTaxiCab(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$262 = _$getNextElement(_tmpl$250);
    _$spread(_el$262, _$mergeProps(merged, {
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
    return _el$262;
  })();
}
export function ZondiconTravelTrain(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$263 = _$getNextElement(_tmpl$251);
    _$spread(_el$263, _$mergeProps(merged, {
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
    return _el$263;
  })();
}
export function ZondiconTravelWalk(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$264 = _$getNextElement(_tmpl$252);
    _$spread(_el$264, _$mergeProps(merged, {
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
    return _el$264;
  })();
}
export function ZondiconTravel(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$265 = _$getNextElement(_tmpl$249);
    _$spread(_el$265, _$mergeProps(merged, {
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
    return _el$265;
  })();
}
export function ZondiconTrophy(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$266 = _$getNextElement(_tmpl$253);
    _$spread(_el$266, _$mergeProps(merged, {
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
    return _el$266;
  })();
}
export function ZondiconTuning(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$267 = _$getNextElement(_tmpl$254);
    _$spread(_el$267, _$mergeProps(merged, {
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
    return _el$267;
  })();
}
export function ZondiconUpload(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$268 = _$getNextElement(_tmpl$255);
    _$spread(_el$268, _$mergeProps(merged, {
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
    return _el$268;
  })();
}
export function ZondiconUsb(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$269 = _$getNextElement(_tmpl$256);
    _$spread(_el$269, _$mergeProps(merged, {
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
    return _el$269;
  })();
}
export function ZondiconUserAdd(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$270 = _$getNextElement(_tmpl$257);
    _$spread(_el$270, _$mergeProps(merged, {
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
    return _el$270;
  })();
}
export function ZondiconUserGroup(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$271 = _$getNextElement(_tmpl$258);
    _$spread(_el$271, _$mergeProps(merged, {
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
    return _el$271;
  })();
}
export function ZondiconUserSolidCircle(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$272 = _$getNextElement(_tmpl$259);
    _$spread(_el$272, _$mergeProps(merged, {
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
    return _el$272;
  })();
}
export function ZondiconUserSolidSquare(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$273 = _$getNextElement(_tmpl$260);
    _$spread(_el$273, _$mergeProps(merged, {
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
    return _el$273;
  })();
}
export function ZondiconUser(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$274 = _$getNextElement(_tmpl$261);
    _$spread(_el$274, _$mergeProps(merged, {
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
    return _el$274;
  })();
}
export function ZondiconVector(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$275 = _$getNextElement(_tmpl$262);
    _$spread(_el$275, _$mergeProps(merged, {
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
    return _el$275;
  })();
}
export function ZondiconVideoCamera(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$276 = _$getNextElement(_tmpl$263);
    _$spread(_el$276, _$mergeProps(merged, {
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
    return _el$276;
  })();
}
export function ZondiconViewCarousel(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$277 = _$getNextElement(_tmpl$264);
    _$spread(_el$277, _$mergeProps(merged, {
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
    return _el$277;
  })();
}
export function ZondiconViewColumn(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$278 = _$getNextElement(_tmpl$265);
    _$spread(_el$278, _$mergeProps(merged, {
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
    return _el$278;
  })();
}
export function ZondiconViewHide(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$279 = _$getNextElement(_tmpl$266);
    _$spread(_el$279, _$mergeProps(merged, {
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
    return _el$279;
  })();
}
export function ZondiconViewList(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$280 = _$getNextElement(_tmpl$267);
    _$spread(_el$280, _$mergeProps(merged, {
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
    return _el$280;
  })();
}
export function ZondiconViewShow(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$281 = _$getNextElement(_tmpl$268);
    _$spread(_el$281, _$mergeProps(merged, {
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
    return _el$281;
  })();
}
export function ZondiconViewTile(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$282 = _$getNextElement(_tmpl$269);
    _$spread(_el$282, _$mergeProps(merged, {
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
    return _el$282;
  })();
}
export function ZondiconVolumeDown(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$283 = _$getNextElement(_tmpl$270);
    _$spread(_el$283, _$mergeProps(merged, {
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
    return _el$283;
  })();
}
export function ZondiconVolumeMute(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$284 = _$getNextElement(_tmpl$271);
    _$spread(_el$284, _$mergeProps(merged, {
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
    return _el$284;
  })();
}
export function ZondiconVolumeOff(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$285 = _$getNextElement(_tmpl$272);
    _$spread(_el$285, _$mergeProps(merged, {
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
    return _el$285;
  })();
}
export function ZondiconVolumeUp(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$286 = _$getNextElement(_tmpl$273);
    _$spread(_el$286, _$mergeProps(merged, {
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
    return _el$286;
  })();
}
export function ZondiconWallet(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$287 = _$getNextElement(_tmpl$274);
    _$spread(_el$287, _$mergeProps(merged, {
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
    return _el$287;
  })();
}
export function ZondiconWatch(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$288 = _$getNextElement(_tmpl$275);
    _$spread(_el$288, _$mergeProps(merged, {
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
    return _el$288;
  })();
}
export function ZondiconWindowNew(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$289 = _$getNextElement(_tmpl$60);
    _$spread(_el$289, _$mergeProps(merged, {
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
    return _el$289;
  })();
}
export function ZondiconWindowOpen(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$290 = _$getNextElement(_tmpl$61);
    _$spread(_el$290, _$mergeProps(merged, {
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
    return _el$290;
  })();
}
export function ZondiconWindow(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$291 = _$getNextElement(_tmpl$62);
    _$spread(_el$291, _$mergeProps(merged, {
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
    return _el$291;
  })();
}
export function ZondiconWrench(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$292 = _$getNextElement(_tmpl$276);
    _$spread(_el$292, _$mergeProps(merged, {
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
    return _el$292;
  })();
}
export function ZondiconYinYang(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$293 = _$getNextElement(_tmpl$277);
    _$spread(_el$293, _$mergeProps(merged, {
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
    return _el$293;
  })();
}
export function ZondiconZoomIn(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$294 = _$getNextElement(_tmpl$278);
    _$spread(_el$294, _$mergeProps(merged, {
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
    return _el$294;
  })();
}
export function ZondiconZoomOut(props) {
  const merged = mergeProps({
    ...zondiconsDefaultProps,
    viewBox: '0 0 20 20'
  }, props);
  return (() => {
    var _el$295 = _$getNextElement(_tmpl$279);
    _$spread(_el$295, _$mergeProps(merged, {
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
    return _el$295;
  })();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtZXJnZVByb3BzIiwiem9uZGljb25zRGVmYXVsdFByb3BzIiwiWm9uZGljb25BZGRPdXRsaW5lIiwicHJvcHMiLCJtZXJnZWQiLCJ2aWV3Qm94IiwiX2VsJCIsIl8kZ2V0TmV4dEVsZW1lbnQiLCJfdG1wbCQiLCJfJHNwcmVhZCIsIl8kbWVyZ2VQcm9wcyIsIndpZHRoIiwic2l6ZSIsImhlaWdodCIsInN0cm9rZSIsImNvbG9yIiwiZmlsbCIsIl8kcnVuSHlkcmF0aW9uRXZlbnRzIiwiWm9uZGljb25BZGRTb2xpZCIsIl9lbCQyIiwiX3RtcGwkMiIsIlpvbmRpY29uQWRqdXN0IiwiX2VsJDMiLCJfdG1wbCQzIiwiWm9uZGljb25BaXJwbGFuZSIsIl9lbCQ0IiwiX3RtcGwkNCIsIlpvbmRpY29uQWxidW0iLCJfZWwkNSIsIl90bXBsJDUiLCJab25kaWNvbkFsaWduQ2VudGVyIiwiX2VsJDYiLCJfdG1wbCQ2IiwiWm9uZGljb25BbGlnbkp1c3RpZmllZCIsIl9lbCQ3IiwiX3RtcGwkNyIsIlpvbmRpY29uQWxpZ25MZWZ0IiwiX2VsJDgiLCJfdG1wbCQ4IiwiWm9uZGljb25BbGlnblJpZ2h0IiwiX2VsJDkiLCJfdG1wbCQ5IiwiWm9uZGljb25BbmNob3IiLCJfZWwkMCIsIl90bXBsJDAiLCJab25kaWNvbkFubm91bmNlbWVudCIsIl9lbCQxIiwiX3RtcGwkMSIsIlpvbmRpY29uQXBwYXJlbCIsIl9lbCQxMCIsIl90bXBsJDEwIiwiWm9uZGljb25BcnJvd0Rvd24iLCJfZWwkMTEiLCJfdG1wbCQxMSIsIlpvbmRpY29uQXJyb3dMZWZ0IiwiX2VsJDEyIiwiX3RtcGwkMTIiLCJab25kaWNvbkFycm93T3V0bGluZURvd24iLCJfZWwkMTMiLCJfdG1wbCQxMyIsIlpvbmRpY29uQXJyb3dPdXRsaW5lTGVmdCIsIl9lbCQxNCIsIl90bXBsJDE0IiwiWm9uZGljb25BcnJvd091dGxpbmVSaWdodCIsIl9lbCQxNSIsIl90bXBsJDE1IiwiWm9uZGljb25BcnJvd091dGxpbmVVcCIsIl9lbCQxNiIsIl90bXBsJDE2IiwiWm9uZGljb25BcnJvd1JpZ2h0IiwiX2VsJDE3IiwiX3RtcGwkMTciLCJab25kaWNvbkFycm93VGhpY2tEb3duIiwiX2VsJDE4IiwiX3RtcGwkMTgiLCJab25kaWNvbkFycm93VGhpY2tMZWZ0IiwiX2VsJDE5IiwiX3RtcGwkMTkiLCJab25kaWNvbkFycm93VGhpY2tSaWdodCIsIl9lbCQyMCIsIl90bXBsJDIwIiwiWm9uZGljb25BcnJvd1RoaWNrVXAiLCJfZWwkMjEiLCJfdG1wbCQyMSIsIlpvbmRpY29uQXJyb3dUaGluRG93biIsIl9lbCQyMiIsIl90bXBsJDIyIiwiWm9uZGljb25BcnJvd1RoaW5MZWZ0IiwiX2VsJDIzIiwiX3RtcGwkMjMiLCJab25kaWNvbkFycm93VGhpblJpZ2h0IiwiX2VsJDI0IiwiX3RtcGwkMjQiLCJab25kaWNvbkFycm93VGhpblVwIiwiX2VsJDI1IiwiX3RtcGwkMjUiLCJab25kaWNvbkFycm93VXAiLCJfZWwkMjYiLCJfdG1wbCQyNiIsIlpvbmRpY29uQXJ0aXN0IiwiX2VsJDI3IiwiX3RtcGwkMjciLCJab25kaWNvbkF0U3ltYm9sIiwiX2VsJDI4IiwiX3RtcGwkMjgiLCJab25kaWNvbkF0dGFjaG1lbnQiLCJfZWwkMjkiLCJfdG1wbCQyOSIsIlpvbmRpY29uQmFja3NwYWNlIiwiX2VsJDMwIiwiX3RtcGwkMzAiLCJab25kaWNvbkJhY2t3YXJkU3RlcCIsIl9lbCQzMSIsIl90bXBsJDMxIiwiWm9uZGljb25CYWNrd2FyZCIsIl9lbCQzMiIsIl90bXBsJDMyIiwiWm9uZGljb25CYWRnZSIsIl9lbCQzMyIsIl90bXBsJDMzIiwiWm9uZGljb25CYXR0ZXJ5RnVsbCIsIl9lbCQzNCIsIl90bXBsJDM0IiwiWm9uZGljb25CYXR0ZXJ5SGFsZiIsIl9lbCQzNSIsIl90bXBsJDM1IiwiWm9uZGljb25CYXR0ZXJ5TG93IiwiX2VsJDM2IiwiX3RtcGwkMzYiLCJab25kaWNvbkJldmVyYWdlIiwiX2VsJDM3IiwiX3RtcGwkMzciLCJab25kaWNvbkJsb2NrIiwiX2VsJDM4IiwiX3RtcGwkMzgiLCJab25kaWNvbkJsdWV0b290aCIsIl9lbCQzOSIsIl90bXBsJDM5IiwiWm9uZGljb25Cb2x0IiwiX2VsJDQwIiwiX3RtcGwkNDAiLCJab25kaWNvbkJvb2tSZWZlcmVuY2UiLCJfZWwkNDEiLCJfdG1wbCQ0MSIsIlpvbmRpY29uQm9va21hcmtDb3B5MiIsIl9lbCQ0MiIsIl90bXBsJDQyIiwiWm9uZGljb25Cb29rbWFya0NvcHkzIiwiX2VsJDQzIiwiX3RtcGwkNDMiLCJab25kaWNvbkJvb2ttYXJrT3V0bGluZUFkZCIsIl9lbCQ0NCIsIl90bXBsJDQ0IiwiWm9uZGljb25Cb29rbWFya091dGxpbmUiLCJfZWwkNDUiLCJfdG1wbCQ0NSIsIlpvbmRpY29uQm9va21hcmsiLCJfZWwkNDYiLCJfdG1wbCQ0NiIsIlpvbmRpY29uQm9yZGVyQWxsIiwiX2VsJDQ3IiwiX3RtcGwkNDciLCJab25kaWNvbkJvcmRlckJvdHRvbSIsIl9lbCQ0OCIsIl90bXBsJDQ4IiwiWm9uZGljb25Cb3JkZXJIb3Jpem9udGFsIiwiX2VsJDQ5IiwiX3RtcGwkNDkiLCJab25kaWNvbkJvcmRlcklubmVyIiwiX2VsJDUwIiwiX3RtcGwkNTAiLCJab25kaWNvbkJvcmRlckxlZnQiLCJfZWwkNTEiLCJfdG1wbCQ1MSIsIlpvbmRpY29uQm9yZGVyTm9uZSIsIl9lbCQ1MiIsIl90bXBsJDUyIiwiWm9uZGljb25Cb3JkZXJPdXRlciIsIl9lbCQ1MyIsIl90bXBsJDUzIiwiWm9uZGljb25Cb3JkZXJSaWdodCIsIl9lbCQ1NCIsIl90bXBsJDU0IiwiWm9uZGljb25Cb3JkZXJUb3AiLCJfZWwkNTUiLCJfdG1wbCQ1NSIsIlpvbmRpY29uQm9yZGVyVmVydGljYWwiLCJfZWwkNTYiLCJfdG1wbCQ1NiIsIlpvbmRpY29uQm94IiwiX2VsJDU3IiwiX3RtcGwkNTciLCJab25kaWNvbkJyaWdodG5lc3NEb3duIiwiX2VsJDU4IiwiX3RtcGwkNTgiLCJab25kaWNvbkJyaWdodG5lc3NVcCIsIl9lbCQ1OSIsIl90bXBsJDU5IiwiWm9uZGljb25Ccm93c2VyV2luZG93TmV3IiwiX2VsJDYwIiwiX3RtcGwkNjAiLCJab25kaWNvbkJyb3dzZXJXaW5kb3dPcGVuIiwiX2VsJDYxIiwiX3RtcGwkNjEiLCJab25kaWNvbkJyb3dzZXJXaW5kb3ciLCJfZWwkNjIiLCJfdG1wbCQ2MiIsIlpvbmRpY29uQnVnIiwiX2VsJDYzIiwiX3RtcGwkNjMiLCJab25kaWNvbkJ1b3kiLCJfZWwkNjQiLCJfdG1wbCQ2NCIsIlpvbmRpY29uQ2FsY3VsYXRvciIsIl9lbCQ2NSIsIl90bXBsJDY1IiwiWm9uZGljb25DYWxlbmRhciIsIl9lbCQ2NiIsIl90bXBsJDY2IiwiWm9uZGljb25DYW1lcmEiLCJfZWwkNjciLCJfdG1wbCQ2NyIsIlpvbmRpY29uQ2hhcnRCYXIiLCJfZWwkNjgiLCJfdG1wbCQ2OCIsIlpvbmRpY29uQ2hhcnRQaWUiLCJfZWwkNjkiLCJfdG1wbCQ2OSIsIlpvbmRpY29uQ2hhcnQiLCJfZWwkNzAiLCJfdG1wbCQ3MCIsIlpvbmRpY29uQ2hhdEJ1YmJsZURvdHMiLCJfZWwkNzEiLCJfdG1wbCQ3MSIsIlpvbmRpY29uQ2hlY2ttYXJrT3V0bGluZSIsIl9lbCQ3MiIsIl90bXBsJDcyIiwiWm9uZGljb25DaGVja21hcmsiLCJfZWwkNzMiLCJfdG1wbCQ3MyIsIlpvbmRpY29uQ2hldmVyb25Eb3duIiwiX2VsJDc0IiwiX3RtcGwkNzQiLCJab25kaWNvbkNoZXZlcm9uTGVmdCIsIl9lbCQ3NSIsIl90bXBsJDc1IiwiWm9uZGljb25DaGV2ZXJvbk91dGxpbmVEb3duIiwiX2VsJDc2IiwiX3RtcGwkNzYiLCJab25kaWNvbkNoZXZlcm9uT3V0bGluZUxlZnQiLCJfZWwkNzciLCJfdG1wbCQ3NyIsIlpvbmRpY29uQ2hldmVyb25PdXRsaW5lUmlnaHQiLCJfZWwkNzgiLCJfdG1wbCQ3OCIsIlpvbmRpY29uQ2hldmVyb25PdXRsaW5lVXAiLCJfZWwkNzkiLCJfdG1wbCQ3OSIsIlpvbmRpY29uQ2hldmVyb25SaWdodCIsIl9lbCQ4MCIsIl90bXBsJDgwIiwiWm9uZGljb25DaGV2ZXJvblVwIiwiX2VsJDgxIiwiX3RtcGwkODEiLCJab25kaWNvbkNsaXBib2FyZCIsIl9lbCQ4MiIsIl90bXBsJDgyIiwiWm9uZGljb25DbG9zZU91dGxpbmUiLCJfZWwkODMiLCJfdG1wbCQ4MyIsIlpvbmRpY29uQ2xvc2VTb2xpZCIsIl9lbCQ4NCIsIl90bXBsJDg0IiwiWm9uZGljb25DbG9zZSIsIl9lbCQ4NSIsIl90bXBsJDg1IiwiWm9uZGljb25DbG91ZFVwbG9hZCIsIl9lbCQ4NiIsIl90bXBsJDg2IiwiWm9uZGljb25DbG91ZCIsIl9lbCQ4NyIsIl90bXBsJDg3IiwiWm9uZGljb25Db2RlIiwiX2VsJDg4IiwiX3RtcGwkODgiLCJab25kaWNvbkNvZmZlZSIsIl9lbCQ4OSIsIl90bXBsJDg5IiwiWm9uZGljb25Db2ciLCJfZWwkOTAiLCJfdG1wbCQ5MCIsIlpvbmRpY29uQ29sb3JQYWxldHRlIiwiX2VsJDkxIiwiX3RtcGwkOTEiLCJab25kaWNvbkNvbXBvc2UiLCJfZWwkOTIiLCJfdG1wbCQ5MiIsIlpvbmRpY29uQ29tcHV0ZXJEZXNrdG9wIiwiX2VsJDkzIiwiX3RtcGwkOTMiLCJab25kaWNvbkNvbXB1dGVyTGFwdG9wIiwiX2VsJDk0IiwiX3RtcGwkOTQiLCJab25kaWNvbkNvbnZlcnNhdGlvbiIsIl9lbCQ5NSIsIl90bXBsJDk1IiwiWm9uZGljb25Db3B5IiwiX2VsJDk2IiwiX3RtcGwkOTYiLCJab25kaWNvbkNyZWRpdENhcmQiLCJfZWwkOTciLCJfdG1wbCQ5NyIsIlpvbmRpY29uQ3VycmVuY3lEb2xsYXIiLCJfZWwkOTgiLCJfdG1wbCQ5OCIsIlpvbmRpY29uRGFzaGJvYXJkIiwiX2VsJDk5IiwiX3RtcGwkOTkiLCJab25kaWNvbkRhdGVBZGQiLCJfZWwkMTAwIiwiX3RtcGwkMTAwIiwiWm9uZGljb25EaWFsUGFkIiwiX2VsJDEwMSIsIl90bXBsJDEwMSIsIlpvbmRpY29uRGlyZWN0aW9ucyIsIl9lbCQxMDIiLCJfdG1wbCQxMDIiLCJab25kaWNvbkRvY3VtZW50QWRkIiwiX2VsJDEwMyIsIl90bXBsJDEwMyIsIlpvbmRpY29uRG9jdW1lbnQiLCJfZWwkMTA0IiwiX3RtcGwkMTA0IiwiWm9uZGljb25Eb3RzSG9yaXpvbnRhbERvdWJsZSIsIl9lbCQxMDUiLCJfdG1wbCQxMDUiLCJab25kaWNvbkRvdHNIb3Jpem9udGFsVHJpcGxlIiwiX2VsJDEwNiIsIl90bXBsJDEwNiIsIlpvbmRpY29uRG93bmxvYWQiLCJfZWwkMTA3IiwiX3RtcGwkMTA3IiwiWm9uZGljb25EdXBsaWNhdGUiLCJfZWwkMTA4IiwiX3RtcGwkMTA4IiwiWm9uZGljb25FZGl0Q29weSIsIl9lbCQxMDkiLCJab25kaWNvbkVkaXRDcm9wIiwiX2VsJDExMCIsIl90bXBsJDEwOSIsIlpvbmRpY29uRWRpdEN1dCIsIl9lbCQxMTEiLCJfdG1wbCQxMTAiLCJab25kaWNvbkVkaXRQZW5jaWwiLCJfZWwkMTEyIiwiX3RtcGwkMTExIiwiWm9uZGljb25FZHVjYXRpb24iLCJfZWwkMTEzIiwiX3RtcGwkMTEyIiwiWm9uZGljb25FbnZlbG9wZSIsIl9lbCQxMTQiLCJfdG1wbCQxMTMiLCJab25kaWNvbkV4Y2xhbWF0aW9uT3V0bGluZSIsIl9lbCQxMTUiLCJfdG1wbCQxMTQiLCJab25kaWNvbkV4Y2xhbWF0aW9uU29saWQiLCJfZWwkMTE2IiwiX3RtcGwkMTE1IiwiWm9uZGljb25FeHBsb3JlIiwiX2VsJDExNyIsIl90bXBsJDExNiIsIlpvbmRpY29uRmFjdG9yeSIsIl9lbCQxMTgiLCJfdG1wbCQxMTciLCJab25kaWNvbkZhc3RGb3J3YXJkIiwiX2VsJDExOSIsIl90bXBsJDExOCIsIlpvbmRpY29uRmFzdFJld2luZCIsIl9lbCQxMjAiLCJab25kaWNvbkZpbG0iLCJfZWwkMTIxIiwiX3RtcGwkMTE5IiwiWm9uZGljb25GaWx0ZXIiLCJfZWwkMTIyIiwiX3RtcGwkMTIwIiwiWm9uZGljb25GbGFnIiwiX2VsJDEyMyIsIl90bXBsJDEyMSIsIlpvbmRpY29uRmxhc2hsaWdodCIsIl9lbCQxMjQiLCJfdG1wbCQxMjIiLCJab25kaWNvbkZvbGRlck91dGxpbmVBZGQiLCJfZWwkMTI1IiwiX3RtcGwkMTIzIiwiWm9uZGljb25Gb2xkZXJPdXRsaW5lIiwiX2VsJDEyNiIsIl90bXBsJDEyNCIsIlpvbmRpY29uRm9sZGVyIiwiX2VsJDEyNyIsIl90bXBsJDEyNSIsIlpvbmRpY29uRm9ybWF0Qm9sZCIsIl9lbCQxMjgiLCJfdG1wbCQxMjYiLCJab25kaWNvbkZvcm1hdEZvbnRTaXplIiwiX2VsJDEyOSIsIl90bXBsJDEyNyIsIlpvbmRpY29uRm9ybWF0SXRhbGljIiwiX2VsJDEzMCIsIl90bXBsJDEyOCIsIlpvbmRpY29uRm9ybWF0VGV4dFNpemUiLCJfZWwkMTMxIiwiWm9uZGljb25Gb3JtYXRVbmRlcmxpbmUiLCJfZWwkMTMyIiwiX3RtcGwkMTI5IiwiWm9uZGljb25Gb3J3YXJkU3RlcCIsIl9lbCQxMzMiLCJfdG1wbCQxMzAiLCJab25kaWNvbkZvcndhcmQiLCJfZWwkMTM0IiwiWm9uZGljb25HaWZ0IiwiX2VsJDEzNSIsIl90bXBsJDEzMSIsIlpvbmRpY29uR2xvYmUiLCJfZWwkMTM2IiwiX3RtcGwkMTMyIiwiWm9uZGljb25IYW5kU3RvcCIsIl9lbCQxMzciLCJfdG1wbCQxMzMiLCJab25kaWNvbkhhcmREcml2ZSIsIl9lbCQxMzgiLCJfdG1wbCQxMzQiLCJab25kaWNvbkhlYWRwaG9uZXMiLCJfZWwkMTM5IiwiX3RtcGwkMTM1IiwiWm9uZGljb25IZWFydCIsIl9lbCQxNDAiLCJfdG1wbCQxMzYiLCJab25kaWNvbkhvbWUiLCJfZWwkMTQxIiwiX3RtcGwkMTM3IiwiWm9uZGljb25Ib3QiLCJfZWwkMTQyIiwiX3RtcGwkMTM4IiwiWm9uZGljb25Ib3VyR2xhc3MiLCJfZWwkMTQzIiwiX3RtcGwkMTM5IiwiWm9uZGljb25JbmJveENoZWNrIiwiX2VsJDE0NCIsIl90bXBsJDE0MCIsIlpvbmRpY29uSW5ib3hEb3dubG9hZCIsIl9lbCQxNDUiLCJfdG1wbCQxNDEiLCJab25kaWNvbkluYm94RnVsbCIsIl9lbCQxNDYiLCJfdG1wbCQxNDIiLCJab25kaWNvbkluYm94IiwiX2VsJDE0NyIsIl90bXBsJDE0MyIsIlpvbmRpY29uSW5kZW50RGVjcmVhc2UiLCJfZWwkMTQ4IiwiX3RtcGwkMTQ0IiwiWm9uZGljb25JbmRlbnRJbmNyZWFzZSIsIl9lbCQxNDkiLCJfdG1wbCQxNDUiLCJab25kaWNvbkluZm9ybWF0aW9uT3V0bGluZSIsIl9lbCQxNTAiLCJfdG1wbCQxNDYiLCJab25kaWNvbkluZm9ybWF0aW9uU29saWQiLCJfZWwkMTUxIiwiX3RtcGwkMTQ3IiwiWm9uZGljb25LZXkiLCJfZWwkMTUyIiwiX3RtcGwkMTQ4IiwiWm9uZGljb25LZXlib2FyZCIsIl9lbCQxNTMiLCJfdG1wbCQxNDkiLCJab25kaWNvbkxheWVycyIsIl9lbCQxNTQiLCJfdG1wbCQxNTAiLCJab25kaWNvbkxpYnJhcnkiLCJfZWwkMTU1IiwiX3RtcGwkMTUxIiwiWm9uZGljb25MaWdodEJ1bGIiLCJfZWwkMTU2IiwiX3RtcGwkMTUyIiwiWm9uZGljb25MaW5rIiwiX2VsJDE1NyIsIl90bXBsJDE1MyIsIlpvbmRpY29uTGlzdEFkZCIsIl9lbCQxNTgiLCJfdG1wbCQxNTQiLCJab25kaWNvbkxpc3RCdWxsZXQiLCJfZWwkMTU5IiwiX3RtcGwkMTU1IiwiWm9uZGljb25MaXN0IiwiX2VsJDE2MCIsIlpvbmRpY29uTG9hZEJhbGFuY2VyIiwiX2VsJDE2MSIsIl90bXBsJDE1NiIsIlpvbmRpY29uTG9jYXRpb25DdXJyZW50IiwiX2VsJDE2MiIsIl90bXBsJDE1NyIsIlpvbmRpY29uTG9jYXRpb25Gb29kIiwiX2VsJDE2MyIsIl90bXBsJDE1OCIsIlpvbmRpY29uTG9jYXRpb25HYXNTdGF0aW9uIiwiX2VsJDE2NCIsIl90bXBsJDE1OSIsIlpvbmRpY29uTG9jYXRpb25Ib3RlbCIsIl9lbCQxNjUiLCJfdG1wbCQxNjAiLCJab25kaWNvbkxvY2F0aW9uTWFyaW5hIiwiX2VsJDE2NiIsIl90bXBsJDE2MSIsIlpvbmRpY29uTG9jYXRpb25QYXJrIiwiX2VsJDE2NyIsIl90bXBsJDE2MiIsIlpvbmRpY29uTG9jYXRpb25SZXN0cm9vbSIsIl9lbCQxNjgiLCJfdG1wbCQxNjMiLCJab25kaWNvbkxvY2F0aW9uU2hvcHBpbmciLCJfZWwkMTY5IiwiX3RtcGwkMTY0IiwiWm9uZGljb25Mb2NhdGlvbiIsIl9lbCQxNzAiLCJfdG1wbCQxNjUiLCJab25kaWNvbkxvY2tDbG9zZWQiLCJfZWwkMTcxIiwiX3RtcGwkMTY2IiwiWm9uZGljb25Mb2NrT3BlbiIsIl9lbCQxNzIiLCJfdG1wbCQxNjciLCJab25kaWNvbk1hcCIsIl9lbCQxNzMiLCJfdG1wbCQxNjgiLCJab25kaWNvbk1lbnUiLCJfZWwkMTc0IiwiX3RtcGwkMTY5IiwiWm9uZGljb25NaWMiLCJfZWwkMTc1IiwiX3RtcGwkMTcwIiwiWm9uZGljb25NaW51c091dGxpbmUiLCJfZWwkMTc2IiwiX3RtcGwkMTcxIiwiWm9uZGljb25NaW51c1NvbGlkIiwiX2VsJDE3NyIsIl90bXBsJDE3MiIsIlpvbmRpY29uTW9iaWxlRGV2aWNlcyIsIl9lbCQxNzgiLCJfdG1wbCQxNzMiLCJab25kaWNvbk1vb2RIYXBweU91dGxpbmUiLCJfZWwkMTc5IiwiX3RtcGwkMTc0IiwiWm9uZGljb25Nb29kSGFwcHlTb2xpZCIsIl9lbCQxODAiLCJfdG1wbCQxNzUiLCJab25kaWNvbk1vb2ROZXV0cmFsT3V0bGluZSIsIl9lbCQxODEiLCJfdG1wbCQxNzYiLCJab25kaWNvbk1vb2ROZXV0cmFsU29saWQiLCJfZWwkMTgyIiwiX3RtcGwkMTc3IiwiWm9uZGljb25Nb29kU2FkT3V0bGluZSIsIl9lbCQxODMiLCJfdG1wbCQxNzgiLCJab25kaWNvbk1vb2RTYWRTb2xpZCIsIl9lbCQxODQiLCJfdG1wbCQxNzkiLCJab25kaWNvbk1vdXNlIiwiX2VsJDE4NSIsIl90bXBsJDE4MCIsIlpvbmRpY29uTXVzaWNBbGJ1bSIsIl9lbCQxODYiLCJab25kaWNvbk11c2ljQXJ0aXN0IiwiX2VsJDE4NyIsIl90bXBsJDE4MSIsIlpvbmRpY29uTXVzaWNOb3RlcyIsIl9lbCQxODgiLCJfdG1wbCQxODIiLCJab25kaWNvbk11c2ljUGxheWxpc3QiLCJfZWwkMTg5IiwiX3RtcGwkMTgzIiwiWm9uZGljb25OYXZpZ2F0aW9uTW9yZSIsIl9lbCQxOTAiLCJfdG1wbCQxODQiLCJab25kaWNvbk5ldHdvcmsiLCJfZWwkMTkxIiwiX3RtcGwkMTg1IiwiWm9uZGljb25OZXdzUGFwZXIiLCJfZWwkMTkyIiwiX3RtcGwkMTg2IiwiWm9uZGljb25Ob3RpZmljYXRpb24iLCJfZWwkMTkzIiwiX3RtcGwkMTg3IiwiWm9uZGljb25Ob3RpZmljYXRpb25zT3V0bGluZSIsIl9lbCQxOTQiLCJfdG1wbCQxODgiLCJab25kaWNvbk5vdGlmaWNhdGlvbnMiLCJfZWwkMTk1IiwiWm9uZGljb25QYXN0ZSIsIl9lbCQxOTYiLCJfdG1wbCQxODkiLCJab25kaWNvblBhdXNlT3V0bGluZSIsIl9lbCQxOTciLCJfdG1wbCQxOTAiLCJab25kaWNvblBhdXNlU29saWQiLCJfZWwkMTk4IiwiX3RtcGwkMTkxIiwiWm9uZGljb25QYXVzZSIsIl9lbCQxOTkiLCJfdG1wbCQxOTIiLCJab25kaWNvblBlblRvb2wiLCJfZWwkMjAwIiwiX3RtcGwkMTkzIiwiWm9uZGljb25QaG9uZSIsIl9lbCQyMDEiLCJfdG1wbCQxOTQiLCJab25kaWNvblBob3RvIiwiX2VsJDIwMiIsIl90bXBsJDE5NSIsIlpvbmRpY29uUGhwRWxlcGhhbnQiLCJfZWwkMjAzIiwiX3RtcGwkMTk2IiwiWm9uZGljb25QaW4iLCJfZWwkMjA0IiwiX3RtcGwkMTk3IiwiWm9uZGljb25QbGF5T3V0bGluZSIsIl9lbCQyMDUiLCJfdG1wbCQxOTgiLCJab25kaWNvblBsYXkiLCJfZWwkMjA2IiwiX3RtcGwkMTk5IiwiWm9uZGljb25QbGF5bGlzdCIsIl9lbCQyMDciLCJab25kaWNvblBsdWdpbiIsIl9lbCQyMDgiLCJfdG1wbCQyMDAiLCJab25kaWNvblBvcnRmb2xpbyIsIl9lbCQyMDkiLCJfdG1wbCQyMDEiLCJab25kaWNvblByaW50ZXIiLCJfZWwkMjEwIiwiX3RtcGwkMjAyIiwiWm9uZGljb25QeWxvbiIsIl9lbCQyMTEiLCJfdG1wbCQyMDMiLCJab25kaWNvblF1ZXN0aW9uIiwiX2VsJDIxMiIsIl90bXBsJDIwNCIsIlpvbmRpY29uUXVldWUiLCJfZWwkMjEzIiwiX3RtcGwkMjA1IiwiWm9uZGljb25SYWRhckNvcHkyIiwiX2VsJDIxNCIsIl90bXBsJDIwNiIsIlpvbmRpY29uUmFkYXIiLCJfZWwkMjE1IiwiWm9uZGljb25SYWRpbyIsIl9lbCQyMTYiLCJfdG1wbCQyMDciLCJab25kaWNvblJlZnJlc2giLCJfZWwkMjE3IiwiX3RtcGwkMjA4IiwiWm9uZGljb25SZWxvYWQiLCJfZWwkMjE4IiwiX3RtcGwkMjA5IiwiWm9uZGljb25SZXBseUFsbCIsIl9lbCQyMTkiLCJfdG1wbCQyMTAiLCJab25kaWNvblJlcGx5IiwiX2VsJDIyMCIsIl90bXBsJDIxMSIsIlpvbmRpY29uUmVwb3N0IiwiX2VsJDIyMSIsIl90bXBsJDIxMiIsIlpvbmRpY29uU2F2ZURpc2siLCJfZWwkMjIyIiwiX3RtcGwkMjEzIiwiWm9uZGljb25TY3JlZW5GdWxsIiwiX2VsJDIyMyIsIl90bXBsJDIxNCIsIlpvbmRpY29uU2VhcmNoIiwiX2VsJDIyNCIsIl90bXBsJDIxNSIsIlpvbmRpY29uU2VuZCIsIl9lbCQyMjUiLCJfdG1wbCQyMTYiLCJab25kaWNvblNlcnZlcnMiLCJfZWwkMjI2IiwiX3RtcGwkMjE3IiwiWm9uZGljb25TaGFyZTAxIiwiX2VsJDIyNyIsIl90bXBsJDIxOCIsIlpvbmRpY29uU2hhcmVBbHQiLCJfZWwkMjI4IiwiX3RtcGwkMjE5IiwiWm9uZGljb25TaGFyZSIsIl9lbCQyMjkiLCJfdG1wbCQyMjAiLCJab25kaWNvblNoaWVsZCIsIl9lbCQyMzAiLCJfdG1wbCQyMjEiLCJab25kaWNvblNob3BwaW5nQ2FydCIsIl9lbCQyMzEiLCJfdG1wbCQyMjIiLCJab25kaWNvblNob3dTaWRlYmFyIiwiX2VsJDIzMiIsIl90bXBsJDIyMyIsIlpvbmRpY29uU2h1ZmZsZSIsIl9lbCQyMzMiLCJfdG1wbCQyMjQiLCJab25kaWNvblN0YW5kQnkiLCJfZWwkMjM0IiwiX3RtcGwkMjI1IiwiWm9uZGljb25TdGFyRnVsbCIsIl9lbCQyMzUiLCJfdG1wbCQyMjYiLCJab25kaWNvblN0YXRpb24iLCJfZWwkMjM2IiwiX3RtcGwkMjI3IiwiWm9uZGljb25TdGVwQmFja3dhcmQiLCJfZWwkMjM3IiwiWm9uZGljb25TdGVwRm9yd2FyZCIsIl9lbCQyMzgiLCJab25kaWNvblN0ZXRob3Njb3BlIiwiX2VsJDIzOSIsIl90bXBsJDIyOCIsIlpvbmRpY29uU3RvcmVGcm9udCIsIl9lbCQyNDAiLCJfdG1wbCQyMjkiLCJab25kaWNvblN0cm9rZVdpZHRoIiwiX2VsJDI0MSIsIl90bXBsJDIzMCIsIlpvbmRpY29uU3ViZGlyZWN0b3J5TGVmdCIsIl9lbCQyNDIiLCJfdG1wbCQyMzEiLCJab25kaWNvblN1YmRpcmVjdG9yeVJpZ2h0IiwiX2VsJDI0MyIsIl90bXBsJDIzMiIsIlpvbmRpY29uU3dhcCIsIl9lbCQyNDQiLCJfdG1wbCQyMzMiLCJab25kaWNvblRhYmxldCIsIl9lbCQyNDUiLCJfdG1wbCQyMzQiLCJab25kaWNvblRhZyIsIl9lbCQyNDYiLCJfdG1wbCQyMzUiLCJab25kaWNvblRhcmdldCIsIl9lbCQyNDciLCJfdG1wbCQyMzYiLCJab25kaWNvblRleHRCb3giLCJfZWwkMjQ4IiwiX3RtcGwkMjM3IiwiWm9uZGljb25UZXh0RGVjb3JhdGlvbiIsIl9lbCQyNDkiLCJfdG1wbCQyMzgiLCJab25kaWNvblRoZXJtb21ldGVyIiwiX2VsJDI1MCIsIl90bXBsJDIzOSIsIlpvbmRpY29uVGh1bWJzRG93biIsIl9lbCQyNTEiLCJfdG1wbCQyNDAiLCJab25kaWNvblRodW1ic1VwIiwiX2VsJDI1MiIsIl90bXBsJDI0MSIsIlpvbmRpY29uVGlja2V0IiwiX2VsJDI1MyIsIl90bXBsJDI0MiIsIlpvbmRpY29uVGltZSIsIl9lbCQyNTQiLCJfdG1wbCQyNDMiLCJab25kaWNvblRpbWVyIiwiX2VsJDI1NSIsIl90bXBsJDI0NCIsIlpvbmRpY29uVG9vbHNDb3B5IiwiX2VsJDI1NiIsIlpvbmRpY29uVHJhbnNsYXRlIiwiX2VsJDI1NyIsIl90bXBsJDI0NSIsIlpvbmRpY29uVHJhc2giLCJfZWwkMjU4IiwiX3RtcGwkMjQ2IiwiWm9uZGljb25UcmF2ZWxCdXMiLCJfZWwkMjU5IiwiX3RtcGwkMjQ3IiwiWm9uZGljb25UcmF2ZWxDYXIiLCJfZWwkMjYwIiwiX3RtcGwkMjQ4IiwiWm9uZGljb25UcmF2ZWxDYXNlIiwiX2VsJDI2MSIsIl90bXBsJDI0OSIsIlpvbmRpY29uVHJhdmVsVGF4aUNhYiIsIl9lbCQyNjIiLCJfdG1wbCQyNTAiLCJab25kaWNvblRyYXZlbFRyYWluIiwiX2VsJDI2MyIsIl90bXBsJDI1MSIsIlpvbmRpY29uVHJhdmVsV2FsayIsIl9lbCQyNjQiLCJfdG1wbCQyNTIiLCJab25kaWNvblRyYXZlbCIsIl9lbCQyNjUiLCJab25kaWNvblRyb3BoeSIsIl9lbCQyNjYiLCJfdG1wbCQyNTMiLCJab25kaWNvblR1bmluZyIsIl9lbCQyNjciLCJfdG1wbCQyNTQiLCJab25kaWNvblVwbG9hZCIsIl9lbCQyNjgiLCJfdG1wbCQyNTUiLCJab25kaWNvblVzYiIsIl9lbCQyNjkiLCJfdG1wbCQyNTYiLCJab25kaWNvblVzZXJBZGQiLCJfZWwkMjcwIiwiX3RtcGwkMjU3IiwiWm9uZGljb25Vc2VyR3JvdXAiLCJfZWwkMjcxIiwiX3RtcGwkMjU4IiwiWm9uZGljb25Vc2VyU29saWRDaXJjbGUiLCJfZWwkMjcyIiwiX3RtcGwkMjU5IiwiWm9uZGljb25Vc2VyU29saWRTcXVhcmUiLCJfZWwkMjczIiwiX3RtcGwkMjYwIiwiWm9uZGljb25Vc2VyIiwiX2VsJDI3NCIsIl90bXBsJDI2MSIsIlpvbmRpY29uVmVjdG9yIiwiX2VsJDI3NSIsIl90bXBsJDI2MiIsIlpvbmRpY29uVmlkZW9DYW1lcmEiLCJfZWwkMjc2IiwiX3RtcGwkMjYzIiwiWm9uZGljb25WaWV3Q2Fyb3VzZWwiLCJfZWwkMjc3IiwiX3RtcGwkMjY0IiwiWm9uZGljb25WaWV3Q29sdW1uIiwiX2VsJDI3OCIsIl90bXBsJDI2NSIsIlpvbmRpY29uVmlld0hpZGUiLCJfZWwkMjc5IiwiX3RtcGwkMjY2IiwiWm9uZGljb25WaWV3TGlzdCIsIl9lbCQyODAiLCJfdG1wbCQyNjciLCJab25kaWNvblZpZXdTaG93IiwiX2VsJDI4MSIsIl90bXBsJDI2OCIsIlpvbmRpY29uVmlld1RpbGUiLCJfZWwkMjgyIiwiX3RtcGwkMjY5IiwiWm9uZGljb25Wb2x1bWVEb3duIiwiX2VsJDI4MyIsIl90bXBsJDI3MCIsIlpvbmRpY29uVm9sdW1lTXV0ZSIsIl9lbCQyODQiLCJfdG1wbCQyNzEiLCJab25kaWNvblZvbHVtZU9mZiIsIl9lbCQyODUiLCJfdG1wbCQyNzIiLCJab25kaWNvblZvbHVtZVVwIiwiX2VsJDI4NiIsIl90bXBsJDI3MyIsIlpvbmRpY29uV2FsbGV0IiwiX2VsJDI4NyIsIl90bXBsJDI3NCIsIlpvbmRpY29uV2F0Y2giLCJfZWwkMjg4IiwiX3RtcGwkMjc1IiwiWm9uZGljb25XaW5kb3dOZXciLCJfZWwkMjg5IiwiWm9uZGljb25XaW5kb3dPcGVuIiwiX2VsJDI5MCIsIlpvbmRpY29uV2luZG93IiwiX2VsJDI5MSIsIlpvbmRpY29uV3JlbmNoIiwiX2VsJDI5MiIsIl90bXBsJDI3NiIsIlpvbmRpY29uWWluWWFuZyIsIl9lbCQyOTMiLCJfdG1wbCQyNzciLCJab25kaWNvblpvb21JbiIsIl9lbCQyOTQiLCJfdG1wbCQyNzgiLCJab25kaWNvblpvb21PdXQiLCJfZWwkMjk1IiwiX3RtcGwkMjc5Il0sInNvdXJjZXMiOlsiem9uZGljb25zLnNzci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBVVRPLUdFTkVSQVRFRCBGSUxFLiBETyBOT1QgRURJVCBCWSBIQU5ELlxuLy8gSWNvbiBzZXQ6IHpvbmRpY29ucyB8IExpY2Vuc2U6IE1JVCAoTUlUX1VSTClcbmltcG9ydCB7IG1lcmdlUHJvcHMgfSBmcm9tICdzb2xpZC1qcydcbmltcG9ydCB7IHpvbmRpY29uc0RlZmF1bHRQcm9wcyB9IGZyb20gJy4vem9uZGljb25zZGVmYXVsdFByb3BzJ1xuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQWRkT3V0bGluZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEgOWg0djJoLTR2NEg5di00SDVWOWg0VjVoMnY0em0tMSAxMWExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQWRkU29saWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTExIDlWNUg5djRINXYyaDR2NGgydi00aDRWOWgtNHptLTEgMTFhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BZGp1c3QocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDJ2MTZhOCA4IDAgMSAwIDAtMTZ6bTAgMThhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BaXJwbGFuZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNOC40IDEySDIuOEwxIDE1SDBWNWgxbDEuOCAzaDUuNkw2IDBoMmw0LjggOEgxOGEyIDIgMCAxIDEgMCA0aC01LjJMOCAyMEg2bDIuNC04elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BbGJ1bShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDIwdjIwSDBWMHptMTAgMThhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZ6bTAtNWEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFsaWduQ2VudGVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDFoMTh2MkgxVjF6bTAgOGgxOHYySDFWOXptMCA4aDE4djJIMXYtMnpNNCA1aDEydjJINFY1em0wIDhoMTJ2Mkg0di0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BbGlnbkp1c3RpZmllZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxaDE4djJIMVYxem0wIDhoMTh2MkgxVjl6bTAgOGgxOHYySDF2LTJ6TTEgNWgxOHYySDFWNXptMCA4aDE4djJIMXYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQWxpZ25MZWZ0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDFoMTh2MkgxVjF6bTAgOGgxOHYySDFWOXptMCA4aDE4djJIMXYtMnpNMSA1aDEydjJIMVY1em0wIDhoMTJ2Mkgxdi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BbGlnblJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDFoMTh2MkgxVjF6bTAgOGgxOHYySDFWOXptMCA4aDE4djJIMXYtMnpNNyA1aDEydjJIN1Y1em0wIDhoMTJ2Mkg3di0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BbmNob3IocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQuMzQgMTUuNjZBNy45NyA3Ljk3IDAgMCAwIDkgMTcuOTRWMTBINVY4aDRWNS44M2EzIDMgMCAxIDEgMiAwVjhoNHYyaC00djcuOTRhNy45NyA3Ljk3IDAgMCAwIDQuNjYtMi4yOGwtMS40Mi0xLjQyaDUuNjZsLTIuODMgMi44M2ExMCAxMCAwIDAgMS0xNC4xNCAwTC4xIDE0LjI0aDUuNjZsLTEuNDIgMS40MnpNMTAgNGExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFubm91bmNlbWVudChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMyA2YzAtMS4xLjktMiAyLTJoOGw0LTRoMnYxNmgtMmwtNC00SDVhMiAyIDAgMCAxLTItMkgxVjZoMnptOCA5djVIOGwtMS42Ny01SDV2LTJoOHYyaC0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcHBhcmVsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDBINkwwIDN2Nmw0LTF2MTJoMTJWOGw0IDFWM2wtNi0zaC0xYTMgMyAwIDAgMS02IDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93RG93bihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjkgMTYuMTcyIDIuOTI5IDEwLjEwMSAxLjUxNSAxMS41MTUgMTAgMjAgMTAuNzA3IDE5LjI5MyAxOC40ODUgMTEuNTE1IDE3LjA3MSAxMC4xMDEgMTEgMTYuMTcyIDExIDAgOSAwXCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93TGVmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjMuODI4IDkgOS44OTkgMi45MjkgOC40ODUgMS41MTUgMCAxMCAuNzA3IDEwLjcwNyA4LjQ4NSAxOC40ODUgOS44OTkgMTcuMDcxIDMuODI4IDExIDIwIDExIDIwIDkgMy44MjggOVwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcnJvd091dGxpbmVEb3duKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptLTItOFY1aDR2NWgzbC01IDUtNS01aDN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93T3V0bGluZUxlZnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMTBhMTAgMTAgMCAxIDEgMjAgMCAxMCAxMCAwIDAgMS0yMCAwem0yIDBhOCA4IDAgMSAwIDE2IDAgOCA4IDAgMCAwLTE2IDB6bTgtMmg1djRoLTV2M2wtNS01IDUtNXYzelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcnJvd091dGxpbmVSaWdodChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjAgMTBhMTAgMTAgMCAxIDEtMjAgMCAxMCAxMCAwIDAgMSAyMCAwem0tMiAwYTggOCAwIDEgMC0xNiAwIDggOCAwIDAgMCAxNiAwem0tOCAySDVWOGg1VjVsNSA1LTUgNXYtM3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXJyb3dPdXRsaW5lVXAocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDBhMTAgMTAgMCAxIDEgMCAyMCAxMCAxMCAwIDAgMSAwLTIwem0wIDJhOCA4IDAgMSAwIDAgMTYgOCA4IDAgMCAwIDAtMTZ6bTIgOHY1SDh2LTVINWw1LTUgNSA1aC0zelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcnJvd1JpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMTYuMTcyIDkgMTAuMTAxIDIuOTI5IDExLjUxNSAxLjUxNSAyMCAxMCAxOS4yOTMgMTAuNzA3IDExLjUxNSAxOC40ODUgMTAuMTAxIDE3LjA3MSAxNi4xNzIgMTEgMCAxMSAwIDlcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXJyb3dUaGlja0Rvd24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgMTBWMmg2djhoNWwtOCA4LTgtOGg1elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcnJvd1RoaWNrTGVmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMTNoOFY3aC04VjJsLTggOCA4IDh2LTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93VGhpY2tSaWdodChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgN0gydjZoOHY1bDgtOC04LTh2NXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXJyb3dUaGlja1VwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDEwdjhoNnYtOGg1bC04LTgtOCA4aDV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93VGhpbkRvd24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgMTYuMTcybC02LjA3MS02LjA3MS0xLjQxNCAxLjQxNEwxMCAyMGwuNzA3LS43MDcgNy43NzgtNy43NzgtMS40MTQtMS40MTRMMTEgMTYuMTcyVjBIOXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXJyb3dUaGluTGVmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMy44MjggOWw2LjA3MS02LjA3MS0xLjQxNC0xLjQxNEwwIDEwbC43MDcuNzA3IDcuNzc4IDcuNzc4IDEuNDE0LTEuNDE0TDMuODI4IDExSDIwVjlIMy44Mjh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93VGhpblJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNi4xNzIgOWwtNi4wNzEtNi4wNzEgMS40MTQtMS40MTRMMjAgMTBsLS43MDcuNzA3LTcuNzc4IDcuNzc4LTEuNDE0LTEuNDE0TDE2LjE3MiAxMUgwVjl6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkFycm93VGhpblVwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDMuODI4TDIuOTI5IDkuODk5IDEuNTE1IDguNDg1IDEwIDBsLjcwNy43MDcgNy43NzggNy43NzgtMS40MTQgMS40MTRMMTEgMy44MjhWMjBIOVYzLjgyOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXJyb3dVcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjkgMy44MjggMi45MjkgOS44OTkgMS41MTUgOC40ODUgMTAgMCAxMC43MDcgLjcwNyAxOC40ODUgOC40ODUgMTcuMDcxIDkuODk5IDExIDMuODI4IDExIDIwIDkgMjAgOSAzLjgyOFwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25BcnRpc3QocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE1Ljc1IDhsLTMuNzQtMy43NWEzLjk5IDMuOTkgMCAwIDEgNi44Mi0zLjA4QTQgNCAwIDAgMSAxNS43NSA4ek0xLjg1IDE1LjNsOS4yLTkuMTkgMi44MyAyLjgzLTkuMiA5LjItMi44Mi0yLjg0em0tMS40IDIuODNsMi4xMS0yLjEyIDEuNDIgMS40Mi0yLjEyIDIuMTItMS40Mi0xLjQyek0xMCAxNWwyLTJ2N2gtMnYtNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQXRTeW1ib2wocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEzLjYgMTMuNDdBNC45OSA0Ljk5IDAgMCAxIDUgMTBhNSA1IDAgMCAxIDgtNFY1aDJ2Ni41YTEuNSAxLjUgMCAwIDAgMyAwVjEwYTggOCAwIDEgMC00LjQyIDcuMTZsLjkgMS43OUExMCAxMCAwIDEgMSAyMCAxMGgtLjE4LjE3djEuNWEzLjUgMy41IDAgMCAxLTYuNCAxLjk3ek0xMCAxM2EzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkF0dGFjaG1lbnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE1IDNIN2E3IDcgMCAxIDAgMCAxNGg4di0ySDdBNSA1IDAgMCAxIDcgNWg4YTMgMyAwIDAgMSAwIDZIN2ExIDEgMCAwIDEgMC0yaDhWN0g3YTMgMyAwIDEgMCAwIDZoOGE1IDUgMCAwIDAgMC0xMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQmFja3NwYWNlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDEwbDctN2gxM3YxNEg3bC03LTd6bTE0LjQxIDBsMi4xMy0yLjEyLTEuNDItMS40MkwxMyA4LjZsLTIuMTItMi4xMy0xLjQyIDEuNDJMMTEuNiAxMGwtMi4xMyAyLjEyIDEuNDIgMS40MkwxMyAxMS40bDIuMTIgMi4xMyAxLjQyLTEuNDJMMTQuNCAxMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQmFja3dhcmRTdGVwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDVoM3YxMEg0VjV6bTEyIDB2MTBsLTktNSA5LTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJhY2t3YXJkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOSA1djEwbC05LTUgOS01em0tOSAwdjEwbC05LTUgOS01elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25CYWRnZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMTJhNiA2IDAgMSAxIDAtMTIgNiA2IDAgMCAxIDAgMTJ6bTAtM2EzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6bTQgMi43NVYyMGwtNC00LTQgNHYtOC4yNWE2Ljk3IDYuOTcgMCAwIDAgOCAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25CYXR0ZXJ5RnVsbChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCA2YzAtMS4xLjktMiAyLTJoMTZhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjZ6bTIgMHY4aDE2VjZIMnptMSAxaDR2NkgzVjd6bTUgMGg0djZIOFY3em01IDBoNHY2aC00Vjd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJhdHRlcnlIYWxmKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDZjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNnptMiAwdjhoMTZWNkgyem0xIDFoNHY2SDNWN3ptNSAwaDR2Nkg4Vjd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJhdHRlcnlMb3cocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgNmMwLTEuMS45LTIgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY2em0yIDB2OGgxNlY2SDJ6bTEgMWg0djZIM1Y3elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25CZXZlcmFnZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNOSAxOHYtN0wwIDJWMGgyMHYybC05IDl2N2w1IDF2MUg0di0xbDUtMXptMi0xMGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJsb2NrKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDEwYTEwIDEwIDAgMSAxIDIwIDAgMTAgMTAgMCAwIDEtMjAgMHptMTYuMzItNC45TDUuMDkgMTYuMzFBOCA4IDAgMCAwIDE2LjMyIDUuMDl6bS0xLjQxLTEuNDJBOCA4IDAgMCAwIDMuNjggMTQuOTFMMTQuOTEgMy42OHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQmx1ZXRvb3RoKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05LjQxIDBsNiA2LTQgNCA0IDQtNiA2SDl2LTcuNTlsLTMuMyAzLjMtMS40LTEuNDJMOC41OCAxMGwtNC4zLTQuM0w1LjcgNC4zIDkgNy41OFYwaC40MXpNMTEgNC40MVY3LjZMMTIuNTkgNiAxMSA0LjQxek0xMi41OSAxNEwxMSAxMi40MXYzLjE4TDEyLjU5IDE0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Cb2x0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMyA4VjBMOC4xMSA1Ljg3IDMgMTJoNHY4TDE3IDhoLTR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJvb2tSZWZlcmVuY2UocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTYgNEg1YTEgMSAwIDEgMSAwLTJoMTFWMWExIDEgMCAwIDAtMS0xSDRhMiAyIDAgMCAwLTIgMnYxNmMwIDEuMS45IDIgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNWExIDEgMCAwIDAtMS0xaC03djhsLTItMi0yIDJWNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9va21hcmtDb3B5Mihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjE4IDEyIDE4IDEzIDggMTMgOCAxOCAyIDEyIDggNiA4IDExIDE2IDExIDE2IDIgMTggMlwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Cb29rbWFya0NvcHkzKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBvbHlnb24gcG9pbnRzPVwiMy41IDEzIDEyIDEzIDEyIDE4IDE4IDEyIDEyIDYgMTIgMTEgNCAxMSA0IDIgMiAyIDIgMTNcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9va21hcmtPdXRsaW5lQWRkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yIDJjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjE4bC04LTQtOCA0VjJ6bTIgMHYxNWw2LTMgNiAzVjJINHptNSA1VjVoMnYyaDJ2MmgtMnYySDlWOUg3VjdoMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9va21hcmtPdXRsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yIDJjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjE4bC04LTQtOCA0VjJ6bTIgMHYxNWw2LTMgNiAzVjJINHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9va21hcmsocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIgMmMwLTEuMS45LTIgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MThsLTgtNC04IDRWMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9yZGVyQWxsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMSAxMXY2aDZ2LTZoLTZ6bTAtMmg2VjNoLTZ2NnptLTIgMkgzdjZoNnYtNnptMC0yVjNIM3Y2aDZ6bS04IDlWMWgxOHYxOEgxdi0xelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Cb3JkZXJCb3R0b20ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEgMWgydjJIMVYxem0wIDRoMnYySDFWNXptMCA0aDJ2MkgxVjl6bTAgNGgydjJIMXYtMnptMCA0aDE4djJIMXYtMnpNNSAxaDJ2Mkg1VjF6bTAgOGgydjJINVY5em00LThoMnYySDlWMXptMCA0aDJ2Mkg5VjV6bTAgNGgydjJIOVY5em0wIDRoMnYySDl2LTJ6bTQtMTJoMnYyaC0yVjF6bTAgOGgydjJoLTJWOXptNC04aDJ2MmgtMlYxem0wIDRoMnYyaC0yVjV6bTAgNGgydjJoLTJWOXptMCA0aDJ2MmgtMnYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9yZGVySG9yaXpvbnRhbChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxaDJ2MkgxVjF6bTAgNGgydjJIMVY1em0wIDRoMTh2MkgxVjl6bTAgNGgydjJIMXYtMnptMCA0aDJ2Mkgxdi0yek01IDFoMnYySDVWMXptMCAxNmgydjJINXYtMnpNOSAxaDJ2Mkg5VjF6bTAgNGgydjJIOVY1em0wIDhoMnYySDl2LTJ6bTAgNGgydjJIOXYtMnptNC0xNmgydjJoLTJWMXptMCAxNmgydjJoLTJ2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgNGgydjJoLTJWNXptMCA4aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9yZGVySW5uZXIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgOVYxaDJ2OGg4djJoLTh2OEg5di04SDFWOWg4ek0xIDFoMnYySDFWMXptMCA0aDJ2MkgxVjV6bTAgOGgydjJIMXYtMnptMCA0aDJ2Mkgxdi0yek01IDFoMnYySDVWMXptMCAxNmgydjJINXYtMnptOC0xNmgydjJoLTJWMXptMCAxNmgydjJoLTJ2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgNGgydjJoLTJWNXptMCA4aDJ2MmgtMnYtMnptMCA0aDJ2MmgtMnYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQm9yZGVyTGVmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxaDJ2MThIMVYxem00IDBoMnYySDVWMXptMCA4aDJ2Mkg1Vjl6bTAgOGgydjJINXYtMnpNOSAxaDJ2Mkg5VjF6bTAgNGgydjJIOVY1em0wIDRoMnYySDlWOXptMCA0aDJ2Mkg5di0yem0wIDRoMnYySDl2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgOGgydjJoLTJWOXptMCA4aDJ2MmgtMnYtMnptNC0xNmgydjJoLTJWMXptMCA0aDJ2MmgtMlY1em0wIDRoMnYyaC0yVjl6bTAgNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJvcmRlck5vbmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEgMWgydjJIMVYxem0wIDRoMnYySDFWNXptMCA0aDJ2MkgxVjl6bTAgNGgydjJIMXYtMnptMCA0aDJ2Mkgxdi0yek01IDFoMnYySDVWMXptMCA4aDJ2Mkg1Vjl6bTAgOGgydjJINXYtMnpNOSAxaDJ2Mkg5VjF6bTAgNGgydjJIOVY1em0wIDRoMnYySDlWOXptMCA0aDJ2Mkg5di0yem0wIDRoMnYySDl2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgOGgydjJoLTJWOXptMCA4aDJ2MmgtMnYtMnptNC0xNmgydjJoLTJWMXptMCA0aDJ2MmgtMlY1em0wIDRoMnYyaC0yVjl6bTAgNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJvcmRlck91dGVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yIDE5SDFWMWgxOHYxOEgyem0xLTJoMTRWM0gzdjE0em0xMC04aDJ2MmgtMlY5ek05IDloMnYySDlWOXpNNSA5aDJ2Mkg1Vjl6bTQtNGgydjJIOVY1em0wIDhoMnYySDl2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJvcmRlclJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk01IDFoMnYySDVWMXptMCA4aDJ2Mkg1Vjl6bTAgOGgydjJINXYtMnpNOSAxaDJ2Mkg5VjF6bTAgNGgydjJIOVY1em0wIDRoMnYySDlWOXptMCA0aDJ2Mkg5di0yem0wIDRoMnYySDl2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgOGgydjJoLTJWOXptMCA4aDJ2MmgtMnYtMnpNMSAxaDJ2MkgxVjF6bTAgNGgydjJIMVY1em0wIDRoMnYySDFWOXptMCA0aDJ2Mkgxdi0yem0wIDRoMnYySDF2LTJ6TTE3IDFoMnYxOGgtMlYxelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Cb3JkZXJUb3AocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEgMWgxOHYySDFWMXptMCA0aDJ2MkgxVjV6bTAgNGgydjJIMVY5em0wIDRoMnYySDF2LTJ6bTAgNGgydjJIMXYtMnptNC04aDJ2Mkg1Vjl6bTAgOGgydjJINXYtMnpNOSA1aDJ2Mkg5VjV6bTAgNGgydjJIOVY5em0wIDRoMnYySDl2LTJ6bTAgNGgydjJIOXYtMnptNC04aDJ2MmgtMlY5em0wIDhoMnYyaC0ydi0yem00LTEyaDJ2MmgtMlY1em0wIDRoMnYyaC0yVjl6bTAgNGgydjJoLTJ2LTJ6bTAgNGgydjJoLTJ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJvcmRlclZlcnRpY2FsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDFoMnYySDFWMXptMCA0aDJ2MkgxVjV6bTAgNGgydjJIMVY5em0wIDRoMnYySDF2LTJ6bTAgNGgydjJIMXYtMnpNNSAxaDJ2Mkg1VjF6bTAgOGgydjJINVY5em0wIDhoMnYySDV2LTJ6TTkgMWgydjE4SDlWMXptNCAwaDJ2MmgtMlYxem0wIDhoMnYyaC0yVjl6bTAgOGgydjJoLTJ2LTJ6bTQtMTZoMnYyaC0yVjF6bTAgNGgydjJoLTJWNXptMCA0aDJ2MmgtMlY5em0wIDRoMnYyaC0ydi0yem0wIDRoMnYyaC0ydi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Cb3gocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMkMwIC45LjkgMCAyIDBoMTZhMiAyIDAgMCAxIDIgMnYySDBWMnptMSAzaDE4djEzYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjV6bTYgMnYyaDZWN0g3elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25CcmlnaHRuZXNzRG93bihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMTNhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2ek05IDRhMSAxIDAgMSAxIDIgMCAxIDEgMCAxIDEtMiAwem00LjU0IDEuMDVhMSAxIDAgMSAxIDEuNDEgMS40MSAxIDEgMCAxIDEtMS40MS0xLjQxek0xNiA5YTEgMSAwIDEgMSAwIDIgMSAxIDAgMSAxIDAtMnptLTEuMDUgNC41NGExIDEgMCAxIDEtMS40MSAxLjQxIDEgMSAwIDEgMSAxLjQxLTEuNDF6TTExIDE2YTEgMSAwIDEgMS0yIDAgMSAxIDAgMSAxIDIgMHptLTQuNTQtMS4wNWExIDEgMCAxIDEtMS40MS0xLjQxIDEgMSAwIDEgMSAxLjQxIDEuNDF6TTQgMTFhMSAxIDAgMSAxIDAtMiAxIDEgMCAxIDEgMCAyem0xLjA1LTQuNTRhMSAxIDAgMSAxIDEuNDEtMS40MSAxIDEgMCAxIDEtMS40MSAxLjQxelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25CcmlnaHRuZXNzVXAocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDE0YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOHpNOSAxYTEgMSAwIDEgMSAyIDB2MmExIDEgMCAxIDEtMiAwVjF6bTYuNjUgMS45NGExIDEgMCAxIDEgMS40MSAxLjQxbC0xLjQgMS40YTEgMSAwIDEgMS0xLjQxLTEuNDFsMS40LTEuNHpNMTguOTkgOWExIDEgMCAxIDEgMCAyaC0xLjk4YTEgMSAwIDEgMSAwLTJoMS45OHptLTEuOTMgNi42NWExIDEgMCAxIDEtMS40MSAxLjQxbC0xLjQtMS40YTEgMSAwIDEgMSAxLjQxLTEuNDFsMS40IDEuNHpNMTEgMTguOTlhMSAxIDAgMSAxLTIgMHYtMS45OGExIDEgMCAxIDEgMiAwdjEuOTh6bS02LjY1LTEuOTNhMSAxIDAgMSAxLTEuNDEtMS40MWwxLjQtMS40YTEgMSAwIDEgMSAxLjQxIDEuNDFsLTEuNCAxLjR6TTEuMDEgMTFhMSAxIDAgMSAxIDAtMmgxLjk4YTEgMSAwIDEgMSAwIDJIMS4wMXptMS45My02LjY1YTEgMSAwIDEgMSAxLjQxLTEuNDFsMS40IDEuNGExIDEgMCAxIDEtMS40MSAxLjQxbC0xLjQtMS40elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Ccm93c2VyV2luZG93TmV3KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDEwVjhoMnYyaDJ2MmgtMnYySDl2LTJIN3YtMmgyek0wIDNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjN6bTIgMnYxMmgxNlY1SDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJyb3dzZXJXaW5kb3dPcGVuKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjN6bTIgMnYxMmgxNlY1SDJ6bTggM2w0IDVINmw0LTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJyb3dzZXJXaW5kb3cocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgM2MwLTEuMS45LTIgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM3ptMiAydjEyaDE2VjVIMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQnVnKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNS4zIDE0Ljg5bDIuNzcgMi43N2ExIDEgMCAwIDEgMCAxLjQxIDEgMSAwIDAgMS0xLjQxIDBsLTIuNTktMi41OEE1Ljk5IDUuOTkgMCAwIDEgMTEgMThWOS4wNGExIDEgMCAwIDAtMiAwVjE4YTUuOTggNS45OCAwIDAgMS0zLjA3LTEuNTFsLTIuNTkgMi41OGExIDEgMCAwIDEtMS40MSAwIDEgMSAwIDAgMSAwLTEuNDFsMi43Ny0yLjc3QTUuOTUgNS45NSAwIDAgMSA0LjA3IDEzSDFhMSAxIDAgMSAxIDAtMmgzVjguNDFMLjkzIDUuMzRhMSAxIDAgMCAxIDAtMS40MSAxIDEgMCAwIDEgMS40MSAwbDIuMSAyLjFoMTEuMTJsMi4xLTIuMWExIDEgMCAwIDEgMS40MSAwIDEgMSAwIDAgMSAwIDEuNDFMMTYgOC40MVYxMWgzYTEgMSAwIDEgMSAwIDJoLTMuMDdjLS4xLjY3LS4zMiAxLjMxLS42MyAxLjg5ek0xNSA1SDVhNSA1IDAgMSAxIDEwIDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkJ1b3kocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE3LjE2IDYuNDJhOC4wMyA4LjAzIDAgMCAwLTMuNTgtMy41OGwtMS4zNCAyLjY5YTUuMDIgNS4wMiAwIDAgMSAyLjIzIDIuMjNsMi42OS0xLjM0em0wIDcuMTZsLTIuNjktMS4zNGE1LjAyIDUuMDIgMCAwIDEtMi4yMyAyLjIzbDEuMzQgMi42OWE4LjAzIDguMDMgMCAwIDAgMy41OC0zLjU4ek02LjQyIDIuODRhOC4wMyA4LjAzIDAgMCAwLTMuNTggMy41OGwyLjY5IDEuMzRhNS4wMiA1LjAyIDAgMCAxIDIuMjMtMi4yM0w2LjQyIDIuODR6TTIuODQgMTMuNThhOC4wMyA4LjAzIDAgMCAwIDMuNTggMy41OGwxLjM0LTIuNjlhNS4wMiA1LjAyIDAgMCAxLTIuMjMtMi4yM2wtMi42OSAxLjM0ek0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTAtN2EzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNhbGN1bGF0b3IocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIgMmMwLTEuMS45LTIgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWMnptMyAxdjJoMTBWM0g1em0wIDR2MmgyVjdINXptNCAwdjJoMlY3SDl6bTQgMHYyaDJWN2gtMnptLTggNHYyaDJ2LTJINXptNCAwdjJoMnYtMkg5em00IDB2Nmgydi02aC0yem0tOCA0djJoMnYtMkg1em00IDB2Mmgydi0ySDl6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNhbGVuZGFyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDRjMC0xLjEuOS0yIDItMmgxNGEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjR6bTIgMnYxMmgxNFY2SDN6bTItNmgydjJINVYwem04IDBoMnYyaC0yVjB6TTUgOWgydjJINVY5em0wIDRoMnYySDV2LTJ6bTQtNGgydjJIOVY5em0wIDRoMnYySDl2LTJ6bTQtNGgydjJoLTJWOXptMCA0aDJ2MmgtMnYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2FtZXJhKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDZjMC0xLjEuOS0yIDItMmgzbDItMmg2bDIgMmgzYTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNnptMTAgMTBhNSA1IDAgMSAwIDAtMTAgNSA1IDAgMCAwIDAgMTB6bTAtMmEzIDMgMCAxIDEgMC02IDMgMyAwIDAgMSAwIDZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNoYXJ0QmFyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xIDEwaDN2MTBIMVYxMHpNNiAwaDN2MjBINlYwem01IDhoM3YxMmgtM1Y4em01LTRoM3YxNmgtM1Y0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DaGFydFBpZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTkuOTUgMTFBMTAgMTAgMCAxIDEgOSAuMDVWMTFoMTAuOTV6bS0uMDgtMi42SDExLjZWLjEzYTEwIDEwIDAgMCAxIDguMjcgOC4yN3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2hhcnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQuMTMgMTJINGEyIDIgMCAxIDAgMS44IDEuMTFMNy44NiAxMGEyLjAzIDIuMDMgMCAwIDAgLjY1LS4wN2wxLjU1IDEuNTVhMiAyIDAgMSAwIDMuNzItLjM3TDE1Ljg3IDhIMTZhMiAyIDAgMSAwLTEuOC0xLjExTDEyLjE0IDEwYTIuMDMgMi4wMyAwIDAgMC0uNjUuMDdMOS45MyA4LjUyYTIgMiAwIDEgMC0zLjcyLjM3TDQuMTMgMTJ6TTAgNGMwLTEuMS45LTIgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2hhdEJ1YmJsZURvdHMocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDE1bC00IDR2LTRIMmEyIDIgMCAwIDEtMi0yVjNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJoLTh6TTUgN3YyaDJWN0g1em00IDB2MmgyVjdIOXptNCAwdjJoMlY3aC0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DaGVja21hcmtPdXRsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNNi43IDkuMjlMOSAxMS42bDQuMy00LjMgMS40IDEuNDJMOSAxNC40bC0zLjctMy43IDEuNC0xLjQyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DaGVja21hcmsocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMTFsMi0yIDUgNUwxOCAzbDIgMkw3IDE4elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DaGV2ZXJvbkRvd24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkuMjkzIDEyLjk1bC43MDcuNzA3TDE1LjY1NyA4bC0xLjQxNC0xLjQxNEwxMCAxMC44MjggNS43NTcgNi41ODYgNC4zNDMgOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2hldmVyb25MZWZ0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03LjA1IDkuMjkzTDYuMzQzIDEwIDEyIDE1LjY1N2wxLjQxNC0xLjQxNEw5LjE3MiAxMGw0LjI0Mi00LjI0M0wxMiA0LjM0M3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2hldmVyb25PdXRsaW5lRG93bihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjAgMTBhMTAgMTAgMCAxIDEtMjAgMCAxMCAxMCAwIDAgMSAyMCAwek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2em0tLjcgMTAuNTRMNS43NSA5bDEuNDEtMS40MUwxMCAxMC40bDIuODMtMi44MkwxNC4yNCA5IDEwIDEzLjI0bC0uNy0uN3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2hldmVyb25PdXRsaW5lTGVmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwem04LTEwYTggOCAwIDEgMC0xNiAwIDggOCAwIDAgMCAxNiAwek03LjQ2IDkuM0wxMSA1Ljc1bDEuNDEgMS40MUw5LjYgMTBsMi44MiAyLjgzTDExIDE0LjI0IDYuNzYgMTBsLjctLjd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNoZXZlcm9uT3V0bGluZVJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAwYTEwIDEwIDAgMSAxIDAgMjAgMTAgMTAgMCAwIDEgMC0yMHpNMiAxMGE4IDggMCAxIDAgMTYgMCA4IDggMCAwIDAtMTYgMHptMTAuNTQuN0w5IDE0LjI1bC0xLjQxLTEuNDFMMTAuNCAxMCA3LjYgNy4xNyA5IDUuNzYgMTMuMjQgMTBsLS43Ljd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNoZXZlcm9uT3V0bGluZVVwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDEwYTEwIDEwIDAgMSAxIDIwIDAgMTAgMTAgMCAwIDEtMjAgMHptMTAgOGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptLjctMTAuNTRMMTQuMjUgMTFsLTEuNDEgMS40MUwxMCA5LjZsLTIuODMgMi44TDUuNzYgMTEgMTAgNi43NmwuNy43elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DaGV2ZXJvblJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMi45NSAxMC43MDdsLjcwNy0uNzA3TDggNC4zNDMgNi41ODYgNS43NTcgMTAuODI4IDEwbC00LjI0MiA0LjI0M0w4IDE1LjY1N2w0Ljk1LTQuOTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNoZXZlcm9uVXAocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwLjcwNyA3LjA1TDEwIDYuMzQzIDQuMzQzIDEybDEuNDE0IDEuNDE0TDEwIDkuMTcybDQuMjQzIDQuMjQyTDE1LjY1NyAxMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2xpcGJvYXJkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03LjAzIDIuNmEzIDMgMCAwIDEgNS45NCAwTDE1IDN2MWgxYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWNmMwLTEuMS45LTIgMi0yaDFWM2wyLjAzLS40ek01IDZINHYxMmgxMlY2aC0xdjFINVY2em01LTJhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DbG9zZU91dGxpbmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xLjQxLTEuNDFBOCA4IDAgMSAwIDE1LjY2IDQuMzQgOCA4IDAgMCAwIDQuMzQgMTUuNjZ6bTkuOS04LjQ5TDExLjQxIDEwbDIuODMgMi44My0xLjQxIDEuNDFMMTAgMTEuNDFsLTIuODMgMi44My0xLjQxLTEuNDFMOC41OSAxMCA1Ljc2IDcuMTdsMS40MS0xLjQxTDEwIDguNTlsMi44My0yLjgzIDEuNDEgMS40MXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2xvc2VTb2xpZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6TTExLjQgMTBsMi44My0yLjgzLTEuNDEtMS40MUwxMCA4LjU5IDcuMTcgNS43NiA1Ljc2IDcuMTcgOC41OSAxMGwtMi44MyAyLjgzIDEuNDEgMS40MUwxMCAxMS40MWwyLjgzIDIuODMgMS40MS0xLjQxTDExLjQxIDEwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DbG9zZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgOC41ODZMMi45MjkgMS41MTUgMS41MTUgMi45MjkgOC41ODYgMTBsLTcuMDcxIDcuMDcxIDEuNDE0IDEuNDE0TDEwIDExLjQxNGw3LjA3MSA3LjA3MSAxLjQxNC0xLjQxNEwxMS40MTQgMTBsNy4wNzEtNy4wNzEtMS40MTQtMS40MTRMMTAgOC41ODZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNsb3VkVXBsb2FkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNi44OCA5LjFBNCA0IDAgMCAxIDE2IDE3SDVhNSA1IDAgMCAxLTEtOS45VjdhMyAzIDAgMCAxIDQuNTItMi41OUE0Ljk4IDQuOTggMCAwIDEgMTcgOGMwIC4zOC0uMDQuNzQtLjEyIDEuMXpNMTEgMTFoM2wtNC00LTQgNGgzdjNoMnYtM3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ2xvdWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE2Ljg4IDkuMUE0IDQgMCAwIDEgMTYgMTdINWE1IDUgMCAwIDEtMS05LjlWN2EzIDMgMCAwIDEgNC41Mi0yLjU5QTQuOTggNC45OCAwIDAgMSAxNyA4YzAgLjM4LS4wNC43NC0uMTIgMS4xelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Db2RlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0uNyA5LjNsNC44LTQuOCAxLjQgMS40MkwyLjg0IDEwbDQuMDcgNC4wNy0xLjQxIDEuNDJMMCAxMGwuNy0uN3ptMTguNiAxLjRsLjctLjctNS40OS01LjQ5LTEuNCAxLjQyTDE3LjE2IDEwbC00LjA3IDQuMDcgMS40MSAxLjQyIDQuNzgtNC43OHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ29mZmVlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDExSDJhMiAyIDAgMCAxLTItMlY1YzAtMS4xLjktMiAyLTJoMlYxaDE0djEwYTQgNCAwIDAgMS00IDRIOGE0IDQgMCAwIDEtNC00em0wLTJWNUgydjRoMnptLTIgOHYtMWgxOHYxbC00IDJINmwtNC0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Db2cocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTMuOTQgNi41TDIuMjIgMy42NGwxLjQyLTEuNDJMNi41IDMuOTRjLjUyLS4zIDEuMS0uNTQgMS43LS43TDkgMGgybC44IDMuMjRjLjYuMTYgMS4xOC40IDEuNy43bDIuODYtMS43MiAxLjQyIDEuNDItMS43MiAyLjg2Yy4zLjUyLjU0IDEuMS43IDEuN0wyMCA5djJsLTMuMjQuOGMtLjE2LjYtLjQgMS4xOC0uNyAxLjdsMS43MiAyLjg2LTEuNDIgMS40Mi0yLjg2LTEuNzJjLS41Mi4zLTEuMS41NC0xLjcuN0wxMSAyMEg5bC0uOC0zLjI0Yy0uNi0uMTYtMS4xOC0uNC0xLjctLjdsLTIuODYgMS43Mi0xLjQyLTEuNDIgMS43Mi0yLjg2Yy0uMy0uNTItLjU0LTEuMS0uNy0xLjdMMCAxMVY5bDMuMjQtLjhjLjE2LS42LjQtMS4xOC43LTEuN3pNMTAgMTNhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Db2xvclBhbGV0dGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgMjB2LTEuN2wuMDEtLjI0TDE1LjA3IDEyaDIuOTRjMS4xIDAgMS45OS44OSAxLjk5IDJ2NGEyIDIgMCAwIDEtMiAySDl6bTAtMy4zNFY1LjM0bDIuMDgtMi4wN2ExLjk5IDEuOTkgMCAwIDEgMi44MiAwbDIuODMgMi44M2EyIDIgMCAwIDEgMCAyLjgyTDkgMTYuNjZ6TTAgMS45OUMwIC45Ljg5IDAgMiAwaDRhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyek00IDE3YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ29tcG9zZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMiA0djE0aDE0di02bDItMnYxMEgwVjJoMTBMOCA0SDJ6bTEwLjMtLjNsNCA0TDggMTZINHYtNGw4LjMtOC4zem0xLjQtMS40TDE2IDBsNCA0LTIuMyAyLjMtNC00elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Db21wdXRlckRlc2t0b3AocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgMTdIMmEyIDIgMCAwIDEtMi0yVjJDMCAuOS45IDAgMiAwaDE2YTIgMiAwIDAgMSAyIDJ2MTNhMiAyIDAgMCAxLTIgMmgtNWw0IDJ2MUgzdi0xbDQtMnpNMiAydjExaDE2VjJIMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ29tcHV0ZXJMYXB0b3AocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDE2aDJ2MWExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXYtMWgyVjRjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyek00IDR2OWgxMlY0SDR6bTQgMTF2MWg0di0xSDh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNvbnZlcnNhdGlvbihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTcgMTF2M2wtMy0zSDhhMiAyIDAgMCAxLTItMlYyYzAtMS4xLjktMiAyLTJoMTBhMiAyIDAgMCAxIDIgMnY3YTIgMiAwIDAgMS0yIDJoLTF6bS0zIDJ2MmEyIDIgMCAwIDEtMiAySDZsLTMgM3YtM0gyYTIgMiAwIDAgMS0yLTJWOGMwLTEuMS45LTIgMi0yaDJ2M2E0IDQgMCAwIDAgNCA0aDZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkNvcHkocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTYgNlYyYzAtMS4xLjktMiAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC00djRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWOGMwLTEuMS45LTIgMi0yaDR6bTIgMGg0YTIgMiAwIDAgMSAyIDJ2NGg0VjJIOHY0ek0yIDh2MTBoMTBWOEgyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25DcmVkaXRDYXJkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOCA2VjRIMnYyaDE2em0wIDRIMnY2aDE2di02ek0wIDRjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjR6bTQgOGg0djJINHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uQ3VycmVuY3lEb2xsYXIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHptMS01aDFhMyAzIDAgMCAwIDAtNkg3Ljk5YTEgMSAwIDAgMSAwLTJIMTRWNWgtM1YzSDl2Mkg4YTMgMyAwIDEgMCAwIDZoNGExIDEgMCAxIDEgMCAySDZ2MmgzdjJoMnYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRGFzaGJvYXJkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bS01LjYtNC4yOWE5Ljk1IDkuOTUgMCAwIDEgMTEuMiAwIDggOCAwIDEgMC0xMS4yIDB6bTYuMTItNy42NGwzLjAyLTMuMDIgMS40MSAxLjQxLTMuMDIgMy4wMmEyIDIgMCAxIDEtMS40MS0xLjQxelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25EYXRlQWRkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNSAyaDJhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlY0YzAtMS4xLjktMiAyLTJoMlYwaDJ2Mmg2VjBoMnYyek0zIDZ2MTJoMTRWNkgzem02IDVWOWgydjJoMnYyaC0ydjJIOXYtMkg3di0yaDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkRpYWxQYWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTUgNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTUgOWEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6bTUgMGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTUgMTRhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em01IDBhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em0wIDZhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em01LTZhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25EaXJlY3Rpb25zKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAwbDEwIDEwLTEwIDEwTDAgMTAgMTAgMHpNNiAxMHYzaDJ2LTNoM3YzbDQtNC00LTR2M0g4YTIgMiAwIDAgMC0yIDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkRvY3VtZW50QWRkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDEwVjhoMnYyaDJ2MmgtMnYySDl2LTJIN3YtMmgyem0tNSA4aDEyVjZoLTRWMkg0djE2em0tMiAxVjBoMTJsNCA0djE2SDJ2LTF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkRvY3VtZW50KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDE4aDEyVjZoLTRWMkg0djE2em0tMiAxVjBoMTJsNCA0djE2SDJ2LTF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkRvdHNIb3Jpem9udGFsRG91YmxlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCA5YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptMCA2YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRG90c0hvcml6b250YWxUcmlwbGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDEyYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptMC02YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptMCAxMmEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkRvd25sb2FkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMyA4VjJIN3Y2SDJsOCA4IDgtOGgtNXpNMCAxOGgyMHYySDB2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkR1cGxpY2F0ZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNiA2VjJjMC0xLjEuOS0yIDItMmgxMGEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJoLTR2NGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY4YzAtMS4xLjktMiAyLTJoNHptMiAwaDRhMiAyIDAgMCAxIDIgMnY0aDRWMkg4djR6TTIgOHYxMGgxMFY4SDJ6bTQgNHYtMmgydjJoMnYySDh2Mkg2di0ySDR2LTJoMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRWRpdENvcHkocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTYgNlYyYzAtMS4xLjktMiAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC00djRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWOGMwLTEuMS45LTIgMi0yaDR6bTIgMGg0YTIgMiAwIDAgMSAyIDJ2NGg0VjJIOHY0ek0yIDh2MTBoMTBWOEgyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25FZGl0Q3JvcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTQgMTZINmEyIDIgMCAwIDEtMi0yVjZIMFY0aDRWMGgydjE0aDE0djJoLTR2NGgtMnYtNHptMC0zVjZIN1Y0aDdhMiAyIDAgMCAxIDIgMnY3aC0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25FZGl0Q3V0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05Ljc3IDExLjVsNS4zNCAzLjkxYy40NC4zMyAxLjI0LjU5IDEuNzkuNTlIMjBMNi44OSA2LjM4QTMuNSAzLjUgMCAxIDAgNS41IDguMzdMNy43MyAxMCA1LjUgMTEuNjNhMy41IDMuNSAwIDEgMCAxLjM4IDEuOTlsMi45LTIuMTJ6TTMuNSA3YTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem0wIDlhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6TTE1LjEgNC41OUEzLjUzIDMuNTMgMCAwIDEgMTYuOSA0SDIwbC03LjUgNS41TDEwLjQ1IDhsNC42NS0zLjQxelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25FZGl0UGVuY2lsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMi4zIDMuN2w0IDRMNCAyMEgwdi00TDEyLjMgMy43em0xLjQtMS40TDE2IDBsNCA0LTIuMyAyLjMtNC00elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25FZHVjYXRpb24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTMuMzMgOEwxMCAxMmwxMC02LTEwLTZMMCA2aDEwdjJIMy4zM3pNMCA4djhsMi0yLjIyVjkuMkwwIDh6bTEwIDEybC01LTMtMi0xLjJ2LTZsNyA0LjIgNy00LjJ2NkwxMCAyMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRW52ZWxvcGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0YzAtMS4xLjktMiAyLTJoMTZ6bS00LjM3IDkuMUwyMCAxNnYtMmwtNS4xMi0zLjlMMjAgNlY0bC0xMCA4TDAgNHYybDUuMTIgNC4xTDAgMTR2Mmw2LjM3LTQuOUwxMCAxNGwzLjYzLTIuOXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRXhjbGFtYXRpb25PdXRsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yLjkzIDE3LjA3QTEwIDEwIDAgMSAxIDE3LjA3IDIuOTMgMTAgMTAgMCAwIDEgMi45MyAxNy4wN3ptMTIuNzMtMS40MUE4IDggMCAxIDAgNC4zNCA0LjM0YTggOCAwIDAgMCAxMS4zMiAxMS4zMnpNOSA1aDJ2Nkg5VjV6bTAgOGgydjJIOXYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRXhjbGFtYXRpb25Tb2xpZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6TTkgNXY2aDJWNUg5em0wIDh2Mmgydi0ySDl6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkV4cGxvcmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHpNNy44OCA3Ljg4bC0zLjU0IDcuNzggNy43OC0zLjU0IDMuNTQtNy43OC03Ljc4IDMuNTR6TTEwIDExYTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRmFjdG9yeShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAuNSAyMEgwVjdsNSAzLjMzVjdsNSAzLjMzVjdsNSAzLjMzVjBoNXYyMGgtOS41elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25GYXN0Rm9yd2FyZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSA1bDkgNS05IDVWNXptOSAwbDkgNS05IDVWNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRmFzdFJld2luZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTkgNXYxMGwtOS01IDktNXptLTkgMHYxMGwtOS01IDktNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRmlsbShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCA0YzAtMS4xLjktMiAyLTJoMTZhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0em02IDB2MTJoOFY0SDZ6TTIgNXYyaDJWNUgyem0wIDR2MmgyVjlIMnptMCA0djJoMnYtMkgyem0xNC04djJoMlY1aC0yem0wIDR2MmgyVjloLTJ6bTAgNHYyaDJ2LTJoLTJ6TTggN2w1IDMtNSAzVjd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkZpbHRlcihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgMTJsOC04VjBIMHY0bDggOHY4bDQtNHYtNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRmxhZyhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNy42NjcgMTJIMnY4SDBWMGgxMmwuMzMzIDJIMjBsLTMgNiAzIDZIOGwtLjMzMy0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25GbGFzaGxpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMyA3djExYTIgMiAwIDAgMS0yIDJIOWEyIDIgMCAwIDEtMi0yVjdMNSA1VjNoMTB2MmwtMiAyek05IDh2MWExIDEgMCAxIDAgMiAwVjhhMSAxIDAgMCAwLTIgMHpNNSAwaDEwdjJINVYwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Gb2xkZXJPdXRsaW5lQWRkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDRjMC0xLjEuOS0yIDItMmg3bDIgMmg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNHptMiAydjEwaDE2VjZIMnptNyA0VjhoMnYyaDJ2MmgtMnYySDl2LTJIN3YtMmgyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Gb2xkZXJPdXRsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDRjMC0xLjEuOS0yIDItMmg3bDIgMmg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNHptMiAydjEwaDE2VjZIMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRm9sZGVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDRjMC0xLjEuOS0yIDItMmg3bDIgMmg3YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRm9ybWF0Qm9sZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMyAxOVYxaDhhNSA1IDAgMCAxIDMuODggOC4xNkE1LjUgNS41IDAgMCAxIDExLjUgMTlIM3ptNy41LThIN3Y1aDMuNWEyLjUgMi41IDAgMSAwIDAtNXpNNyA0djRoM2EyIDIgMCAxIDAgMC00SDd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkZvcm1hdEZvbnRTaXplKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiA5djhoLTJWOWgtNFY3aDEwdjJoLTR6TTggNXYxMkg2VjVIMFYzaDE1djJIOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRm9ybWF0SXRhbGljKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk04IDFoOXYySDhWMXptMyAyaDNMOCAxN0g1bDYtMTR6TTIgMTdoOXYySDJ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkZvcm1hdFRleHRTaXplKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiA5djhoLTJWOWgtNFY3aDEwdjJoLTR6TTggNXYxMkg2VjVIMFYzaDE1djJIOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRm9ybWF0VW5kZXJsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiA5QTYgNiAwIDEgMSA0IDlWMWgzdjhhMyAzIDAgMCAwIDYgMFYxaDN2OHpNMiAxN2gxNnYySDJ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkZvcndhcmRTdGVwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMyA1aDN2MTBoLTNWNXpNNCA1bDkgNS05IDVWNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uRm9yd2FyZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSA1bDkgNS05IDVWNXptOSAwbDkgNS05IDVWNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uR2lmdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTQuODMgNEgyMHY2aC0xdjEwSDFWMTBIMFY0aDUuMTdBMyAzIDAgMCAxIDEwIC43NiAzIDMgMCAwIDEgMTQuODMgNHpNOCAxMEgzdjhoNXYtOHptNCAwdjhoNXYtOGgtNXpNOCA2SDJ2Mmg2VjZ6bTQgMHYyaDZWNmgtNnpNOCA0YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnptNCAwYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uR2xvYmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHptMi0yLjI1YTggOCAwIDAgMCA0LTIuNDZWOWEyIDIgMCAwIDEtMi0yVjMuMDdhNy45NSA3Ljk1IDAgMCAwLTMtMVYzYTIgMiAwIDAgMS0yIDJ2MWEyIDIgMCAwIDEtMiAydjJoM2EyIDIgMCAwIDEgMiAydjUuNzV6bS00IDBWMTVhMiAyIDAgMCAxLTItMnYtMWgtLjVBMS41IDEuNSAwIDAgMSA0IDEwLjVWOEgyLjI1QTguMDEgOC4wMSAwIDAgMCA4IDE3Ljc1elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25IYW5kU3RvcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTcgMTZhNCA0IDAgMCAxLTQgNEg3YTQgNCAwIDAgMS00LTQuMDFWNGExIDEgMCAwIDEgMS0xIDEgMSAwIDAgMSAxIDF2NmgxVjJhMSAxIDAgMCAxIDEtMSAxIDEgMCAwIDEgMSAxdjhoMVYxYTEgMSAwIDEgMSAyIDB2OWgxVjJhMSAxIDAgMCAxIDEtMSAxIDEgMCAwIDEgMSAxdjEzaDFWOWExIDEgMCAwIDEgMS0xaDF2OHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uSGFyZERyaXZlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yIDJjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjE2YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJ6bTEwLjQgNS42QTUgNSAwIDEgMCAxNSAxMlY1bC0yLjYgMi42ek0xMCAxNGEyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDR6TTYgM3YyaDRWM0g2ek00IDNhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyem0wIDE2YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnptMTIgMGExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6bTAtMTZhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25IZWFkcGhvbmVzKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiA4QTYgNiAwIDEgMCA0IDh2MTFIMmEyIDIgMCAwIDEtMi0ydi00YTIgMiAwIDAgMSAyLTJWOGE4IDggMCAxIDEgMTYgMHYzYTIgMiAwIDAgMSAyIDJ2NGEyIDIgMCAwIDEtMiAyaC0yVjh6bS00IDJoM3YxMGgtM1YxMHptLTcgMGgzdjEwSDVWMTB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkhlYXJ0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAzLjIybC0uNjEtLjZhNS41IDUuNSAwIDAgMC03Ljc4IDcuNzdMMTAgMTguNzhsOC4zOS04LjRhNS41IDUuNSAwIDAgMC03Ljc4LTcuNzdsLS42MS42MXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uSG9tZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNOCAyMEgzVjEwSDBMMTAgMGwxMCAxMGgtM3YxMGgtNXYtNkg4djZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkhvdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMHM4IDcuNTggOCAxMmE4IDggMCAxIDEtMTYgMGMwLTEuNS45MS0zLjM1IDIuMTItNS4xNUEzIDMgMCAwIDAgMTAgNlYwek04IDBhMyAzIDAgMSAwIDAgNlYwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Ib3VyR2xhc3MocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTMgMThhNyA3IDAgMCAxIDQtNi4zM1Y4LjMzQTcgNyAwIDAgMSAzIDJIMVYwaDE4djJoLTJhNyA3IDAgMCAxLTQgNi4zM3YzLjM0QTcgNyAwIDAgMSAxNyAxOGgydjJIMXYtMmgyek01IDJhNSA1IDAgMCAwIDQgNC45VjEwaDJWNi45QTUgNSAwIDAgMCAxNSAySDV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkluYm94Q2hlY2socHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMkMwIC45LjkgMCAyIDBoMTZhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem0xNCAxMmg0VjJIMnYxMmg0YzAgMS4xLjkgMiAyIDJoNGEyIDIgMCAwIDAgMi0yek01IDlsMi0yIDIgMiA0LTQgMiAyLTYgNi00LTR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkluYm94RG93bmxvYWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMkMwIC45LjkgMCAyIDBoMTZhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem0xNCAxMmg0VjJIMnYxMmg0YzAgMS4xLjkgMiAyIDJoNGEyIDIgMCAwIDAgMi0yek05IDhWNWgydjNoM2wtNCA0LTQtNGgzelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25JbmJveEZ1bGwocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE0IDE0aDRWMkgydjEyaDRjMCAxLjEuOSAyIDIgMmg0YTIgMiAwIDAgMCAyLTJ6TTAgMkMwIC45LjkgMCAyIDBoMTZhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem00IDJoMTJ2Mkg0VjR6bTAgM2gxMnYySDRWN3ptMCAzaDEydjJINHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uSW5ib3gocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMkMwIC45LjkgMCAyIDBoMTZhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem0xNCAxMmg0VjJIMnYxMmg0YzAgMS4xLjkgMiAyIDJoNGEyIDIgMCAwIDAgMi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25JbmRlbnREZWNyZWFzZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxaDE4djJIMVYxem02IDhoMTJ2Mkg3Vjl6bS02IDhoMTh2Mkgxdi0yek03IDVoMTJ2Mkg3VjV6bTAgOGgxMnYySDd2LTJ6TTUgNnY4bC00LTQgNC00elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25JbmRlbnRJbmNyZWFzZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSAxaDE4djJIMVYxem02IDhoMTJ2Mkg3Vjl6bS02IDhoMTh2Mkgxdi0yek03IDVoMTJ2Mkg3VjV6bTAgOGgxMnYySDd2LTJ6TTEgNmw0IDQtNCA0VjZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkluZm9ybWF0aW9uT3V0bGluZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTkgMTFWOWgydjZIOXYtNHptMC02aDJ2Mkg5VjV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkluZm9ybWF0aW9uU29saWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3ek05IDExdjRoMlY5SDl2MnptMC02djJoMlY1SDl6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbktleShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIuMjYgMTEuNzRMMTAgMTRIOHYySDZ2MmwtMiAySDB2LTRsOC4yNi04LjI2YTYgNiAwIDEgMSA0IDR6bTQuODYtNC42MkEzIDMgMCAwIDAgMTUgMmEzIDMgMCAwIDAtMi4xMi44OGw0LjI0IDQuMjR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbktleWJvYXJkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDZjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWNnptMiAwdjJoMlY2SDJ6bTEgM3YyaDJWOUgzem0tMSAzdjJoMnYtMkgyem0zIDB2MmgxMHYtMkg1em0xMSAwdjJoMnYtMmgtMnpNNiA5djJoMlY5SDZ6bTMgMHYyaDJWOUg5em0zIDB2MmgyVjloLTJ6bTMgMHYyaDJWOWgtMnpNNSA2djJoMlY2SDV6bTMgMHYyaDJWNkg4em0zIDB2MmgyVjZoLTJ6bTMgMHYyaDRWNmgtNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTGF5ZXJzKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAxbDEwIDYtMTAgNkwwIDdsMTAtNnptNi42NyAxMEwyMCAxM2wtMTAgNi0xMC02IDMuMzMtMkwxMCAxNWw2LjY3LTR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkxpYnJhcnkocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgNmwxMC02IDEwIDZ2MkgwVjZ6bTAgMTJoMjB2Mkgwdi0yem0yLTJoMTZ2Mkgydi0yem0wLThoNHY4SDJWOHptNiAwaDR2OEg4Vjh6bTYgMGg0djhoLTRWOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTGlnaHRCdWxiKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDEzLjMzYTcgNyAwIDEgMSA2IDBWMTZIN3YtMi42N3pNNyAxN2g2djEuNWMwIC44My0uNjcgMS41LTEuNSAxLjVoLTNBMS41IDEuNSAwIDAgMSA3IDE4LjVWMTd6bTItNS4xVjE0aDJ2LTIuMWE1IDUgMCAxIDAtMiAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25MaW5rKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05LjI2IDEzYTIgMiAwIDAgMSAuMDEtMi4wMUEzIDMgMCAwIDAgOSA1SDVhMyAzIDAgMCAwIDAgNmguMDhhNi4wNiA2LjA2IDAgMCAwIDAgMkg1QTUgNSAwIDAgMSA1IDNoNGE1IDUgMCAwIDEgLjI2IDEwem0xLjQ4LTZhMiAyIDAgMCAxLS4wMSAyLjAxQTMgMyAwIDAgMCAxMSAxNWg0YTMgMyAwIDAgMCAwLTZoLS4wOGE2LjA2IDYuMDYgMCAwIDAgMC0ySDE1YTUgNSAwIDAgMSAwIDEwaC00YTUgNSAwIDAgMS0uMjYtMTB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkxpc3RBZGQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE1IDloLTN2MmgzdjNoMnYtM2gzVjloLTNWNmgtMnYzek0wIDNoMTB2MkgwVjN6bTAgOGgxMHYySDB2LTJ6bTAtNGgxMHYySDBWN3ptMCA4aDEwdjJIMHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTGlzdEJ1bGxldChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSA0aDJ2MkgxVjR6bTQgMGgxNHYySDVWNHpNMSA5aDJ2MkgxVjl6bTQgMGgxNHYySDVWOXptLTQgNWgydjJIMXYtMnptNCAwaDE0djJINXYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTGlzdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMSA0aDJ2MkgxVjR6bTQgMGgxNHYySDVWNHpNMSA5aDJ2MkgxVjl6bTQgMGgxNHYySDVWOXptLTQgNWgydjJIMXYtMnptNCAwaDE0djJINXYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTG9hZEJhbGFuY2VyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNyAxMmgtNnY0aDF2NEg4di00aDF2LTRIM3Y0aDF2NEgwdi00aDF2LTRhMiAyIDAgMCAxIDItMmg2VjZIN1YwaDZ2NmgtMnY0aDZhMiAyIDAgMCAxIDIgMnY0aDF2NGgtNHYtNGgxdi00elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Mb2NhdGlvbkN1cnJlbnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMGwyMCA4LTggNC0yIDh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkxvY2F0aW9uRm9vZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTggMTF2N2EyIDIgMCAwIDEtNCAwdi01aC0yVjNhMyAzIDAgMCAxIDMtM2gzdjExek00IDEwYTIgMiAwIDAgMS0yLTJWMWExIDEgMCAwIDEgMiAwdjRoMVYxYTEgMSAwIDAgMSAyIDB2NGgxVjFhMSAxIDAgMCAxIDIgMHY3YTIgMiAwIDAgMS0yIDJ2OGEyIDIgMCAwIDEtNCAwdi04elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Mb2NhdGlvbkdhc1N0YXRpb24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEzIDE4aDF2Mkgwdi0yaDFWMmMwLTEuMS45LTIgMi0yaDhhMiAyIDAgMCAxIDIgMnYxNnpNMyAydjZoOFYySDN6bTEwIDhoMWEyIDIgMCAwIDEgMiAydjNhMSAxIDAgMCAwIDIgMHYtNWwtMi0yVjZsLTItMiAxLTEgNSA1djdhMyAzIDAgMCAxLTYgMHYtM2gtMXYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTG9jYXRpb25Ib3RlbChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMiAxMmgxOHY2aC0ydi0ySDJ2MkgwVjJoMnYxMHptOC02aDhhMiAyIDAgMCAxIDIgMnYzSDEwVjZ6bS00IDVhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Mb2NhdGlvbk1hcmluYShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNOCAxLjg4VjBoMnYxNmgxMGwtNCA0SDJsLTItNGg4di0ySDB2LS4yNkEyNC4wMyAyNC4wMyAwIDAgMCA4IDEuODh6TTE5Ljk3IDE0SDEwdi0uMzZBMTEuOTQgMTEuOTQgMCAwIDAgMTAgLjM2di0uMkExNi4wMSAxNi4wMSAwIDAgMSAxOS45NyAxNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTG9jYXRpb25QYXJrKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk01LjMzIDEyLjc3QTQgNCAwIDEgMSAzIDUuMTNWNWE0IDQgMCAwIDEgNS43MS0zLjYyIDMuNSAzLjUgMCAwIDEgNi4yNiAxLjY2IDIuNSAyLjUgMCAwIDEgMiAyLjA4IDQgNCAwIDEgMS0yLjcgNy40OUE1LjAyIDUuMDIgMCAwIDEgMTIgMTQuNThWMThsMiAxdjFINnYtMWwyLTF2LTNsLTIuNjctMi4yM3pNNSAxMGwzIDN2LTNINXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTG9jYXRpb25SZXN0cm9vbShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgMTZIOWwyLTQuNVY5YzAtMS4xLjktMiAyLTJoMmEyIDIgMCAwIDEgMiAydjIuNWwyIDQuNWgtM3Y0aC00di00em0tNS0zaDJWOWEyIDIgMCAwIDAtMi0ySDNhMiAyIDAgMCAwLTIgMnY0aDJ2N2g0di03ek01IDZhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2em05IDBhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Mb2NhdGlvblNob3BwaW5nKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiA2djJoMmwyIDEySDBMMiA4aDJWNmE2IDYgMCAxIDEgMTIgMHptLTIgMGE0IDQgMCAxIDAtOCAwdjJoOFY2ek00IDEwdjJoMnYtMkg0em0xMCAwdjJoMnYtMmgtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTG9jYXRpb24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwUzMgMTAuODcgMyA3YTcgNyAwIDEgMSAxNCAwYzAgMy44Ny03IDEzLTcgMTN6bTAtMTFhMiAyIDAgMSAwIDAtNCAyIDIgMCAwIDAgMCA0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Mb2NrQ2xvc2VkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDhWNmE2IDYgMCAxIDEgMTIgMHYyaDFhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi04YzAtMS4xLjktMiAyLTJoMXptNSA2LjczVjE3aDJ2LTIuMjdhMiAyIDAgMSAwLTIgMHpNNyA2djJoNlY2YTMgMyAwIDAgMC02IDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbkxvY2tPcGVuKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDhWNmE2IDYgMCAxIDEgMTIgMGgtM3YyaDRhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi04YzAtMS4xLjktMiAyLTJoMXptNSA2LjczVjE3aDJ2LTIuMjdhMiAyIDAgMSAwLTIgMHpNNyA2djJoNlY2YTMgMyAwIDAgMC02IDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk1hcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwbDYgNCA4LTQgNiA0djE2bC02LTQtOCA0LTYtNFYwem03IDZ2MTFsNi0zVjNMNyA2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25NZW51KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNmgyMHYySDBWOXptMCA2aDIwdjJIMHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTWljKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDE4di0xLjA2QTggOCAwIDAgMSAyIDloMmE2IDYgMCAxIDAgMTIgMGgyYTggOCAwIDAgMS03IDcuOTRWMThoM3YySDZ2LTJoM3pNNiA0YTQgNCAwIDEgMSA4IDB2NWE0IDQgMCAxIDEtOCAwVjR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk1pbnVzT3V0bGluZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwem0wLTJhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZ6bTUtOXYySDVWOWgxMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTWludXNTb2xpZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwem01LTExSDV2MmgxMFY5elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Nb2JpbGVEZXZpY2VzKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNyA2VjVoLTJWMkgzdjE0aDV2NGgzLjI1SDExYTIgMiAwIDAgMS0yLTJWOGEyIDIgMCAwIDEgMi0yaDZ6bS01Ljc1IDE0SDNhMiAyIDAgMCAxLTItMlYyYzAtMS4xLjktMiAyLTJoMTJhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMmgtNS43NXpNMTEgOHY4aDZWOGgtNnptMyAxMWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk1vb2RIYXBweU91dGxpbmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHptMC0yYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2ek02LjUgOWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNyAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem0yLjE2IDNhNiA2IDAgMCAxLTExLjMyIDBoMTEuMzJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk1vb2RIYXBweVNvbGlkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6TTYuNSA5YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzem03IDBhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTIuMTYgM0g0LjM0YTYgNiAwIDAgMCAxMS4zMiAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Nb29kTmV1dHJhbE91dGxpbmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHptMC0yYTggOCAwIDEgMCAwLTE2IDggOCAwIDAgMCAwIDE2ek02LjUgOWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM3ptNyAwYTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzek03IDEzaDZhMSAxIDAgMCAxIDAgMkg3YTEgMSAwIDAgMSAwLTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk1vb2ROZXV0cmFsU29saWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHpNNi41IDlhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTcgMGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3pNNyAxM2ExIDEgMCAwIDAgMCAyaDZhMSAxIDAgMCAwIDAtMkg3elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Nb29kU2FkT3V0bGluZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwem0wLTJhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZ6TTYuNSA5YTEuNSAxLjUgMCAxIDEgMC0zIDEuNSAxLjUgMCAwIDEgMCAzem03IDBhMS41IDEuNSAwIDEgMSAwLTMgMS41IDEuNSAwIDAgMSAwIDN6bTIuMTYgNkg0LjM0YTYgNiAwIDAgMSAxMS4zMiAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Nb29kU2FkU29saWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEwIDIwYTEwIDEwIDAgMSAxIDAtMjAgMTAgMTAgMCAwIDEgMCAyMHpNNi41IDlhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTcgMGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptMi4xNiA2YTYgNiAwIDAgMC0xMS4zMiAwaDExLjMyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Nb3VzZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNCA5VjZBNiA2IDAgMCAxIDkgLjA4VjlINHptMCAydjNhNiA2IDAgMSAwIDEyIDB2LTNINHptMTItMlY2YTYgNiAwIDAgMC01LTUuOTJWOWg1elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25NdXNpY0FsYnVtKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDBoMjB2MjBIMFYwem0xMCAxOGE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptMC01YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTXVzaWNBcnRpc3QocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE1Ljc1IDhsLTMuNzQtMy43NWEzLjk5IDMuOTkgMCAwIDEgNi44Mi0zLjA4QTQgNCAwIDAgMSAxNS43NSA4em0tMTMuOSA3LjNsOS4yLTkuMTkgMi44MyAyLjgzLTkuMiA5LjItMi44Mi0yLjg0em0tMS40IDIuODNsMi4xMS0yLjEyIDEuNDIgMS40Mi0yLjEyIDIuMTItMS40Mi0xLjQyek0xMCAxNWwyLTJ2N2gtMnYtNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTXVzaWNOb3Rlcyhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMjAgMi41VjBMNiAydjEyLjE3QTMgMyAwIDAgMCA1IDE0SDNhMyAzIDAgMCAwIDAgNmgyYTMgMyAwIDAgMCAzLTNWNS43MUwxOCA0LjN2Ny44OGEzIDMgMCAwIDAtMS0uMTdoLTJhMyAzIDAgMCAwIDAgNmgyYTMgMyAwIDAgMCAzLTNWMi41elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25NdXNpY1BsYXlsaXN0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiAxN2EzIDMgMCAwIDEtMyAzaC0yYTMgMyAwIDAgMSAwLTZoMmEzIDMgMCAwIDEgMSAuMTdWMWw2LTF2NGwtNCAuNjdWMTd6TTAgM2gxMnYySDBWM3ptMCA0aDEydjJIMFY3em0wIDRoMTJ2Mkgwdi0yem0wIDRoNnYySDB2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk5hdmlnYXRpb25Nb3JlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDEyYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptNiAwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHptNiAwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTmV0d29yayhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwem03Ljc1LThhOC4wMSA4LjAxIDAgMCAwIDAtNGgtMy44MmEyOC44MSAyOC44MSAwIDAgMSAwIDRoMy44MnptLS44MiAyaC0zLjIyYTE0LjQ0IDE0LjQ0IDAgMCAxLS45NSAzLjUxQTguMDMgOC4wMyAwIDAgMCAxNi45MyAxNHptLTguODUtMmgzLjg0YTI0LjYxIDI0LjYxIDAgMCAwIDAtNEg4LjA4YTI0LjYxIDI0LjYxIDAgMCAwIDAgNHptLjI1IDJjLjQxIDIuNCAxLjEzIDQgMS42NyA0czEuMjYtMS42IDEuNjctNEg4LjMzem0tNi4wOC0yaDMuODJhMjguODEgMjguODEgMCAwIDEgMC00SDIuMjVhOC4wMSA4LjAxIDAgMCAwIDAgNHptLjgyIDJhOC4wMyA4LjAzIDAgMCAwIDQuMTcgMy41MWMtLjQyLS45Ni0uNzQtMi4xNi0uOTUtMy41MUgzLjA3em0xMy44Ni04YTguMDMgOC4wMyAwIDAgMC00LjE3LTMuNTFjLjQyLjk2Ljc0IDIuMTYuOTUgMy41MWgzLjIyem0tOC42IDBoMy4zNGMtLjQxLTIuNC0xLjEzLTQtMS42Ny00UzguNzQgMy42IDguMzMgNnpNMy4wNyA2aDMuMjJjLjItMS4zNS41My0yLjU1Ljk1LTMuNTFBOC4wMyA4LjAzIDAgMCAwIDMuMDcgNnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTmV3c1BhcGVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNiAyaDR2MTVhMyAzIDAgMCAxLTMgM0gzYTMgMyAwIDAgMS0zLTNWMGgxNnYyem0wIDJ2MTNhMSAxIDAgMCAwIDEgMSAxIDEgMCAwIDAgMS0xVjRoLTJ6TTIgMnYxNWExIDEgMCAwIDAgMSAxaDExLjE3YTIuOTggMi45OCAwIDAgMS0uMTctMVYySDJ6bTIgOGg4djJINHYtMnptMCA0aDh2Mkg0di0yek00IDRoOHY0SDRWNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTm90aWZpY2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDhhNiA2IDAgMCAxIDQuMDMtNS42NyAyIDIgMCAxIDEgMy45NSAwQTYgNiAwIDAgMSAxNiA4djZsMyAydjFIMXYtMWwzLTJWOHptOCAxMGEyIDIgMCAxIDEtNCAwaDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbk5vdGlmaWNhdGlvbnNPdXRsaW5lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk02IDh2N2g4VjhhNCA0IDAgMSAwLTggMHptMi4wMy01LjY3YTIgMiAwIDEgMSAzLjk1IDBBNiA2IDAgMCAxIDE2IDh2NmwzIDJ2MUgxdi0xbDMtMlY4YTYgNiAwIDAgMSA0LjAzLTUuNjd6TTEyIDE4YTIgMiAwIDEgMS00IDBoNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uTm90aWZpY2F0aW9ucyhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNCA4YTYgNiAwIDAgMSA0LjAzLTUuNjcgMiAyIDAgMSAxIDMuOTUgMEE2IDYgMCAwIDEgMTYgOHY2bDMgMnYxSDF2LTFsMy0yVjh6bTggMTBhMiAyIDAgMSAxLTQgMGg0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QYXN0ZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAuNSAyMEgyYTIgMiAwIDAgMS0yLTJWNmMwLTEuMS45LTIgMi0yaDFWM2wyLjAzLS40YTMgMyAwIDAgMSA1Ljk0IDBMMTMgM3YxaDFhMiAyIDAgMCAxIDIgMnYxaC0yVjZoLTF2MUgzVjZIMnYxMmg1djJoMy41ek04IDRhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyem0yIDRoOGEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMmgtOGEyIDIgMCAwIDEtMi0ydi04YzAtMS4xLjktMiAyLTJ6bTAgMnY4aDh2LThoLTh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBhdXNlT3V0bGluZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMi45MyAxNy4wN0ExMCAxMCAwIDEgMSAxNy4wNyAyLjkzIDEwIDEwIDAgMCAxIDIuOTMgMTcuMDd6bTEyLjczLTEuNDFBOCA4IDAgMSAwIDQuMzQgNC4zNGE4IDggMCAwIDAgMTEuMzIgMTEuMzJ6TTcgNmgydjhIN1Y2em00IDBoMnY4aC0yVjZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBhdXNlU29saWQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3ek03IDZ2OGgyVjZIN3ptNCAwdjhoMlY2aC0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QYXVzZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNSA0aDN2MTJINVY0em03IDBoM3YxMmgtM1Y0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QZW5Ub29sKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMSA5LjI3VjBsNiAxMS00IDZIN2wtNC02TDkgMHY5LjI3YTIgMiAwIDEgMCAyIDB6TTYgMThoOHYySDZ2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBob25lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yMCAxOC4zNVYxOWExIDEgMCAwIDEtMSAxaC0yQTE3IDE3IDAgMCAxIDAgM1YxYTEgMSAwIDAgMSAxLTFoNGExIDEgMCAwIDEgMSAxdjRjMCAuNTYtLjMxIDEuMzEtLjcgMS43TDMuMTYgOC44NGMxLjUyIDMuNiA0LjQgNi40OCA4IDhsMi4xMi0yLjEyYy40LS40IDEuMTUtLjcxIDEuNy0uNzFIMTlhMSAxIDAgMCAxIC45OSAxdjMuMzV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBob3RvKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDRjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjR6bTExIDlsLTMtMy02IDZoMTZsLTUtNS0yIDJ6bTQtNGEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBocEVsZXBoYW50KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAgMTJ2OEExMCAxMCAwIDAgMSA4LjE3LjE3TDEwIDJoNWE1IDUgMCAwIDEgNSA0Ljk5djkuMDJBNCA0IDAgMCAxIDE2IDIwdi0yYTIgMiAwIDEgMCAwLTRoLTRsLTItMnptNS41LTNhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblBpbihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEgMTJoNnYtMWwtMy0xVjJsMy0xVjBIM3YxbDMgMXY4bC0zIDF2MWg2djdsMSAxIDEtMXYtN3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uUGxheU91dGxpbmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIuOTMgMTcuMDdBMTAgMTAgMCAxIDEgMTcuMDcgMi45MyAxMCAxMCAwIDAgMSAyLjkzIDE3LjA3em0xMi43My0xLjQxQTggOCAwIDEgMCA0LjM0IDQuMzRhOCA4IDAgMCAwIDExLjMyIDExLjMyek03IDZsOCA0LTggNFY2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QbGF5KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk00IDRsMTIgNi0xMiA2elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QbGF5bGlzdChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTYgMTdhMyAzIDAgMCAxLTMgM2gtMmEzIDMgMCAwIDEgMC02aDJhMyAzIDAgMCAxIDEgLjE3VjFsNi0xdjRsLTQgLjY3VjE3ek0wIDNoMTJ2MkgwVjN6bTAgNGgxMnYySDBWN3ptMCA0aDEydjJIMHYtMnptMCA0aDZ2Mkgwdi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25QbHVnaW4ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIwIDE0djRhMiAyIDAgMCAxLTIgMmgtNHYtMmEyIDIgMCAwIDAtMi0yIDIgMiAwIDAgMC0yIDJ2Mkg2YTIgMiAwIDAgMS0yLTJ2LTRIMmEyIDIgMCAwIDEtMi0yIDIgMiAwIDAgMSAyLTJoMlY2YzAtMS4xLjktMiAyLTJoNFYyYTIgMiAwIDAgMSAyLTIgMiAyIDAgMCAxIDIgMnYyaDRhMiAyIDAgMCAxIDIgMnY0aC0yYTIgMiAwIDAgMC0yIDIgMiAyIDAgMCAwIDIgMmgyelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Qb3J0Zm9saW8ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgMTJIMXY2YTIgMiAwIDAgMCAyIDJoMTRhMiAyIDAgMCAwIDItMnYtNmgtOHYySDl2LTJ6bTAtMUgwVjVjMC0xLjEuOS0yIDItMmg0VjJhMiAyIDAgMCAxIDItMmg0YTIgMiAwIDAgMSAyIDJ2MWg0YTIgMiAwIDAgMSAyIDJ2NmgtOVY5SDl2MnptMy04VjJIOHYxaDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblByaW50ZXIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQgMTZIMFY2aDIwdjEwaC00djRINHYtNHptMi00djZoOHYtNkg2ek00IDBoMTJ2NUg0VjB6TTIgOHYyaDJWOEgyem00IDB2MmgyVjhINnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uUHlsb24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE3LjQgMThIMjB2Mkgwdi0yaDIuNkw4IDBoNGw1LjQgMTh6bS0zLjItNEg1LjhsLTEuMiA0aDEwLjhsLTEuMi00em0tMi40LThIOC4yTDcgMTBoNmwtMS4yLTR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblF1ZXN0aW9uKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTItMTNjMCAuMjgtLjIxLjgtLjQyIDFMMTAgOS41OGMtLjU3LjU4LTEgMS42LTEgMi40MnYxaDJ2LTFjMC0uMjkuMjEtLjguNDItMUwxMyA5LjQyYy41Ny0uNTggMS0xLjYgMS0yLjQyYTQgNCAwIDEgMC04IDBoMmEyIDIgMCAxIDEgNCAwem0tMyA4djJoMnYtMkg5elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25RdWV1ZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAyaDIwdjRIMFYyem0wIDhoMjB2Mkgwdi0yem0wIDZoMjB2Mkgwdi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25SYWRhckNvcHkyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMiAxMGEyIDIgMCAwIDEtMy40MSAxLjQxQTIgMiAwIDAgMSAxMCA4VjBhOS45NyA5Ljk3IDAgMCAxIDEwIDEwaC04em03LjkgMS40MUExMCAxMCAwIDEgMSA4LjU5LjF2Mi4wM2E4IDggMCAxIDAgOS4yOSA5LjI5aDIuMDJ6bS00LjA3IDBhNiA2IDAgMSAxLTcuMjUtNy4yNXYyLjFhMy45OSAzLjk5IDAgMCAwLTEuNCA2LjU3IDQgNCAwIDAgMCA2LjU2LTEuNDJoMi4xelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25SYWRhcihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgMTBhMiAyIDAgMCAxLTMuNDEgMS40MUEyIDIgMCAwIDEgMTAgOFYwYTkuOTcgOS45NyAwIDAgMSAxMCAxMGgtOHptNy45IDEuNDFBMTAgMTAgMCAxIDEgOC41OS4xdjIuMDNhOCA4IDAgMSAwIDkuMjkgOS4yOWgyLjAyem0tNC4wNyAwYTYgNiAwIDEgMS03LjI1LTcuMjV2Mi4xYTMuOTkgMy45OSAwIDAgMC0xLjQgNi41NyA0IDQgMCAwIDAgNi41Ni0xLjQyaDIuMXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uUmFkaW8ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIwIDl2OWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY4YzAtMS4xLjktMiAyLTJoMTMuOEwuNzQgMS45NyAxLjI2LjAzIDIwIDUuMDZWOXptLTUgOWEzIDMgMCAxIDAgMC02IDMgMyAwIDAgMCAwIDZ6TTIgOHYyaDE2VjhIMnptMS41IDEwYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzem01IDBhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTYuNS0xYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uUmVmcmVzaChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgM3YyYTUgNSAwIDAgMC0zLjU0IDguNTRsLTEuNDEgMS40MUE3IDcgMCAwIDEgMTAgM3ptNC45NSAyLjA1QTcgNyAwIDAgMSAxMCAxN3YtMmE1IDUgMCAwIDAgMy41NC04LjU0bDEuNDEtMS40MXpNMTAgMjBsLTQtNCA0LTR2OHptMC0xMlYwbDQgNC00IDR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblJlbG9hZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTQuNjYgMTUuNjZBOCA4IDAgMSAxIDE3IDEwaC0yYTYgNiAwIDEgMC0xLjc2IDQuMjRsMS40MiAxLjQyek0xMiAxMGg4bC00IDQtNC00elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25SZXBseUFsbChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTggMTd2LTIuOTlBNCA0IDAgMCAwIDE0IDEwaC0zdjVMNSA5bDYtNnY1aDNhNiA2IDAgMCAxIDYgNnYzaC0yek02IDZWM0wwIDlsNiA2di0zTDMgOWwzLTN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblJlcGx5KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNSAxN3YtMi45OUE0IDQgMCAwIDAgMTEgMTBIOHY1TDIgOWw2LTZ2NWgzYTYgNiAwIDAgMSA2IDZ2M2gtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uUmVwb3N0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk01IDRhMiAyIDAgMCAwLTIgMnY2SDBsNCA0IDQtNEg1VjZoN2wyLTJINXptMTAgNGgtM2w0LTQgNCA0aC0zdjZhMiAyIDAgMCAxLTIgMkg2bDItMmg3Vjh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNhdmVEaXNrKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDJDMCAuOS45IDAgMiAwaDE0bDQgNHYxNGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem01IDB2NmgxMFYySDV6bTYgMWgzdjRoLTNWM3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uU2NyZWVuRnVsbChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMi44IDE1LjhMMCAxM3Y3aDdsLTIuOC0yLjggNC4zNC00LjMyLTEuNDItMS40MkwyLjggMTUuOHpNMTcuMiA0LjJMMjAgN1YwaC03bDIuOCAyLjgtNC4zNCA0LjMyIDEuNDIgMS40MkwxNy4yIDQuMnptLTEuNCAxM0wxMyAyMGg3di03bC0yLjggMi44LTQuMzItNC4zNC0xLjQyIDEuNDIgNC4zMyA0LjMzek00LjIgMi44TDcgMEgwdjdsMi44LTIuOCA0LjMyIDQuMzQgMS40Mi0xLjQyTDQuMiAyLjh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNlYXJjaChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIuOSAxNC4zMmE4IDggMCAxIDEgMS40MS0xLjQxbDUuMzUgNS4zMy0xLjQyIDEuNDItNS4zMy01LjM0ek04IDE0QTYgNiAwIDEgMCA4IDJhNiA2IDAgMCAwIDAgMTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNlbmQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgMGwyMCAxMEwwIDIwVjB6bTAgOHY0bDEwLTJMMCA4elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TZXJ2ZXJzKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDJDMCAuOS45IDAgMiAwaDE2YTIgMiAwIDAgMSAyIDJ2MmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem0wIDdjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWOXptMCA3YzAtMS4xLjktMiAyLTJoMTZhMiAyIDAgMCAxIDIgMnYyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ydi0yek0xMiAydjJoMlYyaC0yem00IDB2MmgyVjJoLTJ6bS00IDd2MmgyVjloLTJ6bTQgMHYyaDJWOWgtMnptLTQgN3YyaDJ2LTJoLTJ6bTQgMHYyaDJ2LTJoLTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNoYXJlMDEocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQgMTBjMC0xLjEuOS0yIDItMmg4YzEuMSAwIDIgLjkgMiAydjhjMCAxLjEtLjkgMi0yIDJINmMtMS4xIDAtMi0uOS0yLTJ2LTh6bTIgMHY4aDh2LThoLTJWOEg4djJINnptMy02LjE3VjE2aDJWMy44M2wzLjA3IDMuMDcgMS40Mi0xLjQxTDEwIDBsLS43LjdMNC41IDUuNWwxLjQyIDEuNEw5IDMuODR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNoYXJlQWx0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk01LjA4IDEyLjE2QTIuOTkgMi45OSAwIDAgMSAwIDEwYTMgMyAwIDAgMSA1LjA4LTIuMTZsOC45NC00LjQ3YTMgMyAwIDEgMSAuOSAxLjc5TDUuOTggOS42M2EzLjAzIDMuMDMgMCAwIDEgMCAuNzRsOC45NCA0LjQ3QTIuOTkgMi45OSAwIDAgMSAyMCAxN2EzIDMgMCAxIDEtNS45OC0uMzdsLTguOTQtNC40N3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uU2hhcmUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQgMTBjMC0xLjEuOS0yIDItMmg4YzEuMSAwIDIgLjkgMiAydjhjMCAxLjEtLjkgMi0yIDJINmMtMS4xIDAtMi0uOS0yLTJ2LTh6bTIgMHY4aDh2LThoLTJWOEg4djJINnptMy02LjE3VjE2aDJWMy44M2wzLjA3IDMuMDcgMS40Mi0xLjQxTDEwIDBsLS43LjctNC44IDQuOCAxLjQyIDEuNEw5IDMuODR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblNoaWVsZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTkgMTFhNy41IDcuNSAwIDAgMS0zLjUgNS45NEwxMCAyMGwtNS41LTMuMDZBNy41IDcuNSAwIDAgMSAxIDExVjNjMy4zOCAwIDYuNS0xLjEyIDktMyAyLjUgMS44OSA1LjYyIDMgOSAzdjh6bS05IDEuMDhsMi45MiAyLjA0LTEuMDMtMy40MSAyLjg0LTIuMTUtMy41Ni0uMDhMMTAgNS4xMiA4LjgzIDguNDhsLTMuNTYuMDhMOC4xIDEwLjdsLTEuMDMgMy40TDEwIDEyLjA5elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TaG9wcGluZ0NhcnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTQgMmgxNmwtMyA5SDRhMSAxIDAgMSAwIDAgMmgxM3YySDRhMyAzIDAgMCAxIDAtNmguMzNMMyA1IDIgMkgwVjBoM2ExIDEgMCAwIDEgMSAxdjF6bTEgMThhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0em0xMCAwYTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uU2hvd1NpZGViYXIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgM0gydjE0aDVWM3ptMiAwdjE0aDlWM0g5ek0wIDNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjN6bTMgMWgzdjJIM1Y0em0wIDNoM3YySDNWN3ptMCAzaDN2Mkgzdi0yelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TaHVmZmxlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk02LjU5IDEyLjgzTDQuNCAxNWMtLjU4LjU4LTEuNTkgMS0yLjQgMUgwdi0yaDJjLjI5IDAgLjgtLjIgMS0uNDFsMi4xNy0yLjE4IDEuNDIgMS40MnpNMTYgNFYxbDQgNC00IDRWNmgtMmMtLjI5IDAtLjguMi0xIC40MWwtMi4xNyAyLjE4TDkuNCA3LjE3IDExLjYgNWMuNTgtLjU4IDEuNTktMSAyLjQxLTFoMnptMCAxMHYtM2w0IDQtNCA0di0zaC0yYy0uODIgMC0xLjgzLS40Mi0yLjQxLTFsLTguNi04LjU5QzIuOCA2LjIxIDIuMyA2IDIgNkgwVjRoMmMuODIgMCAxLjgzLjQyIDIuNDEgMWw4LjYgOC41OWMuMi4yLjcuNDEuOTkuNDFoMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uU3RhbmRCeShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTQuMTYgNC4xNmwxLjQyIDEuNDJBNi45OSA2Ljk5IDAgMCAwIDEwIDE4YTcgNyAwIDAgMCA0LjQyLTEyLjQybDEuNDItMS40MmE5IDkgMCAxIDEtMTEuNjkgMHpNOSAwaDJ2OEg5VjB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN0YXJGdWxsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAxNWwtNS44NzggMy4wOSAxLjEyMy02LjU0NUwuNDg5IDYuOTFsNi41NzItLjk1NUwxMCAwbDIuOTM5IDUuOTU1IDYuNTcyLjk1NS00Ljc1NiA0LjYzNSAxLjEyMyA2LjU0NXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uU3RhdGlvbihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNOSAxMS43M2EyIDIgMCAxIDEgMiAwVjIwSDl2LTguMjd6bTUuMjQgMi41MWwtMS40MS0xLjQxQTMuOTkgMy45OSAwIDAgMCAxMCA2YTQgNCAwIDAgMC0yLjgzIDYuODNsLTEuNDEgMS40MWE2IDYgMCAxIDEgOC40OSAwem0yLjgzIDIuODNsLTEuNDEtMS40MWE4IDggMCAxIDAtMTEuMzEgMGwtMS40MiAxLjQxYTEwIDEwIDAgMSAxIDE0LjE0IDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN0ZXBCYWNrd2FyZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNCA1aDN2MTBINFY1em0xMiAwdjEwbC05LTUgOS01elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TdGVwRm9yd2FyZChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTMgNWgzdjEwaC0zVjV6TTQgNWw5IDUtOSA1VjV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN0ZXRob3Njb3BlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNyAxMC4yN1Y0Ljk5YTEgMSAwIDAgMC0yIDBWMTVhNSA1IDAgMCAxLTEwIDB2LTEuMDhBNiA2IDAgMCAxIDAgOFYyQzAgLjkuOSAwIDIgMGgxYTEgMSAwIDAgMSAxIDEgMSAxIDAgMCAxLTEgMUgydjZhNCA0IDAgMSAwIDggMFYySDlhMSAxIDAgMCAxLTEtMSAxIDEgMCAwIDEgMS0xaDFhMiAyIDAgMCAxIDIgMnY2YTYgNiAwIDAgMS01IDUuOTJWMTVhMyAzIDAgMCAwIDYgMFY1YTMgMyAwIDAgMSA2IDB2NS4yN2EyIDIgMCAxIDEtMiAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TdG9yZUZyb250KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xOCA5Ljg3VjIwSDJWOS44N2E0LjI1IDQuMjUgMCAwIDAgMy0uMzhWMTRoMTBWOS41YTQuMjYgNC4yNiAwIDAgMCAzIC4zN3pNMyAwaDRsLS42NyA2LjAzQTMuNDMgMy40MyAwIDAgMSAzIDlDMS4zNCA5IC40MiA3LjczLjk1IDYuMTVMMyAwem01IDBoNGwuNyA2LjNjLjE3IDEuNS0uOTEgMi43LTIuNDIgMi43aC0uNTZBMi4zOCAyLjM4IDAgMCAxIDcuMyA2LjNMOCAwem01IDBoNGwyLjA1IDYuMTVDMTkuNTggNy43MyAxOC42NSA5IDE3IDlhMy40MiAzLjQyIDAgMCAxLTMuMzMtMi45N0wxMyAwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25TdHJva2VXaWR0aChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDIwdjVIMFYwem0wIDdoMjB2NEgwVjd6bTAgNmgyMHYzSDB2LTN6bTAgNWgyMHYySDB2LTJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN1YmRpcmVjdG9yeUxlZnQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE4IDEydjFIOHY1bC02LTYgNi02djVoOFYyaDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN1YmRpcmVjdG9yeVJpZ2h0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0zLjUgMTNIMTJ2NWw2LTYtNi02djVINFYySDJ2MTF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblN3YXAocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgNmE0IDQgMCAxIDEgOCAwdjhoM2wtNCA0LTQtNGgzVjZhMiAyIDAgMCAwLTItMiAyIDIgMCAwIDAtMiAydjhhNCA0IDAgMSAxLTggMFY2SDBsNC00IDQgNEg1djhhMiAyIDAgMCAwIDIgMiAyIDIgMCAwIDAgMi0yVjZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRhYmxldChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMiAyYzAtMS4xLjktMiAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxNmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlYyem0yIDB2MTRoMTJWMkg0em02IDE3YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVGFnKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDEwVjJsMi0yaDhsMTAgMTAtMTAgMTBMMCAxMHptNC41LTRhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRhcmdldChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTcuOTQgMTFIMTNWOWg0Ljk0QTggOCAwIDAgMCAxMSAyLjA2VjdIOVYyLjA2QTggOCAwIDAgMCAyLjA2IDlIN3YySDIuMDZBOCA4IDAgMCAwIDkgMTcuOTRWMTNoMnY0Ljk0QTggOCAwIDAgMCAxNy45NCAxMXpNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UZXh0Qm94KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDBoNnY2SDBWMHptMiAydjJoMlYySDJ6bTEyLTJoNnY2aC02VjB6bTIgMnYyaDJWMmgtMnptLTIgMTJoNnY2aC02di02em0yIDJ2Mmgydi0yaC0yek0wIDE0aDZ2Nkgwdi02em0yIDJ2Mmgydi0ySDJ6TTYgMmg4djJINlYyem0wIDE0aDh2Mkg2di0yek0xNiA2aDJ2OGgtMlY2ek0yIDZoMnY4SDJWNnptNSAxaDZ2Mkg3Vjd6bTIgMmgydjRIOVY5elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UZXh0RGVjb3JhdGlvbihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgNWgtMnYxMkg4VjNoOHYyaC0ydjEyaC0yVjV6TTggM2E0IDQgMCAxIDAgMCA4VjN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRoZXJtb21ldGVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDExLjE3VjdoMnY0LjE3YTMgMyAwIDEgMS0yIDB6bS0xLS42M2E0IDQgMCAxIDAgNCAwVjRhMiAyIDAgMSAwLTQgMHY2LjUzek02IDkuNTNWNGE0IDQgMCAwIDEgOCAwdjUuNTNBNS45OSA1Ljk5IDAgMCAxIDEwIDIwIDYgNiAwIDAgMSA2IDkuNTN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRodW1ic0Rvd24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTExIDIwYTIgMiAwIDAgMS0yLTJ2LTZIMmEyIDIgMCAwIDEtMi0yVjhsMi4zLTYuMTJBMy4xMSAzLjExIDAgMCAxIDUgMGg4YTIgMiAwIDAgMSAyIDJ2OGwtMyA3djNoLTF6bTYtMTBWMGgzdjEwaC0zelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UaHVtYnNVcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEgMGgxdjNsMyA3djhhMiAyIDAgMCAxLTIgMkg1Yy0xLjEgMC0yLjMxLS44NC0yLjctMS44OEwwIDEydi0yYTIgMiAwIDAgMSAyLTJoN1YyYTIgMiAwIDAgMSAyLTJ6bTYgMTBoM3YxMGgtM1YxMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVGlja2V0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0yMCAxMnY1SDB2LTVhMiAyIDAgMSAwIDAtNFYzaDIwdjVhMiAyIDAgMSAwIDAgNHpNMyA1djEwaDE0VjVIM3ptNyA3LjA4bC0yLjkyIDIuMDRMOC4xIDEwLjcgNS4yNyA4LjU2bDMuNTYtLjA4TDEwIDUuMTJsMS4xNyAzLjM2IDMuNTYuMDgtMi44NCAyLjE1IDEuMDMgMy40TDEwIDEyLjA5elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UaW1lKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTAtMmE4IDggMCAxIDAgMC0xNiA4IDggMCAwIDAgMCAxNnptLTEtNy41OVY0aDJ2NS41OWwzLjk1IDMuOTUtMS40MSAxLjQxTDkgMTAuNDF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRpbWVyKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNi4zMiA3LjFBOCA4IDAgMSAxIDkgNC4wNlYyaDJ2Mi4wNmMxLjQ2LjE4IDIuOC43NiAzLjkgMS42MmwxLjQ2LTEuNDYgMS40MiAxLjQyLTEuNDYgMS40NXpNMTAgMThhNiA2IDAgMSAwIDAtMTIgNiA2IDAgMCAwIDAgMTJ6TTcgMGg2djJIN1Ywem01LjEyIDguNDZsMS40MiAxLjQyTDEwIDEzLjQgOC41OSAxMmwzLjUzLTMuNTR6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRvb2xzQ29weShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMHM4IDcuNTggOCAxMmE4IDggMCAxIDEtMTYgMGMwLTEuNS45MS0zLjM1IDIuMTItNS4xNUEzIDMgMCAwIDAgMTAgNlYwek04IDBhMyAzIDAgMSAwIDAgNlYwelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UcmFuc2xhdGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcuNDEgOWwyLjI0IDIuMjQtLjgzIDJMNiAxMC40bC0zLjMgMy4zLTEuNC0xLjQyTDQuNTggOWwtLjg4LS44OGMtLjUzLS41My0xLTEuMy0xLjMtMi4xMmgyLjJjLjE1LjI4LjMzLjUzLjUxLjdsLjg5LjkuODgtLjg4QzcuNDggNi4xIDggNC44NCA4IDRIMFYyaDVWMGgydjJoNXYyaC0yYzAgMS4zNy0uNzQgMy4xNS0xLjcgNC4xMkw3LjQgOXptMy44NCA4TDEwIDIwSDhsNS0xMmgybDUgMTJoLTJsLTEuMjUtM2gtNS41em0uODMtMmgzLjg0TDE0IDEwLjQgMTIuMDggMTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRyYXNoKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk02IDJsMi0yaDRsMiAyaDR2MkgyVjJoNHpNMyA2aDE0bC0xIDE0SDRMMyA2em01IDJ2MTBoMVY4SDh6bTMgMHYxMGgxVjhoLTF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRyYXZlbEJ1cyhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTMgMThIN3YxYTEgMSAwIDAgMS0xIDFINWExIDEgMCAwIDEtMS0xdi0xYTIgMiAwIDAgMS0yLTJWMmMwLTEuMS45LTIgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMnYxYTEgMSAwIDAgMS0xIDFoLTFhMSAxIDAgMCAxLTEtMXYtMXpNNCA1djZoNVY1SDR6bTcgMHY2aDVWNWgtNXpNNSAydjFoMTBWMkg1em0uNSAxNGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptOSAwYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UcmF2ZWxDYXIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIgMTR2LTNIMWExIDEgMCAwIDEtMS0xIDEgMSAwIDAgMSAxLTFoMWw0LTdoOGw0IDdoMWExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMS0xIDFoLTF2NmExIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTF2LTFINXYxYTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xdi0zem0xMy44Ni01TDEzIDRIN0w0LjE0IDloMTEuNzJ6TTUuNSAxNGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptOSAwYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UcmF2ZWxDYXNlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNCA1aDJ2MTRINFY1aDJWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYxem0zIDBoMWEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJoLTFWNXpNMyA1djE0SDJhMiAyIDAgMCAxLTItMlY3YzAtMS4xLjktMiAyLTJoMXptNS0xdjFoNFY0SDh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRyYXZlbFRheGlDYWIocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEyIDNoMmw0IDdoMWExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMS0xIDFoLTF2NmExIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTF2LTFINXYxYTEgMSAwIDAgMS0xIDFIM2ExIDEgMCAwIDEtMS0xdi02SDFhMSAxIDAgMCAxLTEtMSAxIDEgMCAwIDEgMS0xaDFsNC03aDJWMWg0djJ6bTMuODYgN0wxMyA1SDdsLTIuODYgNWgxMS43MnpNNS41IDE1YTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzem05IDBhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRyYXZlbFRyYWluKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMiAxOEg4bC0yIDJIM2wyLTJhMiAyIDAgMCAxLTItMlYyYzAtMS4xLjktMiAyLTJoMTBhMiAyIDAgMCAxIDIgMnYxNGEyIDIgMCAwIDEtMiAybDIgMmgtM2wtMi0yek01IDV2NmgxMFY1SDV6bTEuNSAxMWExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptNyAwYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzek04IDJ2MWg0VjJIOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVHJhdmVsV2Fsayhwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTEgN2wxLjQ0IDIuMTZjLjMxLjQ3IDEuMDEuODQgMS41Ny44NEgxN1Y4aC0zbC0xLjQ0LTIuMTZhNS45NCA1Ljk0IDAgMCAwLTEuNC0xLjRsLTEuMzItLjg4YTEuNzIgMS43MiAwIDAgMC0xLjctLjA0TDQgNnY1aDJWN2wyLTEtMyAxNGgybDIuMzUtNy42NUwxMSAxNHY2aDJ2LThsLTIuNy0yLjdMMTEgN3ptMS0zYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVHJhdmVsKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNCA1aDJ2MTRINFY1aDJWNGEyIDIgMCAwIDEgMi0yaDRhMiAyIDAgMCAxIDIgMnYxem0zIDBoMWEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJoLTFWNXpNMyA1djE0SDJhMiAyIDAgMCAxLTItMlY3YzAtMS4xLjktMiAyLTJoMXptNS0xdjFoNFY0SDh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblRyb3BoeShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTUgOWEzIDMgMCAwIDAgMy0zaDJhNSA1IDAgMCAxLTUuMSA1IDUgNSAwIDAgMS0zLjkgMy45VjE3bDUgMnYxSDR2LTFsNS0ydi0yLjFBNSA1IDAgMCAxIDUuMSAxMUg1YTUgNSAwIDAgMS01LTVoMmEzIDMgMCAwIDAgMyAzVjRIMnYySDBWMmg1VjBoMTB2Mmg1djRoLTJWNGgtM3Y1elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25UdW5pbmcocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE3IDE2djRoLTJ2LTRoLTJ2LTNoNnYzaC0yek0xIDloNnYzSDFWOXptNi00aDZ2M0g3VjV6TTMgMGgydjhIM1Ywem0xMiAwaDJ2MTJoLTJWMHpNOSAwaDJ2NEg5VjB6TTMgMTJoMnY4SDN2LTh6bTYtNGgydjEySDlWOHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVXBsb2FkKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMyAxMHY2SDd2LTZIMmw4LTggOCA4aC01ek0wIDE4aDIwdjJIMHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVXNiKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNSA4djJoLTRWNGgybC0zLTQtMyA0aDJ2OEg1VjkuNzNhMiAyIDAgMSAwLTIgMFYxMmEyIDIgMCAwIDAgMiAyaDR2Mi4yN2EyIDIgMCAxIDAgMiAwVjEyaDRhMiAyIDAgMCAwIDItMlY4aDFWNGgtNHY0aDF6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblVzZXJBZGQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTIgNkgwdjJoMnYyaDJWOGgyVjZINFY0SDJ2MnptNyAwYTMgMyAwIDAgMSA2IDB2MmEzIDMgMCAwIDEtNiAwVjZ6bTExIDkuMTRBMTUuOTMgMTUuOTMgMCAwIDAgMTIgMTNjLTIuOTEgMC01LjY1Ljc4LTggMi4xNFYxOGgxNnYtMi44NnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVXNlckdyb3VwKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk03IDhhNCA0IDAgMSAxIDAtOCA0IDQgMCAwIDEgMCA4em0wIDFjMi4xNSAwIDQuMi40IDYuMSAxLjA5TDEyIDE2aC0xLjI1TDEwIDIwSDRsLS43NS00SDJMLjkgMTAuMDlBMTcuOTMgMTcuOTMgMCAwIDEgNyA5em04LjMxLjE3YzEuMzIuMTggMi41OS40OCAzLjguOTJMMTggMTZoLTEuMjVMMTYgMjBoLTMuOTZsLjM3LTJoMS4yNWwxLjY1LTguODN6TTEzIDBhNCA0IDAgMSAxLTEuMzMgNy43NiA1Ljk2IDUuOTYgMCAwIDAgMC03LjUyQzEyLjEuMSAxMi41MyAwIDEzIDB6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblVzZXJTb2xpZENpcmNsZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTAgMjBhMTAgMTAgMCAxIDEgMC0yMCAxMCAxMCAwIDAgMSAwIDIwek03IDZ2MmEzIDMgMCAxIDAgNiAwVjZhMyAzIDAgMSAwLTYgMHptLTMuNjUgOC40NGE4IDggMCAwIDAgMTMuMyAwIDE1Ljk0IDE1Ljk0IDAgMCAwLTEzLjMgMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVXNlclNvbGlkU3F1YXJlKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDJDMCAuOS45IDAgMiAwaDE2YTIgMiAwIDAgMSAyIDJ2MTZhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWMnptNyA0djJhMyAzIDAgMSAwIDYgMFY2YTMgMyAwIDEgMC02IDB6bTExIDkuMTRBMTUuOTMgMTUuOTMgMCAwIDAgMTAgMTNjLTIuOTEgMC01LjY1Ljc4LTggMi4xNFYxOGgxNnYtMi44NnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVXNlcihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNSA1YTUgNSAwIDAgMSAxMCAwdjJBNSA1IDAgMCAxIDUgN1Y1ek0wIDE2LjY4QTE5LjkgMTkuOSAwIDAgMSAxMCAxNGMzLjY0IDAgNy4wNi45NyAxMCAyLjY4VjIwSDB2LTMuMzJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZlY3Rvcihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTIgNGg0LjI3YTIgMiAwIDEgMSAwIDJoLTIuMTRhOSA5IDAgMCAxIDQuODQgNy4yNSAyIDIgMCAxIDEtMiAuMDQgNyA3IDAgMCAwLTQuOTctNlY4SDh2LS43MWE3IDcgMCAwIDAtNC45NiA2IDIgMiAwIDEgMS0yLS4wNEE5IDkgMCAwIDEgNS44NiA2SDMuNzNhMiAyIDAgMSAxIDAtMkg4VjNoNHYxelwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25WaWRlb0NhbWVyYShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTYgN2w0LTR2MTRsLTQtNHYzYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjRjMC0xLjEuOS0yIDItMmgxMmEyIDIgMCAwIDEgMiAydjN6bS04IDdhNCA0IDAgMSAwIDAtOCA0IDQgMCAwIDAgMCA4em0wLTJhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25WaWV3Q2Fyb3VzZWwocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTE2IDE2djJINHYtMkgwVjRoNFYyaDEydjJoNHYxMmgtNHpNMTQgNS41VjRINnYxMmg4VjUuNXptMiAuNXY4aDJWNmgtMnpNNCA2SDJ2OGgyVjZ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZpZXdDb2x1bW4ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEyIDRIOHYxMmg0VjR6bTIgMHYxMmg0VjRoLTR6TTYgNEgydjEyaDRWNHpNMCAyaDIwdjE2SDBWMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVmlld0hpZGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTEyLjgxIDQuMzZsLTEuNzcgMS43OGE0IDQgMCAwIDAtNC45IDQuOWwtMi43NiAyLjc1QzIuMDYgMTIuNzkuOTYgMTEuNDkuMiAxMGExMSAxMSAwIDAgMSAxMi42LTUuNjR6bTMuOCAxLjg1YzEuMzMgMSAyLjQzIDIuMyAzLjIgMy43OWExMSAxMSAwIDAgMS0xMi42MiA1LjY0bDEuNzctMS43OGE0IDQgMCAwIDAgNC45LTQuOWwyLjc2LTIuNzV6bS0uMjUtMy45OWwxLjQyIDEuNDJMMy42NCAxNy43OGwtMS40Mi0xLjQyTDE2LjM2IDIuMjJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZpZXdMaXN0KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDNoMjB2MkgwVjN6bTAgNGgyMHYySDBWN3ptMCA0aDIwdjJIMHYtMnptMCA0aDIwdjJIMHYtMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uVmlld1Nob3cocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTS4yIDEwYTExIDExIDAgMCAxIDE5LjYgMEExMSAxMSAwIDAgMSAuMiAxMHptOS44IDRhNCA0IDAgMSAwIDAtOCA0IDQgMCAwIDAgMCA4em0wLTJhMiAyIDAgMSAxIDAtNCAyIDIgMCAwIDEgMCA0elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25WaWV3VGlsZShwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDl2OUgwVjB6bTIgMnY1aDVWMkgyem0tMiA5aDl2OUgwdi05em0yIDJ2NWg1di01SDJ6bTktMTNoOXY5aC05VjB6bTIgMnY1aDVWMmgtNXptLTIgOWg5djloLTl2LTl6bTIgMnY1aDV2LTVoLTV6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZvbHVtZURvd24ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTcgN0gzdjZoNGw1IDVWMkw3IDd6bTguNTQgNi41NGwtMS40Mi0xLjQyYTMgMyAwIDAgMCAwLTQuMjRsMS40Mi0xLjQyYTQuOTggNC45OCAwIDAgMSAwIDcuMDh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZvbHVtZU11dGUocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTkgN0g1djZoNGw1IDVWMkw5IDd6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvblZvbHVtZU9mZihwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMTUgOC41OWwtMi4xMi0yLjEzLTEuNDIgMS40MkwxMy42IDEwbC0yLjEzIDIuMTIgMS40MiAxLjQyTDE1IDExLjRsMi4xMiAyLjEzIDEuNDItMS40MkwxNi40IDEwbDIuMTMtMi4xMi0xLjQyLTEuNDJMMTUgOC42ek00IDdIMHY2aDRsNSA1VjJMNCA3elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25Wb2x1bWVVcChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNSA3SDF2Nmg0bDUgNVYyTDUgN3ptMTEuMzYgOS4zNmwtMS40MS0xLjQxYTYuOTggNi45OCAwIDAgMCAwLTkuOWwxLjQxLTEuNDFhOC45NyA4Ljk3IDAgMCAxIDAgMTIuNzJ6bS0yLjgyLTIuODJsLTEuNDItMS40MmEzIDMgMCAwIDAgMC00LjI0bDEuNDItMS40MmE0Ljk4IDQuOTggMCAwIDEgMCA3LjA4elwiLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gWm9uZGljb25XYWxsZXQocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgNGMwLTEuMS45LTIgMi0yaDE1YTEgMSAwIDAgMSAxIDF2MUgydjFoMTdhMSAxIDAgMCAxIDEgMXYxMGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0em0xNi41IDlhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbldhdGNoKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xMSA5aDJ2Mkg5VjdoMnYyem0tNS44MiA2LjA4YTYuOTggNi45OCAwIDAgMSAwLTEwLjE2TDYgMGg4bC44MiA0LjkyYTYuOTggNi45OCAwIDAgMSAwIDEwLjE2TDE0IDIwSDZsLS44Mi00Ljkyek0xMCAxNWE1IDUgMCAxIDAgMC0xMCA1IDUgMCAwIDAgMCAxMHpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uV2luZG93TmV3KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk05IDEwVjhoMnYyaDJ2MmgtMnYySDl2LTJIN3YtMmgyek0wIDNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjN6bTIgMnYxMmgxNlY1SDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbldpbmRvd09wZW4ocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBkPVwiTTAgM2MwLTEuMS45LTIgMi0yaDE2YTIgMiAwIDAgMSAyIDJ2MTRhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM3ptMiAydjEyaDE2VjVIMnptOCAzbDQgNUg2bDQtNXpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uV2luZG93KHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0wIDNjMC0xLjEuOS0yIDItMmgxNmEyIDIgMCAwIDEgMiAydjE0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjN6bTIgMnYxMmgxNlY1SDJ6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbldyZW5jaChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNNi40NyA5LjhBNSA1IDAgMCAxIC4yIDMuMjJsMy45NSAzLjk1IDIuODItMi44M0wzLjAzLjQxYTUgNSAwIDAgMSA2LjQgNi42OGwxMCAxMC0yLjgzIDIuODNMNi40NyA5Ljh6XCIvPlxuICAgIDwvc3ZnPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBab25kaWNvbllpbllhbmcocHJvcHMpIHtcbiAgY29uc3QgbWVyZ2VkID0gbWVyZ2VQcm9wcyhcbiAgICB7XG4gICAgICAuLi56b25kaWNvbnNEZWZhdWx0UHJvcHMsXG4gICAgICB2aWV3Qm94OiAnMCAwIDIwIDIwJyxcbiAgICB9LFxuICAgIHByb3BzXG4gIClcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB7Li4ubWVyZ2VkfVxuICAgICAgd2lkdGg9e21lcmdlZC53aWR0aCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIGhlaWdodD17bWVyZ2VkLmhlaWdodCA/PyBtZXJnZWQuc2l6ZX1cbiAgICAgIHN0cm9rZT17bWVyZ2VkLnN0cm9rZSA/PyBtZXJnZWQuY29sb3J9XG4gICAgICBmaWxsPXttZXJnZWQuZmlsbH1cbiAgICA+XG4gICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMCAyMGExMCAxMCAwIDEgMSAwLTIwIDEwIDEwIDAgMCAxIDAgMjB6bTAtMThhOCA4IDAgMSAwIDAgMTYgNCA0IDAgMSAxIDAtOCA0IDQgMCAxIDAgMC04em0wIDEzYTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnptMC04YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uWm9vbUluKHByb3BzKSB7XG4gIGNvbnN0IG1lcmdlZCA9IG1lcmdlUHJvcHMoXG4gICAge1xuICAgICAgLi4uem9uZGljb25zRGVmYXVsdFByb3BzLFxuICAgICAgdmlld0JveDogJzAgMCAyMCAyMCcsXG4gICAgfSxcbiAgICBwcm9wc1xuICApXG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgey4uLm1lcmdlZH1cbiAgICAgIHdpZHRoPXttZXJnZWQud2lkdGggPz8gbWVyZ2VkLnNpemV9XG4gICAgICBoZWlnaHQ9e21lcmdlZC5oZWlnaHQgPz8gbWVyZ2VkLnNpemV9XG4gICAgICBzdHJva2U9e21lcmdlZC5zdHJva2UgPz8gbWVyZ2VkLmNvbG9yfVxuICAgICAgZmlsbD17bWVyZ2VkLmZpbGx9XG4gICAgPlxuICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTIuOSAxNC4zMmE4IDggMCAxIDEgMS40MS0xLjQxbDUuMzUgNS4zMy0xLjQyIDEuNDItNS4zMy01LjM0ek04IDE0QTYgNiAwIDEgMCA4IDJhNiA2IDAgMCAwIDAgMTJ6TTcgN1Y1aDJ2MmgydjJIOXYySDdWOUg1VjdoMnpcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFpvbmRpY29uWm9vbU91dChwcm9wcykge1xuICBjb25zdCBtZXJnZWQgPSBtZXJnZVByb3BzKFxuICAgIHtcbiAgICAgIC4uLnpvbmRpY29uc0RlZmF1bHRQcm9wcyxcbiAgICAgIHZpZXdCb3g6ICcwIDAgMjAgMjAnLFxuICAgIH0sXG4gICAgcHJvcHNcbiAgKVxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHsuLi5tZXJnZWR9XG4gICAgICB3aWR0aD17bWVyZ2VkLndpZHRoID8/IG1lcmdlZC5zaXplfVxuICAgICAgaGVpZ2h0PXttZXJnZWQuaGVpZ2h0ID8/IG1lcmdlZC5zaXplfVxuICAgICAgc3Ryb2tlPXttZXJnZWQuc3Ryb2tlID8/IG1lcmdlZC5jb2xvcn1cbiAgICAgIGZpbGw9e21lcmdlZC5maWxsfVxuICAgID5cbiAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEyLjkgMTQuMzJhOCA4IDAgMSAxIDEuNDEtMS40MWw1LjM1IDUuMzMtMS40MiAxLjQyLTUuMzMtNS4zNHpNOCAxNEE2IDYgMCAxIDAgOCAyYTYgNiAwIDAgMCAwIDEyek01IDdoNnYySDVWN3pcIi8+XG4gICAgPC9zdmc+XG4gIClcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTQSxVQUFVLFFBQVEsVUFBVTtBQUNyQyxTQUFTQyxxQkFBcUIsUUFBUSx5QkFBeUI7QUFDL0QsT0FBTyxTQUFTQyxrQkFBa0JBLENBQUNDLEtBQUssRUFBRTtFQUN4QyxNQUFNQyxNQUFNLEdBQUdKLFVBQVUsQ0FDdkI7SUFDRSxHQUFHQyxxQkFBcUI7SUFDeEJJLE9BQU8sRUFBRTtFQUNYLENBQUMsRUFDREYsS0FDRixDQUFDO0VBQ0Q7SUFBQSxJQUFBRyxJQUFBLEdBQUFDLGdCQUFBLENBQUFDLE1BQUE7SUFBQUMsUUFBQSxDQUFBSCxJQUFB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