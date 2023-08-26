/**
 * Класс TransactionsPage управляет
 * страницей отображения доходов и
 * расходов конкретного счёта
 * */
class TransactionsPage {
  /**
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * Сохраняет переданный элемент и регистрирует события
   * через registerEvents()
   * */
  constructor( element ) {
   if(!element){
    throw new Error('Элемент пустой')
   }
   this.element = element
   this.registerEvents()

  }

  /**
   * Вызывает метод render для отрисовки страницы
   * */
  update() {
    this.render(this.lastOptions)
  }

  /**
   * Отслеживает нажатие на кнопку удаления транзакции
   * и удаления самого счёта. Внутри обработчика пользуйтесь
   * методами TransactionsPage.removeTransaction и
   * TransactionsPage.removeAccount соответственно
   * */
  registerEvents() {
    const removeAccount = this.element.querySelector('.remove-account')
    const onDeleteClick = () => { 
      this.removeAccount()
    }
    removeAccount.addEventListener('click', onDeleteClick)
    this.element.addEventListener('click', e => { 
      const btn = e.target.closest('.transaction__remove')
      if (btn){
        this.removeTransaction(btn.dataset.id)
      }
    })
  }

  /**
   * Удаляет счёт. Необходимо показать диаголовое окно (с помощью confirm())
   * Если пользователь согласен удалить счёт, вызовите
   * Account.remove, а также TransactionsPage.clear с
   * пустыми данными для того, чтобы очистить страницу.
   * По успешному удалению необходимо вызвать метод App.updateWidgets() и App.updateForms(),
   * либо обновляйте только виджет со счетами и формы создания дохода и расхода
   * для обновления приложения
   * */
  removeAccount() {
    if (!this.lastOptions){
      return
    }
    const isDelete = confirm('Вы действительно хотите удалить счёт?')  
    console.log(isDelete)
    if (isDelete == true){
      Account.remove({id: this.lastOptions.account_id}, (error, response) => {
        console.log(response)
        if (response){
          this.clear()
          App.updateWidgets()
          App.updateForms()
        
          console.warn('задать вопрос: если нажать на удалить, не удаеляет , response = false')
        }
      })
    }
    
   
  }

  /**
   * Удаляет транзакцию (доход или расход). Требует
   * подтверждеия действия (с помощью confirm()).
   * По удалению транзакции вызовите метод App.update(),
   * либо обновляйте текущую страницу (метод update) и виджет со счетами
   * */
  removeTransaction( id ) {
    console.log(id)
    const isDeleteTrans = confirm('Вы действительно хотите удалить транзакцию?')
    Transaction.remove({id:id}, (error, response) => {
      if(response){
        App.update()
      } 

      
    })

  }

  /**
   * С помощью Account.get() получает название счёта и отображает
   * его через TransactionsPage.renderTitle.
   * Получает список Transaction.list и полученные данные передаёт
   * в TransactionsPage.renderTransactions()
   * */
  render(options){
    if (!options){
      return
    }
    this.lastOptions = options
    Account.get(options.account_id, (error, response) => {
      if (response){
        this.renderTitle(response.data.name)
      }
    })
    Transaction.list(options, (error, response) => {
      if (response){
        this.renderTransactions(response.data)

      }

    })

  }

  /**
   * Очищает страницу. Вызывает
   * TransactionsPage.renderTransactions() с пустым массивом.
   * Устанавливает заголовок: «Название счёта»
   * */
  clear() {
    this.renderTransactions([])
    this.renderTitle('Название счета')
    this.lastOptions = null

  }

  /**
   * Устанавливает заголовок в элемент .content-title
   * */
  renderTitle(name){
    const contentTitle = this.element.querySelector('.content-title')
     contentTitle.innerHTML = name
  }

  /**
   * Форматирует дату в формате 2019-03-10 03:20:41 (строка)
   * в формат «10 марта 2019 г. в 03:20»
   * */
  formatDate(date){
    const dateNew = new Date(date)
    const month = ['января','февраля',' марта',' апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
    let minutes = dateNew.getMinutes();
  
    if (minutes <= 9){
      minutes = `0${minutes}`
    } 
    let hours = dateNew.getHours()
    if(hours <= 9){
      hours =`0${hours}`
    }

    return `${dateNew.getDay()} ${month[dateNew.getMonth()]} ${dateNew.getFullYear()} в ${hours}:${minutes}`

  }

  /**
   * Формирует HTML-код транзакции (дохода или расхода).
   * item - объект с информацией о транзакции
   * */
  getTransactionHTML(item){
    return `<div class="transaction transaction_expense row">
    <div class="col-md-7 transaction__details">
      <div class="transaction__icon">
          <span class="fa fa-money fa-2x"></span>
      </div>
      <div class="transaction__info">
          <h4 class="transaction__title">Новый будильник</h4>
          <div class="transaction__date">${this.formatDate(item.created_at)}</div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="transaction__summ">
      ${item.sum}
         <span class="currency">₽</span>
      </div>
    </div>
    <div class="col-md-2 transaction__controls">
        <button class="btn btn-danger transaction__remove" data-id="${item.id}">
            <i class="fa fa-trash"></i>  
        </button>
    </div>
</div>`
}
  

  /**
   * Отрисовывает список транзакций на странице
   * используя getTransactionHTML
   * */
  renderTransactions(data){
    const content = this.element.getElementsByClassName('content')
    content[0].innerHTML = ''
    data.forEach( el => { 
      const transactionHtml = this.getTransactionHTML(el)
      content[0].insertAdjacentHTML('beforeend', transactionHtml )

    })
    

  }
}