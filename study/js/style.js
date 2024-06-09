

window.onload=function(){

    const btn = document.querySelector('#btn'); 
const radioButtons = document.querySelectorAll('input[name="size"]');

btn.addEventListener("click", () => {
    let selectedSize;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedSize = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
});

    
  }

// const person = {
//     name: 'John Doe',
//     age: 30,
//     address: '123 Main Street',
//     greet: function() {
//       console.log('Hello, my name is ' + this.name);
//     }
//   };
