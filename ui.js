
document.addEventListener("DOMContentLoaded", function() {
//this fxn runs whens the document (HTML) has finished loading 

//get the form element 
const form = document.getElementById('form');

//attach submit event listener to the form
form.addEventListener("submit", async function (event){
	event.preventDefault(); // prevent the default form submission behaviour
	
	async function getData() {
		const ip = document.getElementById("ip").value;

		//check if IP is empty or not a valid IP
		if(!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip)){
      alert("Please enter a valid IP address");
      return;
    }

		const API_KEY = "at_kDprGo44BIXywbcv4n6gsd752gfak";
		const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${ip}`;

		try{
			const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("Data:", data);

			// Call the function to display data when the data is fetched
			displayData(data);

			test(data);

		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}
	
	// Call the function to fetch data when the form is submitted
	getData();
});
// function to display data on page
function displayData(data){
	const ipAddress = document.getElementById("ipAddress");
	const location = document.getElementById("location");
	const timezone = document.getElementById("timezone");
	const isp = document.getElementById("isp");

	if (!data || !data.ip) {
		console.error("Invalid data format:", data);
		return;
}

	ipAddress.textContent = `${data.ip}`;
	location.textContent = `${data.location.city}, ${data.location.region}`;
	timezone.textContent = `${data.location.timezone}`;
	isp.textContent = `${data.isp}`;
}

});
