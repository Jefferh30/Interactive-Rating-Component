let rateNumber = "";
let arrayRating = ["rating1", "rating2", "rating3", "rating4", "rating5"]

//Setting the value of each rating when clicked
function getRating(rating){
    rateNumber = rating.replace("rating", "");

    //adds class to element to show that it is selected
    //TO DO: remove the selected element from array and use foreach to remove "rating-active" class
    if (rateNumber != ""){
        document.getElementById(rating).classList.add("rating-active");
    }
}

//submitting the rating and showing thank you page
function submitRating(){
    if (rateNumber == ""){
        alert("Please, select a rating");
    }else{
    document.getElementById("selectedStars").textContent = rateNumber;
    document.getElementById("ratingState").style.display = "none";
    document.getElementById("thankYouState").style.display = "block";
    }
}