---
sidebar_position: 1
---

# Installation

## 1. Import Unity Packages

To import with UPM, add the following to `Packages/manifest.json`:

```json
// main package
"net.shivaduke28.kanikama": "https://github.com/shivaduke28/kanikama.git?path=Kanikama/Packages/net.shivaduke28.kanikama",
// for Bakery
"net.shivaduke28.kanikama.bakery": "https://github.com/shivaduke28/kanikama.git?path=Kanikama/Packages/net.shivaduke28.kanikama.bakery",
// for VRChat
"net.shivaduke28.kanikama.udon": "https://github.com/shivaduke28/kanikama.git?path=Kanikama/Packages/net.shivaduke28.kanikama.udon"
```

To use in VRChat, Kanikama also requires [VRChat Creator Companion](https://vcc.docs.vrchat.com/) and [UdonSharp](https://udonsharp.docs.vrchat.com/) v1. To install with VCC, see [https://shivaduke28.github.io/vcc-packages/](https://shivaduke28.github.io/vcc-packages/).


## 2. Project Settings

`Edit > Project Settings > Player > Other Settings > Rendering`

- **Color Space**: should be Linear
- **Lightmap Encoding**: should be High Quality


## 3. Lighting Settings

`Window > Rendering > Light Settings`

- **Realtime Global Illumination**: should be unchecked
- **Baked Global Illumination**: should be checked

## 4. Import Sample (optional)

Open the Package Manager window from `Window > Package Manager`, and select the **In Project** category. You can import Samples.

<a href="https://gyazo.com/5c5f1c04a167780abfb61227dbaf96a1"><img src="https://i.gyazo.com/5c5f1c04a167780abfb61227dbaf96a1.jpg" alt="Image from Gyazo" width="749"/></a>