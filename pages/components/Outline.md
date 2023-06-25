---
titile: Outline
---


# Outline

## BakeTarget and LightSource

In Kanikama, there are **BakeTarget** and **LightSource** components for light sources.

* BakeTarget: for baking lightmaps in Unity Editor.
* LightSource: for getting colors of light sources at runtime.

For each light sources, you will add a BakeTarget and a LightSource components to its GameObject:

|Unity|Bakery|BakeTarget|LightSource|LightSource (U#)|
|-|-|-|-|-|
|Light|-|KanikamaBakeTargetLight|KanikamaRuntimeLight|KanikamaUdonLight|
|Renderer|-|KanikamaBakeTargetLightMesh|KanikamaRuntimeLightMesh|KanikamaUdonLightMesh|
|Light|BakeryPointLight|KanikamaBakeryPointLight|KanikamaRuntimeLight|KanikamaUdonLight|
|Light|BakeryDirectLight|KanikamaBakeryDirectLight|KanikamaRuntimeLight|KanikamaUdonLight|
|Light|BakeryLightMesh|KanikamaBakeryAreaLight|KanikamaRuntimeLight|KanikamaUdonLight|
|Renderer|BakeryLightMesh|KanikamaBakeryLightMesh|KanikamaRuntimeLightMesh|KanikamaUdonLightMesh|
|Light|BakerySkyLight|KanikamaBakerySkyLight|KanikamaRuntimeLight|KanikamaUdonLight|


**BakeTargetGroup** and **LightSourceGroup** are components for light sources that require baking lightmaps multiple times, for example, texture lights (monitors).

|BakeTarget|LightSource|LightSource (U#)|
|-|-|-|
|KanikamaBakeTargetMonitorGroup|KanikamaRuntimeMonitorCamera|KanikamaUdonMonitorCamera|

Note that you can also create your own components inheriting BakeTarget or LightSource.


## BakeTarget Descriptor 

To describe BakeTargets in your Scene, you need to create a **KanikamaBakeTargetDescriptor** object in your Scene and specify BakeTargets and BakeTargetGroups in the Inspector window.

## GI Updater

To update GI at runtime, you also need a **GI Updater** component. There are two built-in GI updater components:

|name |lang| note|prefab path|
|-|-|-|-|
|KanikamaRuntimeGIUpdater|C#| Works with Built-in RP and URP|`Packages/Kanikama/Runtime/Application/Prefabs/KanikamaRuntimeGIUpdater.prefab`|
|KanikamaUdonGIUpdater|U#| Works in VRChat|`Packages/Kanikama Udon/Runtime/Prefabs/KanikamaUdonGIUpdater.prefab`|
