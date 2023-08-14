


const RegPage = () => 
{

    const form = document.querySelector('.registration');

    if (form){
        form.addEventListener('submit', (event) => {
            event.preventDefault();
    
    
      const formData = new FormData(form);
    
      fetch('/ссылка не бэк', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
        },
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // заглушка для проверки ответа с сервера
          console.log(data); 
        })
        .catch(error => {
          alert(error);
        });
    });
  }

    return (
        <div className = "registration__wrapper">
            <div className = "form__wrapper"> 
                <form className="registration"> 
                    <input placeholder = "почта" className="form__input" /> 
                    <input placeholder = "логин" className="form__input" /> 
                    <input placeholder= "пароль" className="form__input" />
                    <input placeholder= "повторите пароль"  className="form__input"/> 
                </form>
                <button type="submit" className="submit__button"> Submit </button>
            </div>  
        </div>
    );

}

export default RegPage;