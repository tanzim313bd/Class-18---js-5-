

setInterval(function(){
    let date = new Date(); 

    let hour = document.querySelector('#hour');
    let min = document.querySelector('#min');
    let sec = document.querySelector('#sec');
    let am = document.querySelector('#am');

    
    let hour_now = date.getHours();
    let min_now = date.getMinutes();
    let sec_now = date.getSeconds();

    

    hour.innerText = hour_now > 12 ? hour_now - 12 : hour_now; 
    am.innerText = hour_now > 12 ? 'pm' : 'am'; 
    min.innerText = min_now<10 ? '0'+ min_now : min_now;
    sec.innerText = sec_now<10 ? '0'+ sec_now: sec_now;



},1000);

setInterval(function(){
    let date = new Date(); 

    let sec_hand = document.querySelector('.sec_hand');

    let secHand_now = date.getSeconds();

     sec_hand.style.transform = `rotate(${360 * (secHand_now/60)}deg)`
},1000);

setInterval(function(){
    let date = new Date(); 

    let min_hand = document.querySelector('.min_hand');

    let minHand_now = date.getMinutes();

     min_hand.style.transform = `rotate(${360 * (minHand_now/60)}deg)`
},1000);

setInterval(function(){
    let date = new Date(); 

    let hour_hand = document.querySelector('.hour_hand');

    let hourHand_now = date.getHours();

    hour_hand.style.transform = `rotate(${360 * (hourHand_now/60)}deg)`;
},1000);


document.querySelector('#button').addEventListener('click', function(){
   document.documentElement.classList.toggle('dark');
})




