<div align="center">
  <br/>  
  <img alt="logo" src="/static/images/kanikama_logo.png" width="420"/>
  <br/>
  <br/>
  🦀💡 KanikamaGI 💡🦀
  <br/>
  <br/>
</div>

KanikamaGI is an asset for VRChat to update lightmaps at runtime, powered by [UdonSharp](https://github.com/vrchat-community/UdonSharp).

## Features

- Updates lightmaps every frame accurately.
- Works with regular static lightmaps.
- A Standard shader with Kanikama functionality.
- Supports Directional lightmaps and Directional Specular.
- Supports Bakery.

### Light Sources

- Light components (Baked/Mixed)
- Renderers with emissive materials
- Ambient lights
- Monitors (texture lights with movies)

## Comparison with Realtime GI

### Advantages

- No frame delay in updating GI.
- Less CPU load.

### Disadvantages

- The position and angle of light sources cannot be changed.
- Can not update light probes.
- Need to bake lightmaps per light sources, that increases Scene capacity and VRAM load.

## When should I use it?

When there are a lot of flickering of light sources, such as screen showing VJ’s image in club worlds, RealtimeGI will not be able to update GI without delay. Also, if your world may have a lot of players and you can’t handle the CPU load of RealtimeGI, then KanikamaGI may be an option.

Notice that it will increase the number of textures and the cost of drawing the static objects that GI will reflect.