function bands(json) {
    let anchorOne = document.getElementsByTagName(`a`)[0];
    let anchorTwo = document.getElementsByTagName(`a`)[1];

    anchorOne.classList.add(`hidden-button`, `left-button`);
    anchorTwo.classList.add(`button`, `right-button`);



    //let insert = document.querySelector(`div`)[1];
    //insert.innerHTML = `<div class="slide"></div>`;

    let insert = document.querySelector(`.carousel-slides`)
    insert.innerHTML = `<div class="slide"></div><div class="slide-two"></div>`
    let select = document.querySelector(`.slide`);
    let content = ``

    content += `<p>${json[0].artist}</p>`;
    content += `<p>${json[0].album}</p>`;
    content += `<img src=${json[0].cover_image.path}>`;
    content += `<p>${json[0].review.content}</p>`;
    content += `<p><a href ="${json[0].review.url}"</a>—${json[0].review.source}</p>`;

    select.innerHTML = content;


    // let contentTwo = ``;

    // contentTwo += `<p>${json[1].artist}</p>`;
    // contentTwo += `<p>${json[1].album}</p>`;
    // contentTwo += `<img src=${json[1].cover_image.path}>`;
    // contentTwo += `<p>${json[1].review.content}</p>`;
    // contentTwo += `<p><a href ="${json[1].review.url}"</a>—${json[1].review.source}</p>`;


    // insert.innerHTML = content;

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