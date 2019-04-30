fetch("https://favqs.com/api/qotd")
  .then(response => {
    return response.json();
  })
  .then(data => {
    let quoteResult = (document.getElementById(
      "result"
    ).innerHTML = `<div class="quoteresult">
    Quotes ${data.quote.id} by <span class="author">${data.quote.author}</span>.
    <br/> <img src="https://freeicons.io/laravel/public/uploads/icons/png/19550183341535694872-128.png" alt="tag"/> tags: (${
      data.quote.tags
    })
    <br/>
    <br/>
    “${data.quote.body}”
    <div><hr/></div>
    <a href="${data.quote.url}">Source</a>
    <br/>
    <br/>
    <img src="http://aux.iconspalace.com/uploads/20996256411199227285.png" alt="favorites_count"/> : ${
      data.quote.favorites_count
    }
    <img src="https://cdn1.iconfinder.com/data/icons/zikons/400/----16-128.png" alt="upvotes_count"/> : ${
      data.quote.upvotes_count
    }
    <img src="https://cdn0.iconfinder.com/data/icons/user-interface-vol-5-4/66/7-256.png" alt="downvotes_count"/> : ${
      data.quote.downvotes_count
    }
    </div>`);
  })
  .catch(error => {
    console.log(error);
  });

const generateButton = document.getElementById("submit");
generateButton.addEventListener("click", refreshPage);

function refreshPage() {
  location.reload();
}
