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

Q[0].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うける〕…大学院のときは奨学金を<span class='kasen'>うけていました。。";
Q[0].Ans[0] = "画期的な医薬品を開発して、財団から賞を<span class='kasen'>うけた。";
Q[0].Ans[1] = "育達大学の入学試験を<span class='kasen'>うけたが、合格できなかった。";
Q[0].Ans[2] = "地震と台風によって、市民は大きな損害を<span class='kasen'>うけた。";
Q[0].Ans[3] = "地下資源を調査せよとの命令を<span class='kasen'>うけ、北極へ向かった。";
Q[0].comment = "問題文の「うける(受ける)」は〈もらえるものを受け取る〉意味。";

Q[1].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うごく〕…壁にかけた時計の針が<span class='kasen'>うごいて<\/span>いる。";
Q[1].Ans[0] = " 突然、パソコンが<span class='kasen'>うごかなく<\/span>なってしまった。";
Q[1].Ans[1] = "台湾では、選挙のたびに大金が<span class='kasen'>うごく<\/span>という。";
Q[1].Ans[2] = "写真を撮影するときは、<span class='kasen'>うごかない<\/span>でください。";
Q[1].Ans[3] = "新製品の投入で、市場価格が大きく<span class='kasen'>うごいて<\/span>いる。";
Q[1].comment = "問題文の「うごく(動く)」は〈機械が動作・機能する〉意味。";

Q[2].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔あれる〕…台風が来ているので、週末はだいぶ<span class='kasen'>あれる<\/span>だろう。";
Q[2].Ans[0] = "空が<span class='kasen'>あれて<\/span>飛行機は全便欠航となった。";
Q[2].Ans[1] = "内戦で国土はすっかり<span class='kasen'>あれて<\/span>しまった。";
Q[2].Ans[2] = "あいかわらず<span class='kasen'>あれた<\/span>生活をしている。";
Q[2].Ans[3] = "会議ははじめから<span class='kasen'>あれた<\/span>展開になった。";
Q[2].comment = "問題文の「あれる(荒れる)」は〈天気が悪くなる〉意味。";

Q[3].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ぐあい〕…最近、どうも体の<span class='kasen'>ぐあい<\/span>が悪い。";
Q[3].Ans[0] = "悪いんだけど、そこにあるヒーターの<span class='kasen'>ぐあい<\/span>を見てもらえませんかね。";
Q[3].Ans[1] = "こちらから電話するつもりが、ちょうどいい<span class='kasen'>ぐあい<\/span>に電話がかかってきた。";
Q[3].Ans[2] = "火曜日はちょっと<span class='kasen'>ぐあい<\/span>が悪いので、約束は別の日にしもらえませんか。";
Q[3].Ans[3] = "困ったときには、こんな<span class='kasen'>ぐあい<\/span>にやれば大抵はうまくいくものだよ。";
Q[3].comment = "問題の「ぐあい(具合)」は〈調子・コンディション〉の意味。";

Q[4].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔いたる〕…メールを出したが、今に<span class='kasen'>いたる<\/span>まで返信がない。";
Q[4].Ans[0] = "まだ詳細を発表する時期には<span class='kasen'>いたって<\/span>いない。";
Q[4].Ans[1] = "北海道から九州に<span class='kasen'>いたる<\/span>地域で観察される植物だ。";
Q[4].Ans[2] = "犯行に<span class='kasen'>いたる<\/span>経緯を詳細にレポートにまとめた。";
Q[4].Ans[3] = "目的地に<span class='kasen'>いたる<\/span>道がひとつであるとは限らない。";
Q[4].comment = "問題文の「いたる(至る)」は〈時間になる〉意味。「犯行に〜」は〈特定の状況になる〉 意味、他は場所を表わしているので不適当。";

Q[5].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔むすぶ〕…２人で手を<span class='kasen'>むすべ<\/span>ば、もう怖いものなどありません。。";
Q[5].Ans[0] = "６年の交際を経て、ようやく<span class='kasen'>むすばれた<\/span>。";
Q[5].Ans[1] = "やっと努力が実を<span class='kasen'>むすんだ<\/span>。";
Q[5].Ans[2] = "新幹線ができれば、首都圏と２時間で<span class='kasen'>むすばれる<\/span>。";
Q[5].Ans[3] = "人間と猿を<span class='kasen'>むすぶ<\/span>化石はいまだに発見されていない。";
Q[5].comment = "問題文の「むすぶ」は〈ある特定の関係になる〉意味。結婚することを指す「ようやくむすばれた」が最も適当。";

Q[6].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔すがた〕…山の<span class='kasen'>すがた<\/span>を丁寧にデッサンする。。";
Q[6].Ans[0] = "なかなか<span class='kasen'>すがた<\/span>のいい花瓶ですね。";
Q[6].Ans[1] = "最近、彼の<span class='kasen'>すがた<\/span>が見えませんね。";
Q[6].Ans[2] = "覆っていたベールをとると、作品が<span class='kasen'>すがた<\/span>を現した。";
Q[6].Ans[3] = "映画をとおして、移り行く世の<span class='kasen'>すがた<\/span>が見えます。";
Q[6].comment = "問題文の「すがた」は〈物の形〉の意味。なお、「すがたを現わす」は『現われる』意味を示す慣用表現である。";

Q[7].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔みる〕…そろそろ桜を<span class='kasen'>みる<\/span>のにいい季節になりますね。";
Q[7].Ans[0] = "子供のころは、よく父とプロ野球の試合を<span class='kasen'>みに<\/span>行きました。";
Q[7].Ans[1] = "ちゃんと湯かげんを<span class='kasen'>みて<\/span>から風呂に入らないと危ないですよ。";
Q[7].Ans[2] = "毎朝、朝刊を<span class='kasen'>みて<\/span>からトイレに入ります。";
Q[7].Ans[3] = "こんな派手な色の魚は<span class='kasen'>みた<\/span>ことがありません。";
Q[7].comment = "問題文の「みる」は〈娯楽のために見物する〉意味で、『見る』とも『観る』とも書く。";

