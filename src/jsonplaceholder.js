// ランダム
const randomId = Math.floor(Math.random() * 100) + 1; // 1〜100のランダムな整数を生成する
const randomUrl = `https://jsonplaceholder.typicode.com/posts/${randomId}`;

const randomResultElement = document.getElementById("random-result");

fetch(randomUrl)
  .then((res) => res.json())
  .then((json) => {
    const userId = json.userId;
    const id = json.id;
    const title = json.title;

    randomResultElement.innerHTML = `
      <ul>
      <li>ランダムのナンバー: ${id}</li>
        <li>ユーザーID: ${userId}</li>
       <li>タイトル: ${title}</li>



      </ul>
    `;
  })
  .catch((e) => console.error(e.message));

// ナンバー入力
const userInputResultElement = document.getElementById("user-result");

const input = window.prompt("1から100の数字（IDナンバー）を入れてください");
const id = parseInt(input);

if (isNaN(id) || id < 1 || id > 100) {
  alert("1から100の半角数字でお願いします");
} else {
  const userInputUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

  fetch(userInputUrl)
    .then((res) => res.json())
    .then((json) => {
      const userId = json.userId;
      const id = json.id;
      const title = json.title;
      userInputResultElement.innerHTML = `
      <ul>
      <li>入力したナンバー: ${id}</li>
      <li>ユーザーID: ${userId}</li>
      <li>タイトル: ${title}</li>
    </ul>
  `;
    })
    .catch((e) => console.error(e.message));
}
