📌 Laravel To-Do List REST API

Простой REST API для управления списком задач (To-Do List), разработанный на Laravel.

🔧 Стек технологий

PHP (Laravel 11+)

SQLite или MySQL

Laravel Eloquent ORM

Laravel Vite

REST API

Vite + npm (npm run dev для сборки frontend-ресурсов)

📦 Установка и запуск проекта
1. Клонируй репозиторий
git clone https://github.com/directorcompany/todo.git
cd laravel-todo-api

2. Установи зависимости PHP
composer install

3. Установи JS-зависимости
npm install

4. Сконфигурируй .env
cp .env.example .env


Измени настройки базы данных:

Используйте MySQL:

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo_db
DB_USERNAME=root
DB_PASSWORD=your_password

5. Сгенерируй ключ приложения
php artisan key:generate

6. Выполни миграции
php artisan migrate

7. Запусти dev-сервер
php artisan serve


И запусти Vite (если используется фронт):

npm run dev

<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/f02e6f39-5685-4e32-a33c-44696bee3838" />

📌 API endpoints
Метод	Endpoint	Описание
POST	/api/tasks	Создать задачу
GET	/api/tasks	Получить список задач
GET	/api/tasks/{id}	Получить задачу по ID
PUT	/api/tasks/{id}	Обновить задачу
DELETE	/api/tasks/{id}	Удалить задачу
Пример запроса POST /api/tasks
{
  "title": "Купить молоко",
  "description": "2 литра, срочно",
  "status": "pending"
}

✅ Валидация<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/28ce7668-b68c-4081-ace8-7490cbf16240" />


title — обязательно, не менее 3 символов

status — по умолчанию pending, допустимые значения: pending, in_progress, done

📁 Структура проекта (основное)

app/Models/Task.php — модель задачи

app/Http/Controllers/TaskController.php — контроллер API

routes/api.php — маршруты API

database/migrations/* — миграции таблиц
