function setFruit() {
    // Store
    var fruit = document.getElementById("fruit").value;
    window.localStorage.setItem("favFruit", fruit); //don't forget to put WINDOW!
    
    }
    
    function getFruit() {
    // Retrieve
    document.getElementById("displayFruit").innerHTML = window.localStorage.getItem("favFruit");
    var fruit = window.localStorage.getItem("favFruit");
    if (fruit === "banana" || fruit === "Banana") {
        document.getElementById("picture").innerHTML = "<img src='banana.jpeg' height='480' width='480'>"
    }

    if (fruit === "bananas" || fruit === "Bananas") {
        document.getElementById("picture").innerHTML = "<img src='bananas.jpeg' height='480' width='480'>"
    }
    }
    
    function removeFruit() {
    //Removal
    window.localStorage.removeItem("favFruit");
    document.getElementById("displayFruit").innerHTML = "";
    document.getElementById("picture").innerHTML = "";
    }