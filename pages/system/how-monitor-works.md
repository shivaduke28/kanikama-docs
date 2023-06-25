---
title: How monitor works
---

# How it works

## Grid

KanikamaGI does not reflect the monitor image directly to GI as Enlighten RealtimeGI does.
Instead, KanikamaGI approximates RealtimeGI by dividing the monitor into several blocks (e.g., 2x2 or 3x3) and treating each block as a single light source.

In the next image, the monitor is divided into 3x2 blocks.

[![Image from Gyazo](https://i.gyazo.com/7f4519232a64f27c6190dd413f5540b8.gif)](https://gyazo.com/7f4519232a64f27c6190dd413f5540b8) 


The averaged color of each block is calculated by capturing the monitor image through the Camera component and sampling it at its appropriate mipmap level.

From left to right: monitor image, sampled colors, composited light map

[![Image from Gyazo](https://i.gyazo.com/b05fed27fe246479c1dd9a8ed0c8a2b0.gif)](https://gyazo.com/b05fed27fe246479c1dd9a8ed0c8a2b0)
