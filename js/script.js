function validateForm() {
    var formName = document.forms['contactUs']['name'].value;
    var formEmail = document.forms['contactUs']['email'].value;
    var formInterest = document.forms['contactUs']['interest'].value;

    if (formName === "" || formEmail === "" || formInterest === "") {
        alert("Please fill in all required fields.");
        return false;
    }
    else{
        document.getElementById('message-name').innerHTML = formName;
        currentDate = new Date();
        document.getElementById('message-current').innerHTML = currentDate;
        document.getElementById('message-date-birth').innerHTML = birthToString;
        let kelamin = kelaminRadio.value;
        document.getElementById('message-gender').innerHTML = kelamin;
        document.getElementById('message-pesan').innerHTML = pesan;
        return false;
    }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var n;
    var imgList = document.getElementsByClassName("profil-img");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = 'block';
}

setInterval(() => {
    plusDivs(1);
}, 5000)

