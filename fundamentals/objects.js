let countries = {
  greet: function () {
    console.log('Hello,World!');
  },
  India: {
    Leader: 'Modi',
    Capital: 'Delhi',
    Currency: 'INR',
  },
  USA: {
    Leader: 'Trump',
    Capital: 'Washington, D.C.',
    Currency: 'USD',
  },
};

console.log(countries.India.Capital);

countries.India.Capital = 'New Delhi';

console.log(countries.India.Capital);

console.log('\n-------------------------\n')

let blackcoffee = [
  { name: 'Instant Coffee Powder', qty: '10 - 20 grams' },
  { name: 'Hot Water', qty: '200 mL' },
  { name: 'Optional: Suger', qty: 'Depending upon your taste' },
];

for (let ingredients of blackcoffee) {
  console.log(ingredients.name);
}
