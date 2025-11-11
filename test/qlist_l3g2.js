var Qnum = 70;  //問題総数を入力
var Q = new Array(Qnum);

for(i = 0; i <= Qnum - 1; i ++){
	Q[i] = new Gotaku();
};

function Gotaku(){
	this.Quest;
	this.Ans = new Array(4);
	this.RightAns = 0;
	this.WriteQuest = WriteQuest;
	this.CheckAns = CheckAns;
}

function WriteQuest(){
	var tmp, Rnd;
	var n = new Array(4);
	for(i = 0; i <= 3; i ++){
		n[i] = i;
	};
	for(i = 0; i <= 3; i ++){
		Rnd = Math.floor(Math.random() * 4);
		tmp = n[i];
		n[i] = n[Rnd];
		n[Rnd] = tmp;
	};
	for(i = 0; i <= 3; i ++){
		if(n[i] == 0){
			this.RightAns = i;
		}
	};
	document.getElementById("WriteArea").innerHTML = "［第" + Qcount + "問］" + this.Quest;
	document.getElementById("Answer0").innerHTML = this.Ans[n[0]];
	document.getElementById("Answer1").innerHTML = this.Ans[n[1]];
	document.getElementById("Answer2").innerHTML = this.Ans[n[2]];
	document.getElementById("Answer3").innerHTML = this.Ans[n[3]];
}

function CheckAns(Num){
	var rt = (this.RightAns+1);
	if(!onMove)
		return;
	onMove = false;
	if(Num == this.RightAns){
		document.getElementById("WriteArea").innerHTML ="<div class='center'>○ 正解！<\/div>";
		document.getElementById("PointArea").innerHTML++;
		PointTmp = document.getElementById("PointArea").innerHTML;
		document.getElementById("PointArea2").innerHTML = PointTmp * 10 ;
	setTimeout("RndSelect()", 1000);
	}
	else{
		document.getElementById("WriteArea").innerHTML  ="<div class='left'>×：正解は " + rt + "です。 解説＝ " + Q[NowQ].comment+"<\/div>";
		document.getElementById("BtnArea").innerHTML = "<input type='button' value='次の問題へ' onclick='RndSelect()' onkeypress='RndSelect()'>"}
}

Q[0].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[0].Ans[0] = "わたしの　かぞくは　メロンを　<span class='kasen'>せいさんしています<\/span>。";
Q[0].Ans[1] = "新聞社とは　新聞を　<span class='kasen'>せいさんする<\/span>　会社のことです。";
Q[0].Ans[2] = "ペットの　にわとりが　たまごを　<span class='kasen'>せいさんした<\/span>。";
Q[0].Ans[3] = "わたしは　毎日　朝ごはんを　<span class='kasen'>せいさんしています<\/span>。";
Q[0].comment = "「せいさんする（生産する）」は〈日文中的生產是指 &quot;製造&quot;，一般是用在農、工、水產業類產品上〉という意味。";

Q[1].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[1].Ans[0] = "「どうぞ。たくさん　<span class='kasen'>めしあがって<\/span>　ください。";
Q[1].Ans[1] = "「では、えんりょなく　<span class='kasen'>めしあがります<\/span>。」";
Q[1].Ans[2] = "「ぜんぶ　<span class='kasen'>めしあがって<\/span>　よろしいですか。」";
Q[1].Ans[3] = "「いつ　<span class='kasen'>めしあがっても<\/span>　おいしいですね。」";
Q[1].comment = "「めしあがる（召し上がる）」は〈尊敬語的 &quot;食べる、飲む&quot; 在動作者為自己的情況時不可使用〉という意味。";

Q[2].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[2].Ans[0] = "しっぱいの　げんいんは　<span class='kasen'>はっきりして<\/span>　います。";
Q[2].Ans[1] = "ハンバーグは　<span class='kasen'>はっきりした<\/span>　たべものです";
Q[2].Ans[2] = "さいきん　<span class='kasen'>はっきり<\/span>　さむくなって　きました。";
Q[2].Ans[3] = "まどの　外は、あめが　<span class='kasen'>はっきり<\/span>　ふっています。";
Q[2].comment = "「はっきり」は〈清楚、一目瞭然〉という意味。";

Q[3].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[3].Ans[0] = "Ａ「コーヒー　ありますか。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[3].Ans[1] = "Ａ「よく、いらっしゃいました。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[3].Ans[2] = "Ａ「それは　たいへんだ。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[3].Ans[3] = "Ａ「いま　なんじですか。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[3].comment = "「かしこまりました」は〈 &quot;わかった&quot; 的謙讓語〉という意味。";

Q[4].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[4].Ans[0] = "「きょうは、ようこそ　<span class='kasen'>おいでになりました<\/span>。」";
Q[4].Ans[1] = "「お昼ごはんは　もう　<span class='kasen'>おいでになりましたか<\/span>。」";
Q[4].Ans[2] = "「そちらに　家内が　<span class='kasen'>おいでになって<\/span>　いませんか。」";
Q[4].Ans[3] = "「あした、<span class='kasen'>おいでになって<\/span>　よろしいでしょうか。」";
Q[4].comment = "「おいでになる（お出でになる）」は〈 &quot;行く、来る、いる&quot; 的尊敬語〉という意味。";

