var playControls = document.getElementsByClassName('player-controls__buttons')[0];
var htmlBody = document.getElementsByTagName('body')[0];
//console.log(htmlBody);
var folded = false;

    function nextSong(){
        playControls.childNodes[3].click();
    }

    function togglePlay(){
        playControls.childNodes[2].click();
    }

    function prevSong(){
        playControls.childNodes[1].click();
    }

    function setShufl(){
        playControls.childNodes[0].click();
    }

    function setRepeat(){
        playControls.childNodes[4].click();
    }

    //setup a timer to routinely check the status of buttons and text
    function updateButtonClasses(){
        var a = document.getElementsByClassName('player-controls__buttons')[0];
        var b = document.getElementById("playButton");
        var c = document.getElementById("shuffleButton");
        var d = document.getElementById("repeatButton");
        var e = document.getElementById('remotePlayText');
        var f = document.getElementsByClassName('connect-bar__device-name')[0];
        var g = document.getElementsByClassName('track-info__name ellipsis-one-line')[0];
        var h = document.getElementById('trackName');
        var i = document.getElementsByClassName('track-info__artists link-subtle ellipsis-one-line')[0];
        var j = document.getElementById('trackArtists');
            setInterval(function () {
                b.className = a.childNodes[2].className;
                b.classList.add("biggerIcons");
                c.className = a.childNodes[0].className;
                c.classList.add("biggerIcons");
                c.classList.add("greenBoy");
                d.className = a.childNodes[4].className;
                d.classList.add("biggerIcons");
                d.classList.add("greenBoy");
                
                f = document.getElementsByClassName('connect-bar__device-name')[0];
                if(f != undefined){
                    e.innerHTML = f.innerHTML;
                }
                else{
                    e.innerHTML = "Playing from webpage";
                }
                
                g = document.getElementsByClassName('track-info__name ellipsis-one-line')[0];
                if(g != undefined){
                    h.innerHTML = g.childNodes[0].childNodes[0].innerHTML;
                }
                
                i = document.getElementsByClassName('track-info__artists link-subtle ellipsis-one-line')[0];
                if(i != undefined){
                    j.innerHTML = i.childNodes[0].childNodes[0].childNodes[0].innerHTML;
                }
            }, 50) ;

        
    }

    //add events to the buttons
    function buttonSetup(){
        document.getElementById('playButton').addEventListener('click' , () => {togglePlay();});
        document.getElementById('shuffleButton').addEventListener('click' , () => {setShufl();});
        document.getElementById('prevButton').addEventListener('click' , () => {prevSong();});
        document.getElementById('nextButton').addEventListener('click' , () => {nextSong();});
        document.getElementById('repeatButton').addEventListener('click' , () => {setRepeat();});
        document.getElementById('foldButton').addEventListener('click' , () => {foldInterface();});
    }

    //fucntion to toggle the touch interface on or off
    function foldInterface(){
        
        var a = document.getElementById('foldButton');
        if(folded){
            folded = false;
            document.getElementById('tabletview').style.bottom = '-675px';
            a.classList.remove("foldButtonContentDown");
            a.classList.add("foldButtonContentUp");
            //console.log("fold down");
        }
        else{
            folded = true;
            document.getElementById('tabletview').style.bottom = '0px';
            a.classList.remove("foldButtonContentUp");
            a.classList.add("foldButtonContentDown");
            //console.log("fold up");
        }
    }

    //setup swiping
    function touchSetup(){
        var touchArea = document.getElementById('swipeDiv');
        var myRegion = new ZingTouch.Region(touchArea);
        
        
        myRegion.bind(touchArea, 'swipe', function(e){
            //console.log(e.detail);
            var dir = e.detail.data[0].currentDirection;
            if(dir < 20 || dir > 340){
                //console.log("swipe right");
                prevSong();
            }
            else if(dir > 160 && dir < 200){
                //console.log("swipe left");
                nextSong();
            }
            else if(dir > 260 && dir < 280){
                //console.log("swipe down");
                foldInterface();
            }
        });
    }

    //check if the dom is fully loaded and grab the needed elements
    htmlBody.onload = function () { 
            this.console.log("Dom loaded");            
            playControls = document.getElementsByClassName('player-controls__buttons')[0];
            var a = this.document.getElementsByClassName("volume-bar")[0];
            var b = a;
            if(b != undefined){
                a.classList.add("moveBar");
                this.document.getElementById("volumeContainer").appendChild(a);
                a.remove;
            }

            setTimeout(checkElementsLoaded,200);

            function checkElementsLoaded(){
                console.log("checking elements");
                a = this.document.getElementsByClassName("volume-bar")[0];
                b = a;
                if(b != undefined){
                    a.classList.add("moveBar");
                    this.document.getElementById("volumeContainer").appendChild(a);
                    a.remove;
                    playControls = document.getElementsByClassName('player-controls__buttons')[0];
                    touchSetup();
                    buttonSetup();
                    updateButtonClasses();
                    console.log("elements found, setup complete!");
                }
                else{
                    setTimeout(checkElementsLoaded,200);
                }
            }
     }


    