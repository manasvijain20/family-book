var names=[
    "1. Manasvi Jain - Me",
    "2. Ashish Jain - My dad",
    "3. Sonila Jain - My mom",
    "4. Paridhi Jain - My sister",
    "5. Chanda Sethi - My grandmother",
    "6. Rajkumar Jain - My grandfather"
    ];
  var images = [
      "Manasvi Jain.jpg",
      "family book dad.jpg",
      "family book mom.jpg",
      "family book sister.jpg",
      "grandmother.jpg",
      "grandfather.jpg"
  ];
  var i = 0;
  function nextslide(){
   document.getElementById("names").innerHTML = names[i];
   document.getElementById ("album").src = images[i];
   i++;
   if (i == 6){
     i = 0;
   }
  }
  