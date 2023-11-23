document.getElementById("course").selectedIndex = -1;
//validate form function
const validateForm = formSelector =>{
    const formElement = document.querySelector(formSelector);

    //disabling the html validate "required"defaultly
    formElement.setAttribute("novalidate", "");

    //stoping the form from submitting by adding eventlistener prevent auto submission
    formElement.addEventListener("submit", event =>{
     event.preventDefault();
    });
}


// //use of const since the variables wunt change and its reference to the element
// //targeting the form
// const form = document.querySelector("form");
// const firstname = document.getElementById("firstname");
// const lastname = document.getElementById("lastname");
// const email = document.getElementById("email")
// const errorMessage = document.getElementById("errorMessage");

// //adding event listener to prevent auto submission of the form
// form.addEventListener("submit",(e)=>{
//     const errors = [];

// if (firstname.value.trim()==="") {
//     errors.push("firstname is required")
// }

//     if (error.length>0) {
//         e.preventDefault();

//         errorMessage.toggleAttribute("hiden");
//         errorMessage.innerHTML = errors.join(",");
//     }
// })

    
        