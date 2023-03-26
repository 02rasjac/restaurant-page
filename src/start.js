import createList from './list';

const main = document.createElement('main');
const title = document.createElement('h1');

title.innerText = 'Restaurant Name';
main.appendChild(title);

const bestReviewSec = document.createElement('section');
const bestReviewQuote = document.createElement('blockquote');
const bestReviewName = document.createElement('p');

bestReviewQuote.innerText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, blandit id molestie ut, convallis et risus. Vestibulum venenatis.';
bestReviewName.innerText = 'Reviewers Name';
bestReviewSec.appendChild(bestReviewQuote);
bestReviewSec.appendChild(bestReviewName);
main.appendChild(bestReviewSec);

function createSection(titleText, content) {
  const sec = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.innerText = titleText;
  sec.appendChild(h2);

  if (content instanceof Node) sec.appendChild(content);
  else {
    const p = document.createElement('p');
    p.innerText = content;
    sec.appendChild(p);
  }

  return sec;
}

main.appendChild(
  createSection(
    'Hours',
    createList([
      'Sunday: 8am - 8pm',
      'Monday: 6am - 6pm',
      'Tuesday: 6am - 6pm',
      'Wednesday: 6am - 6pm',
      'Thursday: 6am - 10pm',
      'Friday: 6am - 10pm',
      'Saturday: 8am - 10pm',
    ])
  )
);

main.appendChild(createSection('Location', 'Husky Trail 4, Dogville.'));

export default main;