Q[8].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔あたる〕…心当りはすべて<span class='kasen'>あたった<\/span>んですが、どこにもいないんです。";
Q[8].Ans[0] = "辞書に<span class='kasen'>あたって<\/span>も、わからない単語がある。";
Q[8].Ans[1] = "予想が見事に<span class='kasen'>あたって<\/span>、大金を手に入れることができた。";
Q[8].Ans[2] = "国務省は、日本の外務省に<span class='kasen'>あたる<\/span>機関だ。";
Q[8].Ans[3] = "屋外では雨が<span class='kasen'>あたる<\/span>ので、建物の中にしまっておく。";
Q[8].comment = "問題文の「あたる」は〈直接調べる、確かめる〉意味。";

Q[9].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔おくる〕…誕生日はバラの花束を<span class='kasen'>おくって<\/span>あげるよ。";
Q[9].Ans[0] = "卒業する先輩たちに感謝の言葉を<span class='kasen'>おくった<\/span>。";
Q[9].Ans[1] = "どのチームも応援団が選手たちに大きな声援を<span class='kasen'>おくって<\/span>いる。";
Q[9].Ans[2] = "この辺りはバスが少ないですから、駅まで車で<span class='kasen'>おくります<\/span>よ。";
Q[9].Ans[3] = "データはメールの添付ファイルで<span class='kasen'>おくって<\/span>ください。";
Q[9].comment = "問題文の「おくる」は〈感謝やお祝いの気持ちを込めて物を与える〉意味で『贈る』と書く。他はいずれも『送る』と書くべきものである。";

Q[10].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ひらく〕…窓が<span class='kasen'>ひらいて<\/span>女の顔が見えた。";
Q[10].Ans[0] = "台風で、鉄製の門が<span class='kasen'>ひらく<\/span>ほどの強い風だった。";
Q[10].Ans[1] = "勉強しないとどんどん差が<span class='kasen'>ひらいて<\/span>いくよ。";
Q[10].Ans[2] = "毎朝10時には店を<span class='kasen'>ひらいて<\/span>いますよ。";
Q[10].Ans[3] = "山の中に道を<span class='kasen'>ひらく<\/span>工事が行なわれている。";
Q[10].comment = "問題文の「ひらく」は〈閉じていたものが開(あ)く〉の意味。";

Q[11].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うち〕…二三日<span class='kasen'>うち<\/span>を空けていました。";
Q[11].Ans[0] = "３丁目の空き地に大きな<span class='kasen'>うち<\/span>が建ったね。";
Q[11].Ans[1] = "<span class='kasen'>うち<\/span>の社長は何かとやかましくてかなわない。";
Q[11].Ans[2] = "今日の<span class='kasen'>うち<\/span>にこの仕事を片付けてしまおう。";
Q[11].Ans[3] = "<span class='kasen'>うち<\/span>にこもっていて聞きとりにくい声だな。";
Q[11].comment = "問題文の「うち」は〈家〉の意味。";

Q[12].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ぎり〕…<span class='kasen'>ぎり<\/span>と人情は、日本社会で重視される伝統的な価値観だ。。";
Q[12].Ans[0] = "世話になった人に<span class='kasen'>ぎり<\/span>を欠くようではいけない";
Q[12].Ans[1] = "彼女は僕の<span class='kasen'>ぎり<\/span>の妹です。";
Q[12].Ans[2] = "今年もたくさん<span class='kasen'>ぎり<\/span>チョコをもらいました。";
Q[12].Ans[3] = "好きで出席したわけではなく、<span class='kasen'>ぎりで参加することになっただけだ。";
Q[12].comment = "問題文の「ぎり（義理）」は〈人間関係についての道徳的なルール〉の意味。「ぎりチョコ」「ぎりで参加」は〈つきあいで仕方がなく〉の意味。";

Q[13].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔さす〕…ハチは一度<span class='kasen'>さし<\/span>たら死ぬと言います。。";
Q[13].Ans[0] = "肌を<span class='kasen'>さす<\/span>ような寒さだ。";
Q[13].Ans[1] = "天窓から光が<span class='kasen'>さし<\/span>こんでくる。";
Q[13].Ans[2] = "話に水を<span class='kasen'>さす<\/span>ようなことをいうなよ。";
Q[13].Ans[3] = "大統領に名<span class='kasen'>ざし<\/span>で批判された。";
Q[13].comment = "問題文の「さす」は『刺す』と書く。「肌を刺す」「光が差しこんで」「水を差す」「名指しで」となる。";

Q[14].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔おかす〕…一度も過ちを<span class='kasen'>おかした<\/span>ことない人間なんて逆に信用できない。。";
Q[14].Ans[0] = "法を<span class='kasen'>おかせ<\/span>ば罪になり、罪になれば罰を受けるだろう。";
Q[14].Ans[1] = "危険を<span class='kasen'>おかす<\/span>ことなく成功できるわけがない。";
Q[14].Ans[2] = "テロ以降のアメリカでは、表現の自由が<span class='kasen'>おかされて<\/span>いる。";
Q[14].Ans[3] = "領空を<span class='kasen'>おかす<\/span>航空機に対しては、攻撃をする権利がある。";
Q[14].comment = "問題文の「おかす」は『犯す』と書く。「法を犯せば」「危険を冒す」「自由が侵されて」「領空を侵す」と書く。";

Q[15].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うつす〕…資金を海外に<span class='kasen'>うつす<\/span>。";
Q[15].Ans[0] = "ベッドを部屋の隅に<span class='kasen'>うつす<\/span>。";
Q[15].Ans[1] = "顔を鏡に<span class='kasen'>うつす<\/span>。";
Q[15].Ans[2] = "テレビを<span class='kasen'>うつす<\/span>。";
Q[15].Ans[3] = "風景を写真に<span class='kasen'>うつす<\/span>。";
Q[15].comment = "問題文の「うつす」は〈物を別のところに動かす〉意味で『移す』と書く。他は「鏡に映す」「テレビを映す」「写真に写す」となる。";

