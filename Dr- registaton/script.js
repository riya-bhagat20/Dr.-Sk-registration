


var h1=document.querySelector(".h1");

var drRegister=document.querySelector(".drRegister");

var ShopkeeperRegister=document.querySelector(".ShopkeeperRegister");

var btn2=document.querySelector(".btn2");

var drbutton=document.querySelector(".drbutto")

ShopkeeperRegister.addEventListener('click', function(){
    console.log("click");
       h1.innerHTML="Shopkeeper registration form";
       
    drRegister.classList.add('disable');
    ShopkeeperRegister.classList.remove('disable');
    

}

);

drRegister.addEventListener('click', function(){
    console.log("click");
    h1.innerHTML=" Docter registration form";

    ShopkeeperRegister.classList.add('disable');
   drRegister.classList.remove('disable');


}

);

