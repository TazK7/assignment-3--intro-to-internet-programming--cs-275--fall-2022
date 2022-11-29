function bands(json) {
    // This section of the code is getting the two anchor elements and giving them a class for functionality later
    let anchorOne = document.getElementsByTagName(`a`)[0];
    let anchorTwo = document.getElementsByTagName(`a`)[1];
    anchorOne.classList.add(`hidden-button`, `left-button`);
    anchorTwo.classList.add(`button`, `right-button`);

    //Initializing a variable to select the carousel-slides div class and insert more divs inside of it
    let insert = document.querySelector(`.carousel-slides`);
    insert.innerHTML = `<div class="slide"></div><div class="slide-two"></div><div class="slide-three"></div><div class="slide-four"></div>`;

    //Starting to lay the first contents from the Json file onto the viewport
    let select = document.querySelector(`.slide`);
    let content = ``;

    content += `<p>${json[0].artist}</p>`;
    content += `<p>${json[0].album}</p>`;
    content += `<img src=${json[0].cover_image.path}>`;
    content += `<p>${json[0].review.content}</p>`;
    content += `<p><a href ="${json[0].review.url}"</a>—${json[0].review.source}</p>`;

    select.innerHTML = content;

    //Second set of data from Json file
    let selectTwo = document.querySelector(`.slide-two`)
    let contentTwo = ``;

    contentTwo += `<p>${json[1].artist}</p>`;
    contentTwo += `<p>${json[1].album}</p>`;
    contentTwo += `<img src=${json[1].cover_image.path}>`;
    contentTwo += `<p>${json[1].review.content}</p>`;
    contentTwo += `<p><a href ="${json[1].review.url}"</a>—${json[1].review.source}</p>`;

    selectTwo.innerHTML = contentTwo;

    //Third Set of data from Json File
    let selectThree = document.querySelector(`.slide-three`)
    let contentThree = ``;

    contentThree += `<p>${json[2].artist}</p>`;
    contentThree += `<p>${json[2].album}</p>`;
    contentThree += `<img src=${json[2].cover_image.path}>`;
    contentThree += `<p>${json[2].review.content}</p>`;
    contentThree += `<p><a href ="${json[2].review.url}"</a>—${json[2].review.source}</p>`;

    selectThree.innerHTML = contentThree; 

    //Last set of data from Json File
    let selectFour = document.querySelector(`.slide-four`)
    let contentFour = ``;

    contentFour += `<p>${json[3].artist}</p>`;
    contentFour += `<p>${json[3].album}</p>`;
    contentFour += `<img src=${json[3].cover_image.path}>`;
    contentFour += `<p>${json[3].review.content}</p>`;
    contentFour += `<p><a href ="${json[3].review.url}"</a>—${json[3].review.source}</p>`;

    selectFour.innerHTML = contentFour;
    
    
    //let leftBox = document.createElement(`div`);
    //leftBox.classList.add(`left-rectangle`);
    //insert.after(`<div>`);
}

window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);

    script.setAttribute(`src`, `json/data.json`);
    body.append(script);
}