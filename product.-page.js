// disply product data using api

fetch('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products').then((data)=>{
   //console.log(data);
   return data.json();
}).then((productdata)=>{
    //console.log(objectdata[1].amount);
    let tabledata="";
    productdata.map((value)=>{
        tabledata += `<tr class="order-row">
        <td class="second-text">${value.id}</td>
        <td class="primary-text">${value.medicineName}</td>
        <td class="primary-text">${value.medicineBrand}</td>
        <td class="primary-text" id="expiryDate">${value.expiryDate}</td>
        <td class="second-text">${value.unitPrice}</td>
        <td class="second-text"id="stock" >${value.stock}</td>
    </tr>`
    });
    document.getElementById("product-data").innerHTML= tabledata;
    
}).catch((err)=>{
    console.log(err);
});

function checkMe(){
    var expired = document.getElementById("expired");
    var text = document.getElementById("expiryDate");
    if(expired.checked < "09-May-2022"){
        text.style.display = "";
    }else{
        text.style.display = "none";
    }
}



