# Ex.07 Design of Interactive Image Gallery
## Date: 27/12/2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:
- - -

ranju.html
<html>
<head>
    <meta charset="UTF-8">
    <title>Football Trophy Gallery</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">The past and future</h1>
        <p class="small-text">Lionel Messi . Cristiano Ronaldo . Neymar Jr . Kylian Mbappe . Lamine Yamal </p>
                                                                                            
        <div class="image-area">
            <img src="messi.png" id="photo" alt="universe picture">

            <p class="title" id="title-text">Lionel Messi</p>
            <p class="info" id="info-text">
                Greatest player of all time
            </p>
        </div>

        <div class="buttons">
            <button type="button" onclick="prev()">Prev</button>
            <button type="button" onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 5</p>
    </div>

    <footer class="footer">
        &copy; Saravanan k
    </footer>

    <script src="anu.js"></script>
</body>
</html>


style.css
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background: url("background.png") no-repeat center center fixed;
    background-size:contain;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: rgb(249, 244, 244);
}
.box {
    width: 85%;
    max-width: 1800px;
    margin-left:560px;
    padding: 40px;
    
    border-radius: 15px;
    margin-top:45px;
    background: url("") no-repeat center center fixed;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 20px;
    margin-bottom: 15px;
    color: #960505;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #ea0b89;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #f3eb07;
    color: #068eef;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #041aa5;
}
.footer {
    margin-left:75px;
    font-size: 25px;
    padding: 8px;
    color: #05f340;
}



anu.js
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

- - -
## OUTPUT:
![alt text](<anu/ranjuapp/static/Screenshot 2025-12-27 224343.png>)
![alt text](<anu/ranjuapp/static/Screenshot 2025-12-27 224356.png>)
![alt text](<anu/ranjuapp/static/Screenshot 2025-12-27 224412.png>)
![alt text](<anu/ranjuapp/static/Screenshot 2025-12-27 224426.png>)
![alt text](<anu/ranjuapp/static/Screenshot 2025-12-27 224436.png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
