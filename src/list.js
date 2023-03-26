function createList(items) {
  const ul = document.createElement('ul');
  items.forEach((item) => {
    const li = document.createElement('li');
    if (item !== Node) {
      li.innerText = item;
    } else {
      li.appendChild(item);
    }
    ul.appendChild(li);
  });

  return ul;
}

export default createList;
