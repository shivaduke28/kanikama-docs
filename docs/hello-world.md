---
sidebar_position: 2
---

# Hello World

## Create a new Scene

- Create a new Scene and save it.
- Destroy the Directional Light object generated automatically.
- Create a Plane by `Create > 3D Object > Plane` and make it **Static**.
- Create a new Material with **Kanikama/KanikamaStandardSurface** shader.
- Change its **Kanikama Mode** to **Array**.
- Set the Material to the Renderer of the Plane.

<a href="https://gyazo.com/298a64aa4385a2bd7c9f50d8d05e1ea6"><img src="https://i.gyazo.com/298a64aa4385a2bd7c9f50d8d05e1ea6.png" alt="Image from Gyazo" width="602"/></a>


## Setup Lights

- Create a Point Light by `Light > Point Light` and change it to **Baked** mode.
- Add **Kanikama Unity Light** component to the Light object.
- Repeat the above to create another Light (the position should be different from the first one).

<img src="https://i.gyazo.com/cbe5c31c9c60c40b4e361fec095f7080.png" width="400" />

## Kanikama Manager

- Drag the prefab in the following path to your Scene and unpack it completely.
  - U#: `Packages/Kanikama/Prefabs/KanikamaManager.prefab`
- Add two Kanikam Unity Lights created above to the **Light Sources** field in the Inspector window.

<a href="https://gyazo.com/034d3356a3920be157d03a82dfe6b9f5"><img src="https://i.gyazo.com/034d3356a3920be157d03a82dfe6b9f5.png" alt="Image from Gyazo" width="629"/></a>

## Kanikama Window

- Open **Kanikama Window** from `Window > Kanikama`.
- Click the **Create Settings Asset** button in the Unity category. A UnityBakingSetting.asset will be created.

<a href="https://gyazo.com/7b60833af19dfea799a495b2e4847920"><img src="https://i.gyazo.com/7b60833af19dfea799a495b2e4847920.png" alt="Image from Gyazo" width="595"/></a>

## Bake Static

- Click **Bake static** button in the Kanikama window.
- Kanikama will bake lightmaps after turning off Point Lights.
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

## Set Assets to Kanikama Manager

- Click the **Setup Assets to KanikamaManager from UnityBakingSetting asset** button.
- Kanikama sets the Texture2DArray to the **Lightmap Arrays** field (and **Directional Lightmap Arrays** field if the asset exists) and **Slice Count** field becomes `2`.

<a href="https://gyazo.com/9d0280faca200bd287e1c1d82ccfc3df"><img src="https://i.gyazo.com/9d0280faca200bd287e1c1d82ccfc3df.png" alt="Image from Gyazo" width="625"/></a>

## Set Receivers to Kanikama Manager

- Click the **Set KanikamaGI Receivers to KanikamaManager** in the Kanikama window.
- Kanikama sets the Plane to the **Receivers** field of the GI updater.

<a href="https://gyazo.com/053d3ea78bb95d936561eb68e033e5b2"><img src="https://i.gyazo.com/053d3ea78bb95d936561eb68e033e5b2.png" alt="Image from Gyazo" width="646"/></a>

## Hello World

- Play Unity Editor.
- Change the colors of two Lights from the Inspector window.
- Note the GI updater works only when the Game window is active.

<a href="https://gyazo.com/e7bc945df7e3ffb7121d2c229a7d059a"><img src="https://i.gyazo.com/e7bc945df7e3ffb7121d2c229a7d059a.png" alt="Image from Gyazo" width="609"/></a>