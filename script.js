const valueButton = document.querySelector('#valueButton');

valueButton.onClick(makePost())

function makePost() {
  var postData = new FormData();
  postData.append('data', "success");
  fetch("https://bobisbilly.github.io/SideProject", {
    method: "POST",
    body: postData,
  })
  .then(response => response.json())
  .then(json => {
    let row = `<tr><th>Data</th><th>Value</th></tr>`;
    json.forEach(data =>  {
      row += `<tr><td>${data.data}
          </td><td>${data.value}</td></tr>`;
    });
    const row = document.getElementById('tableone');
  });
}
