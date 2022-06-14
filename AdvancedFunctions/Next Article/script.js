function getArticleGenerator(articles) {

    let textField = document.querySelector('#content');

    function show() {
        if (articles.length > 0) {

            let newArticle = document.createElement('article');
            newArticle.textContent = articles.shift();
            textField.appendChild(newArticle);
        }

    }
    return show;
}
