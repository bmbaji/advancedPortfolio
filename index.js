//template_90n58yx
//service_uwx9kl2
//-0I5ru6I4O7S3M9ta
const scaleFactor= 1/20
function moveBackground(event) {
    const shapes= document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor
    
     for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    } 
}

let contrastToggle = false
function toggleContrast() {
    contrastToggle =!contrastToggle
    if(contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}   



function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"
   emailjs
    .sendForm(
        'service_uwx9kl2',
        'template_90n58yx',
        event.target,
        '-0I5ru6I4O7S3M9ta'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => { 
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is temporarily unavailable. Please contact me @ bryanmbaji@gmail.com"
    )
    })
}

let isModalOpen = false;
function toggleModal() {
    //toggle(Modal)
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen= true
    document.body.classList += " modal--open"
}