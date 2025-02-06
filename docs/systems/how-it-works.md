---
sidebar_position: 1
---

# How It Works

Diffuse lighting in Kanikama is inspired by GhostIllumination by phi16[1] and based on the technique of Precomputed Radiance Transfer [2].

Consider a scene where there are green and red point lights in a room. The colors of the lights are `(1,0,0)` and `(0,1,0)`, respectively, and they have the intensity `2`.

<img src="https://i.gyazo.com/4d0994d039436ef5aa23ee0a69c4ff42.png" />



The following image is the baked lightmap.
<img src="https://i.gyazo.com/7816cdb7f83a4ad57e6d129962833b46.png" />

Set the color of the two lights to white `(1,1,1)` and the brightness to `1` and bake the lightmap with only one lit for each.

<img src='https://i.gyazo.com/066db24a7ebf787faee1fcbe04c44199.png' width="420" /> <img src='https://i.gyazo.com/18b86710e1e00037ed573176f530dd15.png' width="420" />
 
Two lightmaps are generated from the two lights.

<img src='https://i.gyazo.com/402c899d112cc030c859124f5c096a7a.png'/>

The lightmap with red and green lights turned on can be reproduced by multiplying the two lightmaps by their respective colors and brightness and then summing them up (that is, taking a linear sum).

<div>
<img src='https://user-images.githubusercontent.com/45098240/131206517-5e9d3427-ff70-4ea8-8e7c-b27abe335a4f.png' />
</div>

Note that only the lightmap values are computationally expensive in the right-hand side. If you bake multiple lightmaps in advance, we can dynamically update the lightmap of the scene at runtime by simply changing the colors of the coefficients and summing them up.


### References

* [1] phi16,  [無　解説 - Imaginantia](https://phi16.hatenablog.com/entry/2021/05/29/204643)
* [2] Peter-Pike Sloan, Jan Kautz, and John Snyder. Precomputed Radiance Transfer for RealTime Rendering in Dynamic, Low-Frequency Lighting Environments. ACM Transactions on Graphics, v 21, n 3, 2002, p 527-536.

