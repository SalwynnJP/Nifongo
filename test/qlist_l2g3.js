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

Q[0].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔契機〕";
Q[0].Ans[0] = "結婚を<span class='kasen'>契機<\/span>に独立し、今の店を開いたということだ。";
Q[0].Ans[1] = "重要な<span class='kasen'>契機<\/span>なので、よく考えてから署名すべきだ。";
Q[0].Ans[2] = "チャンスは少ないので、これを<span class='kasen'>契機<\/span>したいと思う。";
Q[0].Ans[3] = "最近、だいぶ<span class='kasen'>契機<\/span>が回復してきたように思われる。";
Q[0].comment = "『契機』は〈きっかけ、物事を始める時機〉という意味。";

Q[1].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ごえんりょなく〕";
Q[1].Ans[0] = "Ａ「いただきます。」Ｂ「<span class='kasen'>ごえんりょなく<\/span>。」";
Q[1].Ans[1] = "Ａ「おかげさまで。」Ｂ「<span class='kasen'>ごえんりょなく<\/span>。」";
Q[1].Ans[2] = "Ａ「いらっしゃいませ。」Ｂ「<span class='kasen'>ごえんりょなく<\/span>。」";
Q[1].Ans[3] = "Ａ「おかけください。」Ｂ「<span class='kasen'>ごえんりょなく<\/span>。」";
Q[1].comment = "『ごえんりょなく（ご遠慮なく）』は〈遠慮しないで〉の意味で、相手に何かをすすめるときなどのあいさつである。";

Q[2].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ぎっしり〕";
Q[2].Ans[0] = "送られてきた箱には、リンゴが<span class='kasen'>ぎっしり<\/span>と詰まっていた。";
Q[2].Ans[1] = "たまには<span class='kasen'>ぎっしり<\/span>した食事をとらないと、活力が出ない。";
Q[2].Ans[2] = "このテーブルは、かなり<span class='kasen'>ぎっしり<\/span>したつくりになっている。";
Q[2].Ans[3] = "どんな小さな仕事でも、<span class='kasen'>ぎっしり<\/span>やらなくてはいけない。";
Q[2].comment = "『ぎっしり』は〈隙間（すきま）がない様子〉を表わす。";

Q[3].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ぜひとも〕";
Q[3].Ans[0] = "<span class='kasen'>ぜひとも<\/span>ご出席ください。";
Q[3].Ans[1] = "<span class='kasen'>ぜひとも<\/span>成功するでしょう。";
Q[3].Ans[2] = "何のことか<span class='kasen'>ぜひとも<\/span>分からない。";
Q[3].Ans[3] = "別に<span class='kasen'>ぜひとも<\/span>思いません。";
Q[3].comment = "『ぜひとも（是非とも）』は『是非』を強調した言い方で〈どうしても、何があっても〉の意味。何かが実現することを強く望むときに用いる表現である。";

Q[4].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔持参（じさん）〕";
Q[4].Ans[0] = "指定された本人確認書類を<span class='kasen'>持参<\/span>しました。";
Q[4].Ans[1] = "学生には、多くの宿題が<span class='kasen'>持参<\/span>されている。";
Q[4].Ans[2] = "明日の朝９時、駅前に<span class='kasen'>持参<\/span>してください。";
Q[4].Ans[3] = "友人は、自宅に車を二台も<span class='kasen'>持参<\/span>している。";
Q[4].comment = "『持参』は〈自分が持っていく、自分が持ってくる〉という意味。";

Q[5].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔対照〕";
Q[5].Ans[0] = "この辞典は、日本語と中国語を<span class='kasen'>対照<\/span>している。";
Q[5].Ans[1] = "あの夫婦は、収入の<span class='kasen'>対照<\/span>がとれていない。";
Q[5].Ans[2] = "あの２人は性格がとても<span class='kasen'>対照<\/span>だ。";
Q[5].Ans[3] = "この製品は成人を<span class='kasen'>対照<\/span>にしている。";
Q[5].comment = "『対照』は〈２つの物を比べる、比べて違いを明らかにする〉という意味。なお、同音語の『対象』『対称』とは意味が異なるので注意すること。";

Q[6].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔おかまいなく〕";
Q[6].Ans[0] = "Ａ「何もありませんが。」Ｂ「<span class='kasen'>おかまいなく<\/span>。」";
Q[6].Ans[1] = "Ａ「おかげさまで。」Ｂ「<span class='kasen'>おかまいなく<\/span>。」";
Q[6].Ans[2] = "Ａ「お気のどくに。」Ｂ「<span class='kasen'>おかまいなく<\/span>。」";
Q[6].Ans[3] = "Ａ「さしつかえありませんが。」Ｂ「<span class='kasen'>おかまいなく<\/span>。」";
Q[6].comment = "『おかまいなく（お構いなく）』は、人の家などを訪れた際に、相手（相手のもてなし）に対して遠慮して言う表現である。";

Q[7].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ぼんやり〕";
Q[7].Ans[0] = "毎日<span class='kasen'>ぼんやり<\/span>と暮している。";
Q[7].Ans[1] = "窓から<span class='kasen'>ぼんやり<\/span>な山が見える。";
Q[7].Ans[2] = "<span class='kasen'>ぼんやり<\/span>した食事をとらないと、活力が出ない。";
Q[7].Ans[3] = "何がしたいのか<span class='kasen'>ぼんやり<\/span>わからない。";
Q[7].comment = "『ぼんやり』は〈はっきり見えない、注意が十分でない、積極的な気持ちがない〉という意味の副詞。「＊ぼんやりな」の形はない。";

