let url="http://makeup-api.herokuapp.com/api/v1/products.json";
fetchdata(url);
async function fetchdata(url)
{
    try 
    {
        const response = await fetch(url);
        const datas = await response.json();
        datas.forEach(data =>show(data));
    }
    catch(err)
    {
        console.log(err);
    }
}
const displayfun=document.getElementById("display")
function show(data) {
    const displayDiv = document.createElement("div");
    displayDiv.className = "card";
    displayDiv.innerHTML = `
      <img src="${data.image_link}" alt="img" id="image">
         <h6>Brand: ${data.brand}</h6>
         <h6> Name: ${data.name}</h6>
         <h6>Price:${data.price}${data.price_sign}</h6>
         <h6> Product Link: <a href="${data.product_link}" target="_blank">${data.product_link}</a></h6>`;
    displayfun.appendChild(displayDiv);
  }

  

 

