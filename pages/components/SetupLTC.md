---
title: Setup LTC
---

# Setup LTC

## LTC Monitor

To use LTC for monitor speuclar, add **LTC Monitor** components to Renderers of monitors. Use the following depending on lightmappers:

* **KanikamaBakeTargetLTCMonitor** for Unity lightmapper
* **KanikamaBakeryLTCMonitor** for Bakery lightmapper

Then specify LTC monitors in the **KanikamaBakeTargetDescriptor** in the Inspector window. Note that currently Kanikama supports p to **three** monitors per Scene.


## Baking

If you specify LTC monitors in a KanikamaBakeTargetDescriptor, Kanikama bake two lightmaps per LTC monitor.

<a href="https://gyazo.com/d074423d9342ad797f4deb9aef968a65"><img src="https://i.gyazo.com/d074423d9342ad797f4deb9aef968a65.png" alt="Image from Gyazo" width="805"/></a>


Clicking the **Bake Kanikama** button, Kanikama bake LTC after baking kanikama bake targets. You can also bake LTC only by clicking the **Bake LTC** button.

<a href="https://gyazo.com/992ec9f80bd483ee52f7dab51c981b33"><img src="https://i.gyazo.com/992ec9f80bd483ee52f7dab51c981b33.png" alt="Image from Gyazo" width="634"/></a>


The left is lightmaps with shadow and the right is without shadow. Both are baked with no indirect lights (bounce = 0).

<a href="https://gyazo.com/ad0dceba07cee9a6f285f46148f7ba4d"><img src="https://i.gyazo.com/ad0dceba07cee9a6f285f46148f7ba4d.png" alt="Image from Gyazo" width="801"/></a>

Then, taking a ratio "shadow/no shadow", we get visibility for diffuse lighting. Note that this does not equal to visibility in specular lighting, but better to have them than not to have it in many cases.

<a href="https://gyazo.com/6978b59ee94c2a71923601b73417e50f"><img src="https://i.gyazo.com/6978b59ee94c2a71923601b73417e50f.png" alt="Image from Gyazo" width="474"/></a>

## Runtime

Set generated visibility maps in GI updaters. This can be done by clicking the **Setup** button in the Runtime tab of the Kanikama window.

<a href="https://gyazo.com/28bf7eed9dfdecbd1782eea5692f5b71"><img src="https://i.gyazo.com/28bf7eed9dfdecbd1782eea5692f5b71.png" alt="Image from Gyazo" width="719"/></a>

Also, you need to enable LTC mode for Kanikama shaders.

<a href="https://gyazo.com/2e4d77e0311eb7d0377d75763c26ffb0"><img src="https://i.gyazo.com/2e4d77e0311eb7d0377d75763c26ffb0.png" alt="Image from Gyazo" width="648"/></a>