Q[5].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[5].Ans[0] = "これから　ばんごはんの　<span class='kasen'>したくをします<\/span>。";
Q[5].Ans[1] = "わたしは　いつも　オートバイで　<span class='kasen'>したくをします<\/span>。";
Q[5].Ans[2] = "きのうの　よるは　テストの　<span class='kasen'>したくをしました<\/span>。";
Q[5].Ans[3] = "すこし　やすんで　きもちの　<span class='kasen'>したくをします<\/span>。";
Q[5].comment = "「したくをする（支度をする）」は〈準備料理或整理儀容或行李等等〉という意味。";

Q[6].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[6].Ans[0] = "「<span class='kasen'>おみまい<\/span>です。　おだいじに。」";
Q[6].Ans[1] = "「<span class='kasen'>おみまい<\/span>です。　いただきます。」";
Q[6].Ans[2] = "「<span class='kasen'>おみまい<\/span>です。　はじめまして。」";
Q[6].Ans[3] = "「<span class='kasen'>おみまい<\/span>です。　いらっしゃいませ。」";
Q[6].comment = "「おみまい（お見舞い）」は〈探望、探望時的禮品〉という意味。";

Q[7].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[7].Ans[0] = "かのじょは　<span class='kasen'>しっかりした<\/span>　人です。";
Q[7].Ans[1] = "サラダは　<span class='kasen'>しっかりした<\/span>　たべものです。";
Q[7].Ans[2] = "しっぱいしたので　<span class='kasen'>しっかりしました<\/span>。";
Q[7].Ans[3] = "あめが　<span class='kasen'>しっかりと<\/span>　ふっています。";
Q[7].comment = "「しっかり」は〈牢固、形容人穩重能幹、認真地、身體或精神狀態良好〉という意味。";

Q[8].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[8].Ans[0] = "こどもが　さわいで　うるさいので　<span class='kasen'>しかりました<\/span>。";
Q[8].Ans[1] = "かなしい　ときには　どうぞ　<span class='kasen'>しかって<\/span>　ください。";
Q[8].Ans[2] = "かれに　おくりものを　もらったので　ていねいに　<span class='kasen'>しかりました<\/span>。";
Q[8].Ans[3] = "きょうは　とても　あついので　もっと　<span class='kasen'>しかって<\/span>　ください。";
Q[8].comment = "「しかる（叱る）」は〈責罵〉という意味。";

Q[9].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[9].Ans[0] = "Ａ「ハンバーグを　ください。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[9].Ans[1] = "Ａ「いいえ、どういたしまして。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[9].Ans[2] = "Ａ「この　薬を　飲んでください。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[9].Ans[3] = "Ａ「では、いってまいります。」<br>Ｂ「<span class='kasen'>かしこまりました<\/span>。」";
Q[9].comment = "「かしこまりました」は〈 &quot;わかった&quot; 的謙讓語〉という意味。";

Q[10].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[10].Ans[0] = "旅行の　<span class='kasen'>ようい<\/span>をします。";
Q[10].Ans[1] = "かぜで、体の<span class='kasen'>ようい<\/span>が　悪い。";
Q[10].Ans[2] = "電話で　<span class='kasen'>ようい<\/span>を　つたえます。";
Q[10].Ans[3] = "家の　<span class='kasen'>ようい<\/span>を　そうじします。";
Q[10].comment = "「ようい（用意）」は〈事前準備〉という意味。";

Q[11].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[11].Ans[0] = "食事の　<span class='kasen'>じゅんび<\/span>は、できていますか。";
Q[11].Ans[1] = "かぜで、体の　<span class='kasen'>じゅんび<\/span>が悪い。";
Q[11].Ans[2] = "あしたから、東京に　<span class='kasen'>じゅんび<\/span>を　します。";
Q[11].Ans[3] = "けっこんしきに　友だちを　<span class='kasen'>じゅんび<\/span>します。";
Q[11].comment = "「じゅんび（準備）」は〈準備〉という意味。";

Q[12].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[12].Ans[0] = "家の　近くに　<span class='kasen'>じんじゃ<\/span>が　あります。";
Q[12].Ans[1] = "きょうは　<span class='kasen'>じんじゃ<\/span>を　食べました。";
Q[12].Ans[2] = "兄は、<span class='kasen'>じんじゃ<\/span>に　つとめています。";
Q[12].Ans[3] = "家の　<span class='kasen'>じんじゃ<\/span>を　そうじします。";
Q[12].comment = "「じんじゃ（神社）」は〈日式佛教寺廟〉という意味。";

Q[13].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[13].Ans[0] = "かぜを　ひいたので、<span class='kasen'>こえ<\/span>が　出ません。";
Q[13].Ans[1] = "テレビの　<span class='kasen'>こえ<\/span>を　大きくしてください。";
Q[13].Ans[2] = "電車の　大きな　<span class='kasen'>こえ<\/span>が　聞こえました。";
Q[13].Ans[3] = "カラオケに　行ったので、<span class='kasen'>こえ<\/span>が　いたいです。";
Q[13].comment = "「こえ（声）」は〈生物發出的聲音〉という意味。";

