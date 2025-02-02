---
sidebar_position: 4
---

# Kanikama Unity Light Mesh

Inherits from [Kanikama Light Source](kanikama-light-source).

Attach a **Kanikama Unity Light Mesh** component to a Renderer with emissive material updated at runtime.

|Property|Function|
|-|-|
|Renderer|Specify the renderer with emissive material, attached to the same Game Object.|
|Material Index|The index of the emissive material in the material slots.|
|Property Name|The property name of the emission color.|
|Use Standard Shader|If checked, Kanikama will create a material with Standard shader and use it when baking lightmaps. Enable this when colors are updated by Animator.|
|Use Material Property Block|If check, Kanikama reads colors via a Material Property Block. If not checked, Kanikama reads color via `Renderer.materials`.|
