/**
 * Класс LoginForm управляет формой
 * входа в портал
 * */
class LoginForm extends AsyncForm {
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
      const callback = (err, response) => {
        if (response.success){
          const login = this.element.getElementsByClassName('form-control')
          const arrayLogin = Array.from(login)
          arrayLogin.forEach( el => {
            el.value = ''
          })
          App.setState('user-logged')
          const modFind = App.getModal('login') 
        modFind.close()
        }

      }
      User.login(data , callback)
  }
}