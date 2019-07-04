
   (function(){
      emailjs.init("user_kimCDYZRrzTqsR96090cz");
   })();

 function send(){
	let theme = document.getElementById("theme");
	let text = document.getElementById("text");
	let topbar = document.getElementById("topbar");
	var templateParams = {
    theme: theme.value,
    notes: text.value
	};
	topbar.textContent = "Wait, processing ..";
	emailjs.send('mail_ru', 'template_9ziZG16x', templateParams)
    	.then(function(response) {
    		alert("It sent");
    		topbar.textContent = "Put your ideas";
   		 }, function(error) {
    		alert(error);
    		topbar.textContent = "Put your ideas";
    });
    theme.value = "";
    text.value = "";

};

