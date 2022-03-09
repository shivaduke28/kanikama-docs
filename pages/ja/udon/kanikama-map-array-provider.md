---
title: KanikamaMapArrayProvider
---

# KanikamaMapArrayProvider

`KanikamaMapArrayProvider`はライトマップと光源の色をレシーバー（GIの影響を受けるRendererのこと）に配るコンポーネントです。必ずシーンに１つだけ配置する必要があります。

以下のパスにあるPrefabをSceneに1つだけ配置することで使用できます。

```
Assets/Kanikama/Prefabs/KanikamaMapArrayProvider.prefab
```

Sceneの開始時にSceneのレシーバーにTexture2DArrayを配ります。
そして、毎フレーム`KanikamaColorCollector`のもつ色の配列`Color[]`を`MaterialPropertyBlock`を介してRendererに配ります。




## Camera
このコンポーネントはGameObjectに`Camera`コンポーネントを要求します。`Camera`コンポーネントが必要な理由は、毎フレーム行われる色の配列`Color[]`を配る処理が、"モニターのキャプチャ"と"シーンのレンダリング"の間に行われる必要があるからです。このため、更新処理は`OnPreRender`メソッドで行われます。

描画順は`depth`で制御されており、Prefabでは以下のように設定されています。

- モニターキャプチャカメラ：-2
- Providerのカメラ：-1
- Main Camera: 0


Provider用のカメラのレンダリング結果は一切使用されないため、Prefabでは1pxのRenderTextureをセットし、描画範囲をできるだけ小さく設定することで、CPUオーバーヘッドを減らしています。



## Properties

**Lightmap Arrays**
- `Texture[]`
- KanikamaがBake時に生成したライトマップのTexture2DArrayを指定します。
- 順番は`lightmap index`と同じである必要があります。
- 通常ではSetup by KanikamaSettings assetボタンで自動でセットされます。

**Directional Lightmap Arrays**

- `Texture[]`
- KanikamaがBake時に生成したDirectionalライトマップのTexture2DArrayを全てセットします。
- 順番は`lightmap index`と同じである必要があります。
- 通常ではSetup by KanikamaSettings assetボタンで自動でセットされます。


**Slice Count**

- `int`
- 各Texture2DArrayのスライスの枚数を指定します。
- 通常ではSetup by KanikamaSettings assetボタンで自動でセットされます。

**Receivers**

- `Renderer[]`
- GIの影響を受ける`Renderer`を全て指定します。手作業で指定してください。

## Setup

Inspectorのとても便利な**Setup by KanikamaSettings asset**ボタンをクリックすると、SceneのKanikamaSettings.assetを探し、最後にベイクされたアセットを取得して、自動でセットします。とても便利。Receiversは自分で設定してください。
