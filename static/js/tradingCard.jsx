var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

function TradingCard(props) {
  return (
    <div className="card">
      <p>Name: {props.name}</p>
      <img src={props.imgUrl} />
      <p>Skill: {props.skill} </p>
    </div>
  );
}

function TradingCardContainer() { // function 

  const [cards, updateCards] = React.useState([]); // a hook that allows you to have state variables in functional components

  // analogy: props are immutable, like eye color; states are mutable, like moods
  // functional components are functions that just accept arguments as the properties of the component and return valid JSX
  
  React.useEffect(() => { // the effect hook lets you perform side effects in function components
    fetch('/cards.json')
    .then((response) => response.json())
    .then((data) => updateCards(data.cards))
    // .then((data) => updateCards(data)) // original incorrect code in lab - ignore
  }, [])

  const tradingCards = [];

  const floatCard = { // unsure of the reason behind this additional code
    name: 'Float', // it looks like it is hardcoded at the top of this file
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  };

  const [cards, updateCards] = React.useState([floatCard]);

  for (const currentCard of cards) {
    tradingCards.push( // the push method appends values to an array
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div> // html code that refers to {tradingCards} variable
  );                          // this variable now includes user submitted name and skill
}

  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        key={currentCard.name}
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }

  return (
    <div>{tradingCards}</div>
  );
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
