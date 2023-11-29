const localization = {
  ua: {
    selectLocalization: 'Оберiть мову додатку',
    tools: {
      calibration: {
        title: 'Калібрування палива',
        description:
          'Інструмент для калібрування палива, запитує користувача номер ємності та тип палива, висоту палива у вибраній ємності в сантиметрах. При натисканні кнопки "Розрахувати" проводяться розрахунки згідно з калібрувальною таблицею, результат округляється до цілих чисел і виводиться в літрах. Є можливість виключити трубопровід із розрахунку об`єму. Також після вибору ємності з`являється кнопка "Інформація про резервуар", при натисканні на яку відкривається модальне вікно з детальною інформацією про резервуар (Максимальний об`єм, мертвий залишок і т.д.)',
        inputLabel_1: 'Введіть висоту палива з метрштоку в см',
        inputLabel_2: 'Враховувати трубопровід у розрахунках?',
        inputPlaceholder_1: 'Натисніть, щоб ввести сантиметри',
        button_1: 'Розрахувати!',
        button_2: 'Інформація про резервуар',
        resultText_1: 'Увага! Об`єм палива нижче мертвого залишку: ',
        resultText_2: 'Помилка! Некоректні дані!',
        resultText_3: 'Об`єм палива: ',
      },
      expirationDate: {
        title: 'Підрахунок термінів придатності',
        description:
          'Інструмент для підрахунку термінів придатності товарів, запитує дату виготовлення, термін придатності та одиницю виміру терміну придатності (днів, місяців чи років). При натисканні на кнопку "Розрахувати" проводиться розрахунок. Якщо товар ще не прострочений - результатом буде дата, до якої товар придатний і який термін залишився до кінця терміну придатності. У протилежному випадку - результатом буде попередження, що товар прострочений, коли був прострочений, і скільки часу минуло з закiнчення терміну придатності.',
        inputLabel_1: 'Введiть дату виготовлення товару',
        inputLabel_2: 'Введiть термiн придатностi товару',
        inputPlaceholder_2: 'Натиснiть для введення',
        inputSelect1_2: 'Днiв',
        inputSelect2_2: 'Мiсяцiв',
        inputSelect3_2: 'Рокiв',
        button_1: 'Розрахувати!',
        resultText_1: 'Помилка! Некоректні дані!',
        resultText_2: 'Товар був прострочений',
        resultText_3: 'Термін придатності сплив ',
        resultText_4: 'Термін придатності сплине ',
        resultText_5: 'Товар придатний до:',
      },
      phoneBook: {
        title: 'Книга контактів та адрес',
        description:
          'Довідник, з номерами АЗС, назвами підприємств, районами, поштовими індексами, адресами та мінікартою. При натисканні на номер телефону відкривається програма для дзвінків із набраним номером вибраної АЗС. При натисканні на міні-карту відкривається програма "Google Maps", якщо інстальовано на пристрої, інакше відкривається веб версія, зі встановленою точкою координат на вибраній АЗС.',
      },
      reCalibrate: {
        title: 'Зворотне калібрування палива',
        description:
          'Інструмент для зворотного калібрування палива, запитує користувача номер ємності або тип палива, обсяг палива в літрах. При натисканні кнопки "Розрахувати" проводяться розрахунки згідно з калібрувальною таблицею, результат округляється до одного знака після коми і виводиться в сантиметрах. Є можливість виключити трубопровід із розрахунку об`єму. Також після вибору ємності з`являється кнопка "Інформація про резервуар", при натисканні на яку відкривається модальне вікно з детальною інформацією про резервуар (Максимальний об`єм, мертвий залишок і т.д.)',
        inputLabel_1: 'Введіть об`єм палива в л',
        inputLabel_2: 'Значення включає трубопровід?',
        inputPlaceholder_1: 'Натисніть, щоб ввести літри',
        button_1: 'Розрахувати!',
        button_2: 'Інформація про резервуар',
        resultText_1: 'Помилка! Значення менше допустимого!',
        resultText_2: 'Помилка! Введені некоректні дані!',
        resultText_3: 'Увага! Об`єм палива менше мертвого залишку: ',
        resultText_4: 'Висота наповнення: ',
      },
      salaryCalc: {
        title: 'Калькулятор зарплати',
        description:
          'Інструмент для підрахунку заробітної плати, запитує відпрацьованi години та продані літри. Є можливість змінити погодинну ставку та оплату за літраж. При натисканні на кнопку "Розрахувати" проводиться розрахунок. Підсумкова сума заокруглюється до коми (до цілих грн)',
        inputLabel_1:
          'Введіть кількість відпрацьованих годин та вартiсть однієї години (за замовчуванням 40.90 грн)',
        inputLabel_2:
          'Введіть кількість проданих літрів та вартiсть одного літра (за замовчуванням: 0,12 грн)',
        inputPlaceholder_1: 'Натиснiть для введення годин',
        inputPlaceholder_2: 'Натиснiть для введення лiтрiв',
        button_1: 'Розрахувати!',
        resultText_1: 'Виникла помилка! Введено некоректні дані!',
        resultText_2: 'Ваша зарплата',
      },
    },
    menu: {
      burger: {
        title: 'Меню',
        mainPage: 'Головна сторiнка',
        contacts: 'Контакти',
        settings: 'Налаштування',
        about: 'Про додаток',
      },
      settings: {
        title: 'Налаштування додатку',
        selectLabel_1: 'Оберiть мову додатку:',
        select_1: 'Натиснiть для вибору мови',
        button_1: 'Застосувати',
        button_reset: 'Скидання всіх налаштувань',
      },
      contacts: {
        title: 'Контакти',
        text: 'Всі питання та пропозиції щодо програми GS-Tools, повідомлення про помилки та баги ви можете надсилати на електронну пошту розробника, або в офіційних спільнотах програми в месенджерах Telegram та Viber. Буду радий зворотному зв`язку!',
        email: 'Email - Написати листа розробнику',
        telegram: 'Telegram - Підписатися на канал',
        viber: 'Viber - Підписатися на канал',
      },
      about: {
        title: 'Про додаток',
        text: 'GS-Tools розроблено для вирішення повсякденних завдань працівників АЗС. На даний момент у додатку є такі утиліти:',
      },
    },
    selectorGS: {
      label_1: 'Виберiть АЗС:',
      select_1: 'Натисніть, щоб вибрати АЗС',
    },
    selectorGasType: {
      label_1: 'Виберiть тип палива:',
      select_1: 'Натисніть, щоб вибрати паливо',
    },
    tankInfo: {
      header_1: 'Інформація про резервуар',
      header_2: 'Резервуар №',
      text_1: 'Тип палива: ',
      text_2: 'Трубопровід: ',
      text_3: 'Мертвий залишок: ',
      text_4: 'Максимальний об`єм: ',
      text_5: 'Максимальна висота: ',
    },
  },
  ru: {
    selectLocalization: 'Выберите язык приложения',
    tools: {
      calibration: {
        title: 'Калибровка топлива',
        description:
          'Инструмент для калибровки топлива, запрашивает у пользователя номер ёмкости или вид топлива, высоту топлива в выбранной ёмкости в сантиметрах. При нажатии кнопки "Рассчитать" производятся расчёты согласно калибровочной таблицы, результат округляется до целых чисел и выводится в литрах. Есть возможность исключить трубопровод из расчёта объёма. Так-же после выбора ёмкости появляется кнопка "Информация о резервуаре", при нажатии на которую открывается модальное окно с подробной информацией о резервуаре (Максимальный объём, мёртвый остаток и т.д.)',
        inputLabel_1: 'Введите высоту топлива с метрштока в см',
        inputLabel_2: 'Учитывать трубопровод в рассчётах?',
        inputPlaceholder_1: 'Нажмите для ввода сантиметров',
        button_1: 'Рассчитать!',
        button_2: 'Информация о резервуаре',
        resultText_1: 'Внимание! Объём топлива ниже мёртвого остатка: ',
        resultText_2: 'Ошибка! Некорректные данные!',
        resultText_3: 'Объём топлива: ',
      },
      expirationDate: {
        title: 'Подсчёт сроков годности',
        description:
          'Инструмент для подсчёта сроков годности товаров, запрашивает дату изготовления, срок годности и единицу измерения срока годности (дней, месяцев или лет). При нажатии на кнопку "Рассчитать" производится расчёт. В случае, если товар еще не просрочен - результатом будет дата, до которой товар годен и какой срок остался до конца срока годности. В обратном случае - результатом будет предупреждение, что товар просрочен, когда был просрочен, и сколько времени прошло с выхода срока годности.',
        inputLabel_1: 'Введите дату изготовления товара',
        inputLabel_2: 'Введите срок годности товара',
        inputPlaceholder_2: 'Нажмите для ввода',
        inputSelect1_2: 'Дней',
        inputSelect2_2: 'Месяцев',
        inputSelect3_2: 'Лет',
        button_1: 'Рассчитать!',
        resultText_1: 'Ошибка! Некорректные данные!',
        resultText_2: 'Товар был просрочен',
        resultText_3: 'Срок годности истёк ',
        resultText_4: 'Срок годности истекает ',
        resultText_5: 'Товар годен до:',
      },
      phoneBook: {
        title: 'Книга контактов и адресов',
        description:
          'Справочник, с номерами АЗС, названиями предприятий, районами, почтовыми индексами, адресами и миникартой. При нажатии на номер телефона открывается приложение для звонков с набранным номером выбранной АЗС. При нажатии на мини-карту открывается приложение "Google Maps", если установлено на устройстве, в противном случае открывается веб версия, с установленой точкой координат на выбранной АЗС.',
      },
      reCalibrate: {
        title: 'Обратная калибровка топлива',
        description:
          'Инструмент для обратной калибровки топлива, запрашивает у пользователя номер ёмкости или вид топлива, объём топлива в литрах. При нажатии кнопки "Рассчитать" производятся расчёты согласно калибровочной таблицы, результат округляется до одного знака после запятой и выводится в сантиметрах. Есть возможность исключить трубопровод из расчёта объёма. Так-же после выбора ёмкости появляется кнопка "Информация о резервуаре", при нажатии на которую открывается модальное окно с подробной информацией о резервуаре (Максимальный объём, мёртвый остаток и т.д.)',
        inputLabel_1: 'Введите объём топлива в л',
        inputLabel_2: 'Значение включает в себя трубопровод?',
        inputPlaceholder_1: 'Нажмите для ввода литров',
        button_1: 'Рассчитать!',
        button_2: 'Информация о резервуаре',
        resultText_1: 'Ошибка! Значение меньше допустимого!',
        resultText_2: 'Ошибка! Введены некорректные данные!',
        resultText_3: 'Внимание! Объём топлива ниже мёртвого остатка: ',
        resultText_4: 'Высота напролнения: ',
      },
      salaryCalc: {
        title: 'Калькулятор зарплаты',
        description:
          'Инструмент для подсчёта заработной платы, запрашивает отработанные часы и проданные литры. Есть возможность изменить почасовую ставку и оплату за литраж. При нажатии на кнопку "Рассчитать" производится расчёт. Итоговая сумма округляется до запятой (до целых грн)',
        inputLabel_1:
          'Введите количество отработанных часов и цену одного часа (по умолчанию 40.90 грн)',
        inputLabel_2:
          'Введите колличество проданных литров и цену одного литра (по умолчанию: 0,12 грн)',
        inputPlaceholder_1: 'Нажмите для ввода часов',
        inputPlaceholder_2: 'Нажмите для ввода литров',
        button_1: 'Рассчитать!',
        resultText_1: 'Произошла ошибка! Ввдены некорректные данные!',
        resultText_2: 'Ваша зарплата',
      },
    },
    menu: {
      burger: {
        title: 'Меню',
        mainPage: 'Главная страница',
        settings: 'Настройки',
        contacts: 'Контакты',
        about: 'О приложении',
      },
      settings: {
        title: 'Настройки приложения',
        selectLabel_1: 'Выберите язык приложеня:',
        select_1: 'Нажмите для выбора языка',
        button_1: 'Применить',
        button_reset: 'Сброс всех настроек',
      },
      contacts: {
        title: 'Контакты',
        description:
          'Все вопросы и предложения, касающиеся приложения GS-Tools, сообщения об ошибках и багах вы можете отправлять на электронную почту разработчика, или в официальных сообществах приложения в мессенджерах Telegram и Viber. Буду рад обратной связи!',
        email: 'Email - Написать письмо разработчику',
        telegram: 'Telegram - Подписаться на канал',
        viber: 'Viber - Подписаться на канал',
      },
      about: {
        title: 'О приложении',
        text: 'Приложение GS-Tools разработано для решения повседневных задач работников АЗС. На данный момент в приложении имеются такие утилиты:',
      },
    },
    selectorGS: {
      label_1: 'Выберите АЗС:',
      select_1: 'Нажмите для выбора АЗС',
    },
    selectorGasType: {
      label_1: 'Выберите вид топлива:',
      select_1: 'Нажмите для выбора топлива',
    },
    tankInfo: {
      header_1: 'Информация о резервуаре',
      header_2: 'Резервуар №',
      text_1: 'Вид топлива: ',
      text_2: 'Трубопровод: ',
      text_3: 'Мёртвый остаток: ',
      text_4: 'Максимальный объём: ',
      text_5: 'Максимальная высота: ',
    },
  },
};

export default localization;
