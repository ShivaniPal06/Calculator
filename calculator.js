let string = "";
let buttons = document.querySelectorAll('button');
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('.inputScreen').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('.inputScreen').value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            document.querySelector('.inputScreen').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('.inputScreen').value = string;
        }
    })
})