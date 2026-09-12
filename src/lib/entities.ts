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
  },
  "sake-takahashi": {
    canonical: "鮭（髙橋由一）",
    aliases: ["鮭"],
    slug: null, // 0001の中の一部分なので、単独記事にはリンクしない
  },

  // ── 0002 ──
  "thutmose": {
    canonical: "トトメス",
    aliases: ["トトメス", "Thutmose"],
    slug: "0002",
  },
  "nefertiti-bust": {
    canonical: "ネフェルティティの胸像",
    aliases: ["ネフェルティティ", "ネフェルティティの胸像"],
    slug: "0002",
  },
  "book-of-the-dead-egypt": {
    canonical: "死者の書（エジプト、古代文書）",
    aliases: ["死者の書"],
    slug: null,
  },
  "medjed": {
    canonical: "メジェド",
    aliases: ["メジェド", "メジェド神"],
    slug: null,
  },

  // ── 0003 ──
  "ishmael-reed": {
    canonical: "イシュメル・リード",
    aliases: ["イシュメル・リード", "Ishmael Reed"],
    slug: "0003",
  },
  "mumbo-jumbo": {
    canonical: "マンボ・ジャンボ",
    aliases: ["マンボ・ジャンボ"],
    slug: "0003",
  },
  "miles-davis": {
    canonical: "マイルス・デイヴィス",
    aliases: ["マイルス・デイヴィス", "マイルス", "デイヴィス", "Miles Davis"],
    slug: null,
  },
  "nefertiti-album": {
    canonical: "ネフェルティティ（マイルス・デイヴィスのアルバム）",
    aliases: ["ネフェルティティ"],
    slug: null,
  },
  "duke-ellington": {
    canonical: "デューク・エリントン",
    aliases: ["デューク・エリントン", "Duke Ellington"],
    slug: null,
  },
  "harlem-renaissance": {
    canonical: "ハーレム・ルネサンス",
    aliases: ["ハーレム・ルネサンス"],
    slug: null,
  },
  "afro-american": {
    canonical: "アフロアメリカン",
    aliases: ["アフロアメリカン"],
    slug: null,
  },
  "afrocentrism": {
    canonical: "アフロセントリスム",
    aliases: ["アフロセントリスム", "アフロセントリズム"],
    slug: null,
  },

  // ── 0004 ──
  "caetano-veloso": {
    canonical: "カエターノ・ヴェローゾ",
    aliases: ["カエターノ・ヴェローゾ", "カエターノ", "Caetano Veloso"],
    slug: "0004",
  },
  "tropicalia": {
    canonical: "トロピカリスモ（トロピカリア）",
    aliases: ["トロピカリスモ", "トロピカリア"],
    slug: "0004",
  },
  "araca-azul": {
    canonical: "アラサー・アズール",
    aliases: ["アラサー・アズール"],
    slug: "0004",
  },
  "gilberto-gil": {
    canonical: "ジルベルト・ジル",
    aliases: ["ジルベルト・ジル", "Gilberto Gil"],
    slug: null,
  },
  "gal-costa": {
    canonical: "ガル・コスタ",
    aliases: ["ガル・コスタ", "Gal Costa"],
    slug: null,
  },
  "os-mutantes": {
    canonical: "ムタンチス",
    aliases: ["ムタンチス", "Os Mutantes"],
    slug: null,
  },
  "tom-ze": {
    canonical: "トン・ゼー",
    aliases: ["トン・ゼー", "Tom Zé"],
    slug: null,
  },
  "helio-oiticica": {
    canonical: "エリオ・オイティシカ",
    aliases: ["エリオ・オイティシカ", "Hélio Oiticica"],
    slug: null,
  },
  "lygia-clark": {
    canonical: "リジア・クラーク",
    aliases: ["リジア・クラーク", "Lygia Clark"],
    slug: null,
  },
  "glauber-rocha": {
    canonical: "グラウベル・ローシャ",
    aliases: ["グラウベル・ローシャ", "Glauber Rocha"],
    slug: null,
  },
  "joaquim-pedro": {
    canonical: "ジョアキン・ペドロ・ジ・アンドラーデ",
    aliases: ["ジョアキン・ペドロ・ジ・アンドラーデ"],
    slug: null,
  },
  "jose-celso": {
    canonical: "ジョゼ・セルソ・マルチネス・コレア",
    aliases: ["ジョゼ・セルソ・マルチネス・コレア"],
    slug: null,
  },
  "manifesto-antropofago": {
    canonical: "食人宣言（マニフェスト・アントロポファジア）",
    aliases: ["食人宣言", "マニフェスト・アントロポファジア", "アントロポファジア"],
    slug: null,
  },
  "tarsila-do-amaral": {
    canonical: "タルシラ・ド・アマラル",
    aliases: ["タルシラ・ド・アマラル", "Tarsila do Amaral"],
    slug: null,
  },
  "rogerio-duprat": {
    canonical: "ホジェリオ・ドゥプラ",
    aliases: ["ホジェリオ・ドゥプラ", "Rogério Duprat"],
    slug: null,
  },
  "luciano-berio": {
    canonical: "ルチアーノ・ベリオ",
    aliases: ["ルチアーノ・ベリオ", "Luciano Berio"],
    slug: null,
  },
  "cathy-berberian": {
    canonical: "キャシー・バーベリアン",
    aliases: ["キャシー・バーベリアン", "Cathy Berberian"],
    slug: null,
  },
  "haroldo-de-campos": {
    canonical: "アロウド・ジ・カンポス",
    aliases: ["アロウド・ジ・カンポス", "Haroldo de Campos"],
    slug: null,
  },

  // ── 0005 ──
  "villa-lobos": {
    canonical: "エイトール・ヴィラ＝ロボス",
    aliases: ["エイトール・ヴィラ＝ロボス", "ヴィラ＝ロボス", "ヴィラ゠ロボス", "Villa-Lobos"],
    slug: "0005",
  },
  "bachianas-brasileiras-1": {
    canonical: "ブラジル風バッハ第1番",
    aliases: ["ブラジル風バッハ第1番", "ブラジル風バッハ"],
    slug: "0005",
  },
  "lalo-schifrin": {
    canonical: "ラロ・シフリン",
    aliases: ["ラロ・シフリン", "Lalo Schifrin"],
    slug: null,
  },

  // ── 0006 ──
  "daniel-schmid": {
    canonical: "ダニエル・シュミット",
    aliases: ["ダニエル・シュミット", "Daniel Schmid"],
    slug: "0006",
  },
  "la-paloma-film": {
    canonical: "ラ・パロマ（映画）",
    aliases: ["ラ・パロマ"],
    slug: "0006",
  },
  "sebastian-iradier": {
    canonical: "セバスティアン・イラディエル",
    aliases: ["セバスティアン・イラディエル", "Sebastián Iradier"],
    slug: null,
  },
  "nakamura-toyo": {
    canonical: "中村とうよう",
    aliases: ["中村とうよう"],
    slug: null, // 単独記事の予定あり
  },
  "ohno-kazuo": {
    canonical: "大野一雄",
    aliases: ["大野一雄", "Ono Kazuo"],
    slug: null, // 単独記事の予定あり
  },

  // ── 0007 ──
  "stefan-zweig": {
    canonical: "シュテファン・ツヴァイク",
    aliases: ["シュテファン・ツヴァイク", "ツヴァイク", "Stefan Zweig"],
    slug: "0007",
  },
  "the-world-of-yesterday": {
    canonical: "昨日の世界",
    aliases: ["昨日の世界"],
    slug: "0007",
  },

  // ── 0008 ──
  "maurice-ravel": {
    canonical: "モリス・ラヴェル",
    aliases: ["モリス・ラヴェル", "ラヴェル", "ラベル", "Ravel"],
    slug: "0008",
  },
  "la-valse": {
    canonical: "ラ・ヴァルス",
    aliases: ["ラ・ヴァルス", "La Valse"],
    slug: "0008",
  },
  "bolero": {
    canonical: "ボレロ",
    aliases: ["ボレロ", "Boléro"],
    slug: null,
  },
  "red-vienna": {
    canonical: "赤いウィーン",
    aliases: ["赤いウィーン"],
    slug: null,
  },
  "karl-marx-hof": {
    canonical: "カール・マルクス・ホーフ",
    aliases: ["カール・マルクス・ホーフ", "Karl-Marx-Hof"],
    slug: null,
  },

  // ── 0009 ──
  "alberto-giacometti": {
    canonical: "アルベルト・ジャコメッティ",
    aliases: ["アルベルト・ジャコメッティ", "ジャコメッティ", "Giacometti"],
    slug: "0009",
  },
  "palace-at-4am": {
    canonical: "午前四時の宮殿",
    aliases: ["午前四時の宮殿"],
    slug: "0009",
  },
  "louis-sullivan": {
    canonical: "ルイス・サリヴァン",
    aliases: ["ルイス・サリヴァン", "Louis Sullivan"],
    slug: null,
  },
  "mies-van-der-rohe": {
    canonical: "ミース・ファン・デル・ローエ",
    aliases: ["ミース・ファン・デル・ローエ", "Mies van der Rohe"],
    slug: null,
  },
  "arnold-schoenberg": {
    canonical: "アルノルト・シェーンベルク",
    aliases: ["アルノルト・シェーンベルク", "シェーンベルク", "Schoenberg"],
    slug: null,
  },
  "anton-webern": {
    canonical: "アントン・ヴェーベルン",
    aliases: ["アントン・ヴェーベルン", "ヴェーベルン", "Webern"],
    slug: null,
  },
  "jorge-luis-borges": {
    canonical: "ホルヘ・ルイス・ボルヘス",
    aliases: ["ホルヘ・ルイス・ボルヘス", "ボルヘス", "Borges"],
    slug: null,
  },
  "fujimoto-yukio": {
    canonical: "藤本由紀夫",
    aliases: ["藤本由紀夫"],
    slug: null,
  },
  "marcel-duchamp": {
    canonical: "マルセル・デュシャン",
    aliases: ["マルセル・デュシャン", "デュシャン", "Marcel Duchamp"],
    slug: null, // 単独記事の予定あり
  },
  "inagaki-taruho": {
    canonical: "稲垣足穂",
    aliases: ["稲垣足穂", "タルホ"],
    slug: null, // 単独記事の予定あり
  },

  // ── 0010 ──
  "cycladic-civilization": {
    canonical: "キクラデス文明",
    aliases: ["キクラデス文明", "キクラデス"],
    slug: "0010",
  },
  "cycladic-frying-pan": {
    canonical: "キクラデスのフライパン",
    aliases: ["キクラデスのフライパン"],
    slug: "0010",
  },
  "constantin-brancusi": {
    canonical: "コンスタンティン・ブランクーシ",
    aliases: ["コンスタンティン・ブランクーシ", "ブランクーシ", "Brâncuși"],
    slug: null,
  },
  "hans-coper": {
    canonical: "ハンス・コパー",
    aliases: ["ハンス・コパー", "Hans Coper"],
    slug: null,
  },

  // ── 0012（折口信夫）──
  // 「死者の書」は0002（古代エジプトの文書）と同名なので、別エントリとして分離。
  "orikuchi-shinobu": {
    canonical: "折口信夫",
    aliases: ["折口信夫"],
    slug: "0012",
  },
  "shisha-no-sho-orikuchi": {
    canonical: "死者の書（折口信夫）",
    aliases: ["死者の書"], // book-of-the-dead-egypt と同じ語だが、指すものは別
    slug: "0012",
  },
} as const;

export type EntityId = keyof typeof entities;