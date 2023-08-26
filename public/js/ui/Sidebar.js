/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const toggle = document.getElementsByClassName('sidebar-toggle')
    const sidebar = document.getElementsByClassName('sidebar-mini')
    function open(){
      sidebar[0].classList.toggle('sidebar-open')
      sidebar[0].classList.toggle('sidebar-collapse')
    }

    toggle[0].addEventListener('click', open)
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)  
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const modalreg = document.getElementsByClassName('menu-item_register')
    modalreg[0].addEventListener('click', open)
    function open(){
      const modReg = App.getModal('register') 
      modReg.open()
      
    }
    const modalLogin= document.getElementsByClassName('menu-item_login')
    modalLogin[0].addEventListener('click', come)
    function come(){
      const modLog = App.getModal('login')
      modLog.open()
    }
    const logOut = document.getElementsByClassName('menu-item_logout')
    logOut[0].addEventListener('click', logout)
    function logout(){
      const callback = (err, response) => {
        console.log(response)
        if (response && response.success == true ){
          App.setState('init')
        }

      }
      User.logout(callback)  
    }
  }
}