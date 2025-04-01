const navbar= document.querySelector(".navbar");
const icon= document.querySelector(".icon");
const header=document.querySelector(".content");
const button=document.querySelector(".button");
const logo=document.querySelector('#app-logo');
const links=document.querySelectorAll('.li');


console.log(navbar);
console.log(header);

icon.addEventListener("click", ()=>{
    navbar.classList.toggle("menu");
    
})


window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        navbar.classList.add('color');
        button.classList.add('button-scroll');
        links.forEach(link => {
           link.classList.add('link');
        });                                                                                                                                                                                                           
        logo.innerHTML='<img src="./assets/images/logo-dark.svg"  alt="">'

    }else{
        navbar.classList.remove('color');
        button.classList.remove('button-scroll');
        links.forEach(link => {
            link.classList.remove('link');
         });
        logo.innerHTML='<img src="./assets/images/logo-light.svg"  alt="">'
        
    }
})
