import { jokes } from './_13_jokes.js';

// Log a random joke
// const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
// console.log(`${randomJoke.setup} - ${randomJoke.punchline}`);

function randomjokesetup(){
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return (`${randomJoke.setup}`);
}
function randomjokefull(innerText){
    const joke = jokes.find(joke => joke.setup === innerText);
    return (`${joke.setup} - ${joke.punchline}`);
}

let a = document.getElementsByTagName("div")

a[1].innerText = randomjokesetup()
a[2].innerText = randomjokesetup()
a[3].innerText = randomjokesetup()
a[4].innerText = randomjokesetup()
a[5].innerText = randomjokesetup()
a[6].innerText = randomjokesetup()
a[7].innerText = randomjokesetup()

a[1].addEventListener('click', () => {
    a[1].innerText = randomjokefull(a[1].innerText)
});

a[2].addEventListener('click', () => {
    a[2].innerText = randomjokefull(a[2].innerText)
});
a[3].addEventListener('click', () => {
    a[3].innerText = randomjokefull(a[3].innerText)
});
a[4].addEventListener('click', () => {
    a[4].innerText = randomjokefull(a[4].innerText)
});
a[5].addEventListener('click', () => {
    a[5].innerText = randomjokefull(a[5].innerText)
});
a[6].addEventListener('click', () => {
    a[6].innerText = randomjokefull(a[6].innerText)
});
a[7].addEventListener('click', () => {
    a[7].innerText = randomjokefull(a[7].innerText)
});