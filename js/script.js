// При нажатие на кнопку первой формы

let formAdd = document.querySelector(".form__addBtn")

formAdd.addEventListener('click', () => {
    event.preventDefault();

    let oneForm = document.querySelectorAll('._formOne')
    let twoForm = document.querySelectorAll('._formTwo')

    // Убирает
    oneForm.forEach(e => {
        e.style.display = 'none';
    })

    // Добавляет
    twoForm.display = 'flex';
    twoForm.forEach(e => {
        e.style.display = 'flex';
    })    
   
})

//..........................................................................................................................................

// 2я форма, выбор количество продуктов

let formProductSubmit = document.getElementById('formProductSubmit')

formProductSubmit.addEventListener('click', () => {
   
    event.preventDefault();

    let radio = document.querySelectorAll('.formRadio__input')
    let data;
    let price;
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            data = radio[i].value
            price = radio[i].getAttribute('data-price')    // Получение цены          
        }       
    }       

    // Удаление dom элементов, для замены на выбронное количество

    const myNode = document.querySelector('.form-value__allProduct')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

   // Новая цена
    
   let priceProduct = document.getElementById('form__price')    
   priceProduct.innerText = price

    // Записываю сколько продуктов

    elems.setAttribute('value', data)

    // Добавление скролла

    let formScroll = document.querySelector('.formScroll')
    formScroll.classList.add("_scroll")


    // Рендер формы с продуктами

    for (let i = 1; i <= data; i++) {


        let formSubmit = document.querySelector('.form-value__allProduct')

        formSubmit.insertAdjacentHTML('beforeend',`          
               

            <div class="form-value">
              
              <div class="form-value__title">
                <div>Product ${i}</div>                
                <button class="formValue__delete" data-product="${i}"> <img src="/img/del.svg" alt="del"> </button>  
              </div> 

                
                <div>
                <label> 
                    <div class="formValue__label">Enter main keyword for the product</div>
                    <input class="formValue__labelInput" type="text" placeholder="for example, sylicon wine cup">  
                </label> 
                </div>
                
                <div class="form-value__line"></div>   
                
                <div>
                <label> 
                    <div class="formValue__label"> Enter link to the similar product as a reference</div>
                    <input class="formValue__labelInput" type="text" placeholder="https://...">  
                </label>
                </div>          
                
                <div class="form-value__line"></div>   

            </div>               

        `)

    }

    // Если выбран 1 продукт

    if(data == "1") {

        formScroll.classList.remove("_scroll") // удаление скролла

        const myNode = document.querySelector('.formValue__delete')
        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }

    // При нажатие удалить на 2й форме

    let formValuedelete = document.querySelectorAll('.formValue__delete')

    formValuedelete.forEach(elem => {
        elem.addEventListener('click', (e) => {
            
            let priceProduct = document.getElementById('form__price')  
            let newPrice = priceProduct.textContent;
            let allProduct = document.querySelector('.allProduct').value // Получаю сколько продуктов                                          
            
            // Удаление продукта
            let productClosest = elem.closest(".form-value") // Ближайщий родитель
            productClosest.remove()

            // Если больше одного продукта
            if (allProduct > 2) {
                let newProduct = (newPrice / allProduct) + 2 //22 Новыя цена
                let newQuantity = allProduct - 1
    
                // установка нового продукта
                elems.setAttribute('value', newQuantity)    
                newPrice = newProduct * newQuantity // 2 * 22 = 44  // Новая общая цена
    
                // Запись новой цен            
                priceProduct.innerText = newPrice
            }  else {

                let formScroll = document.querySelector('.formScroll');
                formScroll.classList.remove("_scroll");
                priceProduct.innerText = 24.99;

                const myNode = document.querySelector('.formValue__delete');
                myNode.remove();
            } 

        })
    })

    let oneForm = document.querySelectorAll('._formOne')
    let twoForm = document.querySelectorAll('._formTwo')

    // Убирает
    oneForm.forEach(e => {
        e.style.display = 'flex';
    })

    // Добавляет
    twoForm.display = 'flex';
    twoForm.forEach(e => {
        e.style.display = 'none';
    })   

})


let btnSubmit = document.querySelector(".btnSubmit")
let btnLoading = document.querySelector(".btnLoading")


btnSubmit.addEventListener('click', (e) => {

    event.preventDefault

    btnSubmit.style.display = 'none';
    btnLoading.style.display = 'block'; 

    // Перенаправление на другую страницу

    setTimeout(function(){
        window.location.replace("/paymentsuccess.html")
    }, 2000); // 2 секунды

})
