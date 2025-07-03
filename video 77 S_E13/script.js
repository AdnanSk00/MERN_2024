function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let viewStr;
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }

    let html = `<div class="card">
        <div class="image">
            <img src=${thumbnail} alt="">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
        </div>
    </div>`
    
    // console.log(document.querySelector(".container").innerHTML);
    // console.log(html);
    
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
    console.log(document.querySelector(".container").innerHTML);
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "responsiveCode", 560000, 7, "31:22", "img.jpg")


createCard("Introduction to Frontend | Sigma Web Dev video #3", "CodeWithHarry", 1800000, 4, "28:09", "img.jpg")


// createCard("Introduction to Frontend | Sigma Web Dev video #3", "CodeWithHarry", 1800000, 4, "28:09", "img.jpg")