Q[8].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔始終（しじゅう）〕";
Q[8].Ans[0] = "<span class='kasen'>始終<\/span>テレビを見ている。";
Q[8].Ans[1] = "あいまいな態度に<span class='kasen'>始終<\/span>している。";
Q[8].Ans[2] = "今日の会議は<span class='kasen'>始終<\/span>終わった。";
Q[8].Ans[3] = "あの人が欠席するのは<span class='kasen'>始終<\/span>のことだ。";
Q[8].comment = "『始終（しじゅう）』は、ここでは〈いつも、ずっと〉の意味の副詞。";

Q[9].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔募集（ぼしゅう）〕";
Q[9].Ans[0] = "日本の大学が1000人の留学生を<span class='kasen'>募集<\/span>している。";
Q[9].Ans[1] = "専門学校の講師のアルバイトに<span class='kasen'>募集<\/span>した。";
Q[9].Ans[2] = "水道工事の料金として百万円を<span class='kasen'>募集<\/span>された。";
Q[9].Ans[3] = "明日の朝９時に、駅前に<span class='kasen'>募集<\/span>してください。";
Q[9].comment = "『募集（ぼしゅう）』は〈希望する人を集めること、人や物・意見などを集めるために広く呼びかける〉という意味。";

Q[10].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔さしつかえない〕";
Q[10].Ans[0] = "この試験では辞書を使っても<span class='kasen'>さしつかえない<\/span>。";
Q[10].Ans[1] = "その問題は私とは何ら<span class='kasen'>さしつかえない<\/span>ものだ。";
Q[10].Ans[2] = "こんな雨だから中止も<span class='kasen'>さしつかえない<\/span>ことだ。";
Q[10].Ans[3] = "この池では釣りをしたら<span class='kasen'>さしつかえない<\/span>きまりだ。";
Q[10].comment = "『さしつかえない（差し支えない）』は〈〜してもよい、〜しても構わない〉の意味。";

Q[11].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔せいぜい〕";
Q[11].Ans[0] = "パーティーの参加者は<span class='kasen'>せいぜい<\/span>10人だろう。";
Q[11].Ans[1] = "彼の給料は<span class='kasen'>せいぜい<\/span>50万円もあるそうだ。";
Q[11].Ans[2] = "このテストでは、<span class='kasen'>せいぜい<\/span>240点ないと合格できない。";
Q[11].Ans[3] = "彼はどんなときも<span class='kasen'>せいぜい<\/span>している。";
Q[11].comment = "『せいぜい（精々）』は、ここでは〈多くても、最大でも〉の意味。";

Q[12].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔等しい〕";
Q[12].Ans[0] = "一足す一は二に<span class='kasen'>等しい<\/span>。";
Q[12].Ans[1] = "ふたりの成績は少し<span class='kasen'>等しい<\/span>と思う。";
Q[12].Ans[2] = "彼はいつも<span class='kasen'>等しい<\/span>努力しかしない。";
Q[12].Ans[3] = "日本では、秋になるとどこでも紅葉が<span class='kasen'>等しい<\/span>。";
Q[12].comment = "『等しい』は〈同じ、イコール〉という意味。";

Q[13].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔積極〕";
Q[13].Ans[0] = "同点だが日本チームの方が<span class='kasen'>積極的<\/span>に攻撃していた。";
Q[13].Ans[1] = "読書や映画鑑賞とは違って、スポーツは<span class='kasen'>積極性<\/span>の活動だ。";
Q[13].Ans[2] = "姉はおとなしいですが、私の性格はとても<span class='kasen'>積極<\/span>だと思います。";
Q[13].Ans[3] = "私の意見では、今の彼には<span class='kasen'>積極<\/span>が欠けていると思う。";
Q[13].comment = "『積極』は『積極的な』の形で使うのが一般的である。";

Q[14].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔発展〕";
Q[14].Ans[0] = "基本だけでなく<span class='kasen'>発展的<\/span>な学習も必要です。";
Q[14].Ans[1] = "経済とは<span class='kasen'>発展な<\/span>ものである。";
Q[14].Ans[2] = "私の性格はかなり<span class='kasen'>発展<\/span>しています。";
Q[14].Ans[3] = "彼の日本語は非常に<span class='kasen'>発展<\/span>した。";
Q[14].comment = "『発展』は〈より高い段階に進む、より勢いが大きくなる〉の意味。「＊発展な」の形はない。";

Q[15].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔整備〕";
Q[15].Ans[0] = "飛行機を<span class='kasen'>整備<\/span>する仕事をしている。";
Q[15].Ans[1] = "10部ほど<span class='kasen'>整備<\/span>に印刷してください。";
Q[15].Ans[2] = "古い書類を<span class='kasen'>整備<\/span>しているときに写真を見つけた。";
Q[15].Ans[3] = "工場の新しい<span class='kasen'>整備<\/span>を買う。";
Q[15].comment = "『整備』は〈いつでも使える状態にする〉という意味。";

Q[16].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔料金〕";
Q[16].Ans[0] = "水道の<span class='kasen'>料金<\/span>を請求された。";
Q[16].Ans[1] = "アルバイトの<span class='kasen'>料金<\/span>をもらった。";
Q[16].Ans[2] = "パンの<span class='kasen'>料金<\/span>が上がっている。";
Q[16].Ans[3] = "兄は社長なので<span class='kasen'>料金<\/span>が高い。";
Q[16].comment = "『料金』は、サービスなどに対して払う一定のお金のこと。「パン」などの商品には使わない（「値段」、「代金」という）。働いて受けとるお金は「給料」、「賃金(ちんぎん＝１級)」という。";

