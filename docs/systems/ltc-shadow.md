---
sidebar_position: 3
---

# LTC Shadow

In Kanikama, one can use the LTC (Linearly Transformed Cosine)[1] for up to 3 monitors for specular lighting.



### Visibility

The lighting with shadow is given by the following integral:
$$
\int_\Omega \mathrm{BRDF}\times\mathrm{Light}\times\mathrm{Visibility},
$$

that is equal to
$$
\int_\Omega \mathrm{BRDF}\times\mathrm{Light} \times
\frac{\int_\Omega \mathrm{BRDF}\times\mathrm{Light}\times\mathrm{Visibility}}{\int_\Omega \mathrm{BRDF}\times\mathrm{Light}}.
$$

The first multiplication factor is nothing but the lighting without shadowing, and analytically caluculated by LTC.
The second multiplication factor can be seen as a "visibility" factor.
In [2], this visibility factor is computed by a stochastic method, that seems difficult to import to the VRChat setting.

In Kanikama, we omit BRDFs and use instead the following as the visibility factor:

$$
\frac{\int_\Omega \mathrm{Light}\times\mathrm{Visibility}}{\int_\Omega \mathrm{Light}}.
$$

This is the visibility factor in the diffuse setting. We can compute it by taking the ratio of two lightmaps, with shadow and without shadow.

Without shadow:

<a href="https://gyazo.com/d6fb503fae4f0e217f127d569ab656ed"><img src="https://i.gyazo.com/d6fb503fae4f0e217f127d569ab656ed.png" alt="Image from Gyazo" width="600"/></a>

With shadow.
<a href="https://gyazo.com/4883255a78cae8d4ba98c28ed6bf37b4"><img src="https://i.gyazo.com/4883255a78cae8d4ba98c28ed6bf37b4.png" alt="Image from Gyazo" width="1283"/></a>

The ratio of two lightmaps.
<a href="https://gyazo.com/9598ac6157188aa45eba9dd4c7190017"><img src="https://i.gyazo.com/9598ac6157188aa45eba9dd4c7190017.png" alt="Image from Gyazo" width="600"/></a>

Note that this visibility factor is in the diffuse setting and not equal to the visibility factor above in the specular setting. But it is better to have them than not to have it in many situations.

Kanikama supports up to 3 monitors and store their visibility factors into the RGB channels of visibility maps:

<a href="https://gyazo.com/e635f6442ab5cb0a67e5f107429ceff2"><img src="https://i.gyazo.com/e635f6442ab5cb0a67e5f107429ceff2.png" alt="Image from Gyazo" width="600"/></a>



### References

- [1]: Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt. Real-Time Polygonal-Light Shading with Linearly Transformed Cosines. ACM Transactions on Graphics (Proceedings of ACM SIGGRAPH 2016) 35(4), 2016. Project page: https://eheitzresearch.wordpress.com/415-2/
- [2]: Eric Heitz, Stephen Hill and Morgan McGuire. "Combining Analytic Direct Illumination and Stochastic Shadows." In: Proceedings of the ACM SIGGRAPH symposium on interactive 3D graphics and games. 2018. p. 1-11. Project page: https://eheitzresearch.wordpress.com/705-2/