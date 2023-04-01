const header = document.createElement('header');
const nav = document.createElement('nav');
const list = document.createElement('ul');
const links = [
  {
    text: 'Home',
  },
  {
    text: 'Menu',
  },
  {
    text: 'Contact',
  },
];

links.forEach((link) => {
  const a = document.createElement('a');
  a.setAttribute('id', link.text.toLowerCase());
  const li = document.createElement('li');
  li.innerText = link.text;
  a.appendChild(li);
  list.appendChild(a);
});

nav.appendChild(list);
header.appendChild(nav);

export default header;