Q[17].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔回復〕";
Q[17].Ans[0] = "環境を<span class='kasen'>回復<\/span>するための努力が続いている。";
Q[17].Ans[1] = "壊れていた飛行機を<span class='kasen'>回復<\/span>した。";
Q[17].Ans[2] = "台北までオートバイで<span class='kasen'>回復<\/span>した。";
Q[17].Ans[3] = "昨日の大雨が<span class='kasen'>回復<\/span>した。";
Q[17].comment = "『回復』は〈物事の悪い状態がもとの良い状態に戻る（／戻す）、病気が治る〉という意味。";

Q[18].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔増大〕";
Q[18].Ans[0] = "工場の生産能力は大きく<span class='kasen'>増大<\/span>した。";
Q[18].Ans[1] = "環境の維持は<span class='kasen'>増大<\/span>な問題だ。";
Q[18].Ans[2] = "書類を<span class='kasen'>増大<\/span>してコピーする。";
Q[18].Ans[3] = "道路の幅を<span class='kasen'>増大<\/span>する工事が行なわれる。";
Q[18].comment = "『増大』は〈数などが大きくなる〉意味。形や大きさを大きくする意味では『拡大』となる。";

Q[19].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔重大〕";
Q[19].Ans[0] = "生活環境の維持は<span class='kasen'>重大<\/span>なテーマだ。";
Q[19].Ans[1] = "工場の生産能力は大きく<span class='kasen'>重大<\/span>している。";
Q[19].Ans[2] = "もっと日本語が<span class='kasen'>重大<\/span>できるようにしたい。";
Q[19].Ans[3] = "兄は背も高く、体も<span class='kasen'>重大<\/span>です。";
Q[19].comment = "『重大』は〈非常に大切である、大きな価値がある〉という意味。";

Q[20].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔信仰（しんこう）〕";
Q[20].Ans[0] = "何を<span class='kasen'>信仰<\/span>するかは個人の自由だ。";
Q[20].Ans[1] = "アメリカ人は<span class='kasen'>信仰<\/span>できない。";
Q[20].Ans[2] = "学生を<span class='kasen'>信仰<\/span>して、仕事をまかせる。";
Q[20].Ans[3] = "企業には社会的な<span class='kasen'>信仰<\/span>も必要だ。";
Q[20].comment = "『信仰』は〈宗教を信じて教えに従う〉という意味。正解以外は『信用』とするのが正しい。";

Q[21].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔設計〕";
Q[21].Ans[0] = "このビルはコンピュータを使って<span class='kasen'>設計<\/span>されている。";
Q[21].Ans[1] = "工場に生産のための新しい<span class='kasen'>設計<\/span>を入れる。";
Q[21].Ans[2] = "安全のため、階段に手すりを<span class='kasen'>設計<\/span>した。";
Q[21].Ans[3] = "<span class='kasen'>設計<\/span>によれば、日本の人口は減少している。";
Q[21].comment = "正解以外は「新しい設備」、「手すりを設置（せっち＝１級）」、「統計によれば」となる。";

Q[22].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔先端（せんたん）〕";
Q[22].Ans[0] = "当時は、時代の<span class='kasen'>先端<\/span>をいく考えだったらしい。";
Q[22].Ans[1] = "遊園地で、列の<span class='kasen'>先端<\/span>にならぶ。";
Q[22].Ans[2] = "オリンピックで、日本選手が<span class='kasen'>先端<\/span>を走っている。";
Q[22].Ans[3] = "<span class='kasen'>先端<\/span>は、どうも失礼いたしました。";
Q[22].comment = "正解以外は「列の先頭」「先頭を走る」「先程（さきほど）は、どうも」となる。";

Q[23].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔騒音（そうおん）〕";
Q[23].Ans[0] = "車の<span class='kasen'>騒音<\/span>で、なかなか寝られない。";
Q[23].Ans[1] = "電波が悪いのでラジオに<span class='kasen'>騒音<\/span>が入る。";
Q[23].Ans[2] = "中国語の<span class='kasen'>騒音<\/span>はむずかしい。";
Q[23].Ans[3] = "ホテルの部屋から、海の<span class='kasen'>騒音<\/span>が聞こえる。";
Q[23].comment = "『騒音』は〈うるさくて嫌な音〉という意味。";

Q[24].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔管理〕";
Q[24].Ans[0] = "このビルは、外国の会社が<span class='kasen'>管理<\/span>している。";
Q[24].Ans[1] = "下水を<span class='kasen'>管理<\/span>して、きれいな水に戻す。";
Q[24].Ans[2] = "金属の<span class='kasen'>管理<\/span>を通して水を流す。";
Q[24].Ans[3] = "水道の<span class='kasen'>管理<\/span>が壊れて、道路に水がふき出した。";
Q[24].comment = "正解以外は「下水を処理して」「金属の管（くだ）」「水道の管（かん＝１級）」となる。";

Q[25].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔濃度（のうど）〕";
Q[25].Ans[0] = "火山ガスの<span class='kasen'>濃度<\/span>が高いので危険です。";
Q[25].Ans[1] = "このダイヤモンドは<span class='kasen'>濃度<\/span>が高い。";
Q[25].Ans[2] = "台湾は日本より<span class='kasen'>濃度<\/span>が高い。";
Q[25].Ans[3] = "学習の<span class='kasen'>濃度<\/span>によってクラスを分ける。";
Q[25].comment = "『濃度』は〈液体や気体の濃さ〉を表わす。";

