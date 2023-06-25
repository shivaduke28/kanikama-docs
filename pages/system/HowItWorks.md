---
title: How it works
---

# How it works

## Diffuse lighting

Diffuse lighting in Kanikama is based on the *Precomputed Radiance Transfer* [^1].

Consider a scene where there are green and red point lights in a room. The colors of the lights are `(1,0,0)` and `(0,1,0)`, respectively, and the brightness of both lights is set to `2`.

<img src="https://i.gyazo.com/4d0994d039436ef5aa23ee0a69c4ff42.png" />


The following image is the baked lightmap.

<img src="https://i.gyazo.com/7816cdb7f83a4ad57e6d129962833b46.png" />

Set the color of the two lights to white `(1,1,1)` and the brightness to `1` and bake the lightmap with only one lit for each.

<div>
<img src='https://i.gyazo.com/066db24a7ebf787faee1fcbe04c44199.png' width="420" /> <img src='https://i.gyazo.com/18b86710e1e00037ed573176f530dd15.png' width="420" />
</div>
 
Two lightmaps are generated from the two lights.

<div>
<img src='https://i.gyazo.com/402c899d112cc030c859124f5c096a7a.png'/>
</div>

The lightmap with red and green lights turned on can be reproduced by multiplying the two lightmaps by their respective colors and brightness and then summing them up (that is, taking a linear sum).

<div>
<img src='https://user-images.githubusercontent.com/45098240/131206517-5e9d3427-ff70-4ea8-8e7c-b27abe335a4f.png' />
</div>

Note that only the lightmap values are computationally expensive in the right-hand side. If you bake multiple lightmaps in advance, we can dynamically update the lightmap of the scene at runtime by simply changing the colors of the coefficients and summing them up.