Q[14].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[14].Ans[0] = "このカレーは、とても　<span class='kasen'>からい<\/span>です。";
Q[14].Ans[1] = "<span class='kasen'>からい<\/span>ことが　あっても、がんばります。";
Q[14].Ans[2] = "日本語の　テストは、とても　<span class='kasen'>からい<\/span>です。";
Q[14].Ans[3] = "雨なので、空が　とても　<span class='kasen'>からい<\/span>です。";
Q[14].comment = "「からい（辛い）」は〈辣〉という意味。";

Q[15].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[15].Ans[0] = "らいねんの　<span class='kasen'>カレンダー<\/span>を　かべに　かける。";
Q[15].Ans[1] = "テレビの　<span class='kasen'>カレンダー<\/span>を　かえます。";
Q[15].Ans[2] = "きのうは、<span class='kasen'>カレンダー<\/span>と　サラダを　食べました。";
Q[15].Ans[3] = "夜は、へやの　<span class='kasen'>カレンダー<\/span>を　しめる。";
Q[15].comment = "「カレンダー(calendar)」は〈月曆〉という意味。";

Q[16].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[16].Ans[0] = "<span class='kasen'>そろそろ<\/span>　テストの　じゅんびを　しなければ　なりません。";
Q[16].Ans[1] = "まどの　外は、雨が　<span class='kasen'>そろそろ<\/span>　ふっています。";
Q[16].Ans[2] = "かれは、いつも　<span class='kasen'>そろそろ<\/span>していて　うるさいです。";
Q[16].Ans[3] = "ねる前に、<span class='kasen'>そろそろ<\/span>　先生から　電話が　ありました。";
Q[16].comment = "「そろそろ」は〈差不多快要~、靜悄悄地〉という意味。";

Q[17].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[17].Ans[0] = "けがが　なおらないので、<span class='kasen'>たいいん<\/span>が　できません。";
Q[17].Ans[1] = "やっと　大学を　<span class='kasen'>たいいんする<\/span>ことが　できました。";
Q[17].Ans[2] = "日本では、いろいろな　<span class='kasen'>たいいん<\/span>を　しました。";
Q[17].Ans[3] = "しっぱいの　<span class='kasen'>たいいん<\/span>が　わかりません。";
Q[17].comment = "「たいいん（退院）」は〈出院〉という意味。";

Q[18].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[18].Ans[0] = "この服は　<span class='kasen'>もめん<\/span>で　できています。";
Q[18].Ans[1] = "へやの　<span class='kasen'>もめん<\/span>に　写真を　かざります。";
Q[18].Ans[2] = "みずうみの　<span class='kasen'>もめん<\/span>が　ひかっています。";
Q[18].Ans[3] = "<span class='kasen'>もめん<\/span>の　こえが　聞こえてきます。　";
Q[18].comment = "「もめん（木綿）」は〈棉布〉という意味。";

Q[19].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[19].Ans[0] = "借りた　お金を　<span class='kasen'>はらいます<\/span>。";
Q[19].Ans[1] = "おくじょうに　テニスコートを　<span class='kasen'>はらいました<\/span>。";
Q[19].Ans[2] = "じゅぎょうに　おくれて、先生に　<span class='kasen'>はらわれました<\/span>。";
Q[19].Ans[3] = "外は、つよい雨が　<span class='kasen'>はらっています<\/span>。";
Q[19].comment = "「はらう（払う）」は〈繳費、撥開、排除〉という意味。";

Q[20].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[20].Ans[0] = "この道は　バスが　<span class='kasen'>とおっています<\/span>。";
Q[20].Ans[1] = "さむいので、池が　<span class='kasen'>とおっている<\/span>。";
Q[20].Ans[2] = "じてんしゃで　会社に　<span class='kasen'>とおります<\/span>。";
Q[20].Ans[3] = "でんわを　<span class='kasen'>とおって<\/span>　れんらくします。";
Q[20].comment = "「とおる（通る）」は〈移動過程中經過某處〉という意味。";

Q[21].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[21].Ans[0] = "きのう、先生の　おたくに　<span class='kasen'>うかがいました<\/span>。";
Q[21].Ans[1] = "みんなで　テレビを　<span class='kasen'>うかがっています<\/span>。";
Q[21].Ans[2] = "スーパーで　野菜を　<span class='kasen'>うかがいます<\/span>。";
Q[21].Ans[3] = "パソコンが　<span class='kasen'>うかがった<\/span>ので、なおします。";
Q[21].comment = "「うかがう（伺う）」は〈聽、尋問、拜訪的謙讓語〉という意味。";

Q[22].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[22].Ans[0] = "お話は、わたしが　<span class='kasen'>うかがいます<\/span>。";
Q[22].Ans[1] = "先生が　わたしに　<span class='kasen'>うかがいました<\/span>。";
Q[22].Ans[2] = "テレビで　ニュースを　<span class='kasen'>うかがいました<\/span>。";
Q[22].Ans[3] = "<span class='kasen'><\/span>";
Q[22].comment = "「うかがう（伺う）」は〈聽、尋問、拜訪的謙讓語〉という意味。";

