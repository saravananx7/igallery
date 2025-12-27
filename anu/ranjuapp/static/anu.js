
var pics = [
    {
        image: "/static/messi.png",
        title: "Lionel Messi",
        info: "Greatest player of all time"
    },
    {
        image: "/static/cristiano.png",
        title: "Cristiano Ronaldo",
        info: "Greatest goalscorer of all time"
    },
    {
        image: "neymar.png",
        title: "Neymar Jr",
        info: "Prince of Football"
    },
    {
        image: "mbappe.png",
        title: "Kylian Mbappe",
        info: "Best player in the World"
    },
    {
      image: "yamal.png",
        title: "Lamine Yamal",
        info: "Best Youngster in the World"
    }
];

window.onload = function () {

    var i = 0;

    var photo     = document.getElementById("photo");
    var titleText = document.getElementById("title-text");
    var infoText  = document.getElementById("info-text");
    var countText = document.getElementById("count-text");

    function show() {
        photo.src           = pics[i].image;
        titleText.innerHTML = pics[i].title;
        infoText.innerHTML  = pics[i].info;
        countText.innerHTML = (i + 1) + " / " + pics.length;
    }

    window.next = function () {
        i++;
        if (i >= pics.length) {
            i = 0;
        }
        show();
    }

    window.prev = function () {
        i--;
        if (i < 0) {
            i = pics.length - 1;
        }
        show();
    }

    show();
};