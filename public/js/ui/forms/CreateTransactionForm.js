/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList()
    
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
      Account.list(null, (error, response) => {
        if(response && response.success){
          const select = this.element.getElementsByClassName('accounts-select')
          select[0].innerHTML = ''
          response.data.forEach(el => {
            select[0].insertAdjacentHTML('beforeend' ,`<option value="${el.id}">${el.name}</option>`)
          })
        }
      })


  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {  
    Transaction.create(data, (error, response) => {
      if (response){
        this.element.reset()
        const activeModal = this.element.closest('.modal')
        const modalId = activeModal.dataset.modalId
        const modalForClose = App.getModal(modalId)
        modalForClose.close()
        App.update()
        console.log(response, data)
      }
    })


  }
}