Q[16].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うつす〕…黒板をノートに<span class='kasen'>うつす<\/span>。";
Q[16].Ans[0] = "大学の住所と電話番号を手帳に<span class='kasen'>うつす<\/span>。";
Q[16].Ans[1] = "これは国宝の大皿を<span class='kasen'>うつした<\/span>ものです。";
Q[16].Ans[2] = "山の紅葉をデジカメで<span class='kasen'>うつした<\/span>";
Q[16].Ans[3] = "この絵はがきは、台北の夜景を<span class='kasen'>うつした<\/span>ものです。";
Q[16].comment = "問題文の「うつす」は〈同じように書く、コピーする〉意味。「大皿をうつした」は〈まねをした〉、「デジカメでうつした」「夜景をうつした」は〈写真にとる〉意味。";

Q[17].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔きく〕…iPodで音楽を<span class='kasen'>きく<\/span>のが楽しみです。";
Q[17].Ans[0] = "昨日の夜は、ラジオを<span class='kasen'>きいて<\/span>いた。";
Q[17].Ans[1] = "おじいさんに、駅がどこにあるのか<span class='kasen'>きいた<\/span>。";
Q[17].Ans[2] = "昔は、よくいうことを<span class='kasen'>きく<\/span>子供だったのに。";
Q[17].Ans[3] = "<span class='kasen'>きいて<\/span>いるかと思いますが、午後から会議です。";
Q[17].comment = "問題文の「きく」は〈音を感じる〉意味。「どこにあるのかきいた」は〈質問する〉、「いうことをきく」は〈聞き入れる〉、「きいている〜」は〈情報を知っている〉意味である。";

Q[18].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うつ〕…ラケットでボールを<span class='kasen'>うつ<\/span>。";
Q[18].Ans[0] = "浮気をした相手を平手で<span class='kasen'>うった<\/span>。";
Q[18].Ans[1] = "森の中で大きな野生の鹿を<span class='kasen'>うった<\/span>。";
Q[18].Ans[2] = "話しながら歩いていたら看板で頭を<span class='kasen'>うった<\/span>。";
Q[18].Ans[3] = "友人の結婚式に祝電を<span class='kasen'>うつ<\/span>。";
Q[18].comment = "問題文の「うつ（打つ）」は〈強くたたく〉意味。";

Q[19].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ひく〕…５から３を<span class='kasen'>ひくと<\/span>残りは２です。";
Q[19].Ans[0] = "すでに手数料の分は<span class='kasen'>ひいて<\/span>あります。";
Q[19].Ans[1] = "風邪を<span class='kasen'>ひいて<\/span>、週末は寝ていました。";
Q[19].Ans[2] = "苗を植えるため、用水路から水を<span class='kasen'>ひく<\/span>。";
Q[19].Ans[3] = "納豆は混ぜれば混ぜるほど糸を<span class='kasen'>ひきます<\/span>。";
Q[19].comment = "問題文の「ひく（引く）」は〈減算する、マイナスする〉の意味。";

Q[20].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔さげる〕…もう少し車を<span class='kasen'>さげて<\/span>ほしいのですが。";
Q[20].Ans[0] = "ライトの位置を<span class='kasen'>さげた<\/span>方がいいでしょう。";
Q[20].Ans[1] = "彼はいつも大きな鞄を<span class='kasen'>さげて<\/span>いる。";
Q[20].Ans[2] = "熱を<span class='kasen'>さげる<\/span>ために薬を服用する。";
Q[20].Ans[3] = "量を減らすか質を<span class='kasen'>さげる<\/span>かしかない。";
Q[20].comment = "問題文の「さげる」は〈後ろへ動かす〉意味。";

Q[21].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔あげる〕…車庫のシャッターを<span class='kasen'>あげる<\/span>音が聞こえる。";
Q[21].Ans[0] = "とりあえず荷物をテーブルに<span class='kasen'>あげる<\/span>。";
Q[21].Ans[1] = "寒くなったのでエアコンの設定温度を<span class='kasen'>あげる<\/span>。";
Q[21].Ans[2] = "来年から手当を少し<span class='kasen'>あげる<\/span>ことにする。";
Q[21].Ans[3] = "テレビのボリュームを２つ<span class='kasen'>あげる<\/span>。";
Q[21].comment = "問題文の「あげる」は〈物を上方に移動させる〉意味。";

Q[22].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔あげる〕…一つ一つ例を<span class='kasen'>あげて<\/span>説明する。";
Q[22].Ans[0] = "新しい委員長の候補に<span class='kasen'>あげられて<\/span>いる。";
Q[22].Ans[1] = "今年度は昨年度以上の利益を<span class='kasen'>あげた<\/span>。";
Q[22].Ans[2] = "逃亡した犯人の追跡に全力を<span class='kasen'>あげる<\/span>。";
Q[22].Ans[3] = "ハワイで結婚式を<span class='kasen'>あげた<\/span>ということだ。";
Q[22].comment = "問題文の「あげる」は〈特にはっきりと示す〉という意味。";

Q[23].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔もと〕…町はようやく<span class='kasen'>もと<\/span>の姿に戻った。";
Q[23].Ans[0] = "彼女は<span class='kasen'>もと<\/span>の恋人だ。";
Q[23].Ans[1] = "晴天の<span class='kasen'>もと<\/span>、運動会が行われた。";
Q[23].Ans[2] = "桜の<span class='kasen'>もと<\/span>で酒盛りをする。";
Q[23].Ans[3] = "学生時代の恩師の<span class='kasen'>もと<\/span>を訪ねる。";
Q[23].comment = "問題文の「もと」は〈以前の〉の意味。";

Q[24].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔さける〕…混雑を<span class='kasen'>さける<\/span>ために時間を変える。";
Q[24].Ans[0] = "複雑な問題はできれば<span class='kasen'>さけたい<\/span>。";
Q[24].Ans[1] = "地震で地面が<span class='kasen'>さけて<\/span>いるところがある。";
Q[24].Ans[2] = "落雷で大木の幹が二つに<span class='kasen'>さけた<\/span>。";
Q[24].Ans[3] = "無理に入れようとしたら袋が<span class='kasen'>さけて<\/span>しまった。";
Q[24].comment = "問題文の「さける」は〈関わりがないようにする〉意味で『避ける』と書く。他はすべて「裂ける」と書くもの。";

