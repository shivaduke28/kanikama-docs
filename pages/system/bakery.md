---
title: Bakery
---

# Bakery

Import [Bakery](https://geom.io/bakery/wiki/) to your Unity project and specify Lightmapper to Bakery in the Kanikama Bake window.

[![Image from Gyazo](https://i.gyazo.com/8d27d3af38b8e246a0c74ac1013af01e.png)](https://gyazo.com/8d27d3af38b8e246a0c74ac1013af01e)



## Bakery components
For each Bakery's Light component, attach the corresponding Kanikama component to it, and specify it in the Inspector window of the KanikamaSceneDescriptor component.


`BakeryPointLight`
- Unity Component: `Light` (Point)
- Kanikama Component: `KanikamaBakeryPointLight`

`BakeryDirectLight`
- Unity Component: `Light` (Directional)
- Kanikama Component: `KanikamaBakeryDirectLight`

`BakerySkyLight`
- Unity Component: `Light` (should be disabled in usual)
- Kanikama Component: `KanikamaBakerySkyLight`

`BakeryLightMesh` (with Area Light)
- Unity Component: `Light` (Area)
- KanikamaComponent

`BakeryLightMesh` (with Renderer)
- Unity Component: `Renderer`
    - Do not use `Bakery/Light` Shader. Shaders must satify the conditions of Emissive Materials for the `KanikamaUnityRenderer` component.
    - Multiple material slots are not supported.
- KanikamaComponent: `KanikamaBakeryLightMesh`
    - For emissive renderers (not LightMesh), use `KanikamaUnityRenderer`.

[![Image from Gyazo](https://i.gyazo.com/11f1e3bba3db4c5c3a885be61f0d645c.png)](https://gyazo.com/11f1e3bba3db4c5c3a885be61f0d645c)


## Monitor

For monitors, use `Assets/Kanikama/Prefabs/Bakery/KanikamaBakeryMonitorController.prefab`.
The setup procedure is the same as when using Unity's lightmapper.

## Directional Mode

KanikamaGI currently supports Bakery's **Dominant Direction** only.
