!function(){"use strict";function e(e){var n,c,d=e.toString(),f="";for(n=0,c=d.length;c>n;n+=2)f+=String.fromCharCode(parseInt(d.substr(n,2),16));return f}function n(){t.value=s,t.blur(),t.focus()}function c(e){e.length>0&&e[0].remove()}function d(n){switch(n=n.replace(s,""),o.innerHTML+=s+n+"<br>",n=n.split(" "),n[0].toLowerCase()){case e("636c656172"):o.innerHTML="";break;case e("68656c70"):o.innerHTML+=e("436f6d6d616e64204c6973743a203c62723e2667743b203c623e636c6561723c2f623e202d20636c65617220636f6e736f6c6520636f6e74656e743c62723e"),o.innerHTML+="&gt; <b>download</b> -f &lt;<i>file</i>&gt; -l &lt;<i>language</i>&gt; - file could be <i>cv</i> and language could be <i>pt</i> or <i>en</i> (e.g. download -f cv -l en)<br>",o.innerHTML+="&gt; <b>goto</b> &lt;<i>link</i>&gt; - link could be <i>linkedin</i>, <i>github</i> or <i>facebook</i><br>",o.innerHTML+=e("2667743b203c623e706c61793c2f623e20266c743b3c693e6d75736963206e616d653c2f693e2667743b202d20706c6179206d757369632028652e672e20706c6179207269636b726f6c6c293c62723e"),o.innerHTML+=e("2667743b203c623e74696d656c696e653c2f623e202d2076696577206d7920776f726b20657870657269656e636520696e2074696d656c696e653c62723e3c62723e"),o.innerHTML+=e("3c623e4e4f54453c2f623e3a204d6f726520636f6d6d616e647320736f6f6e2e205061676520756e64657220646576656c6f706d656e742e3c62723e4368656572732c203c693e566963746f723c2f693e3c62723e3c62723e");break;case"":o.innerHTML+="";break;case e("74696d656c696e65"):o.innerHTML+=e("266e6273703b5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f5f3c62723e7c205365702032303134202d2050726573656e74266e6273703b266e6273703b266e6273703b266e6273703b266e6273703b7c3c62723e7c20536f66747761726520446576656c6f706572266e6273703b266e6273703b266e6273703b266e6273703b266e6273703b7c3c62723e7c204d4f4720546563686e6f6c6f676965732c20532e412e266e6273707c3c62723e"),o.innerHTML+=e("266e6273702d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d3c62723e7c204f63742032303133202d204a756c2032303134266e6273703b266e6273703b266e6273703b266e6273703b7c3c62723e7c204a722e20536f66747761726520446576656c6f706572266e6273703b7c3c62723e7c204d4f4720546563686e6f6c6f676965732c20532e412e266e6273707c3c62723e266e6273702d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d2d3c62723e");break;case e("706c6179"):if(f=document.getElementsByTagName("audio"),""===n[1]||void 0===n[1])return void(o.innerHTML+=b+"Usage: play <song> (e.g. play rickroll)<br>");switch(o.innerHTML+=e("2623393833353b20706c6179696e67203a20"),n[1].toLowerCase()){case e("70656e6775696e"):o.innerHTML+="The Penguin Dance <br>",c(f),a.innerHTML+=e("3c617564696f206865696768743d2230222077696474683d2230223e3c736f75726365207372633d2266696c65732f70642e6d7033222f3e3c2f617564696f3e3c62723e");break;case e("7269636b726f6c6c"):o.innerHTML+="Rick Astley - Never Gonna Give You Up <br>",c(f),a.innerHTML+=e("3c617564696f206865696768743d2230222077696474683d2230223e3c736f75726365207372633d2266696c65732f72722e6d7033222f3e3c2f617564696f3e3c62723e");break;default:o.innerHTML+='song "'+n[1]+'" not found <br>'}f=document.getElementsByTagName("audio"),void 0!==f[0]&&f[0].play();break;case e("646f776e6c6f6164"):"-f"===n[1]&&"cv"===n[2]&&"-l"===n[3]?"pt"===n[4]?window.open("./files/cv_pt.pdf"):"en"===n[4]&&window.open("./files/cv_en.pdf"):o.innerHTML+=b+"Usage : download -f &lt;file&gt; -l &lt;language&gt;<br>";break;case"goto":if(void 0!==n[1])switch(n[1].toLowerCase()){case"linkedin":window.open("https://linkedin.com/in/victorfern");break;case"github":window.open("https://github.com/victorfern91");break;case"facebook":window.open("https://www.facebook.com/victorteixeirafernandes");break;default:o.innerHTML+=b+'Invalid "'+n[1]+'". Usage: goto &lt;link&gt; (e.g. goto github)<br>'}else o.innerHTML+=b+"Usage: goto &lt;link&gt; (e.g. goto github)<br>";break;default:o.innerHTML+=b+n[0]+u}}snowStorm.followMouse=!1,snowStorm.snowStick=!1,snowStorm.excludeMobile=!1,snowStorm.flakesMaxActive=25,snowStorm.flakesMax=50,snowStorm.animationInterval=33;var f,i=document.getElementById("hiddenMessage"),t=document.getElementById("command"),o=document.getElementById("terminalOutput"),a=document.getElementById("audioContainer"),r=0,l=[],s=e("757365723a696e646578202420"),b=e("7666207465726d696e616c3a20"),u=e("3a20636f6d6d616e64206e6f7420666f756e643c62723e");t.value=s,t.focus(),t.setSelectionRange(20,20),setTimeout(function(){i.classList.add("animated"),i.classList.add("fadeIn"),document.getElementById("hiddenMessage").style.visibility="visible"},400),a.innerHTML+=e("3c617564696f206865696768743d2230222077696474683d223022206c6f6f70206175746f706c61793e3c736f75726365207372633d2266696c65732f6c615f636d2e6d7033222f3e3c2f617564696f3e3c62723e"),t.onkeypress=function(e){13===e.keyCode&&(d(t.value),l.push(t.value),n(),e.preventDefault())},t.onkeyup=function(){(t.value.indexOf(s)<0||0!==t.value.indexOf(s))&&(t.value=s)},t.onkeydown=function(e){if(38===e.keyCode&&l.length>0){var n=l.length-1-r%l.length;t.value=l[n],r++,e.preventDefault()}else r=0}}();