Q[26].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔あきれる〕";
Q[26].Ans[0] = "ロシアチームは<span class='kasen'>あきれる<\/span>ほど強かった。";
Q[26].Ans[1] = "日本文化の授業はすぐに<span class='kasen'>あきれる<\/span>。";
Q[26].Ans[2] = "年が<span class='kasen'>あきれる<\/span>と、40才になる。";
Q[26].Ans[3] = "公園で小鳥の<span class='kasen'>あきれる<\/span>声が聞こえる。";
Q[26].comment = "『あきれる（呆れる）』は〈意外でおどろく、程度が大きくてびっくりする〉という意味。悪い意味で使われることが多いが、よい意味でも使う。";

Q[27].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔あくまで〕";
Q[27].Ans[0] = "最大の台風でも大丈夫だというのは、<span class='kasen'>あくまで<\/span>計算上の話だ。";
Q[27].Ans[1] = "明日は<span class='kasen'>あくまでも<\/span>晴れるでしょう。";
Q[27].Ans[2] = "<span class='kasen'>あくまで<\/span>言えば、私の責任です。";
Q[27].Ans[3] = "どれが正しいか<span class='kasen'>あくまで<\/span>答えなさい。";
Q[27].comment = "『あくまで（も）』は、〈どこまでも、徹底的に〉の意味。";

Q[28].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔通用（つうよう）〕";
Q[28].Ans[0] = "あなたのやり方は、日本では<span class='kasen'>通用<\/span>しません。";
Q[28].Ans[1] = "会場への<span class='kasen'>通用<\/span>に人がたくさんいます。";
Q[28].Ans[2] = "彼女には電話で<span class='kasen'>通用<\/span>しておきます。";
Q[28].Ans[3] = "この店ではドルしか<span class='kasen'>通用<\/span>できません。";
Q[28].comment = "『通用』は〈広く使われている、一般に使うことができる、有効なものと認められる〉という意味。";

Q[29].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔つながる〕";
Q[29].Ans[0] = "隣の島と橋で<span class='kasen'>つながった<\/span>。";
Q[29].Ans[1] = "たくさんの物で部屋が<span class='kasen'>つながって<\/span>いる。";
Q[29].Ans[2] = "人の<span class='kasen'>つながる<\/span>ようなことをしてはいけない。";
Q[29].Ans[3] = "坂をボールが<span class='kasen'>つながって<\/span>いる。";
Q[29].comment = "正解以外は「部屋がふさがっている」「人の嫌(いや)がる」「ボールが転(ころ)がって」となる。";

Q[30].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔でたらめ〕";
Q[30].Ans[0] = "<span class='kasen'>でたらめ<\/span>なことばかり言わないでください。";
Q[30].Ans[1] = "昨日は<span class='kasen'>でたらめ<\/span>に雨が降っていました。";
Q[30].Ans[2] = "地震で学校が<span class='kasen'>でたらめ<\/span>になった。";
Q[30].Ans[3] = "もう少し<span class='kasen'>でたらめ<\/span>に勉強しなさい。";
Q[30].comment = "『でたらめ（出鱈目）』は〈筋が通らない、ちゃんとしていない〉という意味。";

Q[31].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔テンポ〕";
Q[31].Ans[0] = "作業の<span class='kasen'>テンポ<\/span>が遅いと言って怒られた。";
Q[31].Ans[1] = "姉は<span class='kasen'>テンポ<\/span>の仕事をしています。";
Q[31].Ans[2] = "結婚式には<span class='kasen'>テンポ<\/span>が着たいです。";
Q[31].Ans[3] = "最近どうも体の<span class='kasen'>テンポ<\/span>がよくありません。";
Q[31].comment = "『テンポ（tempo：イタリア語）』は〈音楽や物事の進むスピード〉の意味。";

Q[32].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔どうせ〕";
Q[32].Ans[0] = "練習しても、<span class='kasen'>どうせ<\/span>うまくいかないよ。";
Q[32].Ans[1] = "能力試験のために<span class='kasen'>どうせ<\/span>勉強しなさい。";
Q[32].Ans[2] = "彼女のお兄さんは<span class='kasen'>どうせ<\/span>優秀な人です。";
Q[32].Ans[3] = "私の気持ちも<span class='kasen'>どうせ<\/span>理解してほしい。";
Q[32].comment = "『どうせ』は、何をしても結果は最初から決まっているという気持ちを表わす表現である。";

Q[33].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔どういたしまして〕";
Q[33].Ans[0] = "Ａ「ありがとうございます。」Ｂ「<span class='kasen'>どういたしまして。<\/span>」";
Q[33].Ans[1] = "Ａ「おだいじに。」Ｂ「<span class='kasen'>どういたしまして。<\/span>」";
Q[33].Ans[2] = "Ａ「ごえんりょなく。」Ｂ「<span class='kasen'>どういたしまして。<\/span>」";
Q[33].Ans[3] = "Ａ「はじめまして。」Ｂ「<span class='kasen'>どういたしまして。<\/span>」";
Q[33].comment = "『どういたしまして。』は、相手にお礼を言われたときなどに言うあいさつの表現。";

Q[34].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔とけこむ〕";
Q[34].Ans[0] = "新しい建物だが、まわりの風景に<span class='kasen'>とけこんで<\/span>いる。";
Q[34].Ans[1] = "家族を連れて田舎に<span class='kasen'>とけこむ<\/span>ことにしました。";
Q[34].Ans[2] = "プールに<span class='kasen'>とけこんで<\/span>胸を打った。";
Q[34].Ans[3] = "難しい問題だったので<span class='kasen'>とけこんで<\/span>しまった。";
Q[34].comment = "『とけこむ（溶け込む）』は〈他のものといっしょになる、まわりものとよく合う〉という意味。";

