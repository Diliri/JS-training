// Напиши стрілочну функцію sortByDescendingFriendCount(users),
// яка прийматиме один параметр users — масив об’єктів користувачів.

// Функція має повертати масив усіх користувачів,
// відсортованих за спаданням кількостій їх друзів(властивість friends).

const sortByDescendingFriendCount = users => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
};
// а якби був порядок ЗРОСТАННЯ? Тоді users.toSorted((a, b) => a.friends.length - b.friends.length);

// Коли ми пишемо b.friends.length - a.friends.length, ми кажемо:

// "Візьми кількість друзів у другого користувача (b) і відніми кількість друзів першого (a)".

// Якщо результат від'ємний — a ставиться перед b.
// Якщо результат додатний — b ставиться перед a.
// Якщо 0 — порядок не змінюється.

console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
