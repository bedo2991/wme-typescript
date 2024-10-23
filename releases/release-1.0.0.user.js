// ==UserScript==
// @name        WME Speed Limits Shortcuts Beta
// @namespace   wme-sdk-scripts
// @version     1.0.0
// @description Add a useful description here, what does your script do?
// @updateURL	https://TODO/myscript.user.js
// @downloadURL https://TODO/myscript.user.js
// @author      bedo2991 @ Waze
// @match       https://www.waze.com/editor*
// @match       https://beta.waze.com/editor*
// @match       https://www.waze.com/*/editor*
// @match       https://beta.waze.com/*/editor*
// @exclude     https://www.waze.com/user/editor*
// @exclude     https://beta.waze.com/user/editor*
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

    window.SDK_INITIALIZED.then(initScript);
    function initScript() {
        if (!window.getWmeSdk) {
            throw new Error("SDK not available");
        }
        const wmeSDK = window.getWmeSdk({
            scriptId: "example-ts-id",
            scriptName: "Typescript example"
        });
        console.log(`SDK v. ${wmeSDK.getSDKVersion()} on ${wmeSDK.getWMEVersion()}/${wmeSDK.getWMEBackEndVersion()}`);
        function setKeyboardShortcuts() {
            wmeSDK.Shortcuts.createShortcut({
                callback: () => {
                    alert("Shortcut is working!");
                },
                description: "typescript shortcut",
                shortcutId: "test-shortcut-id",
                shortcutKeys: "A+s",
            });
        }
        function addLayer() {
            wmeSDK.Map.addLayer({
                layerName: "TS Layer"
            });
            wmeSDK.LayerSwitcher.addLayerCheckbox({
                name: "TS Layer",
            });
            wmeSDK.Map.addFeatureToLayer({
                layerName: "TS Layer",
                feature: {
                    id: "test-feature",
                    geometry: {
                        coordinates: [wmeSDK.Map.getMapCenter().lon, wmeSDK.Map.getMapCenter().lat],
                        type: "Point"
                    },
                    type: "Feature",
                }
            });
        }
        async function addScriptTab() {
            const { tabLabel, tabPane } = await wmeSDK.Sidebar.registerScriptTab();
            tabLabel.innerText = "Typescript Tab";
            tabPane.innerHTML = "<h1>Typescript Tab</h1>";
        }
        addScriptTab();
        setKeyboardShortcuts();
        addLayer();
    }

})();
