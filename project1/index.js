// listen windows loadevent
window.addEventListener("load", checkInternetConn);

// create the function
function checkInternetConn() {
    // get the id of html page
  const statusText = document.getElementById("statusText");
  const ipaddText = document.getElementById("ipaddText");
  const networkText = document.getElementById("networkText");

//   display the text while internet is loading
  statusText.textContent = "checking...";

//   checks if browser is online or not
  if (navigator.onLine) {
    fetch("https://api.ipify.org?format=json").

    // /respsonse will be fetched parsed into json
    then((response)=>response.json())
    
    // will handle the incoming data
    .then((data)=>{
        ipaddText.textContent = data.ip
        statusText.textContent = "Connected"

        // retruns a network bandwidth
        const connection = navigator.connection
        
// will give the value of bandwidth in megabits
        const networkStrength = connection ? connection.downlink + "Mbps" : "unknown"
        networkText.textContent = networkStrength
    })
        .catch(() => {
          statusText.textContent = "Disconnected";
          ipaddText.textContent = "-";
          networkText.textContent = "-";
        });
    
}
//   if browser is offline then display the following content
  else{
    statusText.textContent = "Disconnected";
    ipaddText.textContent = "-";
    networkText.textContent = "-";
  }
}
