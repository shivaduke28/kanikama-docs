---
title: Directional mode
---

# Directional Mode

Kanikama supports Unity's [Directional mode](https://docs.unity3d.com/2019.4/Documentation/Manual/LightmappingDirectional.html).

## How to use

First, set the scene's Directional mode to On.

Open the Lighting Settings window from `Window > Rendering > Lighting Settings` and speficy `Lightmapping Settings > Directional Mode` to **Directional**.

[![Image from Gyazo](https://i.gyazo.com/19c29fa6689bc6d507a958ec702e11ad.png)](https://gyazo.com/19c29fa6689bc6d507a958ec702e11ad)

Then, open the Kanikama window and bake static, bake Kanikama, and create assets.
Kanikama creates Texture2DArrays of directional lightmaps.

<a href="https://gyazo.com/e3945c05efab1ce3f5ba2a91454ece5e"><img src="https://i.gyazo.com/e3945c05efab1ce3f5ba2a91454ece5e.png" alt="Image from Gyazo" width="325"/></a>

You can set them to GI Updater components from the Kanikama window by clicking the **Setup by UnityBakingSetting asset** button.

<a href="https://gyazo.com/0974d650b00b072ec3d3f31a4a2358d3"><img src="https://i.gyazo.com/0974d650b00b072ec3d3f31a4a2358d3.png" alt="Image from Gyazo" width="600"/></a>

In the Inspector window of receivers' materials, change Kanikama Mode to ""DIRECTIONAL"".

<a href="https://gyazo.com/ce0a404cc6dd0f4b76fa8bbd4db157ee"><img src="https://i.gyazo.com/ce0a404cc6dd0f4b76fa8bbd4db157ee.png" alt="Image from Gyazo" width="584"/></a>

## Directional Specular

Check **Kanikama Directional Specular** in the material settings. Note that directional specular mode may not work well with texture lights.
