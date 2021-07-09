// let formAdd = document.querySelector(".form__addBtn")

// formAdd.addEventListener('click', () => {
//     event.preventDefault();
//     console.log('нажата');
// })


// При нажатие continiue

let formProductSubmit = document.getElementById('formProductSubmit')

formProductSubmit.addEventListener('click', () => {
   
    event.preventDefault();

    let radio = document.querySelectorAll('.formRadio__input')
    let data
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            data = radio[i].value
        }       
    }

    
    // document.querySelector('.form-value__allProduct').remove

    var myNode = document.querySelector('.form-value__allProduct')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    // Рендер формы с продуктами

    for (let i = 1; i <= data; i++) {

        let formSubmit = document.querySelector('.form-value__allProduct')
        formSubmit.insertAdjacentHTML('afterBegin',`
           
               

            <div class="form-value">
                <div class="form-value__title">Product ${i}</div> 
                
                <div>
                <label> 
                    Enter main keyword for the product
                    <input type="text" placeholder="for example, sylicon wine cup">  
                </label> 
                </div>
                
                <div class="form-value__line"></div>   
                
                <div>
                <label> 
                    Enter link to the similar product as a reference
                    <input type="text" placeholder="https://...">  
                </label>
                </div>             

            </div>               
                   
              

        `)
    }

    // data = 0;

})