Q[35].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔とっくに〕";
Q[35].Ans[0] = "そんなことは<span class='kasen'>とっくに<\/span>わかっている。";
Q[35].Ans[1] = "<span class='kasen'>とっくに<\/span>準備をしなさい。";
Q[35].Ans[2] = "できるだけ<span class='kasen'>とっくに<\/span>お願いします。";
Q[35].Ans[3] = "<span class='kasen'>とっくに<\/span>答えることができなかった。";
Q[35].comment = "『とっくに』は〈ずっと前に、もうすでに〉の意味。";

Q[36].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔どっと〕";
Q[36].Ans[0] = "旅行から帰って<span class='kasen'>どっと<\/span>疲れが出た。";
Q[36].Ans[1] = "今日は<span class='kasen'>どっと<\/span>晴れましたね。";
Q[36].Ans[2] = "いつか<span class='kasen'>どっと<\/span>また会えるよ";
Q[36].Ans[3] = "参加者は<span class='kasen'>どっと<\/span>100人はいるね。";
Q[36].comment = "正解以外は「やっと晴れましたね。」「いつかきっと」「ざっと100人は」となる。";

Q[37].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔とんでもない〕";
Q[37].Ans[0] = "彼女の家は<span class='kasen'>とんでもない<\/span>金持ちだ。";
Q[37].Ans[1] = "昨日は、よく晴れて<span class='kasen'>とんでもなかった<\/span>。";
Q[37].Ans[2] = "日本の文化に<span class='kasen'>とんでもない<\/span>関心があります。";
Q[37].Ans[3] = "東京と大阪に<span class='kasen'>とんでもなく<\/span>行ったことがある。";
Q[37].comment = "『とんでもない』は〈程度が非常に大きい、常識を超えている〉の意味。";

Q[38].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔トレーニング〕";
Q[38].Ans[0] = "彼女には発音の<span class='kasen'>トレーニング<\/span>が求められる。";
Q[38].Ans[1] = "すてきな<span class='kasen'>トレーニング<\/span>を買ってもらいました。";
Q[38].Ans[2] = "ワイシャツを<span class='kasen'>トレーニング<\/span>に出した。";
Q[38].Ans[3] = "<span class='kasen'>トレーニング<\/span>が見つかって０点になった。";
Q[38].comment = "『トレーニング（training）』は〈練習、訓練〉の意味。";

Q[39].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔なぞなぞ〕";
Q[39].Ans[0] = "ときどき<span class='kasen'>なぞなぞ<\/span>みたいな問題がある。";
Q[39].Ans[1] = "遊びも<span class='kasen'>なぞなぞ<\/span>にしておきなさい。";
Q[39].Ans[2] = "<span class='kasen'>なぞなぞ<\/span>考えもしなかったことが起きている。";
Q[39].Ans[3] = "あとで、電話<span class='kasen'>なぞなぞ<\/span>で連絡します。";
Q[39].comment = "『なぞなぞ』は、子どものことば遊び。";

Q[40].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔なだらか〕";
Q[40].Ans[0] = "家の前から<span class='kasen'>なだらかな<\/span>坂道が続いている。";
Q[40].Ans[1] = "今日は一日<span class='kasen'>なだらか<\/span>な天気でした。";
Q[40].Ans[2] = "子どもたちの<span class='kasen'>なだらかな<\/span>声が聞こえる。";
Q[40].Ans[3] = "あの曲をきくと<span class='kasen'>なだらか<\/span>な気持ちになる。";
Q[40].comment = "『なだらか』は〈傾きが小さくゆるい〉という意味。";

Q[41].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔なんとなく〕";
Q[41].Ans[0] = "毎日、<span class='kasen'>なんとなく<\/span>生きている。";
Q[41].Ans[1] = "本人ではないので<span class='kasen'>なんとなく<\/span>言えません。";
Q[41].Ans[2] = "難しすぎて<span class='kasen'>なんとなく<\/span>わからない。";
Q[41].Ans[3] = "台風なので<span class='kasen'>なんとなく<\/span>風が強い。";
Q[41].comment = "『なんとなく』は〈特別な理由なく〉という意味。";

Q[42].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ナンバー〕";
Q[42].Ans[0] = "逃げた自動車の<span class='kasen'>ナンバー<\/span>をメモする。";
Q[42].Ans[1] = "寒いので<span class='kasen'>ナンバー<\/span>をつける。";
Q[42].Ans[2] = "<span class='kasen'>ナンバー\/span>の上で歌を歌う。";
Q[42].Ans[3] = "彼に<span class='kasen'>ナンバー<\/span>をプレゼントした。";
Q[42].comment = "『ナンバー（number）』は〈数字、番号〉の意味。";

Q[43].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔夕立（ゆうだち）〕";
Q[43].Ans[0] = "昨日もおとといも<span class='kasen'>夕立<\/span>の中を家に帰った。";
Q[43].Ans[1] = "山から見た<span class='kasen'>夕立<\/span>がとてもきれいだった。";
Q[43].Ans[2] = "今夜の<span class='kasen'>夕立<\/span>はハンバーグです。";
Q[43].Ans[3] = "若いので、毎日<span class='kasen'>夕立<\/span>しています。";
Q[43].comment = "『夕立（ゆうだち）』は〈夏の午後に突然降る強い雨〉のこと。";

