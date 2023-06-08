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

  for(let i = 0; i < sites.length; i++){
    const anchors = document.createElement('a');
    // const name = document.createTextNode(sites[i].name);
    anchors.setAttribute("href", sites[i].href);
    anchors.innerHTML = `<p>${sites[i].name}</p>`
    container.appendChild(anchors);
  }

  
})