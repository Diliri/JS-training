// Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:

// перший параметр users — масив об’єктів користувачів,
// другий параметр gender — рядок, що зберігає стать.
// Функція має використовувати ланцюжок виклику методів та
// повертати загальний баланс користувачів(властивість balance),
// стать яких(властивість gender) збігається зі значенням параметра gender.

// Мій працюючий код, але тут немає необхідного ланцюжка методів
// const getTotalBalanceByGender = (users, gender) => {
//   let balace = 0;
//   users.filter(user => (balance += user.gender.includes(gender)));
//   return balance;
// };

const getTotalBalanceByGender = (users, gender) =>
  users
    .filter(user => user.gender === gender) // 1. Фільтруємо користувачів за статтю
    .reduce((total, user) => total + user.balance, 0); // 2. Сумуємо їхні баланси

// Чому ми змінили код:
// filter: ми використовуємо його за призначенням — щоб залишити в масиві лише тих людей,
// чия стать збігається з аргументом gender.

// reduce: цей метод ідеально підходить для "згортання" масиву в одне число(суму).
// Він приймає акумулятор(total) та поточний об'єкт (user). 0 в кінці — це початкове значення суми.

const clients = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
