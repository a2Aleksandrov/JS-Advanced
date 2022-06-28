window.addEventListener('load', solve);

function solve() {
    let genre = document.getElementById('genre');
    let songName = document.getElementById('name');
    let author = document.getElementById('author');
    let date = document.getElementById('date');
    let addBtn = document.getElementById('add-btn');

    let input = [genre, songName, author, date];

    let sectionALL = document.querySelector('.all-hits-container');
    let sectionSaved = document.querySelector('.saved-container');

    let totalLikes = document.querySelector('.likes').children[0];
    let likes = 0;

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        if (genre.value == '' ||
            songName.value == '' ||
            author.value == '' ||
            date.value == '') {
            return;
        }
        let div = document.createElement('div');
        div.className = 'hits-info';
        let img = document.createElement('img');
        img.src = './static/img/img.png';
        let genreh2 = document.createElement('h2');
        genreh2.textContent = `Genre: ${genre.value}`;
        let nameh2 = document.createElement('h2');
        nameh2.textContent = `Name: ${songName.value}`;
        let authorh2 = document.createElement('h2');
        authorh2.textContent = `Author: ${author.value}`;
        let h3 = document.createElement('h3');
        h3.textContent = `Date: ${date.value}`;
        let saveBtn = document.createElement('button');
        saveBtn.className = 'save-btn';
        saveBtn.textContent = 'Save song';
        let likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn';
        likeBtn.textContent = 'Like song';
        let delBtn = document.createElement('button');
        delBtn.className = 'delete-btn';
        delBtn.textContent = 'Delete';

        div.appendChild(img);
        div.appendChild(genreh2);
        div.appendChild(nameh2);
        div.appendChild(authorh2);
        div.appendChild(h3);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(delBtn);

        sectionALL.appendChild(div);

        input.forEach(ele => ele.value = '');

        let songList = Array.from(sectionALL.querySelectorAll('.hits-info'));
        songList.forEach(song => {
            let like = song.querySelector('.like-btn');
            let save = song.querySelector('.save-btn');
            let del = song.querySelector('.delete-btn');
            like.addEventListener('click', onLike);
            save.addEventListener('click', onSave);
            del.addEventListener('click', onDelete);
        });

    }
    function onLike(event) {

        likes++;
        totalLikes.textContent = `Total Likes: ${likes}`;
        event.target.disabled = true;
    }
    function onSave(event) {
            
            sectionSaved.appendChild(event.target.parentElement);
            event.target.parentElement.children[6].remove();
            event.target.remove();
    }
    function onDelete(event) {
        event.target.parentElement.remove();
    }
}