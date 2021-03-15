
const small = document.querySelector(".small");
const big = document.querySelector('.big');
const region = document.getElementById('region');
let reg = 0;

/*Библиотека бухгалтера*/
const lib = document.getElementById('lib');
const lib1 = document.getElementById('lib1');
const lib2 = document.getElementById('lib2');
const lib3 = document.getElementById('lib3');
let lib_ch = 0;

const lib__change = document.getElementById('lib__change');
const lib__change1 = document.getElementById('lib__change1');
const lib__change2 = document.getElementById('lib__change2');
const lib__change3 = document.getElementById('lib__change3');

/*Энциклопедии решений*/
let encyclopedia1 = document.getElementById('encyclopedia_1');
let encyclopedia2 = document.getElementById('encyclopedia_2');
let encyclopedia3 = document.getElementById('encyclopedia_3');
let encyclopedia4 = document.getElementById('encyclopedia_4');
let encyclopedia5 = document.getElementById('encyclopedia_5');
let encyclopedia6 = document.getElementById('encyclopedia_6');
let encyclopedia7 = document.getElementById('encyclopedia_7');
let encyclopedia8 = document.getElementById('encyclopedia_8');

let enPaket1 = document.getElementById('encyclopedia_paket_1');
let enPaket2 = document.getElementById('encyclopedia_paket_2');
let enPaket3 = document.getElementById('encyclopedia_paket_3');
let encyc1 = 0;
let encyc2 = 0;
let encyc3 = 0;


console.log(small);    
small.addEventListener('change',(event) =>  {
    if(small.checked){
		alert('Выбран');
    }else{
        alert('Идите!');
    }
})
  
big.addEventListener('click', function () {
    console.log('BIG');    
})

region.addEventListener('click', function(){
    if(reg == 0){
    this.textContent = "Законодательство Владикавказа";
    reg = 1;    
    }
    else{
        this.textContent = "Законодательство Ставропольского края";
        reg = 0
    }
     
})
lib.addEventListener('click', function(){
    
    if(lib_ch == 0){
        console.log('я тут')
        this.style.color="rgb(107, 61, 61)";
        lib1.style.display="none";
        lib2.style.display="none";
        lib3.style.display="none";
        lib__change1.style.display="none";
        lib__change2.style.display="none";
        lib__change3.style.display="none";
           
        lib_ch = 1;
    }
    else {
        console.log('я тут')
        this.style.color="rgb(107, 61, 61)";
        lib1.style.display="inline";
        lib2.style.display="inline";
        lib3.style.display="inline";
        lib__change1.style.display="inline";
        lib__change2.style.display="inline";
        lib__change3.style.display="inline";
            
        lib_ch = 0;
    }

})

/*Энциклопедии решений Для бухгалтера*/
enPaket1.addEventListener('change', function(){
    if(enPaket1.checked){
        
        encyclopedia1.checked = true;
        encyclopedia3.checked = true;
        encyclopedia4.checked = true;
        encyclopedia5.checked = true;
        encyclopedia6.checked = true;
        encyclopedia6.checked = true;
       console.log('эр')
    }
    else{
        if(enPaket1.checked){
        
            encyclopedia1.checked = false;
            encyclopedia3.checked = false;
            encyclopedia4.checked = false;
            encyclopedia5.checked = false;
            encyclopedia6.checked = false;
            encyclopedia6.checked = false;
           console.log('эр')
        }
    }

})

/*http://jsfiddle.net/leaverou/ASPUA/
http://shpargalkablog.ru/2013/08/checked.html*/