Q[25].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔さわる〕…<span class='kasen'>さわって<\/span>みるとヌルッとしか感じがした。";
Q[25].Ans[0] = "はじめてパソコンにさわったのは20年前です。";
Q[25].Ans[1] = "あまり無理をすると体にさわります。";
Q[25].Ans[2] = "もし気にさわったら許してほしいのですが。";
Q[25].Ans[3] = "いま休止するといろいろとさわりがあるだろう。";
Q[25].comment = "問題文の「さわる」は〈体を接触する〉意味で『触る』と書く。その他は『障る』と書くもの。";

Q[26].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ごはん〕…人間は<span class='kasen'>ごはん<\/span>のためだけに働くのではありません。";
Q[26].Ans[0] = "朝はきちんと<span class='kasen'>ごはん<\/span>を食べた方がいい。";
Q[26].Ans[1] = "梅干しは<span class='kasen'>ごはん<\/span>によく合います。";
Q[26].Ans[2] = "昔は、白い<span class='kasen'>ごはん<\/span>がぜいたくだった。";
Q[26].Ans[3] = "<span class='kasen'>ごはん<\/span>に納豆をかけて食べる。";
Q[26].comment = "問題文の「ごはん」は〈食事〉の意味。他はすべて〈米を調理したもの〉の意味である。";

Q[27].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔そう〕…川に<span class='kasen'>そう<\/span>ように道が続いている。";
Q[27].Ans[0] = "海岸線に<span class='kasen'>そって<\/span>砂浜が続いている。";
Q[27].Ans[1] = "希望に<span class='kasen'>そえない<\/span>結果となりました。";
Q[27].Ans[2] = "親子３人が<span class='kasen'>そう<\/span>ようにして寝ている。";
Q[27].Ans[3] = "趣旨に<span class='kasen'>そわない<\/span>内容ならば禁止です。";
Q[27].comment = "問題文の「そう」は『沿う』と書く。他は『添う』と書くものである。";

Q[28].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たす〕…もう少し塩を<span class='kasen'>たす<\/span>方がおいしい。";
Q[28].Ans[0] = "もっと内容を<span class='kasen'>たさない<\/span>と会議を通過しないだろう。";
Q[28].Ans[1] = "ふたりの収入を<span class='kasen'>たす<\/span>と１億円になる。";
Q[28].Ans[2] = "散歩にでかけたついでに用を<span class='kasen'>たす<\/span>。";
Q[28].Ans[3] = "３<span class='kasen'>たす<\/span>２がどうして６になるんだ。";
Q[28].comment = "問題文の「たす」は〈（同じものを）追加する〉意味。";

Q[29].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たつ〕…成田を<span class='kasen'>たって<\/span>からもう５時間になる。";
Q[29].Ans[0] = "朝早くホテルを<span class='kasen'>たち<\/span>、名所を見物する。";
Q[29].Ans[1] = "先月、家の隣にコンビニが<span class='kasen'>たった<\/span>。";
Q[29].Ans[2] = "終始チャンピオンが優位に<span class='kasen'>たつ<\/span>展開だった。";
Q[29].Ans[3] = "彼女が台湾にきてからもう７年が<span class='kasen'>たつ<\/span>。";
Q[29].comment = "問題文の「たつ」は〈出発する〉意味である。";

Q[30].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たつ〕…海に白い波が<span class='kasen'>たつ<\/span>。";
Q[30].Ans[0] = "棚を動かすとほこりが<span class='kasen'>たった<\/span>。";
Q[30].Ans[1] = "次の総選挙に<span class='kasen'>たつ<\/span>ことになった。";
Q[30].Ans[2] = "舞台に<span class='kasen'>たつ<\/span>と、いつでも緊張する。";
Q[30].Ans[3] = "話の途中で席を<span class='kasen'>たつ<\/span>のは良くない。";
Q[30].comment = "問題文の「たつ」は〈物が上に移動する現象が生じる〉意味。";

Q[31].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たてる〕…傘を<span class='kasen'>たてる<\/span>。";
Q[31].Ans[0] = "アンテナを<span class='kasen'>たてる<\/span>。";
Q[31].Ans[1] = "お茶を<span class='kasen'>たてる<\/span>。";
Q[31].Ans[2] = "うわさを<span class='kasen'>たてる<\/span>。";
Q[31].Ans[3] = "計画を<span class='kasen'>たてる<\/span>。";
Q[31].comment = "問題文の「たてる」は〈物を垂直に置く〉意味。";

Q[32].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たとえ〕…<span class='kasen'>たとえ<\/span>だとしても、もう少し何かありそうなものだ。";
Q[32].Ans[0] = "<span class='kasen'>たとえ<\/span>が下手だと意味がわからなくなる。";
Q[32].Ans[1] = "<span class='kasen'>たとえ<\/span>冗談でも、そんなことを言うものではない。";
Q[32].Ans[2] = "<span class='kasen'>たとえ<\/span>殺されても仲間を売ることはできない。";
Q[32].Ans[3] = "<span class='kasen'>たとえ<\/span>全員が反対しても、やめる気はない。";
Q[32].comment = "問題文の「たとえ」は名詞である。他の「たとえ」は副詞である。";

Q[33].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔つとめる〕…古文書の解読に<span class='kasen'>つとめる<\/span>。";
Q[33].Ans[0] = "大学は学問に<span class='kasen'>つとめる<\/span>ところであう。";
Q[33].Ans[1] = "２期８年間、地元の市長を<span class='kasen'>つとめた<\/span>。";
Q[33].Ans[2] = "会議では交代で議長を<span class='kasen'>つとめる<\/span>ことになっている。";
Q[33].Ans[3] = "妹は大学に教員として<span class='kasen'>つとめて<\/span>いる。";
Q[33].comment = "問題文の「つとめる」は〈努力する〉意味で『努める』と書く。他は「市長を務める／勤める」「議長を務める」「教員として勤める」となる。";

