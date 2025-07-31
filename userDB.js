// usersDB.js

// Пример "базы данных" пользователей
const usersDB = [
  {
    username: "admin",
    password: "admin123", // ⚠️ НЕ безопасно — для демонстрации
  },
  {
    username: "sheluser",
    password: "shelpass",
  }
];

// Функция для проверки логина
function checkLogin(username, password) {
  return usersDB.find(
    (user) => user.username === username && user.password === password
  );
}

// Функция для добавления нового пользователя
function registerUser(username, password) {
  // Проверка, есть ли уже такой пользователь
  const exists = usersDB.find((u) => u.username === username);
  if (exists) {
    return { success: false, message: "Пользователь уже существует" };
  }

  usersDB.push({ username, password });
  return { success: true, message: "Регистрация успешна" };
}
