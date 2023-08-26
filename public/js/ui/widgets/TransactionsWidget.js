/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
   if (!element){
      console.error('пустой элемент')
    }
    this.element= element 
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const incomeBtn = this.element.getElementsByClassName('create-income-button')
    const onOpenModalClick = () => {
      const modalIncome = App.getModal('newIncome')
      console.log(modalIncome)
      modalIncome.open()
    }
    incomeBtn[0].addEventListener('click', onOpenModalClick)

    const expenseBtn = this.element.getElementsByClassName('create-expense-button')
    const onExpenseClick = () => {
      const modalExpense = App.getModal('newExpense')
      modalExpense.open()
    }
    expenseBtn[0].addEventListener('click', onExpenseClick)

  }
}
