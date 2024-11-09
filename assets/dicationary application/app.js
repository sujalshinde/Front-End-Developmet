let word = document.getElementById("txtword");
let button = document.getElementById("btnsubmit");
let meaning =document.getElementById("meaning");
let list =document.getElementById("details");
let list1 = document.getElementById("details1");
let list2 =document.getElementById("details2");
let result =document.getElementById("resultdiv");
let alertdiv = document.getElementById("alertdiv");

button.addEventListener("click",function()
{
    if(word.value=="")
    {
alertdiv.style.display="block";
result.style.display="none";
word.focus();
    }
    else{
        alertdiv.style.display="none";
        result.style.display="block";
        document.getElementById("enteredword").innerHTML=word.value;
    

        // https://api.dictionaryapi.dev/api/v2/entries/en/great
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word.value+'')
        .then(response=>response.json())
        .then(data=>{

            let meaningvar = data[0]['meanings'][0]['definitions'][0]['definition'];
            console.log(meaningvar);
            
            meaning.innerHTML = meaningvar;
            
            let listArr = [];
            listArr =data[0]['meanings'][0]['definitions'];
           
            list.innerHTML="";
            listArr.forEach(element => {
                list.innerHTML+=`<li>${element.definition}</li>`;
            });
    
            list1.innerHTML="";
            listArr1 = data[0]['meanings'][1]['definitions'];
            listArr1.forEach(element => {
                list1.innerHTML+=`<li>${element.definition}</li>`;
            });
    
            list2.innerHTML="";
            let listArr2 = data[0]['meanings'][2]['definitions'];
            
                listArr2.forEach(element => {
                    list2.innerHTML+=`<li>${element.definition}</li>`;
                });

            
        }).catch(() =>{

            alert("Some data not found..!");
           
            
        });

        
    }
    
})