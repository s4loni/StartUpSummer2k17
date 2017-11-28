//Posts to console by retrieving postedMessage from the submit form
//const postFunction = () => {
	//console.log(document.getElementById('postedMessage').value); //prints the text from the input form to console
//};

//Loads the document when the file loads
 $(document).ready(function(){

  //refer to the posts section of the firebase database
  var postsRef = firebase.database().ref().child("Posts");

    postsRef.on("child_added", snap => {

      var post = snap.val();

      $("#recentposts").append("<p>"+ post + "</p>");

    });

  });

//Adds message to the page in the same form
function addMessage() {
	 // create a new p element 
  var newP = document.createElement("p");

  //Set user's input message to inputmsg
  var inputmsg = document.getElementById('postedMessage').value;

  // and give it some content 
  var newPost = document.createTextNode(inputmsg); 
  
  // add the text node to the newly created div
  newP.appendChild(newPost);  

  // add the newly created element and its content into the DOM 
  //var currentDiv = document.getElementById("recentposts"); 
  //currentDiv.appendChild(newP); 

  // add the newly created post into the firebase data 
  var messageRef = firebase.database().ref();
  messageRef.child("Posts").push().set(inputmsg);

  document.getElementById("formy").reset();

};








	