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
        alert('Bine ai venit, ' + username + '! ');
        form.submit();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mainTitle = document.getElementById('titlu');
    if (mainTitle) {
        mainTitle.addEventListener('click', changeColors);
    } else {
        console.log('Elementul cu id-ul "titlu" nu a fost găsit.');
    }
});

function changeColors() {
    const title = document.getElementById('titlu');
    const newColor = randomColor();
    title.style.color = newColor;
}

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}


document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.addToCartBtn');

    function addToCart(album) {
        const info = album.querySelector(".AlbumInfo").textContent;
        alert(info + " a fost adaugat in cos cu succes!");
        saveToLocalStorage(info);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const album = this.parentNode;
            addToCart(album);
        });
    });

    function saveToLocalStorage(albumInfo) {
        let albumsInCart = localStorage.getItem('albumsInCart');
        if (albumsInCart) {
            albumsInCart = JSON.parse(albumsInCart);
        } else {
            albumsInCart = [];
        }
        albumsInCart.push(albumInfo);
        localStorage.setItem('albumsInCart', JSON.stringify(albumsInCart));
    }

    function loadCart() {
        let albumsInCart = localStorage.getItem('albumsInCart');
        if (albumsInCart) {
            albumsInCart = JSON.parse(albumsInCart);
            albumsInCart.forEach(info => {
                console.log(info + " este în coș.");
            });
        }
    }

    loadCart(); 
});

document.addEventListener("DOMContentLoaded", function() {
    let promoInterval;
    let promoCount = 0;
    const maxPromos = 10; 

    function showPromoNotification() {
        const promoMessages = [
            "808s & Heartbreak from Kanye West out now!!",
            "More records to come. Stay tuned!",
            "Înscrie-te la newsletter și primești un voucher in valoare de 30 RON!",
            "Ofertă limitată: Cumpără 2 albume și primești 50% reducere la al 3-lea. Get your freshest records now!",
            "Livrare gratuită pentru comenzi de peste 100 lei!"
        ];
        const message = promoMessages[Math.floor(Math.random() * promoMessages.length)];
        alert(message);
        promoCount++;
        if (promoCount >= maxPromos) {
            clearInterval(promoInterval);
            console.log("Toate notificările promoționale au fost afișate.");
        }
    }

    promoInterval = setInterval(showPromoNotification, 30000);

    setTimeout(() => {
        clearInterval(promoInterval);
        console.log("Notificările au fost oprite după 5 minute.");
    }, 300000); 
});


document.addEventListener("DOMContentLoaded", function() {
    const albums = document.querySelectorAll('.Album');

    albums.forEach(album => {
        album.addEventListener('mouseover', function(event) {
            event.stopPropagation(); 

            const tooltip = document.createElement('div');
            tooltip.style.position = 'absolute';
            tooltip.style.backgroundColor = 'white';
            tooltip.style.border = '1px solid black';
            tooltip.style.padding = '5px';
            tooltip.style.borderRadius = '5px';
            tooltip.style.top = `${event.clientY + 1}px`;
            tooltip.style.left = `${event.clientX + 1}px`;

            const artist = album.getAttribute('data-artist');
            const genre = album.getAttribute('data-genre');
            tooltip.textContent = `Artist: ${artist} | Genre: ${genre}`;

            document.body.appendChild(tooltip);

            album.addEventListener('mouseout', function() {
                tooltip.remove();
            });
        });
    });
});