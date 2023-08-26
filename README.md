# Диплом курса «Базовый JavaScript в браузере»

## Описание

Нажмите на изображение, чтобы посмотреть видео и описание:

[![BHJ Diploma](https://img.youtube.com/vi/zXOyBIajWsM/0.jpg)](https://www.youtube.com/watch?v=zXOyBIajWsM)


Вам нужно разработать приложение для 
управления финансами.

Вот какой функционал должен быть у сервиса:

1. **Регистрация.** Позволяет зарегистрировать нового пользователя в системе. 
Чтобы функция работала, нужно реализовать 
структуры Sidebar.js, Modal.js, AsyncForm.js, RegisterForm.js, User.js, createRequest.js.

2. **Авторизация.** Позволяет авторизовать пользователя в системе. Чтобы функция работала, нужно реализовать структуры Sidebar.js, Modal.js, AsyncForm.js, 
LoginForm.js, User.js, createRequest.js.

3. **Выход.** Позволяет деавторизовать пользователя в системе. Чтобы функция работала, нужно реализовать структуры Sidebar.js, User.js, createRequest.js.

4. **Создание счетов.** Чтобы функция работала, нужно реализовать структуры AccountsWidget.js, TransactionsPage.js, Modal.js, 
AsyncForm.js, CreateAccountForm.js, Entity.js, Account.js, createRequest.js.

5. **Удаление счетов.** Чтобы функция работала, нужно реализовать структуры TransactionsPage.js, Entity.js, Account.js, createRequest.js.

6. **Создание транзакций.** Чтобы функция работала, нужно реализовать структуры TransactionsWidget.js, Modal.js, AsyncForm.js, 
CreateTransactionForm.js, Entity.js, Transaction.js, createRequest.js.

7. **Удаление транзакций.** Чтобы функция работала, нужно реализовать структуры TransactionsPage.js, Entity.js, Transaction.js, createRequest.js.

У вас уже готовы HTML- и CSS-разметки. Ваша задача — реализовать JavaScript-логику.

Файловая структура проекта предусматривает разделение управляющей логики на графический интерфейс и API.

Например, рассмотрим функцию регистрации нового пользователя в системе. Требуется нажать на кнопку «Регистрация» 
боковой панели (Sidebar.js), чтобы открылось модальное окно с формой. При нажатии кнопки «Регистрация» в этой форме требуется выполнить отправку данных из формы регистрации на сервер с помощью метода User.register(). При получении положительного ответа от сервера нужно установить состояние 
App.setState ('user-logged') и закрыть модальное окно регистрации.

## С чего начать

Выполняйте работу по шагам, описанным 
в разделе «Основные задачи».

Ориентируйтесь на описание шагов, а также на комментарии
в коде каждого файла.

Чтобы выполнить работу, разверните локальный сервер по адресу http://localhost:8000. Описание по запуску локального сервера и серверной логики можете найти в [файле.](./md/server.md)

При работе с локальным сервером рабочая директория *public/js*.

## Основные задачи

Выполняйте задачи по порядку

1. [Разработка API для взаимодействия с Backend.](./md/api.md)
dВЕРНУТЬСЯ К ТОМУ ПУНКТУ ДО ЛОГИН,ЛОГАУТ
2. Разработка пользовательского интерфейса:
    * [кнопка управления боковой колонкой,](./md/sidebar-toggle.md) 
    * [управление окнами,](./md/modals.md)
    * [управление формами,](./md/async-forms.md)
    * [обработка нажатий на кнопки бокового меню.](./md/sidebar-links.md)
3. Взаимодействие API с пользовательским интерфейсом:
    * [регистрация,](./md/register.md)
    * [авторизация,](./md/login.md)
    * [отображение информации о пользователе,](./md/user-widget.md)
    * [создание новых счетов,](./md/create-accounts.md)
    * [создание новых транзакций (доход/расход),](./md/create-transactions.md)
    * [отображение страницы транзакций при выборе счёта.](./md/display-transactions.md)

## Файловая структура

Для удобства работы весь проект разбит на файлы,
каждый из которых будет занимать от 5 до 100 строк. В каждом файле содержится только
один класс, что упрощает навигацию по проекту.

Чтобы понимать, как работает приложение, изучите поведение приложения, начиная с файла
*public/js/App.js*. Он уже полностью написан, вносить в него правки не нужно.

```js
    - __api/__ (Связь с сервером, сетевые запросы)
        - __Account.js__ (управление счетами)
        - __createRequest.js__ (доработка XHR, запросы к серверу и получение ответов)
        - __Entity.js__ (Базовый класс для счетов, пользователей и расходов/доходов)
        - __Transaction.js__ (управление доходами и расходами пользователя)
        - __User.js__ (регистрация/авторизация/вход в приложение)
    - ui/
        - forms/ (формы приложения)
            - __AsyncForm.js__ (Базовый класс для всех форм. Используется преимущественно во всплывающих окнах)
            - __CreateAccountForm.js__ (форма создания нового счёта)
            - __CreateTransactionForm.js__ (форма создания нового расхода/дохода)
            - __LoginForm.js__ (форма входа)
            - __RegisterForm.js__ (форма регистрации)
        - pages/ (страницы приложения)
            - __TransactionPage.js__ (страница расходов и доходов конкретного счёта)
        - widgets/
            - __AccountsWidget.js__ (виджет управления счетами)
            - __TransactionsWidget.js__ (виджет управления расходами и доходами)
            - __UserWidget.js__ (виджет текущего пользователя)
        - __Modal.js__ (базовый класс для всех всплывающих окон)
        - __Sidebar.js__ (класс управления боковой колонкой)
    - __App.js__ (класс приложения)
```

## Как сдавать задание

Сделайте Fork репозитория с дипломным заданием.

Предоставьте дипломному руководителю ссылку на GitHub с доработанным проектом.

## Как работать над дипломной работой ## 
1. Начинайте работу над дипломом как можно раньше. Так будет больше времени на доработки и исправления.
2. Делайте диплом по частям. Иначе есть шанс, что нужно будет всё переделывать.
3. В случае любой сложности вы можете задать вопрос дипломному руководителю. Но лучше сначала попробовать решить проблему самостоятельно. Прежде чем задавать вопрос, попробуйте найти ответ в лекциях, материалах и домашних заданиях курса. Поищите ответ в Google.
4. Если задаёте вопрос, в одном вопросе опишите одну проблему. Так ответ дипломного руководителя будет максимально подробным и полезным.
5. Не оставляйте вопросы в коде, пишите их текстом, указывая, к какой строке кода у вас вопрос. Для лучшего понимания контекста прикрепите к вопросу скриншоты и стрелкой укажите, что именно вызывает вопрос. Программу для создания скриншотов можно скачать [по ссылке](https://app.prntscr.com/ru/).