Q[23].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[23].Ans[0] = "つくえの　上に　写真を　<span class='kasen'>かざる<\/span>。";
Q[23].Ans[1] = "くもが　空を　<span class='kasen'>かざっています<\/span>。";
Q[23].Ans[2] = "道を　たくさんの　じどうしゃが　<span class='kasen'>かざっています<\/span>。";
Q[23].Ans[3] = "ナイフで　ゆびを　<span class='kasen'>かざって<\/span>しまいました。";
Q[23].comment = "「かざる（飾る）」は〈擺飾、裝飾〉という意味。";

Q[24].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[24].Ans[0] = "電車に　かばんを　<span class='kasen'>わすれました<\/span>。";
Q[24].Ans[1] = "少し　お金を　<span class='kasen'>わすれて<\/span>ください。";
Q[24].Ans[2] = "大きな　ケーキを　ふたりで　<span class='kasen'>わすれます<\/span>。";
Q[24].Ans[3] = "台北に　<span class='kasen'>わすれる<\/span>まで、もう　少しです。";
Q[24].comment = "「わすれる（忘れる）」は〈遺忘〉という意味。";

Q[25].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[25].Ans[0] = "ふねが　大きく　<span class='kasen'>ゆれています<\/span>。";
Q[25].Ans[1] = "空に　月が　<span class='kasen'>ゆれています<\/span>。";
Q[25].Ans[2] = "台湾の　生活に　まだ　<span class='kasen'>ゆれていません<\/span>。";
Q[25].Ans[3] = "パンは、ひとりに　ひとつで　<span class='kasen'>ゆれます<\/span>。";
Q[25].comment = "「ゆれる（揺れる）」は〈搖晃〉という意味。";

Q[26].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[26].Ans[0] = "じゅぎょうの　<span class='kasen'>よしゅう<\/span>を　しておきます。";
Q[26].Ans[1] = "きょうの　ホテルを　<span class='kasen'>よしゅう<\/span>します。";
Q[26].Ans[2] = "<span class='kasen'>よしゅう<\/span>は、なにに　なさいますか。";
Q[26].Ans[3] = "<span class='kasen'>よしゅう<\/span>では、あした　台風が　来ます。";
Q[26].comment = "「よしゅう（予習）」は〈預習功課〉という意味。";

Q[27].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[27].Ans[0] = "<span class='kasen'>やっと<\/span>　しゅくだいが　おわりました。";
Q[27].Ans[1] = "外は、<span class='kasen'>やっと<\/span>　風が　つよいです。";
Q[27].Ans[2] = "<span class='kasen'>やっと<\/span>　テストに　しっぱいしました。";
Q[27].Ans[3] = "<span class='kasen'>やっと<\/span>　あさごはんが　たべたいです。";
Q[27].comment = "「やっと」は〈終於、好不容易〉という意味。";

Q[28].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[28].Ans[0] = "いなかは、せいかつが　<span class='kasen'>べんりでは<\/span>　ありません。";
Q[28].Ans[1] = "朝は、いつも　<span class='kasen'>べんりな<\/span>　食事しか　しません。";
Q[28].Ans[2] = "きょうの　テストは　とても　<span class='kasen'>べんりでした<\/span>。";
Q[28].Ans[3] = "兄は　<span class='kasen'>べんりな<\/span>　仕事を　しています。";
Q[28].comment = "「べんり（便利）」は〈方便〉という意味。";

Q[29].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[29].Ans[0] = "パンに　<span class='kasen'>バター<\/span>を　ぬります。";
Q[29].Ans[1] = "あかい　<span class='kasen'>バター<\/span>を　かぶっています。";
Q[29].Ans[2] = "みせの　<span class='kasen'>バター<\/span>を　しめます。";
Q[29].Ans[3] = "テレビの　<span class='kasen'>バター<\/span>を　かえる。";
Q[29].comment = "「バター(butter)」は〈奶油〉という意味。";

Q[30].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[30].Ans[0] = "この　薬は、とても　<span class='kasen'>にがいです<\/span>。";
Q[30].Ans[1] = "天気が　<span class='kasen'>にがく<\/span>　なってきました。";
Q[30].Ans[2] = "夏の　夜は　<span class='kasen'>にがいです<\/span>。";
Q[30].Ans[3] = "日本語の　勉強は　<span class='kasen'>にがいです<\/span>。";
Q[30].comment = "「にがい（苦い）」は〈味道苦澀〉という意味。";

Q[31].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[31].Ans[0] = "<span class='kasen'>なるほど<\/span>。そうですか。";
Q[31].Ans[1] = "<span class='kasen'>なるほど<\/span>。わかりません。";
Q[31].Ans[2] = "<span class='kasen'>なるほど<\/span>。もうします。";
Q[31].Ans[3] = "<span class='kasen'>なるほど<\/span>。どうでしょう。";
Q[31].comment = "「なるほど」は〈原來如此〉という意味。";

Q[32].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[32].Ans[0] = "月曜日は、<span class='kasen'>なるべく<\/span>　早く　学校に　行きます。";
Q[32].Ans[1] = "<span class='kasen'>なるべく<\/span>　おいしく　めしあがってください。";
Q[32].Ans[2] = "ここは、じどうしゃが　<span class='kasen'>なるべく<\/span>　多いです。";
Q[32].Ans[3] = "かのじょは、<span class='kasen'>なるべく<\/span>　やさしい　人です。";
Q[32].comment = "「なるべく」は〈盡量〉という意味。";

