# Video yuvası

Bu klasöre bir modül videosu koyulursa (`M5.mp4` gibi), app onu ilgili modülde otomatik oynatır.
Dosya yoksa app sessizce canlı Ders Modu'na (sesli slayt gösterisi) düşer — hata vermez.

## Nasıl bağlanır

`src/data/modules.ts` içinde modüle bir alan ekle:

```ts
{ id: "M5", ..., video: "M5.mp4" }   // public/videos/M5.mp4 aranır
```

veya bir slayta:

```ts
{ title: "...", visuals: [{ kind: "video", src: "M5-intro.mp4" }], narration: "..." }
```

## mp4 nasıl üretilir

Bu makine Windows-on-ARM olduğu için Remotion render'ı burada çalışmaz (win32-arm64 binary yok).
Videolar herhangi bir **x64** makinede ya da bulutta üretilip buraya kopyalanır:

```bash
cd video
npm install
npm run tts:prerender          # (ana projede npm run server açıkken) sesleri üret
npm run render:module -- M5    # out/M5.mp4  →  public/videos/M5.mp4 olarak kopyala
```
