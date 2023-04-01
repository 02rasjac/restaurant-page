/**
 * Create a `h1` element.
 * @param {string} text Inner text of the element.
 * @returns {Element} The `h1` element.
 */
export default function createTitle(text) {
  const title = document.createElement('h1');

  title.innerText = text;
  return title;
}
