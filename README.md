# Crossword Puzzle

Bu oyun, JavaScript ile yazılmış basit bir kelime bulmaca oyunudur. Oyun, bir tablo kullanarak kelime bulmaca ızgarasını oluşturur ve kullanıcı ızgaradaki hücrelere tıklayarak ve tuşlara basarak bulmacayı çözebilir.
# pseudo code

- while True:
  - if kullanıcı hücreye tıkladıysa:
    - eğer hücre seçili değilse:
      - hücreyi seç
      - hücre arka plan rengini değiştir
  - if kullanıcı tuşa bastıysa:
    - eğer tuş yön tuşlarından biriyse:
      - nextMover() fonksiyonunu çağır
    - eğer tuş bir harf ise:
      - imleçteki hücrenin içeriğini basılan harfle değiştir
    - eğer tuş silme tuşu veya geri tuşu ise:
      - imleçteki hücrenin içeriğini temizle
  - if kullanıcı Check düğmesine tıkladıysa:
    - key_check() fonksiyonunu çağır doğru/yanlış kontrolü yap
  - if kullanıcı Clear düğmesine tıkladıysa:
    - color_clear() fonksiyonunu çağır yanlışları temizle
## Oyun Algoritması

Sayfa yüklendiğinde, createFrameBoxes() fonksiyonu çağrılır. Bu fonksiyon, bulmaca ızgarasını oluşturur.
Kullanıcı bir hücreye tıkladığında, thElements.forEach() döngüsü çalıştırılır. Bu döngü, tüm hücrelerin sınıflarını kontrol eder ve tıklanan hücrenin seçilmiş olmadığından emin olur. Ardından, tıklanan hücrenin seçilmiş olması durumunda, hücrenin arka plan rengi değiştirilir.
Kullanıcı bir tuşa bastığında, document.addEventListener() olay işleyicisi çalıştırılır. Bu olay işleyicisi, kullanıcının hangi tuşa bastığını kontrol eder ve aşağıdaki işlemleri gerçekleştirir:
Kullanıcı yön tuşlarından birine bastığında, nextMover() fonksiyonu çağrılır. Bu fonksiyon, imlecin bir sonraki hücreye taşınmasını sağlar.
Kullanıcı büyük harflerden birine bastığında, imleçteki hücrenin içeriği girilen harfle değiştirilir.
Kullanıcı sil tuşuna veya geri tuşuna bastığında, imleçteki hücrenin içeriği temizlenir.
Kullanıcı Check düğmesine bastığında, key_check() fonksiyonu çağrılır. Bu fonksiyon, tüm hücrelerin içeriklerini kontrol eder ve aşağıdaki işlemleri gerçekleştirir:
Bir hücrenin içeriği doğruysa, hücrenin arka plan rengi yeşil yapılır.
Bir hücrenin içeriği yanlışsa, hücrenin arka plan rengi kırmızı yapılır.

# Oyun Algoritmasının Açıklaması

createFrameBoxes()` Fonksiyonu

Bu fonksiyon, bulmaca ızgarasını oluşturur. Fonksiyon, aşağıdaki işlemleri gerçekleştirir:

Izgaranın boyutunu ve şeklini belirlemek için values ve total_rows değişkenlerini kullanır.
Izgaranın her bir hücresi için bir th öğesi oluşturur.
Her bir th öğesinin sınıfını, hücrenin değerine göre ayarlar.
Izgaranın innerHTML değerini, oluşturulan th öğelerinin bir listesini ayarlar.
thElements.forEach()` Döngüsü

Bu döngü, tüm hücrelerin sınıflarını kontrol eder ve tıklanan hücrenin seçilmiş olmadığından emin olur. Ardından, tıklanan hücrenin seçilmiş olması durumunda, hücrenin arka plan rengini değiştirir.

document.addEventListener() Olay İşleyicisi

Bu olay işleyicisi, kullanıcının hangi tuşa bastığını kontrol eder ve aşağıdaki işlemleri gerçekleştirir:

Kullanıcı yön tuşlarından birine bastığında, nextMover() fonksiyonu çağrılır. Bu fonksiyon, imlecin bir sonraki hücreye taşınmasını sağlar.
Kullanıcı büyük harflerden birine bastığında, imleçteki hücrenin içeriği girilen harfle değiştirilir.
Kullanıcı sil tuşuna veya geri tuşuna bastığında, imleçteki hücrenin içeriği temizlenir.
key_check() Fonksiyonu

Bu fonksiyon, tüm hücrelerin içeriklerini kontrol eder ve aşağıdaki işlemleri gerçekleştirir:

Bir hücrenin içeriği doğruysa, hücrenin arka plan rengi yeşil yapılır.
Bir hücrenin içeriği yanlışsa, hücrenin arka plan rengi kırmızı yapılır.


   
