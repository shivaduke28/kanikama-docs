---
title: KanikamaColorCollector
---

# KanikamaColorCollector

`KanikamaColorCollector` is a component that collects colors of light sources. It has references to all light sources, checks their colors every frame, and stores them in an array of colors (`Color[]`).

This component is supposed to be attached to the same GameObject as Providers (`KanikamaMapProvider`, `KanikamaMapArrayProvider`). Color collection must be completed before Providers provides colors to Receivers.
To ensure the execution orders, Color collection is written in `OnPreCull` method, is executed before `OnPreRender`, where Providers do their jobs.

## Properties

All of the following properties are set automatically.

- **Lights** (`Light[]`)
- **Renderers** (`Render[]`)
- **Kanikama Cameras** (`KanikamaCamera[]`)

The intensity of GI for the entire Scene can be controlled with **Intensity**. It is set to `public` so that it can be changed by an external script.

## Setup button

There is a very useful button <i><b>Setup by KanikamaSceneDescriptor</b></i> in the inspector. Clicking this button will find the `KanikamaSceneDescriptor` and apply the light source registered there to this component as well.
