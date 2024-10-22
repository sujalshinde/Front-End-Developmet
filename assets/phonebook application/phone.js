console.log()

showList()

let submit = document.getElementById("submit");

submit.addEventListener("click",function (e){

  let name = document.getElementById("addname");
  let contact = document.getElementById("addcontact");
  let destination = document.getElementById("adddestination");
  let hotel = document.getElementById("addhotel");
  let checkin = document.getElementById("addcheckin");
  let checkout = document.getElementById("addcheckout");


  let contactlist = localStorage.getItem("All Bookings");

  namecon = /^[a-zA-Z]$/;
  mobilecon = /^\d{10}$/;

  if( name.value =="" || contact.value=="" || destination.value==""|| hotel .value=="" || checkin.value=="" || checkout.value=="")
  {
    alert("Please Enter All Feilds");
    return false;
  }

  if(name.valu!="")
    {
        if(!name.value.match(namecon))
        {
            alert("Invalid Name");
            return false;
        }
    }


  if(contact.value!="")
    {
        if(!contact.value.match(mobilecon))
        {
            alert("Invalid Contact Number");
            return false;
        }
    }

  if (contactlist == null) {
    bookingObj = [];
  } else {
    bookingObj = JSON.parse(contactlist);
  }

  let myObj ={
    name: name.value,
    contact: contact.value,
    destination: destination.value,
    hotel:  hotel.value,
    checkin: checkin.value,
    checkout: checkout.value
  }

 bookingObj.push(myObj);

  localStorage.setItem("All Bookings",JSON.stringify(bookingObj));

  name.value="";
  contact.value="";
  destination.value="";
  hotel.value="";
  checkin.value="";
  checkout.value="";


  showList();

});

function showList(){
  let list=localStorage.getItem("All Bookings")
  if( list == null){
    bookingObj=[];
} else{
  bookingObj = JSON.parse(list);
}

let html = "";
 bookingObj.forEach(function(element, index) {
   html += `
                  
                  
                 <div class="noteCard my-2 mx-2 card" style="width: 15rem;">
                   <div class="card-body" style="font-family: 'Times New Roman', Times, serif;">
                       <label class="card-title">Name:- ${element.name}</label>
                        <label class="card-title">Destination:- ${element.destination}</label>
                       <label class="card-title">Hotel:- ${element.hotel}</label>
                       <label class="card-title">Checkin:- ${element.checkin}</label>
                       <label class="card-title">Checkout:- ${element.checkout}</label>

                        <label class="card-text" style="white-space: break-spaces;">Contact:- ${element.contact}</label>
                        <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Booking</button>
                   </div>
               </div>`;
                        

});
let listElm = document.getElementById("All Bookings");
 if (bookingObj.length != 0) {
   listElm.innerHTML = html;
 } else {
   listElm.innerHTML = "Nothing to show!";
   listElm.style.fontFamily="'Times New Roman', Times, serif";
 
}
}

function deleteNote(index) {
  //   console.log("I am deleting", index);
  
   let list = localStorage.getItem("All Bookings");
   if (list == null) {
    bookingObj = [];
   } else {
     bookingObj = JSON.parse(list);
   }
  
   bookingObj.splice(index, 1);
   localStorage.setItem("All Bookings", JSON.stringify(bookingObj));
   showList();
  }



//search in contact list 
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){
  let inputVal = search.value;
    //let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
      
        let cardTxt = element.getElementsByTagName("label")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
});

  