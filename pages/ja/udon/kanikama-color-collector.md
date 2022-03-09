---
title: KanikamaColorCollector
---

# KanikamaColorCollector

`KanikamaColorCollector`は光源の色を収集するクラスです。全ての光源への参照を持ち、毎フレームそれらの色を確認して、色の配列(`Color[]`)に保持します。

このコンポーネントはProvider（`KanikamaMapProvider`, `KanikamaMapArrayProvider`)と同じGameObjectにアタッチされていることが想定されています。

Providersと同様に`Camera`コンポーネントを要求します。色の収集は`OnPreCull`で毎フレーム1度だけ実行されます。Providerの配布処理が実行される`OnPreRender`は`OnPreCull`よりも後に実行されるため、同一の`Camera`にアタッチすることで実行順を担保します。

## Properties


以下のプロパティは全て自動で設定されます。

- `Lights`
- `Renderers`
- `KanikamaCameras`

Scene全体のGIの明るさは`Intensity`で制御することが可能です。外部のスクリプトから制御することを想定しているため、`public`になっています。

## Setup button

インスペクターに**Setup by KanikamaSceneDescriptor**というとても便利なボタンがあります。クリックすると、`KanikamaSceneDescriptor`を見つけて、そこに登録された光源をこのコンポーネントにも反映させます。