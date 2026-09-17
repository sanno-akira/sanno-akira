// src/lib/entities.ts
//
// 「典拠ファイル」：人物・作品・概念の呼び名（表記ゆれ）と、
// 専用記事がある場合はそのslugを登録する場所。
//
// - canonical: 正式な表記（画面に出す時、迷ったらこれを使う）
// - aliases:   検索で拾いたい呼び名のバリエーション（本人＋略称＋別表記など）
// - slug:      この人物・作品を主題にした記事があれば、その記事番号。無ければ null
//
// 使い方：
//   各記事のフロントマターに `subjects: ["fujimoto-yukio", ...]` のように
//   このファイルのキー（entities.ts の一番左の識別子）を書いておくと、
//   テンプレート側でそのIDに対応する aliases が自動的に集められ、
//   画面には見えない検索用テキストとしてページに埋め込まれる。

export const entities = {
 // ── 0001 ──
  "takahashi-yuichi": {
    canonical: "髙橋由一",
    aliases: ["髙橋由一", "高橋由一"], // 「髙」「高」の表記ゆれ
    slug: "0001",
    category: "person", 
  },
  "sake-takahashi": {
    canonical: "鮭（髙橋由一）",
    aliases: ["鮭"],
    slug: "0001",
    category: "work", 
  },
  "tofu-takahashi": {
    canonical: "豆腐（髙橋由一）",
    aliases: ["豆腐"],
    slug: "0001",
    category: "work",  
  },
    "matthew-perry": {
    canonical: "ペリー",
    aliases: ["ペリー", "マシュー・ペリー", "Matthew Perry"],
    slug: null, // 0001の中の一部分なので、単独記事にはリンクしない
    category: "person", 
  },

  // ── 0002 ──
  "thutmose": {
    canonical: "トトメス",
    aliases: ["トトメス", "Thutmose"],
    slug: "0002",
    category: "person", 
  },
  "nefertiti-bust": {
    canonical: "ネフェルティティの胸像",
    aliases: ["ネフェルティティ", "ネフェルティティの胸像"],
    slug: "0002",
    category: "work", 
  },
    "herodotus": {
    canonical: "ヘロドトス",
    aliases: ["ヘロドトス", "herodotos", "Herodotus", "Herodotos"],
    slug: null,
    category: "person", 
  },
  "napoleon-bonaparte": {
    canonical: "ナポレオン",
    aliases: ["ナポレオン", "ボナパルト", "ナポレオン・ボナパルト", "Napoleon Bonaparte"],
    slug: null,
    category: "person", 
  },
  "haniwa": {
    canonical: "埴輪",
    aliases: ["はにわ", "ハニワ", "踊る人々"],
    slug: null,
    category: "work", 
  },
  "book-of-the-dead-egypt": {
    canonical: "死者の書（エジプト、古代文書）",
    aliases: ["死者の書"],
    slug: null,
    category: "work", 
  },
  "medjed": {
    canonical: "メジェド",
    aliases: ["メジェド", "メジェド神", "Medjed"],
    slug: null,
    category: "person", 
  },

  // ── 0003 ──
  "ishmael-reed": {
    canonical: "イシュメル・リード",
    aliases: ["イシュメル・リード", "Ishmael Reed"],
    slug: "0003",
    category: "person", 
  },
  "mumbo-jumbo": {
    canonical: "マンボ・ジャンボ",
    aliases: ["マンボ・ジャンボ"],
    slug: "0003",
    category: "work", 
  },
  "miles-davis": {
    canonical: "マイルス・デイヴィス",
    aliases: ["マイルス・デイヴィス", "マイルス", "デイヴィス", "Miles Davis"],
    slug: null,
    category: "person", 
  },
  "nefertiti-album": {
    canonical: "ネフェルティティ（マイルス・デイヴィスのアルバム）",
    aliases: ["ネフェルティティ"],
    slug: null,
    category: "work", 
  },
  "filles-de-kilimanjaro": {
    canonical: "キリマンジャロの娘",
    aliases: ["キリマンジャロの娘"],
    slug: null,
    category: "work", 
  },
  "duke-ellington": {
    canonical: "デューク・エリントン",
    aliases: ["デューク・エリントン", "エリントン", "Duke Ellington"],
    slug: null,
    category: "person", 
 }, 
  "black-and-tan-fantasy": {
    canonical: "黒と茶の幻想",
    aliases: ["黒と茶の幻想", "黒と褐色の幻想"],
    slug: null,
    category: "work", 
  },
   "thoth": {
    canonical: "トト",
    aliases: ["トト", "トート", "トト神", "トート神", "Thoth"],
    slug: null,
    category: "person", 
  },

// ── 0004 ──
  "caetano-veloso": {
    canonical: "カエターノ・ヴェローゾ",
    aliases: ["カエターノ・ヴェローゾ", "カエターノ", "Caetano Veloso"],
    slug: "0004",
    category: "person", 
  },
  "araca-azul": {
    canonical: "アラサー・アズール",
    aliases: ["アラサー・アズール"],
    slug: "0004",
    category: "work", 
  },
  "fidel-castro": {
    canonical: "フィデル・カストロ",
    aliases: ["カストロ", "Fidel Castro"],
    slug: null,
    category: "person", 
  },
  "che-guevara": {
    canonical: "チェ・ゲバラ",
    aliases: ["ゲバラ", "Che Guevara", "Ernesto Guevara"],
    slug: null,
    category: "person", 
  },
  "castelo-branco": {
    canonical: "カステロ・ブランコ",
    aliases: ["ブランコ", "Castelo Branco"],
    slug: null,
    category: "person", 
  },
  "gilberto-gil": {
    canonical: "ジルベルト・ジル",
    aliases: ["ジルベルト・ジル", "Gilberto Gil"],
    slug: null,
    category: "person", 
  },
  "gal-costa": {
    canonical: "ガル・コスタ",
    aliases: ["ガル・コスタ", "Gal Costa"],
    slug: null,
    category: "person", 
  },
  "os-mutantes": {
    canonical: "ムタンチス",
    aliases: ["ムタンチス", "Os Mutantes"],
    slug: null,
    category: "person", 
  },
  "tom-ze": {
    canonical: "トン・ゼー",
    aliases: ["トン・ゼー", "Tom Zé"],
    category: "person", 
    slug: null,
  },
  "todos-os-olhos": {
    canonical: "Todos os Olhos",
    aliases: ["すべての目", "todos os olhos", "Todos Os Olhos"],
    category: "work", 
    slug: null,
  },
  "helio-oiticica": {
    canonical: "エリオ・オイティシカ",
    aliases: ["エリオ・オイティシカ", "Hélio Oiticica"],
    category: "person", 
    slug: null,
  },
  "tropicalia": {
    canonical: "トロピカリア",
    aliases: ["トロピカリア", "Tropicália"],
    category: "work", 
    slug: null,
  },
  "lygia-clark": {
    canonical: "リジア・クラーク",
    aliases: ["リジア・クラーク", "Lygia Clark"],
    category: "person", 
    slug: null,
  },
  "glauber-rocha": {
    canonical: "グラウベル・ローシャ",
    aliases: ["グラウベル・ローシャ", "Glauber Rocha"],
    category: "person", 
    slug: null,
  },
  "entranced-earth": {
    canonical: "狂乱の大地",
    aliases: ["Terra em Transe", "Entranced Earth"],
    category: "work", 
    slug: null,
  },
  "antonio-das-mortes": {
    canonical: "アントニオ・ダス・モルテス",
    aliases: ["Antonio das Mortes", "O Dragão da Maldade contra o Santo Guerreiro"],
    category: "work", 
    slug: null,
  },
  "joaquim-pedro-de-Andrade": {
    canonical: "ジョアキン・ペドロ・デ・アンドラーデ",
    aliases: ["ペドロ・デ・アンドラーデ", "ジョアキン・ペドロ・デ・アンドラーデ", "Joaquim Pedro de Andrade"],
    category: "person", 
    slug: null,
  },
  "mario-de-andrade": {
    canonical: "マリオ・デ・アンドラーデ",
    aliases: ["マリオ・デ・アンドラーデ", "Mário de Andrade"],
    category: "person", 
    slug: null,
  },
  "macunaima(cinema)": {
    canonical: "マクナイーマ（映画）",
    aliases: ["マクナイーマ", "Macunaíma"],
    category: "work", 
    slug: null,
  },
  "macunaima(novel)": {
    canonical: "マクナイーマ（小説）",
    aliases: ["マクナイーマ", "Macunaíma"],
    category: "work", 
    slug: null,
  },
  "jose-celso-martinez-correa": {
    canonical: "ジョゼ・セルソ・マルチネス・コレア",
    aliases: ["ジョゼ・セルソ・マルチネス・コレア", "José Celso Martinez Corrêa"],
    category: "person", 
    slug: null,
  },
  "o-rei-da-vela": {
    canonical: "オ・レイ・ダ・ヴェラ",
    aliases: ["オ・レイ・ダ・ヴェラ", "金貸し王", "O Rei da Vela"],
    category: "work", 
    slug: null,
  },
  "tarsila-do-amaral": {
    canonical: "タルシラ・ド・アマラル",
    aliases: ["タルシラ・ド・アマラル", "Tarsila do Amaral"],
    slug: null,
    category: "person", 
  },
  "abaporu": {
    canonical: "アバポル",
    aliases: ["アバポル", "Abaporu"],
    category: "work", 
    slug: null,
  },
  "rogerio-duprat": {
    canonical: "ホジェリオ・ドゥプラ",
    aliases: ["ホジェリオ・ドゥプラ", "Rogério Duprat"],
    slug: null,
    category: "person", 
  },
  "karlheinz-stockhausen": {
    canonical: "カールハインツ・シュトックハウゼン",
    aliases: [ "カールハインツ・シュトックハウゼン", "Karlheinz Stockhausen"],
    slug: null,
    category: "person", 
  },
  "pierre-boulez": {
    canonical: "ピエール・ブーレーズ",
    aliases: ["ピエール・ブーレーズ",  "Pierre Boulez"],
    slug: null,
    category: "person", 
  },
  "luciano-berio": {
    canonical: "ルチアーノ・ベリオ",
    aliases: ["ルチアーノ・ベリオ", "Luciano Berio"],
    slug: null,
    category: "person", 
  },
  "sinfonia": {
    canonical: "シンフォニア（ルチアーノ・ベリオ）",
    aliases: ["シンフォニア", "Sinfonia"],
    slug: null,
   category: "work", 
  },
  "cathy-berberian": {
    canonical: "キャシー・バーベリアン",
    aliases: ["キャシー・バーベリアン", "Cathy Berberian"],
    slug: null,
    category: "person", 
  },
  "stripsody ": {
    canonical: "ストリプソディ",
    aliases: ["ストリプソディ", "Stripsody "],
    slug: null,
    category: "work", 
  },
  "haroldo-de-campos": {
    canonical: "アロウド・ジ・カンポス",
    aliases: ["アロウド・ジ・カンポス", "Haroldo de Campos"],
    slug: null,
    category: "person", 
  },
  "miura-jun": {
    canonical: "みうらじゅん",
    aliases: ["みうらじゅん", "Miura Jun"],
    slug: null,
    category: "person", 
  },

  // ── 0005 ──
  "villa-lobos": {
    canonical: "エイトール・ヴィラ＝ロボス",
    aliases: ["エイトール・ヴィラ＝ロボス", "ヴィラ＝ロボス", "ヴィラ゠ロボス", "Villa-Lobos"],
    slug: "0005",
    category: "person", 
  },
  "bachianas-brasileiras-1": {
    canonical: "ブラジル風バッハ第1番",
    aliases: ["ブラジル風バッハ第1番", "ブラジル風バッハ"],
    slug: "0005",
    category: "work", 
  },
  "lalo-schifrin": {
    canonical: "ラロ・シフリン",
    aliases: ["ラロ・シフリン", "Lalo Schifrin"],
    slug: null,
    category: "person", 
  },

  // ── 0006 ──
  "daniel-schmid": {
    canonical: "ダニエル・シュミット",
    aliases: ["ダニエル・シュミット", "Daniel Schmid"],
    slug: "0006",
    category: "person", 
  },
  "la-paloma-film": {
    canonical: "ラ・パロマ（映画）",
    aliases: ["ラ・パロマ"],
    slug: "0006",
    category: "work", 
  },
  "sebastian-iradier": {
    canonical: "セバスティアン・イラディエル",
    aliases: ["セバスティアン・イラディエル", "Sebastián Iradier"],
    slug: null,
    category: "person", 
  },
  "nakamura-toyo": {
    canonical: "中村とうよう",
    aliases: ["中村とうよう"],
    slug: null, // 単独記事の予定あり
    category: "person", 
  },
  "ohno-kazuo": {
    canonical: "大野一雄",
    aliases: ["大野一雄", "Ono Kazuo"],
    slug: null, // 単独記事の予定あり
    category: "person", 
  },

  // ── 0007 ──
  "stefan-zweig": {
    canonical: "シュテファン・ツヴァイク",
    aliases: ["シュテファン・ツヴァイク", "ツヴァイク", "Stefan Zweig"],
    slug: "0007",
    category: "person", 
  },
  "the-world-of-yesterday": {
    canonical: "昨日の世界",
    aliases: ["昨日の世界"],
    slug: "0007",
    category: "work", 
  },

  // ── 0008 ──
  "maurice-ravel": {
    canonical: "モリス・ラヴェル",
    aliases: ["モリス・ラヴェル", "ラヴェル", "ラベル", "Ravel"],
    slug: "0008",
    category: "person",
  },
  "la-valse": {
    canonical: "ラ・ヴァルス",
    aliases: ["ラ・ヴァルス", "La Valse"],
    slug: "0008",
    category: "work",
  },
  "bolero": {
    canonical: "ボレロ",
    aliases: ["ボレロ", "Boléro"],
    slug: null,
    category: "work",
  },
  "red-vienna": {
    canonical: "赤いウィーン",
    aliases: ["赤いウィーン"],
    slug: null,
    category: "concept",
  },
  "karl-marx-hof": {
    canonical: "カール・マルクス・ホーフ",
    aliases: ["カール・マルクス・ホーフ", "Karl-Marx-Hof"],
    slug: null,
    category: "work",
  },

  // ── 0009 ──
  "alberto-giacometti": {
    canonical: "アルベルト・ジャコメッティ",
    aliases: ["アルベルト・ジャコメッティ", "ジャコメッティ", "Giacometti"],
    slug: "0009",
    category: "person",
  },
  "palace-at-4am": {
    canonical: "午前四時の宮殿",
    aliases: ["午前四時の宮殿"],
    slug: "0009",
    category: "work",
  },
  "louis-sullivan": {
    canonical: "ルイス・サリヴァン",
    aliases: ["ルイス・サリヴァン", "Louis Sullivan"],
    slug: null,
    category: "person",
  },
  "mies-van-der-rohe": {
    canonical: "ミース・ファン・デル・ローエ",
    aliases: ["ミース・ファン・デル・ローエ", "Mies van der Rohe"],
    slug: null,
    category: "person",
  },
  "arnold-schoenberg": {
    canonical: "アルノルト・シェーンベルク",
    aliases: ["アルノルト・シェーンベルク", "シェーンベルク", "Schoenberg"],
    slug: null,
    category: "person",
  },
  "anton-webern": {
    canonical: "アントン・ヴェーベルン",
    aliases: ["アントン・ヴェーベルン", "ヴェーベルン", "Webern"],
    slug: null,
    category: "person",
  },
  "jorge-luis-borges": {
    canonical: "ホルヘ・ルイス・ボルヘス",
    aliases: ["ホルヘ・ルイス・ボルヘス", "ボルヘス", "Borges"],
    slug: null,
    category: "person",
  },
  "fujimoto-yukio": {
    canonical: "藤本由紀夫",
    aliases: ["藤本由紀夫"],
    slug: null,
    category: "person",
  },
  "marcel-duchamp": {
    canonical: "マルセル・デュシャン",
    aliases: ["マルセル・デュシャン", "デュシャン", "Marcel Duchamp"],
    slug: null, // 単独記事の予定あり
    category: "person",
  },
  "inagaki-taruho": {
    canonical: "稲垣足穂",
    aliases: ["稲垣足穂", "タルホ"],
    slug: null, // 単独記事の予定あり
    category: "person",
  },

  // ── 0010 ──
  "cycladic-civilization": {
    canonical: "キクラデス文明",
    aliases: ["キクラデス文明", "キクラデス"],
    slug: "0010",
    category: "work",
  },
  "cycladic-frying-pan": {
    canonical: "キクラデスのフライパン",
    aliases: ["キクラデスのフライパン"],
    slug: "0010",
    category: "work",
  },
  "constantin-brancusi": {
    canonical: "コンスタンティン・ブランクーシ",
    aliases: ["コンスタンティン・ブランクーシ", "ブランクーシ", "Brâncuși"],
    slug: null,
    category: "person",
  },
  "hans-coper": {
    canonical: "ハンス・コパー",
    aliases: ["ハンス・コパー", "Hans Coper"],
    slug: null,
    category: "person",
  },

  // ── 0011（デヴィッド・マンロウ）──
  "david-munrow": {
    canonical: "デヴィッド・マンロウ",
    aliases: ["デヴィッド・マンロウ", "マンロウ", "David Munrow"],
    slug: "0011",
    category: "person",
  },
  "pentangle": {
    canonical: "ペンタングル",
    aliases: ["ペンタングル", "Pentangle"],
    slug: null,
    category: "person",
  },
  "fairport-convention": {
    canonical: "フェアポート・コンヴェンション",
    aliases: ["フェアポート・コンヴェンション", "Fairport Convention"],
    slug: null,
    category: "person",
  },
  "steeleye-span": {
    canonical: "スティーライ・スパン",
    aliases: ["スティーライ・スパン", "Steeleye Span"],
    slug: null,
    category: "person",
  },
  "yoshida-hidekazu": {
    canonical: "吉田秀和",
    aliases: ["吉田秀和"],
    slug: null,
    category: "person",
  },

  // ── 0012（折口信夫）──
  // 「死者の書」は0002（古代エジプトの文書）と同名なので、別エントリとして分離。
  "orikuchi-shinobu": {
    canonical: "折口信夫",
    aliases: ["折口信夫"],
    slug: "0012",
    category: "person",
  },
  "shisha-no-sho-orikuchi": {
    canonical: "死者の書（折口信夫）",
    aliases: ["死者の書"],
    slug: "0012",
    category: "work",
  },
    "otsu-no-miko": {
    canonical: "大津皇子",
    aliases: ["大津皇子"],
    slug: "0012",
    category: "person",
  },
  "nakazawa-shinichi": {
    canonical: "中沢新一",
    aliases: ["中沢新一"],
    slug: "0012",
    category: "person",
  },
  "yoshimoto-takaaki": {
    canonical: "吉本隆明",
    aliases: ["吉本隆明"],
    slug: "0012",
    category: "person",
  },
    "kobayashi-hideo": {
    canonical: "小林秀雄",
    aliases: ["小林秀雄"],
    slug: "0012",
    category: "person",
  },
    "hasumi-shigehiko": {
    canonical: "蓮實重彦",
    aliases: ["蓮實重彦"],
    slug: "0012",
    category: "person",
  },
    "kawamoto-kihachiro": {
    canonical: "川本喜八郎",
    aliases: ["川本喜八郎"],
    slug: "0012",
    category: "person",
  },
} as const;