/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    const callback = (err, response) => {
      console.log(response)
      if(response && response.success){
        const modal = App.getModal('createAccount')
        console.log(response)
        console.log(1)
        modal.close()
        const input = modal.element.querySelector('.form-control')
        input.value = ''
        App.update()
      }
      else if (response && !response.success){
        alert(response.error)
      }
    }
     Account.create(data, callback)
  }
   

  }
