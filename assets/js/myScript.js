// Show and hide div
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Quantity Counter
function increaseCount(a, b) {
  var input = b.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}

function decreaseCount(a, b) {
  var input = b.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}

// Dropdown menu
var tickets = {
    HackneyEmpire: ["Monday 6th", "Tuesday 7th", "Wednesday 8th"],
    FirstDirectArena: ["Friday 10th", "Saturday 11th", "Monday 13th"],
    TheSSEHydro: ["Wednesday 15th", "Thursday 16th", "Friday 17th"],
    Replenish: ["CD", "Vinyl"],
    Revelation: ["CD", "Vinyl"],
    Rides: ["CD", "Vinyl"],
    JustFeelLoveBlackT: ["S", "M", "L", "XL"],
    PreciousMetalBlackT: ["S", "M", "L", "XL"],
    TestCardRedT: ["S", "M", "L", "XL"]
}

    function changecat(value) {
        if (value.length == 0) document.getElementById("category").innerHTML = "<option></option>";
        else {
            var catOptions = "";
            for (categoryId in tickets[value]) {
                catOptions += "<option>" + tickets[value][categoryId] + "</option>";
            }
            document.getElementById("category").innerHTML = catOptions;
        }
    }

