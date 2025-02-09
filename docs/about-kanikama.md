---
sidebar_position: 0
---

# About Kanikama

<a href="https://gyazo.com/31bf432d7bea469368d16db2c3a45d01"><img src="https://i.gyazo.com/31bf432d7bea469368d16db2c3a45d01.gif" alt="Image from Gyazo" width="678"/></a>

Kanikama is a library to update lightmaps at runtime for the Unity Built-in Rendering Pipeline,
that works in VRChat.

### Requirements

- Unity 2021
- Built-in Renering Pipeline

### Features

- Update lightmap colors at runtime by the Precomputed Radiance Transfer[^1]
- Suported light sources: Light, Emissive Renderer, Montor (Quad texture light)
- Works with directional lightmaps
- Directional specular[^2]
- Specular for texture lights by LTC[^3]
- [Bakery](https://geom.io/bakery/wiki/index.php?title=Manual)
- [UdonSharp](https://udonsharp.docs.vrchat.com/) for VRChat

[^1]: Peter-Pike Sloan, Jan Kautz, and John Snyder. Precomputed Radiance Transfer for RealTime Rendering in Dynamic, Low-Frequency Lighting Environments. ACM Transactions on Graphics, v 21, n 3, 2002, p 527-536.
[^2]: Shader codes for directional specular in Kanikama is borrowed from Bakery. Thank you Mr F.
[^3]: Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt. Real-Time Po