


// document.addEventListener('click',function(){
//     console.log('i have click on document');
// });

// function anoterway(){
//     console.log('i have click document');
// }
// document.addEventListener('click',anoterway);

// document.removeEventListener('click',anoterway);

//event Object
const content=document.querySelector("#wrapper");
document.addEventListener('click' ,function(event){
        console.log(event);
});

let link=document.querySelectorAll('a');
let thirdLink=link[2];
thirdLink.addEventListener('click',function(event){
        event.preventDefault();
        console.log("maza to ayaa")
})