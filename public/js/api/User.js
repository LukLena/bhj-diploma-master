/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  static URL = '/user'
   // * Устанавливает текущего пользователя в
   // * локальном хранилище.
   
  static setCurrent(user) {
     const str = JSON.stringify(user)
     localStorage.setItem('user' , str)
      
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
      localStorage.removeItem('user')
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
      if(localStorage.getItem('user')){
          const obj = JSON.parse(localStorage.user)
          return obj;
      } else {
          return undefined;
      }
          
      
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch(callback) {
     createRequest({method:'GET', url:this.URL+`/`+`current`, callback:callback })
      
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      }
    });
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register(data, callback) {
    const callback3 = (err, response) => {
      if (response && response.success){
        User.setCurrent(response.user)
      }
      callback(err, response)
    }
    createRequest({method:'POST', url:this.URL+`/register`, data:data, callback:callback3})


  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout(callback) {
    
    const callback2 = (err, response) => {
      User.unsetCurrent()
      callback(err, response)
    }
    createRequest({method:'POST', url:this.URL+`/logout`, callback:callback2 })
  }
}
