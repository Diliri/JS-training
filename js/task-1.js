// Callback
// Задача 1. Сума чисел: Напишіть функцію sumArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна обчислити суму чисел у масиві та передати результат у колбек.
function sumArray(numbers, callback) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  callback(sum);
}

// Приклад використання:
const myNumbers = [10, 20, 30, 40];

sumArray(myNumbers, result => {
  console.log('Сума масиву дорівнює:', result);
});

// Задача 2. Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.
function doubleArray(numbers, callback) {
  // map створює новий масив, тому ми зберігаємо його у змінну
  const doubled = numbers.map(number => {
    return number * 2;
  });

  // Передаємо саме НОВИЙ масив у колбек
  callback(doubled);
}

// Приклад використання:
const original = [1, 2, 3, 4, 5];

doubleArray(original, res => {
  console.log('Новий масив:', res); // [2, 4, 6, 8, 10]
  console.log('Оригінал залишився без змін:', original); // [1, 2, 3, 4, 5]
});
// є один нюанс: метод map не змінює оригінальний масив, а створює новий.

// Задача 3. Фільтр слів: Напишіть функцію filterWords(words, condition, callback), яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback. Функція повинна фільтрувати слова масиву за допомогою переданої умови та передати відфільтрований масив у колбек.
function filterWords(words, condition, callback) {
  const filtered = words.filter(condition);
  callback(filtered);
}

// Приклад використання:
const words = ['яблуко', 'банан', 'ананас', 'ківі', 'груша'];

// 1. Фільтруємо слова, довші за 5 символів
filterWords(
  words,
  word => word.length > 5,
  result => {
    console.log('Довгі слова:', result); // ["яблуко", "ананас"]
  }
);

// 2. Фільтруємо слова, що починаються на "а"
filterWords(
  words,
  word => word.startsWith('а'),
  result => {
    console.log("Слова на 'а':", result); // ["ананас"]
  }
);

// Задача 4. Капіталізація рядків: Напишіть функцію capitalizeStrings(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити всі рядки в масиві, роблячи першу літеру кожного рядка великої, і передати перетворений масив в колбек.
function capitalizeStrings(strings, callback) {
  const capitalized = strings.map(string => {
    // Беремо перший символ [0], робимо великим + додаємо решту рядка з 1-го індексу
    return string.charAt(0).toUpperCase() + string.slice(1);
  });

  callback(capitalized);
}

// Приклад використання:
const names = ['apple', 'banana', 'cherry'];

capitalizeStrings(names, result => {
  console.log(result); // ["Apple", "Banana", "Cherry"]
});

// Задача 5. Сортування чисел: Напишіть функцію sortNumbers(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна відсортувати числа в масиві за зростанням та передати відсортований масив у колбек.

// задача 6. Пошук максимуму: Напишіть функцію findMax(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна знайти максимальне число в масиві та передати його в колбек.

// Задача 7. Перевірка на парність: Напишіть функцію checkEven(numbers, callback), яка приймає масив чисел numbers та колбек callback. Функція повинна перевірити, чи всі числа в масиві парні, і передати результат перевірки колбек.
function checkEven(numbers, callback) {
  const result = numbers.every(number => number % 2 === 0);
  callback(result);
}

// Перевірка на парних числах
checkEven([2, 4, 6, 8], isEven => {
  console.log(isEven); // true
});

// Перевірка з одним непарним числом
checkEven([2, 4, 7, 8], isEven => {
  console.log(isEven); // false
});

// Задача 8. Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), яка приймає масив рядків strings, рядок separator та колбек callback. Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, і передати рядок, що вийшов, в колбек.
function concatStrings(strings, separator, callback) {
  // Метод join автоматично бере кожен елемент і ставить між ними separator
  const combinedString = strings.join(separator);

  callback(combinedString);
}

// Приклад використання:
concatStrings(['Київ', 'Львів', 'Одеса'], ' - ', result => {
  console.log(result); // "Київ - Львів - Одеса"
});

// Задача 9. Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.
function parseNumbers(strings, callback) {
  const res = strings.map(string => {
    return Number(string); // parseInt()
  });
  callback(res);
}

// Приклад використання:
const input = ['10', '25.5', '100'];

parseNumbers(input, numbers => {
  console.log(numbers); // [10, 25.5, 100]
  console.log(typeof numbers[0]); // "number"
});

// 2ий варіант рішення: const parseNumbers = (strings, callback) => callback(strings.map(Number));

// Задача 10. Підрахунок символів: Напишіть функцію countCharacters(strings, callback), яка приймає масив рядків strings та колбек callback. Функція повинна підрахувати загальну кількість символів у всіх рядках масиву та передати результат у колбек.
function countCharacters(strings, callback) {
  let sum = 0;
  strings.forEach(string => (sum += string.length));
  callback(sum);
}

// Приклад використання:
countCharacters(['Привіт', 'світ', 'JS'], result => {
  console.log(`Загальна кількість символів: ${result}`); // Виведе: 12
});
