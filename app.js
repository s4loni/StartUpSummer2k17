//Posts to console by retrieving postedMessage from the submit form
//const postFunction = () => {
	//console.log(document.getElementById('postedMessage').value); //prints the text from the input form to console
//};

//Adds message to the page in the same form
function addMessage() {
	 // create a new p element 
  var newP = document.createElement("p");

  // and give it some content 
  var newPost = document.createTextNode(document.getElementById('postedMessage').value); 
  
  // add the text node to the newly created div
  newP.appendChild(newPost);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("recentposts"); 
  currentDiv.appendChild(newP); 
};

console.log(defaultApp.name);



	