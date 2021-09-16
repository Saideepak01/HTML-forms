function formsubmit(){
    let form = document.querySelector("form")
    let formData = new FormData(form);
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let inputAddress = formData.get("inputAddress");
    let pincode = formData.get("pincode");
    let gender = formData.get("gender");
    let food = formData.getAll("food");
    let state = formData.get("state");
    let country = formData.get("country");
    if(food.length<2){
        alert("choose at least 2 out of 5 choices");
    }
    else{
        let tbody = document.getElementById("tbody");
        let tr = createElement("tr");
        let tdFirstName = createElement("td",firstName);
        let tdLastName = createElement("td",lastName);
        let tdAddress = createElement("td",inputAddress);
        let tdPinccode = createElement("td",pincode);
        let tdGender = createElement("td",gender);
        let tdFood = createElement("td", food.join(","));
        let tdState = createElement("td",state);
        let tdCountry = createElement("td",country);
        tr.append(tdFirstName,tdLastName,tdAddress,tdPinccode,tdGender,tdFood,tdState,tdCountry);
        tbody.append(tr);
        form.reset();
    }
    return false;
}

function createElement(elementName,value = ""){
    var element = document.createElement(elementName);
    element.innerHTML = value;
    return element;
}
