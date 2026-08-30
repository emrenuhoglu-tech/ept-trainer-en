# PLO arşivi

30 Ağustos 2026'da uygulamadan çıkarıldı — odak tamamen NLHE'ye kaydırıldı.
Silinmedi, buraya taşındı; geri almak istenirse kaynak burada.

## İçerik

| dosya | ne |
|---|---|
| `modules.plo.ts.txt` | 3 modül (M9, M14, M45), 66 slayt — `modules.ts` içine olduğu gibi yapıştırılabilir |
| `scenarios.plo.ts.txt` | 61 senaryo — `scenarios.ts` dizisine yapıştırılabilir |
| `book-B8.md` | Kitap Bölüm 8 (8 alt bölüm) |
| `book-B15.md` | Kitap Bölüm 15 (66 alt bölüm) |
| `whyWrong.plo.ts.txt` | PLO quiz açıklamaları |
| `karne-labels.plo.txt` | PLO kavram etiketleri (varsa) |

## Geri alma notları

- Bölüm numaraları **boşluk bırakılarak** çıkarıldı: kitapta 8 ve 15 yok, diğerleri
  yerinde. Geri koyarken numara değiştirmeye gerek yok.
- `curriculum.ts` içindeki 15.1 (stack modu) ve 15.2 (SPR × stack-off) tablo
  ayrıştırıcıları ve `postflopEngine.ts`'teki PLO soru üreteci de kaldırıldı;
  geri alınacaksa git geçmişinden bu commit'in tersi alınmalı.
- `selfcheck.entry.ts`'teki `D6-63 postflop PLO Q üretiliyor` kapısı kaldırıldı.

## M45 hakkında (önemli)

`M45 — PLO-6 Cash` modülü Emre'nin **kendi 5587 elinden** (23–29 Ağustos 2026,
GGPoker PLO-6 \$10/\$20) üretilmişti. İçindeki sayılar ilk ölçüme dayanıyor ve
**sonradan düzeltildi**: "tek çiftle showdown'da %0 önde" ifadesi runout'un
ölçüsüydü; paranın girdiği andaki equity %46,1. Doğrulanmış tablo:

| commit anındaki el | n | equity |
|---|---|---|
| iki çift | 23 | %42,3 |
| tek çift | 28 | %46,1 |
| düz | 21 | %56,0 |
| trips | 21 | %66,7 |

Geri alınırsa bu modülün sayıları **önce düzeltilmeli**.
