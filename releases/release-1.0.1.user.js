// ==UserScript==
// @name        WME Speed Limits Shortcuts Beta
// @namespace   waze-it
// @version     1.0.1
// @description Sets shortcuts for quickly updating the speed limits. Use the numbers + the ALT key for limits between 0 and 90 and ALT+SHIFT for limits between 100 and 150.
// @updateURL	https://code.waze.tools/repository/70101218-806f-4c8a-9323-49df8cd97534.user.js
// @downloadURL https://code.waze.tools/repository/271e6c0a-cce2-4175-ac51-bde088477d61.user.js
// @author      bedo2991 @ Waze
// @require     https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js
// @match       https://www.waze.com/editor*
// @match       https://beta.waze.com/editor*
// @match       https://www.waze.com/*/editor*
// @match       https://beta.waze.com/*/editor*
// @exclude     https://www.waze.com/user/editor*
// @exclude     https://beta.waze.com/user/editor*
// @run-at      document-idle
// @grant       none
// ==/UserScript==

if (!window.getWmeSdk) {
    throw new Error("SDK not available");
}
const sdk = window.getWmeSdk({ scriptId: "test", scriptName: "test" });
const shortcut = {
    callback: () => {
        console.log("Hello world!");
    },
    description: "test shortcut",
    shortcutId: "test-shortcut",
    shortcutKeys: "A+l",
};
sdk.Shortcuts.createShortcut(shortcut);
export {};