Q[34].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔うつる〕…もっと大きなマンションに<span class='kasen'>うつる<\/span>予定だ。";
Q[34].Ans[0] = "４才のとき、ブラジルから日本に<span class='kasen'>うつって<\/span>きた。";
Q[34].Ans[1] = "ときが<span class='kasen'>うつる<\/span>のはとても早いものです。";
Q[34].Ans[2] = "あまり近づくと病気が<span class='kasen'>うつります<\/span>よ。";
Q[34].Ans[3] = "来週の授業から、次の課に<span class='kasen'>うつります<\/span>。";
Q[34].comment = "問題文の「うつる」は〈人や物が移動する〉意味。他は「ときが〜」は〈経過する〉、「病気が〜」は〈感染する〉、「次の課に〜」は〈次に進む〉意味。";

Q[35].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔なおす〕…間違った文字を<span class='kasen'>なおす<\/span>。";
Q[35].Ans[0] = "フォームの欠点を<span class='kasen'>なおす<\/span>。";
Q[35].Ans[1] = "英語を日本語に<span class='kasen'>なおす<\/span>。";
Q[35].Ans[2] = "車の故障を<span class='kasen'>なおす<\/span>。";
Q[35].Ans[3] = "着物の乱れを<span class='kasen'>なおす<\/span>。";
Q[35].comment = "問題文の「なおす」は〈修正する〉意味。「日本語に〜」は〈置き換える〉、「故障を〜」は〈修理する〉、「乱れを〜」は〈ととのえる〉意味である。";

Q[36].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔なく〕…前大会では１点に<span class='kasen'>ないた<\/span>。";
Q[36].Ans[0] = "一円を笑うものは一円に<span class='kasen'>なく<\/span>という言葉がある。";
Q[36].Ans[1] = "偽装をするなど、店の名前が<span class='kasen'>なく<\/span>というものだ。";
Q[36].Ans[2] = "彼は「女と子供はすぐに<span class='kasen'>なく<\/span>」といっている。";
Q[36].Ans[3] = "「全米が<span class='kasen'>ないた<\/span>」というコピーにはもう飽きた。";
Q[36].comment = "問題文の「なく」は〈つらい思いをする〉意味。";

Q[37].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔とる〕…寿司の出前を<span class='kasen'>とる<\/span>。";
Q[37].Ans[0] = "家では『毎日新聞』を<span class='kasen'>とって<\/span>いる。";
Q[37].Ans[1] = "スピーチコンテストで笑いを<span class='kasen'>とる<\/span>。";
Q[37].Ans[2] = "朝食は毎日<span class='kasen'>とる<\/span>ようにしなさい。";
Q[37].Ans[3] = "お客さんに飲み物の注文を<span class='kasen'>とる<\/span>。";
Q[37].comment = "問題文の「とる」は〈買って配達してもらう〉意味である。";

Q[38].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔とる〕…人様のものを<span class='kasen'>とる<\/span>ような子に育てた覚えはない。";
Q[38].Ans[0] = "電車の中で財布を<span class='kasen'>とられた<\/span>。";
Q[38].Ans[1] = "デビュー１年でタイトルを<span class='kasen'>とる<\/span>。";
Q[38].Ans[2] = "研修の前に誓約書を<span class='kasen'>とる<\/span>。";
Q[38].Ans[3] = "人質を<span class='kasen'>とって<\/span>銀行に立てこもる。";
Q[38].comment = "問題文の「とる」は〈盗(ぬす)む〉意味。";

Q[39].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ぬく〕…誕生日に高価なワインを<span class='kasen'>ぬく<\/span>。";
Q[39].Ans[0] = "コンセントからテレビの電源を<span class='kasen'>ぬく<\/span>。";
Q[39].Ans[1] = "１区間で５人の選手を<span class='kasen'>ぬいた<\/span>。";
Q[39].Ans[2] = "バスタブのお湯を<span class='kasen'>ぬく<\/span>。";
Q[39].Ans[3] = "トランプを１枚選んで<span class='kasen'>ぬく<\/span>。";
Q[39].comment = "問題文の「ぬく（抜く）」は〈物を引いて取り除く〉意味。「ワインのコルクを〜」「ワインの栓(せん)を〜」ということである。";

Q[40].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ならう〕…お茶とお花を<span class='kasen'>ならう<\/span>。";
Q[40].Ans[0] = "教習所で運転を<span class='kasen'>ならって<\/span>いる。";
Q[40].Ans[1] = "過去の例に<span class='kasen'>ならって<\/span>判断する。";
Q[40].Ans[2] = "古代壁画に<span class='kasen'>ならって<\/span>描いた絵です。";
Q[40].Ans[3] = "すぐ右へ<span class='kasen'>ならえ<\/span>をする国民性だ。";
Q[40].comment = "問題文の「ならう（習う）」は〈技術を教わる〉という意味。他はすべて〈マネをする〉意味である（倣う）。";

Q[41].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔わける〕…夫婦で財産を<span class='kasen'>わける<\/span>ことにした。";
Q[41].Ans[0] = "１杯のラーメンをふたりで<span class='kasen'>わけて<\/span>食べる。";
Q[41].Ans[1] = "DVDをシリーズごとに<span class='kasen'>わけて<\/span>並べる。";
Q[41].Ans[2] = "彼女は真ん中から髪の毛を<span class='kasen'>わけて<\/span>いる。";
Q[41].Ans[3] = "借金を５回に<span class='kasen'>わけて<\/span>返済することにした。";
Q[41].comment = "問題文の「わける」は〈分配する、配分する〉の意味。";

Q[42].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔へる〕…日本を<span class='kasen'>へて<\/span>ハワイに向かう。";
Q[42].Ans[0] = "会議を<span class='kasen'>へて<\/span>正式な決定となる。";
Q[42].Ans[1] = "長い年月を<span class='kasen'>へる<\/span>ことで今の色合いになった。";
Q[42].Ans[2] = "いくら食べてもおなかが<span class='kasen'>へる<\/span>。";
Q[42].Ans[3] = "長く使っていると横の部分が<span class='kasen'>へる<\/span>。";
Q[42].comment = "問題文の「へる（経る）」は〈通過する〉意味である。";

