---
title: KanikamaCamera
---

# KanikamaCamera

`KanikamaCamera`は`Camera`のレンダリング結果から色を取得するコンポーネントです。モニターでの使用が想定されていますが、他の用途でも使用することができます。

このコンポーネントは`Camera`コンポーネントを要求します。`Camera`のレンダリングが終わった直後の`OnPostRender`のタイミングで、`Camera`のレンダリング結果を`Texture2D.ReadPixels`と`Texture2D.GetPixels`を用いて取得します。

## Properties

**Reading Texture**
- `Texture2D`
- `ReadPixels`と`GetPixels`を使用するためのテクスチャです。Prefabを使用する場合は最初から設定されています。新規に作成したい場合はKanikamaUtilityウィンドウから生成することができます。
- 正しく色を得るためにフォーマットに気を付ける必要があります。解像度は256x256、リニア、16bitでRead/Wrightが許可されている必要があります。

**Partition Type**
- `int`
- モニターの分割数です。4x4の場合は`44`を指定します。`KanikamaMonitorController`から自動で設定できます。

**Camera**
- `Camera`
- モニターをキャプチャするカメラです。同じGameObjectにアタッチされている必要があります。CameraのdepthはMain CameraとProviderのCameraの両方よりも小さくなるようにしてください。

**Aspect Ratio**
- `float`
- メインモニターのアスペクト比です。`KanikamaMonitorController`から自動で指定できます。

**Intensity**
- `public float`
- 明るさの制御に使用できます。インスペクターや外部のUdonスクリプトから変更することができます。

## Setup botton

このコンポーネントを直接操作することはほとんどありません。`KanikamaMonitorController`のインスペクターの<i><b>Setup Lights and Camera</b></i>ボタンをクリックすることで必要なパラメータは全て自動で設定されます。便利！


## Note

- `Texture2D.ReadPixels`と`Texture2D.GetPixels`は重い処理なので、FPSを固定で下げることに注意してください。
- `KanikamaCamera`コンポーネント自体は`Camera`のレンダリング結果から色を取得するだけなので、モニターとは独立しています。例えば窓などに対して使用すると面白いかもしれません。
- `KanikamaCamera.GetColors`メソッドで取得した色の配列の**参照**を取得することができます。一度呼べば配列を使い続けることができます。
- `KanikamaRealtimeCameraLight`コンポーネントと組み合わせるとアバターライトに使用できます。
