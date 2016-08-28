
function sign(){
	var username=document.forms['register']['username'].value;
	var mail=document.forms['register']['mail'].value;
	var password=document.forms['register']['password'].value;
	var gender=document.forms['register']['gender'].value;


var myWindow = window.open("", "Msg", "width=600,height=600");

var cssHead = '<head><link rel="stylesheet" type="text/css" href="contact.css"></head>'


   var str= cssHead+"<div id='wrapper'><div class='join'>Join Today</div><div class='lock'></div>"+
   	        "<div class='clr'></div>"+"<div class='login-options'></div>"+
                   	"<a class='twitter' href='https://twitter.com/'>Twitter</a>"+
                      " <a class='facebook' href='https://www.facebook.com/'>Facebook</a>"+
                      " <a class='google' href='https://plus.google.com/'>Google+</a>"+
                       "<div class='clr'><hr /></div>"+
                       		"<div class='mail-text'>Or registrate using your email address.</div>"+
                               		"<div class='forms' >"+
                                       "<h3>Dear <span>"+username+"</span></h3><br>"+
                                       "your email: <span>"+mail+"</span><br>"+
                                       "<br>password: <span>"+password+"</span><br>"+
                                      " <br>you're <span>"+gender+"</span>. <br>"+
                                       "</div><fieldset></div><br><br>"+
   "<div class='footer'>&copy; Made by <a href = 'https://vk.com/id97569793'>Kateryna Novruzova</a></div>";


	myWindow.document.write(str);
     


};