Q[33].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[33].Ans[0] = "<span class='kasen'>とこや<\/span>で　かみを　きります。";
Q[33].Ans[1] = "<span class='kasen'>とこや<\/span>で　ごはんを　食べます。";
Q[33].Ans[2] = "<span class='kasen'>とこや<\/span>で　かぜを　なおします。";
Q[33].Ans[3] = "<span class='kasen'>とこや<\/span>で　テレビを　買います。";
Q[33].comment = "「とこや（床屋）」は〈理髮廳〉という意味。";

Q[34].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[34].Ans[0] = "100えんの　<span class='kasen'>おつり<\/span>です。";
Q[34].Ans[1] = "車で　<span class='kasen'>おつり<\/span>を　わたります。";
Q[34].Ans[2] = "みんなで　<span class='kasen'>おつり<\/span>に　行きます。";
Q[34].Ans[3] = "わたしの　しゅみは、<span class='kasen'>おつり<\/span>です。";
Q[34].comment = "「おつり（お釣り）」は〈找零、零錢〉という意味。";

Q[35].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[35].Ans[0] = "<span class='kasen'>かない<\/span>が　おじゃまして　いませんか。";
Q[35].Ans[1] = "<span class='kasen'>かない<\/span>に　花を　かざります。";
Q[35].Ans[2] = "家の　<span class='kasen'>かない<\/span>を　きれいに　そうじします。";
Q[35].Ans[3] = "<span class='kasen'>かない<\/span>は、とても　体に　いいです。";
Q[35].comment = "「かない（家内）」は〈自己的妻子〉という意味。";

Q[36].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[36].Ans[0] = "暑いので　<span class='kasen'>れいぼう<\/span>を　強くしてください。";
Q[36].Ans[1] = "暗く　なったので、<span class='kasen'>れいぼう<\/span>を　しめます。";
Q[36].Ans[2] = "テキストの　<span class='kasen'>れいぼう<\/span>を　チェックしてください。";
Q[36].Ans[3] = "ビールを　<span class='kasen'>れいぼう<\/span>に　入れます。";
Q[36].comment = "「れいぼう（冷房）」は〈冷氣〉という意味。";

Q[37].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[37].Ans[0] = "<span class='kasen'>サラダ<\/span>は、からだに　いいです。";
Q[37].Ans[1] = "にわに　<span class='kasen'>サラダ<\/span>を　うえます。";
Q[37].Ans[2] = "かべに　<span class='kasen'>サラダ<\/span>を　かざります。";
Q[37].Ans[3] = "かのじょは、あかい<span class='kasen'>サラダ<\/span>を　きています。";
Q[37].comment = "「サラダ(salad)」は〈沙拉〉という意味。";

Q[38].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[38].Ans[0] = "ぼうしを　<span class='kasen'>かぶります<\/span>。";
Q[38].Ans[1] = "スリッパを　<span class='kasen'>かぶります<\/span>。";
Q[38].Ans[2] = "ズボンを　<span class='kasen'>かぶります<\/span>。";
Q[38].Ans[3] = "ワイシャツを　<span class='kasen'>かぶります<\/span>。";
Q[38].comment = "「かぶる（被る）」は〈戴上〉という意味。";

Q[39].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[39].Ans[0] = "サンダルを　<span class='kasen'>はきます<\/span>。";
Q[39].Ans[1] = "スプーンを　<span class='kasen'>はきます<\/span>。";
Q[39].Ans[2] = "スーツを　<span class='kasen'>はきます<\/span>。";
Q[39].Ans[3] = "シャワーを　<span class='kasen'>はきます<\/span>。";
Q[39].comment = "「はく（履く）」は〈穿上(腰以下)〉という意味。";

Q[40].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[40].Ans[0] = "しんぶんで、テレビの　<span class='kasen'>ばんぐみ<\/span>を　しらべます。";
Q[40].Ans[1] = "山田先生の　<span class='kasen'>ばんぐみ<\/span>で、しゅくだいが　でました。";
Q[40].Ans[2] = "きょうの　<span class='kasen'>ばんぐみ<\/span>は、ハンバーグに　サラダでした。";
Q[40].Ans[3] = "スーパーで　<span class='kasen'>ばんぐみ<\/span>を　買ってきました。";
Q[40].comment = "「ばんぐみ（番組）」は〈電視節目〉という意味。";

Q[41].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[41].Ans[0] = "子どもを　<span class='kasen'>いじめる<\/span>のは、よくない　ことです。";
Q[41].Ans[1] = "じゅぎょうに　おくれて、先生に　<span class='kasen'>いじめられました<\/span>。";
Q[41].Ans[2] = "にわで　いろいろな　お花を　<span class='kasen'>いじめています<\/span>。";
Q[41].Ans[3] = "日本語の　勉強を　<span class='kasen'>いじめた<\/span>のは、２年前です。";
Q[41].comment = "「いじめる（虐める）」は〈欺負〉という意味。";

