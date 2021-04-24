const input = document.getElementById("input")
const container = document.getElementById("container")
const addButton = document.getElementById("add-button")
const removeAllButton = document.getElementById("remove-all-button")

let list = []

// 省略

removeAllButton.onclick = function() {
  // 状態の更新
  list = []
  localStorage.list = JSON.stringify(list)

  // 状態の表示
  container.textContent = ""
}
