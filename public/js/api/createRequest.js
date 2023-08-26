/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
   const xhr = new XMLHttpRequest();
    if(options.method == 'GET'){

       let params = '?';
       if(options.data){
           for(let key in options.data){
              params += `${key}=${options.data[key]}&`
           }
       }
       
       xhr.open(options.method, options.url+params)
       xhr.send()
   }
   else {
       xhr.open(options.method, options.url)
       formData = new FormData
       for(let key in options.data){
          formData.append(key, options.data[key])
       }
       xhr.send(formData)
   }

    xhr.responseType = 'json';
    xhr.onload = () => {
        options.callback(null, xhr.response)
    }
    xhr.onerror = () => {
        options.callback(xhr.statusText)
    }
    
    
};
