# ⚡ Kişisel Portfolyo Web Sitesi (Kaynak Kodları)

Bu repo, portfolyo web uygulamasının kaynak kodlarını, bileşen mimarisini ve derleme yapılandırmasını içerir.

---

## 🏗️ Mimari ve Teknik Özellikler

* **Modüler Bileşen Yapısı:** Tekrar kullanılabilir React bileşenleri ile organize edilmiş arayüz düzeni.
* **Modern CSS Grid & Flexbox:** Harici UI kütüphanesi bağımlılığı olmadan, hafif ve esnek 3 sütunlu masaüstü / tek sütunlu mobil uyumlu grid mimarisi.
* **İstemci Taraflı Filtreleme:** Projeler sekmesinde kategoriye göre (Web, Siber Güvenlik, Makine Öğrenimi) anlık durum (`state`) filtreleme mekanizması.
* **Performans Odaklı Derleme:** Hızlı Hot Module Replacement (HMR) ve optimize edilmiş statik çıktı yönetimi için **Vite** altyapısı.
* **Kod Standartları:** Tutarlı ve temiz kod standartları için yapılandırılmış **ESLint** kuralları.

---

## 📁 Proje Dizin Yapısı

```text
├── public/              # Statik varlıklar (SVG ikonları, yönlendirme dosyaları)
├── src/
│   ├── assets/          # Proje içi medya dosyaları
│   ├── App.css          # Tema, grid sistemleri ve özel stil tanımları
│   ├── App.jsx          # Ana layout ve durum yönetimi
│   └── main.jsx         # React DOM kök bağlantısı
├── .gitignore           # Git takip dışı dosyalar listesi
├── eslint.config.js     # Linter kuralları ve yapılandırması
├── index.html           # Uygulama giriş HTML şablonu
├── package.json         # Bağımlılıklar ve çalıştırma scriptleri
└── vite.config.js       # Vite derleyici ayarları
