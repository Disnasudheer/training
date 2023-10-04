function validate(){
    const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 1 ) {
        document.getElementById("text").innerHTML =
        "Connecting to server";
      }
    if(this.readyState == 2) {
        document.getElementById("text").innerHTML =
        "Request recieved";
      }
    
     if (this.readyState == 3) {
        document.getElementById("text").innerHTML =
        "Request Processed";
      }
    
     if (this.readyState == 4 && this.status == 200) {
      document.getElementById("text").innerHTML =
      this.responseText;
    }
  
}
  xhttp.open("GET", "cont.txt");
  xhttp.send();
}