function bands(json) {
    //This section of the code is declaring global variables & adding classes to elements
    let insert = document.querySelectorAll(`div`)[1];
    let content = ``;

    //Creating variables that store the anchor elements in nav and give them a class
    let anchorOne = document.getElementsByTagName(`a`)[0];
    let anchorTwo = document.getElementsByTagName(`a`)[1];
    anchorOne.classList.add(`larrow`);
    anchorTwo.classList.add(`rarrow`);

    //Creating For loop to run through Json Data and Displaying it as Prof.Roy stated I should do in class
    for(let i=0; i<json.length; i++){
        content += `<div class="slide">`
        content += `<h2 class="middle">${json[i].album}</h2>`;
        content += `<p class="middle space"><a href="${json[i].url}">${json[i].artist}</a></p>`;
        content += `<img src=${json[i].cover_image.path}>`;
        content += `<p class="middle">Credit: <a href="${json[i].cover_image.url}" class="align">${json[i].cover_image.credit}</a><p>`;
        content += `<p>${json[i].review.content}</p>`;
        content += `<a href ="${json[i].review.url}"</a>—${json[i].review.source}`;
        content += `</div>`
    }

    insert.innerHTML = content;
}

window.onload = () => {
    //Appending the jsonp file into the tail end of the body
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);
    script.setAttribute(`src`, `json/data.json`);
    body.append(script);

    //Declaring Variables for button function
    let increment, width = 0;
    let firBut = document.querySelectorAll(`img`)[0];
    let secBut = document.querySelectorAll(`img`)[1];
    let slides = document.querySelector(`.carousel-slides`);
    let oneSlide = document.querySelectorAll(`.carousel-slides`)[0];

    //Giving Classes to variables for function
    slides.classList.add(`sliding`);
    firBut.classList.add(`one-button`, `none`);
    secBut.classList.add(`two-button`, `none`);
}
