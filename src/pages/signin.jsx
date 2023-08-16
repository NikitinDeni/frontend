


const SignIn = () => 
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
        <div className="signin__wrapper"> 
            <div className="signin__form"> 
                <form className="signin"> 
                    <input placeholder = "логин или почта" className="form__input" /> 
                    <input placeholder="пароль" className="form__input" />
                </form>
                <button type="submit" className="submit__button"> Submit </button>
            </div>
            
        </div>

    );

}


export default SignIn; 