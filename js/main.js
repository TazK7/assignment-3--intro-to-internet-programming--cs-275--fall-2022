window.onload = () => {
    let body = document.querySelector(`body`);
    let script = document.createElement(`script`);

    script.setAttribute(`src`, `json/data.json`);
    body.append(script);
}

function bands(json) {
    let anchorOne = document.getElementsByTagName(`a`)[0];
    let anchorTwo = document.getElementsByTagName(`a`)[1];
    anchorOne.classList.add(`hidden-button`, `left-button`);
    anchorTwo.classList.add(`button`, `right-button`);

}