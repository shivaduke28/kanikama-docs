---
title: KanikamaMonitorQuad
---

# KanikamaMonitorQuad

The `KanikamaMonitorQuad` component can be used for a Kanikama Monitor with **Quad** mesh.
Every `KanikamaMonitorController` require this component as its **Main Monitor**.

Note that when KanikamaGI bakes lightmaps, the system makes Renderers of KanikamaMonitors disabled so that they can not contribute GI at all.



## Properties


**Monitor Renderer** 
 - Specify a `MeshRenderer` attached to its GameObject.

**Grid Renderers**
-  A list of `KanikamaGridRenderer`s that gives a partition of the monitor. This field should be set by clicking **Setup** button of the Inspector window of the `KanikamaMonitorController` component. Do not modify directly.


**Advanced**

- Advanced options. Use it only when necessary.
- **Is Grid Renderer Locked**
    -  If enabled, then the system will not update grid renderers when Setup button of `KanikamaMonitorController` is clicked.
- **Override Prefab**
    - If specified, then it is used for this monitor's grid renderers. This is useful when you have multiple monitors and ther shapes/brightness are different.

[![Image from Gyazo](https://i.gyazo.com/e7cb2ca5fe1df9d1c2828b54c425b5c4.png)](https://gyazo.com/e7cb2ca5fe1df9d1c2828b54c425b5c4)
