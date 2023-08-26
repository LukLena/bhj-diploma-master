/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    const callback = (error, response) => {
      const inputForm = this.element.getElementsByClassName('form-control')
      
      if (response.success){
        const arrayInput= Array.from(inputForm)
        arrayInput.forEach( el => {
          el.value = ''
        })
        console.log(inputForm)
        App.setState('user-logged')
        const modFind = App.getModal('register') 
        modFind.close()

      }
    }
   User.register(data, callback)
   
    

  }
}