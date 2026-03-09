var Database = {
   keyName: "Mutant Database",
   data: []
};


function loadDataSource(){


   // Load data from localStorage using the keyName
   let storedData = localStorage.getItem(Database.keyName);


   // Parse the string data into an Object
   let parsedData = JSON.parse(storedData);


   // Save the object data into Database.data
   Database.data = parsedData.response;


   // Pass the data to displayData()
   displayData(Database.data);
}


function displayData(dataArray){


   // Select the HTML container
   let container = document.querySelector(".row");


   // Loop through each mutant
   dataArray.forEach(function(mutant){


       let html = `
       <div class="col">
           <div class="card shadow-lg">


               <img src="${mutant.image}" class="card-img-top">


               <div class="card-body">


                   <h5 class="card-title text-center mb-3">
                       ${mutant.name.alias}
                   </h5>


                   <p class="card-text text-center text-muted">
                       ${mutant.name.firstName} ${mutant.name.lastName}
                   </p>


                   <h6 class="fw-bold">Profile</h6>
                   <ul class="list-unstyled">
                       <li>Gender: ${mutant.profile.gender}</li>
                       <li>Eyes: ${mutant.profile.eyes}</li>
                       <li>Hair: ${mutant.profile.hair}</li>
                       <li>Height: ${mutant.profile.height}</li>
                   </ul>


                   <h6 class="fw-bold">Powers</h6>
                   ${processArray(mutant.powers)}


                   <h6 class="fw-bold">Affiliations</h6>
                   ${processBadges(mutant.affiliation)}


               </div>


           </div>
       </div>
       `;


       container.insertAdjacentHTML("beforeend", html);


   });
}


function processArray(arrayData){


   let html = "<ul class='list-unstyled'>";


   arrayData.forEach(function(item){
       html += `<li>${item}</li>`;
   });


   html += "</ul>";


   return html;
}


function processBadges(arrayData){


   let html = "<ul class='list-inline'>";


   arrayData.forEach(function(item){
       html += `<li class="list-inline-item badge bg-primary">${item}</li>`;
   });


   html += "</ul>";


   return html;
}


loadDataSource();
