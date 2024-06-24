// let url='https://script.google.com/macros/s/AKfycbwq5RcFAQuQUyzdiyfn4HcxoQbIkkt9dfZfrd03tH5uHo9Jx7RvMCuVwp_6Yb6oGHk-VQ/exec'
// let form=document.querySelector('#form');
// form.addEventListener("submit",(e)=>{
// let d=new FormData(form);
// fetch(url,{
//     method:"Post",
//     body:d
// }).then((res)=>res.text())
// .then((finalRes)=>console.log(finalRes))
//     e.preventDefault();
// })

let url = 'https://script.google.com/macros/s/AKfycbwq5RcFAQuQUyzdiyfn4HcxoQbIkkt9dfZfrd03tH5uHo9Jx7RvMCuVwp_6Yb6oGHk-VQ/exec';
let form = document.querySelector('#form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let d = new FormData(form);
    
    fetch(url, {
        method: "POST",
        body: d,
        headers: {
            'Accept': 'application/json',
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then((finalRes) => {
        console.log(finalRes);
        // Handle the response from the server, e.g., display a success message
    })
    .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
        // Handle the error, e.g., display an error message
    });
});
