function bands(json) {
    //This section of the code is declaring global variables & adding classes to elements
    let insert = document.querySelectorAll(`div`)[1];
    let findDiv = document.querySelectorAll(`div`)[0]
    let content = ``;
    //Creating the boxes to cover the content
    let boxOne = document.createElement(`div`); 
    let boxTwo = document.createElement(`div`);
    boxOne.classList.add(`box-one`);
    boxTwo.classList.add(`box-two`);
    findDiv.appendChild(boxOne);
    findDiv.appendChild(boxTwo);

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

    let anchorOne = document.getElementsByTagName(`a`)[0];
    let anchorTwo = document.getElementsByTagName(`a`)[1];
    anchorOne.classList.add(`larrow`);
    anchorTwo.classList.add(`rarrow`);

    let sliding = document.querySelectorAll(`.carousel-slides`)[0]; 
    let width = 0;

    anchorOne.addEventListener(`click`, () => {
        width += 680;
        sliding.style.transform = `translate(`+width+`px)`;
    });

    anchorTwo.addEventListener(`click`, () => {
            width -= 680;
            sliding.style.transform = `translate(`+width+`px)`;
        });

        document.addEventListener(`keydown`, (e) => {
            if (e.key === `ArrowRight`) {
                anchorTwo.click();
            } else if (e.key === `ArrowLeft`) {
                anchorOne.click();
            }
        });
    }

