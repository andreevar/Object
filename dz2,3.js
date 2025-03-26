//Конвертер валют 
const rates = { 
    dollar: 75, 
    euro: 85 
};
let rubles = +prompt("Введите сумму в рублях:");
if (rubles < 0) {
    alert("Сумма не может быть отрицательной.");
} else {
    let currency = prompt("Выберите валюту (доллар/евро):").toLowerCase();
    let result = rates[currency] ? (rubles / rates[currency]).toFixed(2) : null;
    alert(result ? `Сумма в ${currency}: ${result} ${currency === 'доллар' ? '$' : '€'}` : "Неверный выбор валюты.");
}


// Книги
let books = [];

function addBook() {
    let title = prompt("Введите название книги:");
    let author = prompt("Введите автора книги:");
    let genre = prompt("Введите жанр книги:");
    let rating = prompt("Введите оценку от 1 до 5:");

    if (rating < 1 || rating > 5) {
        alert("Оценка должна быть от 1 до 5.");
        return;
    }

    books.push({ title, author, genre, rating });
    alert("Книга добавлена!");
}

// Фильтрация книг
function filterBooks() {
    let genre = prompt("Введите жанр для фильтрации:");
    let filtered = books.filter(book => book.genre.toLowerCase() === genre.toLowerCase());

    if (filtered.length > 0) {
        alert("Отфильтрованные книги:\n" + filtered.map(b => `${b.title} - ${b.author} (Рейтинг: ${b.rating})`).join("\n"));
    } else {
        alert("Книг с таким жанром не найдено.");
    }
}

// Основное меню
while (true) {
    let action = prompt("Выберите действие: 1 - добавить книгу, 2 - фильтровать книги, 3 - выйти");
    if (action === "1") {
        addBook();
    } else if (action === "2") {
        filterBooks();
    } else if (action === "3") {
        break;
    } else {
        alert("Неверный выбор.");
    }
}
