function filterAlbums() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();
    let albumContainer = document.getElementById('albumContainer');
    let albums = albumContainer.getElementsByClassName('Album');

    for (let i = 0; i < albums.length; i++) {
        let albumInfo = albums[i].getElementsByClassName("AlbumInfo")[0];
        if (albumInfo.innerText.toUpperCase().indexOf(filter) > -1) {
            albums[i].style.display = "";
        } else {
            albums[i].style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let usernameRegex = /^[a-zA-Z0-9_]{5,}[a-zA-Z]+[0-9]*$/;
        let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        let phoneRegex = /^\+?([0-9]{1,3})?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!usernameRegex.test(username)) {
            alert('Invalid username.');
            return false;
        }
        if (!emailRegex.test(email)) {
            alert('Invalid email format.');
            return false;
        }
        if (!phoneRegex.test(phone)) {
            alert('Invalid phone number format.');
            return false;
        }
        alert('Form submitted successfully!');
        form.submit();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.getElementById('mainTitle');
    mainTitle.addEventListener('click', changeColors);
});

function changeColors() {
    const title = document.getElementById('mainTitle');
    const newColor = randomColor();
    title.style.color = newColor;
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


function addToCart(album) {
    const info = album.querySelector(".AlbumInfo").textContent;
    alert(info + " a fost adaugat in cos cu succes!");
}

const addToCartButtons = document.querySelectorAll('.addToCartBtn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const album = this.parentNode;
        addToCart(album);
    });
});