Q[43].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔まえ〕…ここに引っ越してきたのは３年<span class='kasen'>まえ<\/span>のことだ。";
Q[43].Ans[0] = "彼のことを<span class='kasen'>まえ<\/span>から知っていたわけではない。";
Q[43].Ans[1] = "本人を<span class='kasen'>まえ<\/span>にすると言いづらいこともある。";
Q[43].Ans[2] = "よく売れる商品を<span class='kasen'>まえ<\/span>の列にうつす。";
Q[43].Ans[3] = "風呂より食事を<span class='kasen'>まえ<\/span>にする。";
Q[43].comment = "問題文の「まえ」は〈〜より以前、昔〉の意味。なお、「風呂より食事を〜」は〈順番〉を意味する。";

Q[44].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔みる〕…トイレで新聞を<span class='kasen'>みる<\/span>。";
Q[44].Ans[0] = "ウェブページを<span class='kasen'>みて<\/span>情報を集める。";
Q[44].Ans[1] = "美術館でユトリロの絵を<span class='kasen'>みる<\/span>。";
Q[44].Ans[2] = "シチューの味を<span class='kasen'>みて<\/span>ほしいんだけど。";
Q[44].Ans[3] = "相手の反応を<span class='kasen'>みて<\/span>から対応を決める。";
Q[44].comment = "問題文の「みる」は〈読む、読みとる〉意味である。";

Q[45].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔れい〕…最後にもう一度<span class='kasen'>れい<\/span>をしてから下がります。";
Q[45].Ans[0] = "相手の前で深く<span class='kasen'>れい<\/span>をする。";
Q[45].Ans[1] = "<span class='kasen'>れい<\/span>を尽くして客人を迎える。";
Q[45].Ans[2] = "世話になった人に<span class='kasen'>れい<\/span>を言う。";
Q[45].Ans[3] = "<span class='kasen'>れい<\/span>を重視する文化があった。";
Q[45].comment = "問題文の「れい（礼）」は〈おじぎ、頭を下げる〉の意味。";

Q[46].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔わる〕…オムレツを作るために卵を<span class='kasen'>わる<\/span>。";
Q[46].Ans[0] = "ボールをぶつけてガラスを<span class='kasen'>わる<\/span>。";
Q[46].Ans[1] = "料金を人数で<span class='kasen'>わる<\/span>とひとり１万円になる。";
Q[46].Ans[2] = "バーボンをソーダで<span class='kasen'>わって<\/span>飲む。";
Q[46].Ans[3] = "大きな部屋をふたつに<span class='kasen'>わって<\/span>使う。";
Q[46].comment = "問題文の「わる」は〈壊していくつかの部分に分ける〉意味。";

Q[47].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔のぞむ〕…ホテルは、広場に<span class='kasen'>のぞむ<\/span>絶好の立地だ。";
Q[47].Ans[0] = "湖に<span class='kasen'>のぞむ<\/span>窓から美しい景色が見える。";
Q[47].Ans[1] = "食堂からは日本海を<span class='kasen'>のぞむ<\/span>ことができる。";
Q[47].Ans[2] = "問題の一刻も早い解決を<span class='kasen'>のぞむ<\/span>。";
Q[47].Ans[3] = "みな大会の成功を<span class='kasen'>のぞんで<\/span>おります。";
Q[47].comment = "問題文の「のぞむ」は〈向かい合う〉意味で『臨む』と書く。";

Q[48].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔のせる〕…スコアを60台に<span class='kasen'>のせる<\/span>。";
Q[48].Ans[0] = "80％合格のレベルに<span class='kasen'>のせる<\/span>。";
Q[48].Ans[1] = "イラストをウェブに<span class='kasen'>のせる<\/span>。";
Q[48].Ans[2] = "彼女を車に<span class='kasen'>のせて<\/span>病院に運ぶ。";
Q[48].Ans[3] = "口車に<span class='kasen'>のせる<\/span>くらい簡単だ。";
Q[48].comment = "問題文の「のせる」は〈基準となる数やレベルに到達させる〉意味。";

Q[49].Quest = "〔〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔とく〕…ひもを<span class='kasen'>とく<\/span>。";
Q[49].Ans[0] = "引越の荷を<span class='kasen'>とく<\/span>。";
Q[49].Ans[1] = "卵をはしで<span class='kasen'>とく<\/span>。";
Q[49].Ans[2] = "人のみちを<span class='kasen'>とく<\/span>。";
Q[49].Ans[3] = "くしで髪を<span class='kasen'>とく<\/span>。";
Q[49].comment = "問題文の「とく（解く）」は〈結んであるものや包んであるものをほどく〉意味である。";

Q[50].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔かさなる〕…悪いことは<span class='kasen'>かさなる<\/span>ものだ。";
Q[50].Ans[0] = "印刷が<span class='kasen'>かさなって<\/span>いて読みづらい。";
Q[50].Ans[1] = "２枚の写真はぴたりと<span class='kasen'>かさなった<\/span>。";
Q[50].Ans[2] = "机の上に本が<span class='kasen'>かさねてある<\/span>。";
Q[50].Ans[3] = "いくつも足跡が<span class='kasen'>かさなっている<\/span>。";
Q[50].comment = "問題文の「かさなる（重なる）」は〈同じ種類の事柄が付け加わる〉の意味である。『ぴたりと重なった』は〈一致する〉意味、他は〈層状になっている〉意味である。";

Q[51].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔すすむ〕…すべて予定どおりに<span class='kasen'>すすんでいる<\/span>。";
Q[51].Ans[0] = "郊外でビルの建設が<span class='kasen'>すすむ<\/span>。";
Q[51].Ans[1] = "大学を卒業して、大学院に<span class='kasen'>すすむ<\/span>。";
Q[51].Ans[2] = "チームは２回戦に<span class='kasen'>すすんだ<\/span>。";
Q[51].Ans[3] = "ヨーロッパは、環境問題への取り組みが<span class='kasen'>すすんでいる<\/span>。";
Q[51].comment = "問題文の「すすむ（進む）」は〈物事が順調に進行する〉意味である。";