Q[44].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ゆでる〕";
Q[44].Ans[0] = "冷蔵庫の中のたまごを全部<span class='kasen'>ゆでる<\/span>。";
Q[44].Ans[1] = "いまステーキを<span class='kasen'>ゆでて<\/span>いるところです。";
Q[44].Ans[2] = "寒いので、お酒を<span class='kasen'>ゆでて<\/span>ください。";
Q[44].Ans[3] = "コーヒーを<span class='kasen'>ゆでる<\/span>ので、少し待ってください。";
Q[44].comment = "『ゆでる（茹でる）』は〈熱い湯で熱を加える調理方法〉を言う。";

Q[45].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔承認（しょうにん）〕";
Q[45].Ans[0] = "昨日の議会で無事に<span class='kasen'>承認<\/span>された。";
Q[45].Ans[1] = "間違いがないかよく<span class='kasen'>承認<\/span>してください。";
Q[45].Ans[2] = "本人を<span class='kasen'>承認<\/span>するため、写真を用意してください。";
Q[45].Ans[3] = "不明な部分は電話で直接<span class='kasen'>承認<\/span>しまし。";
Q[45].comment = "『承認（しょうにん）』は〈よいと認める〉という意味。";

Q[46].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔上等（じょうとう）〕";
Q[46].Ans[0] = "たまには<span class='kasen'>上等な<\/span>ステーキを食べよう。";
Q[46].Ans[1] = "彼女は歌がとても<span class='kasen'>上等<\/span>です。";
Q[46].Ans[2] = "彼は高校で２年<span class='kasen'>上等<\/span>の先輩です。";
Q[46].Ans[3] = "日本語もだいぶ<span class='kasen'>上等<\/span>しましたね。";
Q[46].comment = "正解以外は「歌が上手です」「２年上級の」「だいぶ上達しました」となる。";

Q[47].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔しゃっくり〕";
Q[47].Ans[0] = "水を飲んでも<span class='kasen'>しゃっくり<\/span>が止まらない。";
Q[47].Ans[1] = "もっと<span class='kasen'>しゃっくり<\/span>仕事をしましょう。";
Q[47].Ans[2] = "難しくて<span class='kasen'>しゃっくり<\/span>わからない。";
Q[47].Ans[3] = "<span class='kasen'>しゃっくり<\/span>した味のスープです。";
Q[47].comment = "『しゃっくり（吃逆／噦）』は、人間の生理現象のひとつ。";

Q[48].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔しみじみ〕";
Q[48].Ans[0] = "大きな病気をして健康の大切さが<span class='kasen'>しみじみ<\/span>わかった。";
Q[48].Ans[1] = "<span class='kasen'>しみじみ<\/span>うまくいっただけで、実力とは思えない。";
Q[48].Ans[2] = "この地域では、<span class='kasen'>しみじみ<\/span>小さな地震がある。";
Q[48].Ans[3] = "もうかったとしても<span class='kasen'>しみじみ<\/span>5000円くらいだろう。";
Q[48].comment = "正解以外は「たまたまうまくいった」「しばしば小さな地震が」「せいぜい5000円」";

Q[49].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔しぼむ〕";
Q[49].Ans[0] = "花が<span class='kasen'>しぼんで<\/span>しまった。";
Q[49].Ans[1] = "大きな波で船が<span class='kasen'>しぼんだ<\/span>。";
Q[49].Ans[2] = "よく<span class='kasen'>しぼんで<\/span>から干してください。";
Q[49].Ans[3] = "古い新聞をまとめて<span class='kasen'>しぼむ<\/span>。";
Q[49].comment = "『しぼむ（萎む）』は〈生命力や勢いがなくなって縮む〉という意味。";

Q[50].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔すきま〕";
Q[50].Ans[0] = "電車とホームの<span class='kasen'>すきま<\/span>に気をつけてください。";
Q[50].Ans[1] = "駅前の<span class='kasen'>すきま<\/span>にスーパーができました。";
Q[50].Ans[2] = "スケジュールが多すぎて、休む<span class='kasen'>すきま<\/span>がない。";
Q[50].Ans[3] = "名古屋は東京と大阪の<span class='kasen'>すきま<\/span>にある。";
Q[50].comment = "「すきま」は漢字では「隙間」と書く。正解以外は「駅前の空き地」「休む暇(ひま)がない」「東京と大阪の間にある」となる。";

Q[51].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ゆかた〕";
Q[51].Ans[0] = "髪が長いので<span class='kasen'>ゆかた<\/span>がにあう。";
Q[51].Ans[1] = "このグラスは、とても<span class='kasen'>ゆかた<\/span>が良い。";
Q[51].Ans[2] = "家を出てから<span class='kasen'>ゆかた<\/span>がわからない。";
Q[51].Ans[3] = "あの人は、口が悪いので<span class='kasen'>ゆかた<\/span>が少ない。";
Q[51].comment = "「ゆかた」は漢字では「浴衣」と書く。正解以外は「行方(ゆくえ)がわからない。」「姿(すがた)が良い。」「味方(みかた)が少ない。」となる。";

Q[52].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔くせ〕";
Q[52].Ans[0] = "ウソをつくとき声が高くなる<span class='kasen'>くせ<\/span>がある。";
Q[52].Ans[1] = "小麦粉でパンの<span class='kasen'>くせ<\/span>をつくっている。";
Q[52].Ans[2] = "外は<span class='kasen'>くせ<\/span>が出ていて、道の先が見えない。";
Q[52].Ans[3] = "ビルの<span class='kasen'>くせ<\/span>の細い道を入ってください。";
Q[52].comment = "正解以外は「パンの生地（きじ）」　「霧（きり）が出ていて」　「ビルのわき（脇）」となる。";

