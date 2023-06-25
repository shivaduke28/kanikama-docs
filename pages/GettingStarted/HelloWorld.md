---
title: Hello World
---


# Hello World

## Create a new Scene

- Create a new Scene and save it.
- Destroy the Directional Light object generated automatically.
- Create a Plane by `Create > 3D Object > Plane` and make it **Static**.


## Setup BakeTargets

- Create a Point Light by `Light > Point Light` and change it to **Baked** mode.
- Add **KanikamaBakeTargetLight** component to the Light object.
- Repeat the above to create another Light (the position should be different from the first one).

<img src="https://i.gyazo.com/cbe5c31c9c60c40b4e361fec095f7080.png" width="400" />

## KanikamaBakeTargetDescriptor

- Drag the prefab in the following path to your Scene and unpack it completely.
  - C#: `Packages/Kanikama/Runtime/Application/Prefabs/KanikamaRuntimeGIUpdater.prefab`
  - U#: `Packages/Kanikama Udon/Runtime/Prefabs/KanikamaUdonGIUpdater.prefab`
- Add two KanikamaBakeTargetLights created above to the **Bake Targets** field in the Inspector window.

<a href="https://gyazo.com/320693efa9a223aa6a68f45da367aad9"><img src="https://i.gyazo.com/320693efa9a223aa6a68f45da367aad9.png" alt="Image from Gyazo" width="701"/></a>

## Kanikama Window

- Open **Kanikama Window** from `Window > Kanikama`.
- Click the **Create Settings Asset** button in the Unity category. A UnityBakingSetting.asset will be created.

<a href="https://gyazo.com/e7cb3909428d8e2047f5327aee145959"><img src="https://i.gyazo.com/e7cb3909428d8e2047f5327aee145959.png" alt="Image from Gyazo" width="702"/></a>

## Bake static

- Click **Bake static** button in the Kanikama window.
- Kanikama will bake lightmaps after turning off BakeTargets.
- The baked lightmaps and LightingDataAsset are stored in `[YourSceneName]_kanikama_unity_static/` directory.

<a href="https://gyazo.com/fc832878f248cff6c07e5a4e7e928fc9"><img src="https://i.gyazo.com/fc832878f248cff6c07e5a4e7e928fc9.png" alt="Image from Gyazo" width="384"/></a>

## Bake Kanikama

- Click **Bake Kanikama** button in the Kanikama window.
- Kanikama bakes lightmaps two times.
- The baked lightmaps are stored in `[YourSceneName]_kanikama_unity/` directory.

<a href="https://gyazo.com/8d7521dc786cfb6e2fff3bde34e7ac68"><img src="https://i.gyazo.com/8d7521dc786cfb6e2fff3bde34e7ac68.png" alt="Image from Gyazo" width="348"/></a>


## Create Assets

- Click **Create Assets** button in the Kanikama window.
- Kanikama creates Texture2DArray assets with slice count 2.

<a href="https://gyazo.com/e3945c05efab1ce3f5ba2a91454ece5e"><img src="https://i.gyazo.com/e3945c05efab1ce3f5ba2a91454ece5e.png" alt="Image from Gyazo" width="325"/></a>

## Setup Runtime components

- Add the **KanikamaRuntimeLight** (**KanikamaUdonLight** for U#) components to Point Lights and add them to the **LightSource** field of the GI Updater in the Inspector window.
- Open the **Runtime** tab in the Kanikama window and click the **Load Active Scene** button.
- Click the **Setup by UnityBakingSettingAsset** button.
- Kanikama sets the Texture2DArrays to the **LightmapArrays** field of the GI updater.

<a href="https://gyazo.com/5cffe00813c390df93c646a9531e709d"><img src="https://i.gyazo.com/5cffe00813c390df93c646a9531e709d.png" alt="Image from Gyazo" width="598"/></a>

## Setup Receivers

- Create a new Material and change its shader to **Kanikama/KanikamaStandardSurface**.
- Change its **Kanikama Mode** to **Array**.
- Set this Material to the Renderer of the Plane.

<a href="https://gyazo.com/298a64aa4385a2bd7c9f50d8d05e1ea6"><img src="https://i.gyazo.com/298a64aa4385a2bd7c9f50d8d05e1ea6.png" alt="Image from Gyazo" width="602"/></a>

- Open the **Runtime** tab in the Kanikama window and click the **Load Active Scene** button.
- Click the **Set KanikamaGI Receivers** button.
- Kanikama sets the Plane to the **Receivers** field of the GI updater.


<a href="https://gyazo.com/31c89ef93ff2b82c78d44d0578159825"><img src="https://i.gyazo.com/31c89ef93ff2b82c78d44d0578159825.png" alt="Image from Gyazo" width="599"/></a>

<br />
<br />

<a href="https://gyazo.com/0e3eddfb2026b081deeeecaadcdd9f95"><img src="https://i.gyazo.com/0e3eddfb2026b081deeeecaadcdd9f95.png" alt="Image from Gyazo" width="602"/></a>





## Hello World

- Play Unity Editor.
- Change the colors of two Lights from the Inspector window.
- Note the GI updater works only when the Game window is active.

<a href="https://gyazo.com/e7bc945df7e3ffb7121d2c229a7d059a"><img src="https://i.gyazo.com/e7bc945df7e3ffb7121d2c229a7d059a.png" alt="Image from Gyazo" width="609"/></a>