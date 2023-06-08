// create event listener that listens for page finsihed loading
// create divs and inside of divs append links to websites we want to access
// 'DOMContentLoaded'

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  
  const sites = [
    { href: 'https://www.google.com/', name: 'Google Calendar' },
    { href: 'https://developer.mozilla.org/en-US/', name: 'Mdn' },
    { href: 'https://www.youtube.com/', name: 'YouTube' },
    { href: 'https://chat.openai.com/', name: 'ChatGPT' },
    { href: 'https://www.reddit.com/r/learnprogramming/', name: 'Reddit' },
    { href: 'https://www.w3schools.com/', name: 'W3Schools' },
    { href: 'https://www.udemy.com/', name: 'Udemy' },
    { href: 'https://csx.codesmith.io/', name: 'CSX' },
    { href: 'https://www.freecodecamp.org/', name: 'FreeCodeCamp' },
  ]
  // google, mdn, youtube, chatgpt, reddit, w3schools, udemy, csx, freecodecamp
  
  const container = document.createElement('div');
  body.appendChild(container);


  const button = document.querySelector('.submit');
  const urlInput = document.querySelector('urlInput');
  const titleInput = document.querySelector('titleInput');

  button.addEventListener('click', () => {

    
    let randomInt = Math.floor(Math.random() * 9);
    console.log(sites[randomInt].href);
    window.open(`${sites[randomInt].href}`);
  })


  
  for(let i = 0; i < sites.length; i++){
    const anchors = document.createElement('a');
    // const name = document.createTextNode(sites[i].name);
    anchors.addEventListener('click', () => {
      window.open(`${sites[i].href}`)
    })
    anchors.setAttribute("href", sites[i].href);
    anchors.innerHTML = `<p>${sites[i].name}</p>`
    container.appendChild(anchors);
  }
})

/*
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  console.log(tabs[0].url);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs
  .query({ currentWindow: true, active: true })
  .then(logTabs, onError);
*/