Q[52].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔すれる〕…台湾の学生は、日本ほど<span class='kasen'>すれて<\/span>いない。";
Q[52].Ans[0] = "都会暮らしで、すっかり<span class='kasen'>すれて<\/span>しまった。";
Q[52].Ans[1] = "日焼けのあとに服が<span class='kasen'>すれる<\/span>だけでも痛い。";
Q[52].Ans[2] = "カーテンが<span class='kasen'>すれる<\/span>音がする。";
Q[52].Ans[3] = "新しい靴で、足が<span class='kasen'>すれて<\/span>しまった。";
Q[52].comment = "問題文の「すれる」は〈世間に慣れて性格が悪くなる〉の意味である。";

Q[53].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔性格〕…厳しい対処が必要な<span class='kasen'>性格<\/span>の事件だったと思う。";
Q[53].Ans[0] = "大学は公的な<span class='kasen'>性格<\/span>を持つ組織である。";
Q[53].Ans[1] = "彼女とは<span class='kasen'>性格<\/span>が合わなかったようだ。";
Q[53].Ans[2] = "昔からの<span class='kasen'>性格<\/span>だから、簡単には変わらない。";
Q[53].Ans[3] = "陳くんはとても<span class='kasen'>性格<\/span>の良い男の子です。";
Q[53].comment = "問題文の「性格」は〈物事の性質〉の意味である。";

Q[54].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔せまる〕…期日が目前に<span class='kasen'>せまっている<\/span>。";
Q[54].Ans[0] = "競技場に歴史的瞬間が<span class='kasen'>せまる<\/span>。";
Q[54].Ans[1] = "事件の真相に<span class='kasen'>せまる<\/span>。";
Q[54].Ans[2] = "世界記録に<span class='kasen'>せまる<\/span>記録で優勝した。";
Q[54].Ans[3] = "強い調子で契約を<span class='kasen'>せまる<\/span>。";
Q[54].comment = "問題文の「せまる（迫る）」は〈ある時間に近づく〉の意味である。";

Q[55].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔そこなう〕…タバコは、あなたの健康を<span class='kasen'>そこなう<\/span>おそれがあります。";
Q[55].Ans[0] = "交渉では、相手の感情を<span class='kasen'>そこなう<\/span>ことがあってはならない。";
Q[55].Ans[1] = "高層ビルの建設は、景観を<span class='kasen'>そこなう<\/span>ものだ。";
Q[55].Ans[2] = "今回の出来事で、信頼関係を<span class='kasen'>そこなう<\/span>結果となった。";
Q[55].Ans[3] = "この対策では、逆に、安全を<span class='kasen'>そこない<\/span>かねない。";
Q[55].comment = "問題文の「そこなう（損なう）」は〈害する、健康や気分を悪い状態にする〉の意味である。";

Q[56].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔トップ〕…会社の<span class='kasen'>トップ<\/span>にはふさわしくない人物だ。";
Q[56].Ans[0] = "<span class='kasen'>トップ<\/span>の座を息子にゆずる。";
Q[56].Ans[1] = "新聞の<span class='kasen'>トップ<\/span>記事になった。";
Q[56].Ans[2] = "好記録で<span class='kasen'>トップ<\/span>に立った。";
Q[56].Ans[3] = "彼女の成績は学年で<span class='kasen'>トップ<\/span>だ。";
Q[56].comment = "問題文の「トップ」は〈社長などの組織で最上位の役職〉の意味である。";

Q[57].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔たつ〕…トイレに<span class='kasen'>たつ<\/span>。";
Q[57].Ans[0] = "テストの途中で席を<span class='kasen'>たって<\/span>はいけない。";
Q[57].Ans[1] = "中庭には、大きな木が<span class='kasen'>たっている<\/span>。";
Q[57].Ans[2] = "歌手としてステージに<span class='kasen'>たつ<\/span>。";
Q[57].Ans[3] = "娘が<span class='kasen'>たって<\/span>歩けるようになりました。";
Q[57].comment = "問題文の「たつ（立つ）」は〈その場を離れる〉の意味である。";

Q[58].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ちる〕…参加者は、イベントが終わると再び全国に<span class='kasen'>ちった<\/span>。";
Q[58].Ans[0] = "貴族たちのコレクションも、今では世界中に<span class='kasen'>ちっている<\/span>。";
Q[58].Ans[1] = "もらった薬を飲むと、ウソのように傷みが<span class='kasen'>ちった<\/span>。";
Q[58].Ans[2] = "割れたガラスの破片が<span class='kasen'>ちっている<\/span>ので気をつけて。";
Q[58].Ans[3] = "桜の花が<span class='kasen'>ちる<\/span>季節となった。";
Q[58].comment = "問題文の「ちる（散る）」は〈バラバラになる、別れ別れになる〉の意味である。";

Q[59].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔つよい〕…日本人にしては胃腸が<span class='kasen'>つよい<\/span>。";
Q[59].Ans[0] = "この服は、<span class='kasen'>つよい<\/span>繊維でできている。";
Q[59].Ans[1] = "台風で<span class='kasen'>つよい<\/span>風が吹いている。";
Q[59].Ans[2] = "このお酒はアルコールが<span class='kasen'>つよい<\/span>。";
Q[59].Ans[3] = "意志が<span class='kasen'>つよい<\/span>人だといわれている。";
Q[59].comment = "問題文の「つよい（強い）」は〈丈夫だ〉の意味である。";

Q[60].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔立つ〕…足が疲れて<span class='kasen'>立って<\/span>いられない。";
Q[60].Ans[0] = "大手術から<span class='kasen'>立って<\/span>歩けるまで回復した。";
Q[60].Ans[1] = "広場に掲示が<span class='kasen'>立っている<\/span>。";
Q[60].Ans[2] = "集団の先頭に<span class='kasen'>立って<\/span>引っ張る。";
Q[60].Ans[3] = "風で水面に波が<span class='kasen'>立っている<\/span>。";
Q[60].comment = "問題文の「立つ」は〈足で直立した姿勢をとる〉の意味である。";