Q[53].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔さっそく〕";
Q[53].Ans[0] = "<span class='kasen'>さっそく<\/span>話し合いに入りましょう。";
Q[53].Ans[1] = "朝ごはんは<span class='kasen'>さっそく<\/span>食べなければなりません。";
Q[53].Ans[2] = "つい<span class='kasen'>さっそく<\/span>約束を忘れてしまいました。";
Q[53].Ans[3] = "<span class='kasen'>さっそく<\/span>スタートの時間になるころだ。";
Q[53].comment = "正解以外は「しっかり食べなければ」、「ついうっかり約束を」、「まもなくスタートの時間に」となる。";

Q[54].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ひとりでに〕";
Q[54].Ans[0] = "寝て起きたら<span class='kasen'>ひとりでに<\/span>日本語がうまくなっていたなんてことはないのです。";
Q[54].Ans[1] = "みんながいるのに、彼女だけ<span class='kasen'>ひとりでに<\/span>帰ってしまった。";
Q[54].Ans[2] = "これだけあれば<span class='kasen'>ひとりでに<\/span>安心だ。";
Q[54].Ans[3] = "教科書には<span class='kasen'>ひとりでに<\/span>目を通した。";
Q[54].comment = "正解以外は「勝手に帰ってしまった」、「ひとまず安心だ。」、「一通(ひととお)り目を通した。」となる。";

Q[55].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔せいぜい〕";
Q[55].Ans[0] = "<span class='kasen'>せいぜい<\/span>勉強をすることですね。";
Q[55].Ans[1] = "彼は<span class='kasen'>せいぜい<\/span>学校を休みます。";
Q[55].Ans[2] = "<span class='kasen'>せいぜい<\/span>雨が降っています。";
Q[55].Ans[3] = "給料が<span class='kasen'>せいぜい<\/span>10万元もある。";
Q[55].comment = "ここでの「せいぜい」は〈できるだけ〉という意味。正解以外は意味の通らない文になる。";

Q[56].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔あやうい〕";
Q[56].Ans[0] = "今の力では合格は<span class='kasen'>あやうい<\/span>。";
Q[56].Ans[1] = "雲が出て<span class='kasen'>あやうい<\/span>天気になってきた。";
Q[56].Ans[2] = "昨日の夜、<span class='kasen'>あやうい<\/span>人を見ませんでしたか。";
Q[56].Ans[3] = "彼女の日本語は発音が<span class='kasen'>あやうい<\/span>。";
Q[56].comment = "「あやうい」は漢字では「危うい」となる。正解以外はすべて「あやしい（怪しい）」が正しい。";

Q[57].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔まさか〕";
Q[57].Ans[0] = "<span class='kasen'>まさか<\/span>今になって怖くなったわけじゃないだろうな。";
Q[57].Ans[1] = "<span class='kasen'>まさか<\/span>時間には間に合うと思います。";
Q[57].Ans[2] = "病気は思ったより<span class='kasen'>まさか<\/span>悪いようです。";
Q[57].Ans[3] = "彼女が怒るのも<span class='kasen'>まさか<\/span>な話だ。";
Q[57].comment = "正解以外は「たぶん時間には間に合う」、「思ったよりかなり悪い」、「もっともな話だ。」となる。";

Q[58].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔やがて〕";
Q[58].Ans[0] = "このまま行けば、処理能力は<span class='kasen'>やがて<\/span>限界となるだろう。";
Q[58].Ans[1] = "年末に近づき、寒さも<span class='kasen'>やがて<\/span>厳しくなってきた。";
Q[58].Ans[2] = "10年かかって<span class='kasen'>やがて<\/span>完成した作品です。";
Q[58].Ans[3] = "あやしいと思っていたが、<span class='kasen'>やがて<\/span>彼が犯人だった。";
Q[58].comment = "「やがて」は〈そのうちに、近いうちに〉という意味。";

Q[59].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔はきはき〕";
Q[59].Ans[0] = "若いのだから、もっと<span class='kasen'>はきはき<\/span>話した方がいい。";
Q[59].Ans[1] = "雨でグランドが<span class='kasen'>はきはき<\/span>になっている。";
Q[59].Ans[2] = "<span class='kasen'>はきはき<\/span>うまくいったぐらいで調子に乗るな。";
Q[59].Ans[3] = "このサラダは<span class='kasen'>はきはき<\/span>していておいしい。";
Q[59].comment = "「はきはき」は〈話し方がはっきりしていて元気がよい〉という意味。";

Q[60].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔実は〕";
Q[60].Ans[0] = "<span class='kasen'>実は<\/span>あなたに相談したいことがあるのです。";
Q[60].Ans[1] = "見れば見るほど<span class='kasen'>実は<\/span>美しい絵ですね。";
Q[60].Ans[2] = "日本語能力試験も、日本人にとっては<span class='kasen'>実は<\/span>簡単だ。";
Q[60].Ans[3] = "日本人以外では<span class='kasen'>実は<\/span>30年ぶりの優勝となった。";
Q[60].comment = "正解以外はすべて「実に」となるべきものである。";

Q[61].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔あわてる〕";
Q[61].Ans[0] = "急に客が来て<span class='kasen'>あわてて<\/span>お茶を出す。";
Q[61].Ans[1] = "空港で時計の時間を日本に<span class='kasen'>あわてる<\/span>。";
Q[61].Ans[2] = "<span class='kasen'>あわてた<\/span>ことに、山を越えるとすぐに海だった。";
Q[61].Ans[3] = "公園で<span class='kasen'>あわてて<\/span>いる学生がいて、とてもうるさい。";
Q[61].comment = "「あわてる」は漢字では「慌てる」と書く。正解以外は「時計を日本にあわせる」、「おどろいたことに」「さわいでいる学生がいて」となる。";

