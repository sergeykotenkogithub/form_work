// let formAdd = document.querySelector(".form__addBtn")

// formAdd.addEventListener('click', () => {
//     event.preventDefault();
//     console.log('нажата');
// })

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


    // Рендер формы с продуктами

    // <div class="form-value__title">Product ${i}</div> 

    for (let i = 1; i <= data; i++) {


        let formSubmit = document.querySelector('.form-value__allProduct')

        formSubmit.insertAdjacentHTML('beforeend',`          
               

            <div class="form-value">
              
              <div class="form-value__title">
                <div>Product ${i}</div>                
                <button class="formValue__delete" data-product="${i}">[X]</button>
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

    if(data == "1") {
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

            // Если больше одного продукта
            if (allProduct > 2) {
                let newProduct = (newPrice / allProduct) + 2 //22 Новыя цена
                console.log(newProduct)
                let newQuantity = allProduct - 1
    
                // установка нового продукта
                elems.setAttribute('value', newQuantity)    
                newPrice = newProduct * newQuantity // 2 * 22 = 44  // Новая общая цена
    
                // Запись новой цен            
                priceProduct.innerText = newPrice
            }  else {
                priceProduct.innerText = 24.99
            } 

        })
    })

})