Q[42].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[42].Ans[0] = "金曜日は　<span class='kasen'>ぐあい<\/span>が　悪いです。";
Q[42].Ans[1] = "健康の　<span class='kasen'>ぐあい<\/span>が　よくありません。";
Q[42].Ans[2] = "日本語の　<span class='kasen'>ぐあい<\/span>が　よくなりました。";
Q[42].Ans[3] = "日本は　台湾より　<span class='kasen'>ぐあい<\/span>が　多いです。";
Q[42].comment = "「ぐあい（具合）」は〈情況(方便)、人體器官或物品運作狀態&rarr;健康の具合が悪い ×，未表示出人體器官部分 ex\. お腹の具合が悪い ○〉という意味。";

Q[43].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[43].Ans[0] = "もう　おふろが　<span class='kasen'>わいています<\/span>。";
Q[43].Ans[1] = "木の　えだを　二つに　<span class='kasen'>わく<\/span>。";
Q[43].Ans[2] = "あかいものと　あおいものに　<span class='kasen'>わきます<\/span>。";
Q[43].Ans[3] = "ステーキを　<span class='kasen'>わいて<\/span>　食べます。";
Q[43].comment = "「わく（沸く）」は〈沸騰〉という意味。";

Q[44].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[44].Ans[0] = "<span class='kasen'>もうすぐ<\/span>　春に　なります。";
Q[44].Ans[1] = "<span class='kasen'>もうすぐ<\/span>　本を　読んでいます。";
Q[44].Ans[2] = "台湾に　来て　<span class='kasen'>もうすぐ<\/span>　７年になりました。";
Q[44].Ans[3] = "しゅくだいは、<span class='kasen'>もうすぐ<\/span>　できました。";
Q[44].comment = "「もうすぐ」は〈馬上就~〉という意味。";

Q[45].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[45].Ans[0] = "日本と　台湾は　<span class='kasen'>ぼうえき<\/span>が　さかんです。";
Q[45].Ans[1] = "パソコンに　ぶんしょうを　<span class='kasen'>ぼうえき<\/span>します。";
Q[45].Ans[2] = "台風で　<span class='kasen'>ぼうえき<\/span>が　強いです。";
Q[45].Ans[3] = "バスで　台湾を　<span class='kasen'>ぼうえき<\/span>します。";
Q[45].comment = "「ぼうえき（貿易）」は〈貿易〉という意味。";

Q[46].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[46].Ans[0] = "<span class='kasen'>とうとう<\/span>　だれも　来ませんでした。";
Q[46].Ans[1] = "きょうも　<span class='kasen'>とうとう<\/span>　学校に　行きました。";
Q[46].Ans[2] = "みんなで　<span class='kasen'>とうとう<\/span>　ごはんを　食べています。";
Q[46].Ans[3] = "外は、<span class='kasen'>とうとう<\/span>　雨が　つよいです。";
Q[46].comment = "「とうとう」は〈結果最後是~〉という意味。";

Q[47].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[47].Ans[0] = "<span class='kasen'>なかなか<\/span>　バスが　来ません。";
Q[47].Ans[1] = "<span class='kasen'>なかなか<\/span>　空が　はれます。";
Q[47].Ans[2] = "<span class='kasen'>なかなか<\/span>　台北に　行きました。";
Q[47].Ans[3] = "<span class='kasen'>なかなか<\/span>　日本語を　勉強します。";
Q[47].comment = "「なかなか」は〈相當、不錯&rarr;文後接否定時(遲遲不~、不容易~〉という意味。";

Q[48].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[48].Ans[0] = "にもつを　へやに　<span class='kasen'>はこぶ<\/span>。";
Q[48].Ans[1] = "空が　雨を　<span class='kasen'>はこんでいます<\/span>。";
Q[48].Ans[2] = "電話で　れんらくを　<span class='kasen'>はこびます<\/span>。";
Q[48].Ans[3] = "朝は、じゅぎょうに　<span class='kasen'>はこびました<\/span>。";
Q[48].comment = "「はこぶ（運ぶ）」は〈搬運〉という意味。";

Q[49].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[49].Ans[0] = "あなたは　<span class='kasen'>ひどい<\/span>　人です。";
Q[49].Ans[1] = "空が　<span class='kasen'>ひどく<\/span>　はれています。";
Q[49].Ans[2] = "この　ビルは　<span class='kasen'>ひどい<\/span>　たかさです。";
Q[49].Ans[3] = "じどうしゃが　<span class='kasen'>ひどく<\/span>　はしっています。";
Q[49].comment = "「ひどい（酷い）」は〈過份、殘忍、非常(形容負面事物)〉という意味。";

Q[50].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[50].Ans[0] = "たばこが　<span class='kasen'>げんいん<\/span>で　病気に　なりました。";
Q[50].Ans[1] = "仕事の　<span class='kasen'>げんいん<\/span>で　学校を　休みます。";
Q[50].Ans[2] = "バスが　<span class='kasen'>げんいん<\/span>で、学校に　行きました。";
Q[50].Ans[3] = "<span class='kasen'>げんいん<\/span>の　アパートに　住んでいます。";
Q[50].comment = "「げんいん（原因）」は〈原因〉という意味。";

Q[51].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[51].Ans[0] = "<span class='kasen'>こまかい<\/span>　ことばかり、いわないで　ください。";
Q[51].Ans[1] = "かれには、まだ　<span class='kasen'>こまかい<\/span>　子どもが　います。";
Q[51].Ans[2] = "足の　<span class='kasen'>こまかい<\/span>　女の人が　好きです。";
Q[51].Ans[3] = "むこうまで、<span class='kasen'>こまかい<\/span>　道が　つづいています。";
Q[51].comment = "「こまかい（細かい）」は〈瑣碎〉という意味。";

