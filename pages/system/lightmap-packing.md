---
title: Lightmap Packing
---

# What is Lightmap Packing

When **Lightmap Packing** is enabled, Kanikama packs 3 lightmaps into a single lightmap by taking luminance.

```hlsl
half4 frag(v2f i) : SV_Target
{
    float2 uv = i.uv;
    half4 col;
    col.r = Luminance(tex2D(_Tex0, uv).rgb);
    col.g = Luminance(tex2D(_Tex1, uv).rgb);
    col.b = Luminance(tex2D(_Tex2, uv).rgb);
    col.a = Luminance(tex2D(_Tex3, uv).rgb);
    return col;
}
```

Currently, BC6H is only supported and BC6H has no alpha channel.

https://github.com/shivaduke28/kanikama/blob/78cdcb80c29917ec62af43e4a12e81388afad434/Kanikama/Assets/Kanikama/Shaders/Kanikama_Pack.shader#L47-L57



This feature is useful for reducing lightmap capacity and shading load, but it should be noted that Hue and Saturation information is lost due to grayscaling.

#### Not packed
[![Image from Gyazo](https://i.gyazo.com/2f71bca9d2eae45a82e3abfd9b1f4084.png)](https://gyazo.com/2f71bca9d2eae45a82e3abfd9b1f4084)

#### Packed
[![Image from Gyazo](https://i.gyazo.com/e7a91d12944c50e2846a4fc5d281564e.png)](https://gyazo.com/e7a91d12944c50e2846a4fc5d281564e)



# How to use it

Check **Pack Textures** in Baking Window

[![Image from Gyazo](https://i.gyazo.com/fc95d2f624820b5b4c038ddb8bc2bd43.png)](https://gyazo.com/fc95d2f624820b5b4c038ddb8bc2bd43)

and check **RGB Packing** in the inspector of material with `Kanikama/Standard` shader or `Kanikama/StandardSurface` shader.

[![Image from Gyazo](https://i.gyazo.com/762d3faa5eed9bf061b13161950dfb1e.png)](https://gyazo.com/762d3faa5eed9bf061b13161950dfb1e)