<div align="center">
  <br/>  
  <img alt="logo" src="/static/images/kanikama_logo.png" width="420"/>
  <br/>
  <br/>
  🦀💡 KanikamaGI 💡🦀
  <br/>
  <br/>
</div>

KanikamaGI is a library to update lightmaps at runtime in Unity based on the Precumputed Radiance Transfer[^a].

<a href="https://gyazo.com/31bf432d7bea469368d16db2c3a45d01"><img src="https://i.gyazo.com/31bf432d7bea469368d16db2c3a45d01.gif" alt="Image from Gyazo" width="678"/></a>

### Features

- Built-in RP/URP
- Directional lightmaps and directional specular[^2]
- Specular for texture lights by LTC[^3]
- [Bakery](https://geom.io/bakery/wiki/index.php?title=Manual)
- [UdonSharp](https://udonsharp.docs.vrchat.com/) for VRChat

### Discord Server

- [KanikamaGI Discord](https://discord.gg/ze7dq8nGhW)

[^a]: P. Sloan, J. Kautz, J. Snyder, Precomputed Radiance Transfer for RealTime Rendering in Dynamic, Low-Frequency Lighting Environments. ACM Transactions on Graphics, v 21, n 3, 2002, p 527-536.
[^2]: Shader codes for directional specular in Kanikama is borrowed from Bakery. Thank you Mr F.
[^3]: Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt. Real-Time Polygonal-Light Shading with Linearly Transformed Cosines. ACM Transactions on Graphics (Proceedings of ACM SIGGRAPH 2016) 35(4), 2016. Project page: https://eheitzresearch.wordpress.com/415-2/