Q[62].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔うらぎる〕";
Q[62].Ans[0] = "大きく期待を<span class='kasen'>うらぎる<\/span>結果しか出せなかった。";
Q[62].Ans[1] = "フライパンの中の肉をはしで<span class='kasen'>うらぎる<\/span>。";
Q[62].Ans[2] = "花を使って、ふたりの将来を<span class='kasen'>うらぎる<\/span>。";
Q[62].Ans[3] = "人が<span class='kasen'>うらぎる<\/span>ような恋人がほしい。";
Q[62].comment = "「うらぎる」は漢字では「裏切る」と書く。正解以外は「はしで裏返す」、「将来を占う（うらなう）」、「人がうらやむような」となる。";

Q[63].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔たたむ〕";
Q[63].Ans[0] = "客が減ったので店を<span class='kasen'>たたむ<\/span>ことになりました。";
Q[63].Ans[1] = "あまった料理を<span class='kasen'>たたんで<\/span>持ち帰ります。";
Q[63].Ans[2] = "ガソリンスタンドとは道を<span class='kasen'>たたんで<\/span>反対にあります。";
Q[63].Ans[3] = "家族でひとつのテーブルを<span class='kasen'>たたんで<\/span>食事をする。";
Q[63].comment = "「たたむ」は漢字では「畳む」と書く。正解以外は「包んで（つつんで）持ち帰ります。」、「道を挟んで（はさんで）反対に」、「テーブルを囲んで（かこんで）食事を」";

Q[64].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔かじる〕";
Q[64].Ans[0] = "ネコがネズミを<span class='kasen'>かじって<\/span>いる。";
Q[64].Ans[1] = "女性に<span class='kasen'>かじって<\/span>サービスします。";
Q[64].Ans[2] = "語と語を線で<span class='kasen'>かじって<\/span>ください。";
Q[64].Ans[3] = "相手の動きを<span class='kasen'>かじって<\/span>いるところだ。";
Q[64].comment = "「かじる」は漢字では「齧る」と書く。";

Q[65].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔あきれる〕";
Q[65].Ans[0] = "ロシアチームは<span class='kasen'>あきれる<\/span>ほど強かった。";
Q[65].Ans[1] = "もうすぐ夜も<span class='kasen'>あきれる<\/span>時間になった。";
Q[65].Ans[2] = "お金がないので大学院は<span class='kasen'>あきれ<\/span>ました。";
Q[65].Ans[3] = "広告の商品はもう<span class='kasen'>あきれて<\/span>しまいました。";
Q[65].comment = "「あきれる」は漢字では「呆れる」と書く。正解以外は「夜もあける時間に」、「大学院はあきらめました。」、「もう売り切れて（うりきれて）しまいました。」となる。";

Q[66].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔ためす〕";
Q[66].Ans[0] = "人を<span class='kasen'>ためす<\/span>ようなことはしないでくれ。";
Q[66].Ans[1] = "フライパンで肉に十分火を<span class='kasen'>ためす<\/span>。";
Q[66].Ans[2] = "上に話を<span class='kasen'>ためして<\/span>おいてください。";
Q[66].Ans[3] = "窓を開けて部屋の中に風を<span class='kasen'>ためす<\/span>。";
Q[66].comment = "「ためす」は漢字では「試す」と書く。正解以外はすべて「とおす（通す）」となる。";

Q[67].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔たちどまる〕";
Q[67].Ans[0] = "<span class='kasen'>たちどまる<\/span>ことなく、自分の道を進みなさい。";
Q[67].Ans[1] = "大きな当たりに監督も思わすベンチから<span class='kasen'>たちどまった<\/span>。";
Q[67].Ans[2] = "お客様のご注文は、たしかに<span class='kasen'>たちどまりました<\/span>。";
Q[67].Ans[3] = "この先を<span class='kasen'>たちどまったら<\/span>左に曲がってください。";
Q[67].comment = "「たちどまる」は漢字では「立ち止まる」と書く。";

Q[68].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔引きかえす〕";
Q[68].Ans[0] = "波が高いので港に<span class='kasen'>引きかえす<\/span>ことにした。";
Q[68].Ans[1] = "フライパンを振って、上手に肉を<span class='kasen'>引きかえす<\/span>。";
Q[68].Ans[2] = "支払いのために銀行からお金を<span class='kasen'>引きかえす<\/span>。";
Q[68].Ans[3] = "同じ失敗を<span class='kasen'>引きかえす<\/span>のはよくありません。";
Q[68].comment = "正解以外は「肉をひっくり返す。」、「お金を引き出す。」、「失敗を繰り返す（くりかえす）」となる。";

Q[69].Quest = "次の言葉の使い方としてもっとも適当なものを選びなさい。<br>〔さかのぼる〕";
Q[69].Ans[0] = "実は、この話は10年前まで<span class='kasen'>さかのぼる<\/span>のです。";
Q[69].Ans[1] = "この魚は川から海に<span class='kasen'>さかのぼる<\/span>種類です。";
Q[69].Ans[2] = "やかんから湯気(ゆげ)が<span class='kasen'>さかのぼって<\/span>います。";
Q[69].Ans[3] = "こわれた家が台風の強さを<span class='kasen'>さかのぼって<\/span>いる。";
Q[69].comment = "「さかのぼる」は漢字では「遡る」と書く。正解以外は「川から海に下る／海から川にさかのぼる」、「湯気が立ち上る（たちのぼる）」、「台風の強さを物語る」となる。";
