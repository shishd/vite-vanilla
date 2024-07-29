import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
// a
fetch('https://hanfan.cc/wp-json/wp/v2/posts').
  then(response => response.json()).
  then(data => {
    console.log(data);
    document.getElementById('app2').innerHTML = data.map(item => {
      return `<div class="card">
      <h2>${item.title.rendered}</h2>
      <p>${item.excerpt.rendered}</p>
      <a href="${item.link}">Read more</a>
    </div>`
    }).join('')
  })

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
