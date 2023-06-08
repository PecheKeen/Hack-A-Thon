// create event listener that listens for page finsihed loading
// create divs and inside of divs append links to websites we want to access
// 'DOMContentLoaded'

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  
  const sites = [
    { href: 'https://calendar.google.com/', name: 'Google Calendar' },
    { href: 'https://developer.mozilla.org/en-US/', name: 'Mdn' },
    { href: 'https://www.youtube.com/', name: 'YouTube' }]
  
  const container = document.createElement('div');
  body.appendChild(container);

  // window.location.href
  // document.title

  const button = document.querySelector('.submit');
  const urlInput = document.querySelector('urlInput');
  const titleInput = document.querySelector('titleInput');

  button.addEventListener('click', async () => {
    const href = urlInput.value;
    const title = titleInput.value;
    // // sites.push({
    // //   href: href,
    // //   name: title
    // // })
    const anchors = document.createElement('a');
    anchors.addEventListener('click', () => {
      window.open(`${href}`)
    })
    anchors.setAttribute("href", href);

    anchors.innerHTML = `<p>${title}</p>`
    container.appendChild(anchors);
    urlInput.value = '';
    titleInput.value = '';
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