Q[52].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[52].Ans[0] = "あと　少しで、ことしも　<span class='kasen'>くれます<\/span>。";
Q[52].Ans[1] = "台風が　<span class='kasen'>くれて<\/span>　風が　つよい。";
Q[52].Ans[2] = "夜が　<span class='kasen'>くれて<\/span>　朝に　なりました。";
Q[52].Ans[3] = "５時に　なると、仕事が　<span class='kasen'>くれます<\/span>。";
Q[52].comment = "「くれる（暮れる）」は〈時間即將過去、天黑〉という意味。";

Q[53].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[53].Ans[0] = "くらい　ろうかを　<span class='kasen'>とおって<\/span>　へやに　入る。";
Q[53].Ans[1] = "毎日、バスで　学校に　<span class='kasen'>とおります<\/span>。";
Q[53].Ans[2] = "ことしから　大学に　<span class='kasen'>とおって<\/span>います。";
Q[53].Ans[3] = "この道は、台北に　<span class='kasen'>とおって<\/span>　います。";
Q[53].comment = "「とおる（通る）」は〈通過、p.s.無通往之意〉という意味。";

Q[54].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[54].Ans[0] = "かのじょは　<span class='kasen'>ねっしんに<\/span>　仕事を　します。";
Q[54].Ans[1] = "きのうは　<span class='kasen'>ねっしんに<\/span>　ねていました。";
Q[54].Ans[2] = "おとうとは　ハンバーグが　<span class='kasen'>ねっしんです<\/span>。";
Q[54].Ans[3] = "わたしの　<span class='kasen'>ねっしん<\/span>は、歌を　歌うことです。";
Q[54].comment = "「ねっしん（熱心）」は〈熱心〉という意味。";

Q[55].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[55].Ans[0] = "<span class='kasen'>とっきゅう<\/span>に　のって、大阪に　行きました。";
Q[55].Ans[1] = "そとは、<span class='kasen'>とっきゅう<\/span>で　雨が　ふっています。";
Q[55].Ans[2] = "かのじょは、せいかくが　とても　<span class='kasen'>とっきゅう<\/span>です。";
Q[55].Ans[3] = "<span class='kasen'>とっきゅう<\/span>を　うんてんして　家に　帰ります。";
Q[55].comment = "「とっきゅう（特急）」は〈特急列車〉という意味。";

Q[56].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[56].Ans[0] = "日本人なら　<span class='kasen'>どなた<\/span>でも　かまいません。";
Q[56].Ans[1] = "トイレは、<span class='kasen'>どなた<\/span>に　ありますか。";
Q[56].Ans[2] = "きょうは、<span class='kasen'>どなた<\/span>へ　いらっしゃいますか。";
Q[56].Ans[3] = "りんごと　みかんと、<span class='kasen'>どなた<\/span>が　好きですか。";
Q[56].comment = "「どなた」は〈哪一位だれ→どなた《丁寧語》〉という意味。";

Q[57].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[57].Ans[0] = "<span class='kasen'>もめん<\/span>の　ハンカチを　プレゼントしました。";
Q[57].Ans[1] = "母は、<span class='kasen'>もめん<\/span>で　パートタイムを　しています。";
Q[57].Ans[2] = "朝は　<span class='kasen'>もめん<\/span>の　シャワーを　あびます。";
Q[57].Ans[3] = "おばあさんは、<span class='kasen'>もめん<\/span>で　サラダを　つくる。";
Q[57].comment = "「もめん（木綿）」は〈棉布〉という意味。";

Q[58].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[58].Ans[0] = "陳くんは　心の　<span class='kasen'>やさしい<\/span>　男の子です。";
Q[58].Ans[1] = "台風で　<span class='kasen'>やさしい<\/span>　雨が　ふっています。";
Q[58].Ans[2] = "このスーパーは　ねだんが　<span class='kasen'>やさしい<\/span>です。";
Q[58].Ans[3] = "周先生は　<span class='kasen'>やさしい<\/span>　ようふくを　着ます。";
Q[58].comment = "「やさしい（優しい）」は〈和善〉という意味。";

Q[59].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[59].Ans[0] = "あの先生は、口が　<span class='kasen'>わるいです<\/span>。";
Q[59].Ans[1] = "いなかなので、電話が　<span class='kasen'>わるいです<\/span>。";
Q[59].Ans[2] = "勉強の　<span class='kasen'>わるい<\/span>　ひつようが　あります。";
Q[59].Ans[3] = "わたしは、お金が　<span class='kasen'>わるく<\/span>　ほしいです。";
Q[59].comment = "「わるい（悪い）」は〈壞〉という意味。";

Q[60].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[60].Ans[0] = "先生に　作文を　<span class='kasen'>ほめられました<\/span>。";
Q[60].Ans[1] = "となりの　犬が　大きな　声で　<span class='kasen'>ほめました<\/span>。";
Q[60].Ans[2] = "たのしい　ゆめも、いつかは　<span class='kasen'>ほめます<\/span>。";
Q[60].Ans[3] = "きょうの　夜は　ホテルに　<span class='kasen'>ほめます<\/span>。";
Q[60].comment = "「ほめる（誉める）」は〈稱讚〉という意味。";

