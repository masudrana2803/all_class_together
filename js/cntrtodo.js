// let qwe = document.querySelector('.qwe')
// let btn = document.querySelector('.btn')
// let show = document.querySelector('.show')


// let number=0

//     btn.addEventListener('click',()=>{
//     const mycounter = ()=>{
//     number++
//     console.log(number)
//     show.innerHTML=number
//     if (number==qwe.value) {
//         clearInterval(myinterval)
//         number=0
//     }
// }

//     let myinterval = setInterval(() => {
//     mycounter() 
//     }, 100)
//     })



let qwe = document.querySelectorAll('.qwe');
let btn = document.querySelectorAll('.btn');
let show = document.querySelectorAll('.show');

btn.forEach((button, index) => {
    button.addEventListener('click', () => {
        let number = 0;

        const mycounter = () => {
            number++;
            console.log(number);
            show[index].innerHTML = number;

            if (number == qwe[index].value) {
                clearInterval(myinterval);
                number = 0;
            }
        };

        let myinterval = setInterval(mycounter, 50);
    });
});