---
sidebar_position: 4
---

# Kanikama Monitor Group

Inherits from `KanikamaLightSourceGroup`.
Use `Packages/Kanikama/Prefabs/KanikamaMonitorGroup.prefab`.

A **Kanikama Monitor Group** component is a group monitors with the same screen image.

|Property|Function|
|-|-|
|Camera Target Quad|A Quad screen mesh that renders the screen image.|
|Partition Type|How to split the monitor.|
|Reading Texture|Set 256 x 256 readable RGBA 16 SFloat Texture2D asset with mipmap.|
|Camera Near|The near clip of the capture camera.|
|Camera Far|The far clip of the capture camera.|
|Camera Distance|The distance from the capture camera to the target quad.|
|Camera|A Camera capturing a monitor to get colors. Its depth should be smaller than the main camera and the camera used by Kanikama Manager.|
|Aspect Ratio|The aspect ration of the target quad. Automatically set by clicking the Setup button.|
|Intensity|The intensity of the monitor.|
|Colors|The current colors calculated from the monitor. This field is shown in the Inspector for debugging.|

A **Kanikama Monitor Group Holder** component is automatically attached by a Kanikama Monitor Group component, to hold references to monitors.

|Property|Function|
|-|-|
|Monitors|An array of Kanikama Monitors with the same screen image.|
|Grid Cell Prefab|Use `Kanikama/Prefabs/UnityGridCell.prefab`.|
|Monitor Grid Fibers|An array of grid fibers. Automatically set by clicking the Setup button.|

Each monitor is devided into grid cells based on the partition type.
Because grid cells with the same index may have the screen image,
Kanikama gather them into a single light source, called a grid fiber.
When there are 3 monitors and the partition type is 2x2, there are 12 grid cells and 4 grid fibers.

[![Grid Fibers](https://i.gyazo.com/d6514d677190f01d5f36803a1cc2352a.png)](https://gyazo.com/d6514d677190f01d5f36803a1cc2352a)