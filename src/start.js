import createList from './list';

const siblings = [];

const title = document.createElement('h1');

title.innerText = 'Restaurant Name';
siblings.push(title);

function createReview() {
  const bestReviewSec = document.createElement('section');
  const bestReviewFig = document.createElement('figure');
  const bestReviewQuote = document.createElement('blockquote');
  const bestReviewName = document.createElement('figcaption');

  bestReviewQuote.innerText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi nunc, blandit id molestie ut, convallis et risus. Vestibulum venenatis.';
  bestReviewName.innerText = '- Reviewers Name';
  bestReviewFig.append(bestReviewQuote, bestReviewName);
  bestReviewSec.appendChild(bestReviewFig);
  return bestReviewSec;
}

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

  sec.classList.add('split-column');
  return sec;
}

siblings.push(createReview());

siblings.push(
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

siblings.push(createSection('Location', 'Husky Trail 4, Dogville.'));

export default siblings;