Q[61].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔切る〕…寒くなったので、エアコンを<span class='kasen'>切る<\/span>。";
Q[61].Ans[0] = "いつも携帯を<span class='kasen'>切っていて<\/span>連絡がつかない。";
Q[61].Ans[1] = "単語を短く<span class='kasen'>切って<\/span>発音の練習をする。";
Q[61].Ans[2] = "デジカメのシャッターを<span class='kasen'>切った<\/span>。";
Q[61].Ans[3] = "油をよく<span class='kasen'>切る<\/span>と、おいしく食べられます。";
Q[61].comment = "問題文の「切る」は〈電源を落とす、オフにする〉の意味である。";

Q[62].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔ぐあい〕…先日の夜から<span class='kasen'>ぐあい<\/span>が悪い。";
Q[62].Ans[0] = "機械の<span class='kasen'>ぐあい<\/span>を慎重に確かめる。";
Q[62].Ans[1] = "金曜日はちょっと<span class='kasen'>ぐあい<\/span>が悪いです。";
Q[62].Ans[2] = "いつもこんな<span class='kasen'>ぐあい<\/span>にうまくいくとは限らない。";
Q[62].Ans[3] = "何か<span class='kasen'>ぐあい<\/span>の悪いことでもありますか？";
Q[62].comment = "問題文の「ぐあい（具合）」は〈調子、状態〉の意味である。";

Q[63].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔くばる〕…健康に気を<span class='kasen'>くばっている<\/span>。";
Q[63].Ans[0] = "後進の育成に心を<span class='kasen'>くばる<\/span>。";
Q[63].Ans[1] = "みんなにトランプを<span class='kasen'>くばった<\/span>。";
Q[63].Ans[2] = "年賀状を<span class='kasen'>くばる<\/span>バイトをする。";
Q[63].Ans[3] = "問題と解答用紙を<span class='kasen'>くばる<\/span>。";
Q[63].comment = "問題文の「くばる（配る）」は〈注意する、気にする〉の意味である。";

Q[64].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔空気〕…彼女の発言で、会場は微妙な<span class='kasen'>空気<\/span>になった。";
Q[64].Ans[0] = "もう少し<span class='kasen'>空気<\/span>を読んでください。";
Q[64].Ans[1] = "新鮮な<span class='kasen'>空気<\/span>を吸いに山に出かける。";
Q[64].Ans[2] = "高校時代の彼女は<span class='kasen'>空気<\/span>のような存在でした。";
Q[64].Ans[3] = "人間は<span class='kasen'>空気<\/span>なしでは生きてゆけない。";
Q[64].comment = "問題文の「空気」は〈場の雰囲気〉の意味である。";

Q[65].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔おこす〕…ヘビが頭を<span class='kasen'>おこして<\/span>獲物を狙っている。";
Q[65].Ans[0] = "ベッドから上半身だけを<span class='kasen'>おこす<\/span>。";
Q[65].Ans[1] = "昔は石を打って火を<span class='kasen'>おこしていた<\/span>。";
Q[65].Ans[2] = "あまり問題を<span class='kasen'>おこすな<\/span>よ。";
Q[65].Ans[3] = "アメリカ人はすぐ裁判を<span class='kasen'>おこす<\/span>。";
Q[65].comment = "問題文の「おこす（起こす）」は〈寝た状態から頭や体を縦にする〉の意味である。";

Q[66].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔工作〕…政界に<span class='kasen'>工作<\/span>をする。";
Q[66].Ans[0] = "敵国に<span class='kasen'>工作<\/span>員を送り込む。";
Q[66].Ans[1] = "夏休みの宿題の<span class='kasen'>工作<\/span>をする。";
Q[66].Ans[2] = "牛乳パックで作った<span class='kasen'>工作<\/span>です。";
Q[66].Ans[3] = "不器用なので<span class='kasen'>工作<\/span>は苦手です。";
Q[66].comment = "問題文の「工作」は〈目的を果たすための計画的な行動〉の意味である。";

Q[67].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔コーナー〕…バーゲン<span class='kasen'>コーナー<\/span>には人が多い。";
Q[67].Ans[0] = "子供服の<span class='kasen'>コーナー<\/span>はどこですか？";
Q[67].Ans[1] = "最終<span class='kasen'>コーナー<\/span>で転倒してしまった。";
Q[67].Ans[2] = "このコースは<span class='kasen'>コーナー<\/span>がきつい。";
Q[67].Ans[3] = "アウト<span class='kasen'>コーナー<\/span>を狙って投球する。";
Q[67].comment = "問題文の「コーナー」は〈区画〉の意味である。";

Q[68].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔さびしい〕…<span class='kasen'>さびしい<\/span>町でもコンビニくらいはある。";
Q[68].Ans[0] = "昼はにぎやかでも、夜は<span class='kasen'>さびしく<\/span>なる。";
Q[68].Ans[1] = "陳くんがいないととても<span class='kasen'>さびしい<\/span>。";
Q[68].Ans[2] = "財布の中がだいぶ<span class='kasen'>さびしく<\/span>なった。";
Q[68].Ans[3] = "最近、髪の毛が<span class='kasen'>さびしい<\/span>。";
Q[68].comment = "問題文の「さびしい」は〈人が少なくて活気がない〉の意味である。";

Q[69].Quest = "〔 〕の言葉が、次の文と最も近い意味で使われている文を選びなさい。<br>〔姿勢〕…<span class='kasen'>姿勢<\/span>が悪いと腰を痛めます。。";
Q[69].Ans[0] = "机に向かうときは<span class='kasen'>姿勢<\/span>を正しなさい。";
Q[69].Ans[1] = "何事にも熱心に取り組む<span class='kasen'>姿勢<\/span>が評価された。";
Q[69].Ans[2] = "政治に対する<span class='kasen'>姿勢<\/span>がまるで違う。";
Q[69].Ans[3] = "<span class='kasen'>姿勢<\/span>は低いが、良い印象は持てない。";
Q[69].comment = "問題文の「姿勢」は〈体の構え〉の意味である。";