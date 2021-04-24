const kanban = new jKanban({
  element: "#myKanban", //タスク管理ボードを表示させたいHTML要素

  gutter: "15px", //ボード同士の間隔

  widthBoard: "250px", //ボードのサイズ

  boards: defaultBoards, //初期状態のボードの中身をJSONで指定
})

const defaultBoards = [
  {
    id: "sample-board-1",
    title: "タスク",
    item: [{ title: "報告書の作成" }, { title: "14時から打ち合わせ" }],
  },

  {
    id: "sample-board-2",
    title: "進行中",
    item: [{ title: "○○案の企画書作成" }],
  },

  {
    id: "sample-board-3",
    title: "完了",
    item: [{ title: "日報の提出" }],
  },
]
