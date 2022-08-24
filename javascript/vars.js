var jobs = ['Barmen', 'Psikoloji Doktoru', 'Taklitçi ', 'Model ', 'Sihirbaz ', 'Yazar', 'Eskort ', 'Kraliçe ', 'Cellat', 'Dominatrix', 'Çavuş Eğitmeni', 'Sunucu', 'Papaz Yardımcısı', 'Okul Hemşiresi', 'Motivasyon Konuşmacısı', 'Profesyonel Atlet', 'Stajyer', 'Çılgın Bilim Adamı', 'Taksi Sürücüsü', 'Özel Dedektif', 'Korku Filmi Aktörü', 'Futbolcu', 'Tesisatçı', 'Şarkıcı', 'Pandomim Sanatçısı', 'Süper Kahraman', 'Yarışmacı', 'Ponpon Kız', 'Haber Spikeri', 'Terapist', 'Uşak', 'Dadı', 'Parti Üyesi', 'Arkeolog', 'Proktolog', 'Spor Antrenörü', 'Yetişkin Film Aktörü', 'Kelle Avcısı', 'Masöz', 'Taraftar', 'Çocuk Aktör', 'Yemek Yeme Yarışmacısı', '2. El Araba Satıcısı', 'Aksiyon Rol Oyuncusu', 'Dublör', 'Alkol Reyonu Satıcısı ', 'Politikacı', 'Muhtar', 'Kişisel Antrenör', 'Korsan', 'Rahip', 'Avukat', 'Diktatör', 'Uçuş Görevlisi', 'Süt Anne', 'Gangster', 'Dünya Rekortmeni', 'Jinekolog', 'Dondurmacı', 'Ev Hanımı', 'Açık Arttırmacı', 'Ulaşım Gişe Görevlisi', 'Kasap', 'Barista', 'Üniversite Mezunu', 'Astronot', 'Kötü Adam', 'Silah Müfettişi', 'Gizli Ajan'];
var jobs_used = [];
var quals = ['Uzay Gemisi', 'Gevşek', 'Liyakat Rozeti', 'File Çorap', 'İtiraf', 'Kara Delik', 'Tatlı', 'Çok Yönlü', 'Bipolar', 'Protez Bacak', 'Ejderha', 'Ölmesine 6 Ay Kalmış', 'Kaslı', 'Kutu Şarap', 'Kelepçe', 'Nakavt', 'İğrenç', 'Sosyal Medya', 'Kemer', 'Sokak Çocuğu', 'Pislik Yuvası', 'Korku', 'Uzman', 'Engelli', 'Duygusal Değil', 'Öğrenci Kredisi', 'Kutu', '', 'Yalnız', 'Homurtu', 'Kırbaç', 'Açık', 'Olumlu Haraket', 'Elektirikli Testere', 'Hüzünlü Hikaye', 'Gizli Kimlik Sahibi', 'Koyu İnsan', 'Yüzük', 'Şüpheli', 'Pelerin', 'Boş İnsan', 'Çikolata', 'Felç', 'Profesör Gözlüğü', 'İkili Kişilik Sahibi', 'Muşta', 'Rutubet', 'Gece', 'Filtre', 'Çocuk Odası', 'Kredi Sahibi', 'Kaya', 'Yengeç', 'Cesur', 'The Perfect Alibi', 'Fahişe', 'Fetişist', 'Bumerang', 'Tenefüs', 'Sinsi', 'Diplomatik Dokunulmazlık', 'Avustralya Aksanı', 'İnanç', 'Espri Anlayışı Olmayan', 'Alman Aksanı', 'Özsaygı', 'Çimen', 'Minibüs', 'Film', 'İngiliz Aksanı', 'Takma Diş', 'Kadınsı', 'Ses Yalıtımlı Oda', 'Ruh', 'Akıcı', 'Hayatta Kalma Becerisi', 'Katana', '50 Kuruş', '1 Dolar', 'Tatsız', 'Baston', 'Piercing', 'Sürücü', 'Şeytan Gülüşü', 'Babasal Sorunlar', 'Tembel', 'Erektil Disfonksiyon', 'Kırıcı', 'Şehvet', 'Pala bıyık', 'Liberal', 'Kemer', 'Doyumsuz', 'Altın Haç', 'Süslü Şapka', 'Kronik Rahatsızlık', 'Kendinden Nefret', 'Tarikat', 'Kızıl Deniz', 'Küfür', 'Dengesiz', 'Milyon Dolarlık Gülümseme', 'Kemik', 'Nunchucks', 'Gıcırdatma', 'Konuşma Engeli', 'Kirli', 'Zihin Okuyucusu', 'Oidipus Kompleksi', 'Makas', 'Pompalı', 'Sevimli', 'Yamyam', 'Lisans', "Yalan Söylemeyen", 'Tarak', 'Ürün', 'Saha Deneyimi', 'Kanatlar', 'Kamera', 'Tıp', 'Ölü İnsan Gören', 'Viral', 'Siyah Kemer', 'Takvim Modeli', 'Yumuşak Ses', 'İkram', 'Gece Görüşü', 'Utanç', 'Streoid', 'Genetik Mühendisi', 'Yumuşak El', 'Elverişli', 'Kanca', 'Depresif', 'Rus Aksanı', 'Sprey', 'Bombaları Etkisiz Hale Getirebilir', 'Mağara', "Hissetmez", 'Vida', 'Neşter', 'Kaybedecek Bir Şeyi Yok', 'Mutlu Son', 'Üstsüz', 'Gurur', 'İmrenme', 'Balık', 'Tip', 'Dışkı', 'Poker Face Suratlı', 'Ruhsuz', 'Ortak', 'Puma', 'Uyuşturucu Alışkanlığı', 'Leke', 'Şeker', 'Topuz', 'Kadıköy Sokakları', 'Kısa Sürede Konsantre Olma', 'Tayt', 'Kokulu Mum', 'Nemli', 'Psikolojik Sorunlar', 'Alevli Kılıç', 'Kararsız', 'Deli', 'Elma', 'Din Uzmanı', 'Çuval', 'Ateş Soluma', 'Uzak Arkadaş', 'Takım Elbise', 'Boş Mermi', 'Günlük İş', 'Kristal Top', 'Teselli Ödülü', 'Hindi Aksanı', 'Pasif Agresif', 'Yapay Zeka', 'Yağmur', 'Magnum', 'Korkunç Düşünceler', 'Dövmeler', 'İçki', 'Laf Sokma', 'Kara Kedi', 'Öfke', 'İş Ahlakı', 'Deney', 'Üzgün Çocukluk Hikayesi', 'Kumar Bağımlısı', 'Muhafazakar', 'Spor Arabası', 'Yürüteç', 'Güvenilir Kaynak', "Şeytan Avukatı", '1%', 'Uyuşmuş Yüz', 'Zaman Makinası', 'Kodlama', 'Kukla', 'Sarkık', 'Green Card', 'Dinazor', 'Sosili', 'Jazz', 'Esrar', 'Her Sorunu Çözen', 'Yırtık', "Ön Lisans", 'Kalbi Kırık', 'Sağa Sola Saldıran', 'Pençe', 'Koku Duyusu Olmayan', 'Baraka', 'Kötü Atıcı', 'Yükseklik', 'Müzik', 'Ön Yargı', 'Sihirli Değnek', 'Açgözlülük', 'Masaj Yağı', 'Diş Telleri', 'Sakar', 'Hasta', 'Kaslı Erkek Fotoğrafı', 'Sorumlu', 'Kaykay', 'Tanrı Kompleksi', 'İnce Çerçeve', 'Yağma', 'Görünmez Mürekkep', 'Peltek', 'Birleşik', 'Zincir', 'Hazine', 'Düzensiz', 'Kontrol Edilemeyen', 'Kör', 'Evcil Hayvan', 'Kondom', 'Refleks', 'Traş', 'Bahane', 'Terbiye', 'Dümdüz', 'Panzehir', 'Sakal', 'Işık', 'Saçı Dağınık', 'Doğuştan Gelen Lanet', 'Leke', 'Günlerden Bir Gün...', 'Hokus Pokus', 'Ayrıcalık', 'Kamuflaj', 'X-Ray Görüşü', 'Fındıkkıran', 'Saçmalama', 'Kedi', 'Kılıç', 'Sığ', 'Hak Sahibi', 'Koparmak', 'Trençkot', 'Sürtük', 'Serseri Dövmesi', 'Ter', 'Tekne', 'Peri Tozu', 'Panda', 'Özel Jet', 'Mahalle Baskısı', 'Yetişkin Koleksiyonu', 'Kürk', 'İtalyan Aksanı', 'Korunaklı', 'Yoga Topu', 'Gece Kulübü', 'İç Çamaşırı', 'Tuğla', 'Pembe Dizi', 'Hızlı', 'Budist', 'Çatlak', 'Kek Parçası', 'Paket', 'Karın Kası', 'F1', 'Obur', 'Dokunaç', 'Arı', 'Gıdıklamak', 'Kıyamet', 'Minyon', 'Duygusal Olarak Dengesiz', 'Çevrimiçi Derece', 'Şanssız', 'Şarap', 'Aslan', 'Çetin Ceviz', 'Fransız Aksanı', 'Baskın Kişilikli', 'Ders', 'Gececi', 'Uzay', 'Okuma Yazma Bilmeyen', 'Kırgın', 'Yalancı', 'Oyun Testçisi', 'Organik', 'Dosyalar', 'Kaptan', 'Yanan Çalı', 'Tekerlekli Sandalye', 'Triseksüel', 'Gidon', 'Elbise Askısı', 'Pound', 'Dişleri Platin', 'Garipten Sesler Duyar', 'Zindan'];
var quals_used = [];

var scores = {};
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1;
var qualCounter = 1;

function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length);
	var result = jobs[index];
	jobs_used = jobs_used.concat(jobs.splice(index, 1));
	return result;
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length);
	var result = quals[index];
	quals_used = quals_used.concat(quals.splice(index, 1));
	return result;
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1;
}
function pName(x){
	return Object.keys(scores)[x];
}


function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

