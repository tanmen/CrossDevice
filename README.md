# CrossDevice
このアプリケーションはD3用に作成した、以下プラットフォームに1ソースコードで対応するサンプルコードです。

## Setup
### Android
AndroidSDKをPCにセットアップします。(Qiita等を参照)

プロジェクファイルの以下のpathにファイルを作成
```
android/local.properties
```

内容は以下の通り
```
sdk.dir = /{android-sdkのpath}
```

プロジェクトのrootパスにて、以下コマンドを実行
```
yarn install
react-native start
react-native run-android
```

### iOS
プロジェクトのrootパスにて、以下コマンドを実行
```
yarn install
react-native start
react-native run-ios
```

### Web
プロジェクトのrootパスにて、以下コマンドを実行
```
yarn install
yarn start:web
```

### Electron
