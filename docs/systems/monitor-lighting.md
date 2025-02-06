---
sidebar_position: 2
---

# Monitor Lighting

"Monitor" refers to a rectangular texture light.
In Kanikama, the diffuse lighting of a monitor is implemented by dividing the monitor into rectangular blocks (e.g., 2x2, 3x3) and treating each block as a single light source. This idea is essentially same as [1].


In the next image, the monitor is divided into 3x2 blocks.

[![Image from Gyazo](https://i.gyazo.com/7f4519232a64f27c6190dd413f5540b8.gif)](https://gyazo.com/7f4519232a64f27c6190dd413f5540b8) 


The averaged color of each block is calculated by capturing the monitor image through the Camera component and sampling it at its appropriate mipmap level.

From left to right: monitor image, sampled colors, composited light map

[![Image from Gyazo](https://i.gyazo.com/b05fed27fe246479c1dd9a8ed0c8a2b0.gif)](https://gyazo.com/b05fed27fe246479c1dd9a8ed0c8a2b0)

### References

* [1] phi16,  [無　解説 - Imaginantia](https://phi16.hatenablog.com/entry/2021/05/29/204643)
