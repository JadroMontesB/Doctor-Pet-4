
//Functions

let x = 0;

function Pet(petName, age, gender, breed, service, owner, phone){
   this.name = petName;
   this.age = age;
   this.breed =  breed;
   this.gender = gender;
   this.service = service;
   this.owner = owner;
   this.phone = phone;
   this.id = x++;
}

function checkInput(variable, id, isValid)
{
   if(variable.length<1)
   {
       document.getElementById(id).classList.add("error");
       return false;
   }
   else
   {
       document.getElementById(id).classList.remove("error");
       //if some input before was not a valid input, we return false
       return true && isValid;
   }
}

function showPetsCards(){
   document.getElementById("petList").innerHTML = '';
   for(let i = 0; i<saloon.pets.length; i++)
   {
       document.getElementById("petList").innerHTML += createCard(saloon.pets[i]);
   }
}


function createCard(pet){
   return `
   <div id="${pet.id}" class="card my-card">
   <h2>${pet.name} 🐾</h2>
   <label>Age: ${pet.age}</label>
   <label>Breed: ${pet.breed}</label>
   <label>Gender: ${pet.gender}</label>
   <label>Service: ${pet.service}</label>
   <label>Owner: ${pet.owner}</label>
   <label>Phone: ${pet.phone}</label>
   <button class="btn btn-danger btn-sm" onclick="removePet(${pet.id});">Delete</button>
   </div>
   `;
}


function getInfo(){
   let isValid = true;

   let petName = document.getElementById("txtPetName").value;
   isValid = checkInput(petName, "txtPetName", isValid);

   let age = document.getElementById("nbAge").value;
   isValid = checkInput(age, "nbAge", isValid);
   
   let gender = document.getElementById("dlGender").value;
   isValid = checkInput(gender, "dlGender", isValid);

   let breed = document.getElementById("dlBreed").value;
   isValid = checkInput(breed, "dlBreed", isValid);

   let service = document.getElementById("dlServices").value;
   isValid = checkInput(service, "dlServices", isValid);

   let owner = document.getElementById("txtOwner").value;
   isValid = checkInput(owner, "txtOwner", isValid);

   let phone = document.getElementById("pnOwner").value;
   isValid = checkInput(phone, "pnOwner",isValid);

   if(isValid == true)
   {
       let pet = new Pet(petName, age, gender, breed, service, owner, phone);
       saloon.pets.push(pet);
       console.log(pet);
       document.getElementById("petInfo").reset();
       showPetsCards();
   }

}

function removePet(index){

    saloon.pets.forEach(function callback (pet,value){

        if(index === pet.id)
        {
            console.log("Complete", value )
            saloon.pets.splice(value,1);
        }
    });

    console.log("Removing pet", index)
    document.getElementById(index).remove();

}

function searchPet(){

    let searchString = document.getElementById("searchInput").value;
    

    saloon.pets.forEach(function callback (pet,value){

        if(searchString.toLowerCase() === pet.name.toLowerCase())
        {
            document.getElementById(value).classList.add("backcolor");
            
        }
    });
    
}

//Other

let saloon={
    name:"The Fashion Pet",
    address:{
        street:"Av. Palm",
        number:"262",
        zip:"23456",
        city:"San Diego",
        state:"California"
    },
    hours:{
        open:"9:00am",
        close:"5:00pm"
    },
    pets:[]
 }
 






