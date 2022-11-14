const container = document.getElementById('container');
const request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v2/name/usa');
request.send();

request.addEventListener('load',function(){
    const [x] = JSON.parse(this.responseText);
    const image = x.flags.png
    const query = `<div><img src = ${image} ></div>`;
    container.insertAdjacentHTML('afterbegin',query);
});