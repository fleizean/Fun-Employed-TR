function formChanging(){
	var pslctr = $("#numOfPlayers").val();
	var timeoutCount = 50;
	for(i=2;i<pslctr;i++){
		var nSelector = "input[name='pName" + i + "']";
		if(!$(nSelector).is(":visible")){
			setTimeout(quickAnim, timeoutCount, nSelector, 'zoomIn');
			timeoutCount += 50;
		}
	}
	timeoutCount=50;
	for(i=9;i>pslctr-1;i--){
		var nSelector = "input[name='pName" + i + "']";
		if($(nSelector).is(":visible")){
			setTimeout(quickAnimHide, timeoutCount, nSelector, 'zoomOut');
			timeoutCount +=50;
		}
	}
}

function startGame(){ // Oyunu kuran func.
	quickAnimHide("#MainPage", "fadeOutLeft");
	numPlayers = $("#numOfPlayers").val(); // Oyuncu sayısını kaydeder
	scores = {}; // Skorları sıfırlar
	currentBoss = 0;
	for(i=0;i<numPlayers;i++){ // Oyuncu isimlerini skorboarda yaz
		playername = $("input[name='pName" + i + "']").val();
		if (playername == ""){			
			scores["Player " + (i + 1)] = 0;
		}else{			
			scores[playername] = 0;
		}
	}
	roundStart();
}

function howTo(){
	quickAnimHide("#MainPage", "fadeOutLeft");
	setTimeout(quickAnim, 1000, "#HowTo", "fadeInLeft");
}
function goBack(){
	quickAnimHide("#HowTo", "fadeOutLeft");
	setTimeout(quickAnim, 1000, "#MainPage", "fadeInLeft");
}

function roundStart(){ //Sets up the html
	roundStartAnim();
	var bossName = pName(currentBoss);
	$("#GamePage h1").text("İşveren: " + bossName);
	$("#GamePage h2:first").html("Aranıyor: <strong>" + getJob() + "</strong>");

	var table = $("#pastQuals table");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		table.append("<tr><td>" + pName(i) + ": " + "</td></tr>");
	}

	if(currentBoss == 0){
		$("#currentQuals h3").text("İş Adayı: " + pName(1));
	}else{
		$("#currentQuals h3").text("İş Adayı: " + pName(0));
	}

	$("#currentQuals h2").text(getQual());
	qualCounter = 1;
	$("#currentQuals h4").text("");
}

function nextQual(){ // Sıradaki nitelikleri belirlediğimiz yer
	if(qualCounter != 0){ 
		$("#currentQuals h4").append(" | " + $("#currentQuals h2").text());
	}
	$("#currentQuals h2").text(getQual());
	qualCounter++;
	if(qualCounter == 4){
		var button = $("#currentQuals button");
		button.text("Sıradaki Nitelik");
		button.attr("onclick", "nextApplicant();");
	}
}

function nextApplicant(){ 
	var temp_quals = $("#currentQuals h4").text().split(" | ");als
	var table_row = $("#pastQuals table tr:nth-child(" + currentPlayer + ")");
	for(i=1;i<temp_quals.length;i++){
		table_row.append("<td>"+temp_quals[i]+"</td>");
	}
	table_row.append("<td>"+$("#currentQuals h2").text()+"</td>");

	$("#currentQuals h4").text("");
	qualCounter = 0;
	var button = $("#currentQuals button");
	button.text("Sıradaki Nitelik");
	button.attr("onclick", "nextQual();");

	currentPlayer++;
	if(currentPlayer < numPlayers){
		$("#currentQuals h3").text("İş Adayı: " + pName(currentPlayer));
		nextQual();
		return;
	}
	quickAnimHide("#currentQuals", 'fadeOutLeft');
	setupPickWinner();
	setTimeout(quickAnim, 950, '#pickWinner', 'fadeInRight');
}

function setupPickWinner(){
	var div = $("#pickWinner");
	for(i=0;i<numPlayers;i++){
		if (i==currentBoss){
			continue;
		}
		var string = "<button onclick=";
		string+='"pickedWinner(';
		string+="'";
		string+=Object.keys(scores)[i];
		string+="'";
		string+=');">';
		string+=Object.keys(scores)[i];
		string+="</button>"
		div.append(string);
	}
}

function pickedWinner(winner){
	var string = winner + " yeni ";
	string+=$("#GamePage h2:first").text().slice(8);
	string+=" çalışanımız seçildi";
	string+="!";
	$("#ScorePage h1").text(string);
	scores[winner]++;
	var scoreTable = $("#ScorePage h2");
	for(i=numPlayers-1;i>-1;i--){
		string = "<h3>" + pName(i) + ": " + scores[pName(i)] + "</h3>";
		scoreTable.after(string);
	}
	quickAnimHide("#GamePage", 'fadeOutLeft');
	setTimeout(quickAnim, 1000, '#ScorePage', 'fadeInRight');
}

function nextRound(){ //Sonraki Tur Tıklaması Yapıldığında Çalışacak
	quickAnimHide("#ScorePage", 'fadeOutLeft');
	setTimeout(function(){
	    $("#ScorePage h3").remove(); // Skorboard sıfırlama
	}, 1000);
	currentBoss = nextBoss();
	$("#pickWinner button").remove(); // pickWinner sıfırlama
	$("#pastQuals table tr").remove(); // tableRow sıfırlama
	$("#currentQuals").show(); // Oyunları gösterme
	$("#pickWinner").hide(); // Seçim bölümünü gizler
	currentPlayer=1;
	roundStart();
}
function endGame(){
	quickAnimHide("#ScorePage", 'fadeOutLeft');
	setTimeout(function(){
	    $("#ScorePage h3").remove();
	}, 1000);
	currentBoss = 0;
	$("#pickWinner button").remove(); 
	$("#pastQuals table tr").remove();
	$("#currentQuals").show();
	$("#pickWinner").hide();
	currentPlayer=1;
	setTimeout(quickAnim, 1000, '#MainPage', 'fadeInDown');
}