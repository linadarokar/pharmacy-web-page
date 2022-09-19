// disply product data using api

fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users').then((data)=>{
   //console.log(data);
   return data.json();
}).then((objectdata)=>{
    //console.log(objectdata[1].amount);
    let tabledata="";
    objectdata.map((value)=>{
        tabledata +=`<tr class="order-row">
        <td class="second-text">${value.id}</td>
        <td class="primary-text"><img src="${value.profilePic}" alt="profilePic"></td>
        <td class="username" class="second-text">${value.fullName}</td>
        <td class="primary-text">${value.dob}</td>
        <td class="second-text">${value.gender}</td>
        <td class="second-text">${value.currentCity}, ${value.currentCountry}</td>
    </tr>`
    });
    document.getElementById("table-body").innerHTML= tabledata;
    
}).catch((err)=>{
    console.log(err);
});


// search box functionality
function search() {
    var input, filter, tbody, tr, item, i, itemvalue;

    input = document.getElementById("search-item");
    filter = input.value.toUpperCase();
    tbody = document.getElementById("table-body");
    tr = tbody.getElementsByTagName("tr");

    for(i=0; i< tr.length; i++){
        item = tr[i];

        itemvalue = item.textContent || item.innerHTML;

        if(itemvalue.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
    }
   
};
