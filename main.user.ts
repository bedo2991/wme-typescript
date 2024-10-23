import { WmeSDK } from "wme-sdk-typings";


// the sdk init function will be called after the SDK is initialized
window.SDK_INITIALIZED.then(initScript);

function initScript() {
    if (!window.getWmeSdk) {
        // This block is required for type checking, but it is guaranteed that the function exists.
        throw new Error("SDK not available");
    }

    // initialize the sdk
    const wmeSDK: WmeSDK = window.getWmeSdk(
        {
            scriptId: "example-ts-id", // TODO: replace with your script id and script name
            scriptName: "Typescript example"
        }
    )

    console.log(`SDK v. ${wmeSDK.getSDKVersion()} on ${wmeSDK.getWMEVersion()}/${wmeSDK.getWMEBackEndVersion()}`)

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
        const layer = wmeSDK.Map.addLayer({
            layerName: "TS Layer"
        });

        wmeSDK.LayerSwitcher.addLayerCheckbox({
            name: "TS Layer",
        })

        // Draw a feature
        wmeSDK.Map.addFeatureToLayer(
            {
                layerName: "TS Layer",
                feature: {
                    id: "test-feature",
                    geometry: {
                        coordinates: [wmeSDK.Map.getMapCenter().lon, wmeSDK.Map.getMapCenter().lat],
                        type: "Point"
                    },
                    type: "Feature",
                }
            }
        )
    }

    function addEventListeners() {

    }

    async function addScriptTab() {
        const { tabLabel, tabPane } = await wmeSDK.Sidebar.registerScriptTab()
        tabLabel.innerText = "Typescript Tab"
        tabPane.innerHTML = "<h1>Typescript Tab</h1>"
    }

    // initialization
    addScriptTab()
    setKeyboardShortcuts()
    addLayer()
    addEventListeners()
}