Q[61].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[61].Ans[0] = "安いですが、<span class='kasen'>わりあいに<\/span>　よい　ホテルでした。";
Q[61].Ans[1] = "つよい　雨が　<span class='kasen'>わりあいに<\/span>　ふっています。";
Q[61].Ans[2] = "おじいさんが、<span class='kasen'>わりあいに<\/span>　にゅういんする。";
Q[61].Ans[3] = "いつも　<span class='kasen'>わりあいに<\/span>　たばこを　やめます。";
Q[61].comment = "「わりあいに（割合に）」は〈《與前述比較》卻是~、比例〉という意味。";

Q[62].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[62].Ans[0] = "ふねで　海を　<span class='kasen'>わたります<\/span>。";
Q[62].Ans[1] = "くるまで　学校に　<span class='kasen'>わたる<\/span>。";
Q[62].Ans[2] = "テストに　<span class='kasen'>わたりました<\/span>。";
Q[62].Ans[3] = "台風が　<span class='kasen'>わたっています<\/span>。";
Q[62].comment = "「わたる（渡る）」は〈渡過〉という意味。";

Q[63].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[63].Ans[0] = "<span class='kasen'>レジ<\/span>で　お金を　はらいます。";
Q[63].Ans[1] = "<span class='kasen'>レジ<\/span>で　ニュースを　聞きます。";
Q[63].Ans[2] = "<span class='kasen'>レジ<\/span>に　ガスを　入れます。";
Q[63].Ans[3] = "<span class='kasen'>レジ<\/span>に　れんらくを　します。";
Q[63].comment = "「レジ(register)」は〈レジスター之略稱、收銀台、收銀機〉という意味。";

Q[64].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[64].Ans[0] = "みせに　おきゃくが　<span class='kasen'>どんどん<\/span>　きます。";
Q[64].Ans[1] = "パーティーは　<span class='kasen'>どんどん<\/span>　たのしいです。";
Q[64].Ans[2] = "毎日、<span class='kasen'>どんどん<\/span>　学校に　いきます。";
Q[64].Ans[3] = "かのじょの　家は　<span class='kasen'>どんどん<\/span>　大きいです。";
Q[64].comment = "「どんどん」は〈接連不斷地〉という意味。";

Q[65].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[65].Ans[0] = "先生に　ほめられて　<span class='kasen'>うれしかった<\/span>。";
Q[65].Ans[1] = "そとを　とおる　車が　<span class='kasen'>うれしいです<\/span>。";
Q[65].Ans[2] = "ここは、さんぎょうが　<span class='kasen'>うれしいです<\/span>。";
Q[65].Ans[3] = "ペットが　しんで　<span class='kasen'>うれしかった<\/span>。";
Q[65].comment = "「うれしい（嬉しい）」は〈高興〉という意味。";

Q[66].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[66].Ans[0] = "こたえを　ノートに　<span class='kasen'>うつす<\/span>。";
Q[66].Ans[1] = "テストに　こたえを　<span class='kasen'>うつす<\/span>。";
Q[66].Ans[2] = "電話に　れんらくを　<span class='kasen'>うつす<\/span>。";
Q[66].Ans[3] = "パソコンに　カメラを　<span class='kasen'>うつす<\/span>。";
Q[66].comment = "「うつす（写す）」は〈抄寫〉という意味。";

Q[67].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[67].Ans[0] = "きっぷ<span class='kasen'>うりば<\/span>は　どこに　ありますか？";
Q[67].Ans[1] = "家の　<span class='kasen'>うりば<\/span>に　お花を　かざります。";
Q[67].Ans[2] = "近くの　<span class='kasen'>うりば<\/span>で　食事を　しました。";
Q[67].Ans[3] = "<span class='kasen'>うりば<\/span>に　大きな　ふねが　とまっています。";
Q[67].comment = "「うりば（売り場）」は〈賣~的地方〉という意味。";

Q[68].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[68].Ans[0] = "大学で　いがくを　<span class='kasen'>けんきゅうしています<\/span>。";
Q[68].Ans[1] = "車に　ガソリンを　<span class='kasen'>けんきゅうします<\/span>。";
Q[68].Ans[2] = "テストの　前には、きょうかしょを　<span class='kasen'>けんきゅうする<\/span>。";
Q[68].Ans[3] = "コンサートを<span class='kasen'>けんきゅうして<\/span>楽しかった。";
Q[68].comment = "「けんきゅうする（研究する）」は〈研究〉という意味。";

Q[69].Quest = "つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらびなさい。";
Q[69].Ans[0] = "<span class='kasen'>こうがい<\/span>の　家で　かぞくと　住んでいます。";
Q[69].Ans[1] = "スーパーの　<span class='kasen'>こうがい<\/span>に　かいものに　行く。";
Q[69].Ans[2] = "ふねで　<span class='kasen'>こうがい<\/span>を　旅行しています。";
Q[69].Ans[3] = "会社の　<span class='kasen'>こうがい<\/span>で　たばこを　すいます。";
Q[69].comment = "「こうがい（郊外）」は〈郊外〉という意味。";
