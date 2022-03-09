---
title: KanikamaCamera
---

# KanikamaCamera

`KanikamaCamera` is a component that retrieves colors from a `Camera` component's rendering result. It is intended for use with monitors, but can be used for other purposes as well.

This component requires the `Camera` component. Just after the `Camera` has finished rendering, the rendering result of the `Camera` is obtained using `Texture2D.ReadPixels` and `Texture2D.GetPixels` on `OnPostRender`.

The Prefab of `KanikamaMonitorController` contains a `KanikamaCamera` by default.

## Properties

**Reading Texture**.
- `Texture2D`.
- Specify a Texture for calling `ReadPixels` and `GetPixels`.
- KanikamaGI contains a default texture for this field. You can also generate a new one from the KanikamaUtility window.
- You need to be careful with the texture format to get the correct color; Resolution must be 256x256, linear, 16bit float and Read/Wright allowed.

**Partition Type**.
- `int`.
- The number of monitor divisions; for 4x4, specify `44`. It can be set automatically from `KanikamaMonitorController`.

**Camera**.
- `Camera`.
- Camera to capture the monitor.

**Aspect Ratio**.
- `float`.
- Aspect ratio (w/h) of the main monitor. It can be specified automatically from `KanikamaMonitorController`.

**Intensity**
- `public float`.
- Can be used to control brightness.

## Setup botton

There is very little direct manipulation of this component. All necessary parameters are set automatically by clicking <i><b>Setup Lights and Camera</b></i> button in the `KanikamaMonitorController` inspector. 

## Note

- Note that `Texture2D.ReadPixels` and `Texture2D.GetPixels` are slow and can make the FPS lower.
- The `KanikamaCamera` component itself is independent of Kanikama's monitor system, since it only gets the colors from a `Camera`'s rendering result.
- You can get a **reference** to the array of colors by calling `KanikamaCamera.GetColors` method.
- When combined with the `KanikamaRealtimeCameraLight` component, it can be used for avatar lights.