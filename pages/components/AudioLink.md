---
titile: AudioLink
---

# AudioLink

The **KanikamaUdonAudioLinkLightSource** component is a **KanikamaUdonLightSource**
that takes colors from [AudioLink](https://github.com/llealloo/vrc-udon-audio-link) to Kanikama.


Set **Band** and **Delay** as AudioLink' shader
<a href="https://gyazo.com/89f73c6b6b32745038ad788decd2260b"><img src="https://i.gyazo.com/89f73c6b6b32745038ad788decd2260b.png" alt="Image from Gyazo" width="691"/></a>

and specify it to the **LightSources** field of the **KanikamaUdonGIUpdater** component.

<a href="https://gyazo.com/d1a735a56ecc926a06c94b9139c650eb"><img src="https://i.gyazo.com/d1a735a56ecc926a06c94b9139c650eb.png" alt="Image from Gyazo" width="689"/></a>

Note that this component requires that **Audio Data Toggle** is enabled in the **AudioLink** component.

<a href="https://gyazo.com/8fb6d0fbe9693706ec794d4e3f259575"><img src="https://i.gyazo.com/8fb6d0fbe9693706ec794d4e3f259575.png" alt="Image from Gyazo" width="679"/></a>
