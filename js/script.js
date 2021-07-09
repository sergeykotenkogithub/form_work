// let formAdd = document.querySelector(".form__addBtn")

// formAdd.addEventListener('click', () => {
//     event.preventDefault();
//     console.log('нажата');
// })


// При нажатие continiue

let formProductSubmit = document.getElementById('formProductSubmit')

formProductSubmit.addEventListener('click', () => {
    event.preventDefault();

    // let input =  document.querySelector('.formRadio__input').value
    // console.log(input);

    let radio = document.querySelectorAll('.formRadio__input')
    let data
    for (let i = 0; i < radio.length; i++) {
        if(radio[i].checked) {
            data = radio[i].value
        }       
    }


    // Сдесь будет рендер формы с продуктами
    for (let i = 1; i <= data; i++) {
        console.log(i)
    }

})


