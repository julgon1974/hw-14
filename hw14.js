
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");


//targil1

//let emailList = new Set()

//emailList.add("julgon1974@gmail.com")
//emailList.add("moishe@gmail.com")
//emailList.add("julgon1974@gmail.com")
//emailList.add("gabriel2005@gmail.com")
//emailList.add("moishe@gmail.com")
//emailList.add("israeloff@gmail.com")
//emailList.add("jerusalmim@gmail.com")

//const runCode= () => {
  
//    output.innerHTML = "set size is: " + emailList.size + "<br>"
   
//}


//const runCode2 = () => {
    

//    if (emailList.has("moishe@gmail.com")) {
//        console.log("moishe@gmail.com is in the list!")
//        output2.innerHTML = "moishe@gmail.com is in the list!"
//    }
//}


//const runCode3 = () => {
//    for (const list of emailList) {
        
//        let text = "";
//        emailList.forEach(function (value) {
//            text += value + "<br>";
//        })
//        output3.innerHTML = text
//    }
//}


//targil2

//let passwordList = new Set()

//const runCode = () => {
//    for (let i = 0; i < 5; i++) {
//        let password = prompt("please enter password")
//        passwordList.add(password)
        
//    }
//    //console.log(passwordList)

//    output.innerHTML = "set size is:" + "<br>" + passwordList.size

//    let text = "";
//    passwordList.forEach(function (value) {
//            text += value + "<br>";
//        })
//        output.innerHTML = text
//}

//targil 3

//const productList = new Map([
//    [45784, "Banana"],
//    [3, "Apple"],
//    [88684, "Lemon"],
//    [55784, "Onion"],
//    [7, "Basilic"]
//]);


//const runCode = () => {

//    let valueList = "";

//    productList.forEach(function (key, value) {
//        valueList += value + "<br>"
//    })
//    output.innerHTML = "key list: " + "<br>" + valueList
//}

//const runCode3 = () => {
//let keyList = "";

//    productList.forEach(function (key, value) {
//        keyList += key + "<br>"
//    })
//    output3.innerHTML = "value list: " + "<br>" + keyList

//}

    
//const runCode2 = () => {
//    let list = "";

//    productList.forEach(function (key, value) {
//        list += value + ' :  ' + key + "<br>"
//    })
//    output2.innerHTML = "product list: " + "<br>" + list


//    }

//const runCode4 = () => {

//    output4.innerHTML = "product 7 is in the list? " + productList.has(7) + "<br>" +
//        "name of product key 3 is: " + productList.get(3)

//}

//targil4


const carList = new Map()

    
carList.set (1234, {
    manufacturer: "Nissan",
    model: "Note",
    color: "Grey"

})

carList.set(1005070, {
    manufacturer: "Toyota",
    model: "Note",
    color: "Black"

})

carList.set(5009876, {
    manufacturer: "Nissan",
    model: "Note",
    color: "White"

})

carList.set(540234, {
    manufacturer: "Ford",
    model: "Srar",
    color: "Grey"

})

carList.set(850234, {
    manufacturer: "Fiat",
    model: "Accent",
    color: "Grey"

})


const runCode = () => {

    console.log(carList)
//output.innerHTML = txt


    for (const [key, value] of carList.entries()) {

        let txt = "";
        for (let x in carList) {
            txt += carList[x] + " ";
        };


        console.log(key + ' = ' + value)

        output.innerHTML = key
    }
}



   
