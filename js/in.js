       var i=0;
       function f(){
          document.getElementById('one').classList.toggle('do');
          document.getElementById('one').style.animation = "none";
       }

       function fun() {
          if(i == 0){
            document.getElementById('bar1').style.transform = 'rotate(-45deg) translate(-10px,10px)';
            document.getElementById('bar3').style.transform = 'rotate(45deg) translate(-7px,-5px)';
            document.getElementById('bar2').style.opacity = '0';
            document.getElementById('no').style.display = 'block';

            i=1;
          }
          else{
            document.getElementById('bar1').style.transform = 'rotate(0deg) ';
            document.getElementById('bar3').style.transform = 'rotate(0deg) ';
            document.getElementById('bar2').style.opacity = '1';
            document.getElementById('no').style.display = 'none';

            i=0;
          }

       }
