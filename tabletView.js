var playControls = document.getElementsByClassName('player-controls__buttons')[0];
var folded = true;

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

    function updateButtonClasses(){
        var a = document.getElementsByClassName('player-controls__buttons')[0];
        var b = document.getElementById("playButton");
        var c = document.getElementById("shuffleButton");
        var d = document.getElementById("repeatButton");
            setInterval(function () {
            b.className = a.childNodes[2].className;
            b.classList.add("biggerIcons");
            c.className = a.childNodes[0].className;
            c.classList.add("biggerIcons");
            c.classList.add("greenBoy");
            d.className = a.childNodes[4].className;
            d.classList.add("biggerIcons");
            d.classList.add("greenBoy");
            }, 50) ;
    }

    function buttonSetup(){
        document.getElementById('playButton').addEventListener('click' , () => {togglePlay();});
        document.getElementById('shuffleButton').addEventListener('click' , () => {setShufl();});
        document.getElementById('prevButton').addEventListener('click' , () => {prevSong();});
        document.getElementById('nextButton').addEventListener('click' , () => {nextSong();});
        document.getElementById('repeatButton').addEventListener('click' , () => {setRepeat();});
        document.getElementById('foldButton').addEventListener('click' , () => {foldInterface();});
    }

    function foldInterface(){
        
        var a = document.getElementById('foldButton');
        if(folded){
            folded = false;
            document.getElementById('tabletview').style.bottom = '-675px';
            console.log("fold down");
        }
        else{
            folded = true;
            document.getElementById('tabletview').style.bottom = '0px';
            console.log("fold up");
        }
    }
//setup swiping
    function touchSetup(){
        var touchArea = document.getElementById('swipeDiv');
        var myRegion = new ZingTouch.Region(touchArea);
        
        
        myRegion.bind(touchArea, 'swipe', function(e){
            console.log(e.detail);
            var dir = e.detail.data[0].currentDirection;
            if(dir < 20 || dir > 340){
                console.log("swipe right");
                nextSong();
            }
            else if(dir > 160 || dir < 200){
                console.log("swipe left");
                prevSong();
            }
        });
    }

    window.onload = function () { 
        this.console.log("dom loaded");
        
        touchSetup();
        buttonSetup();
        updateButtonClasses();

        var a = this.document.getElementsByClassName("volume-bar")[0];
        a.classList.add("moveBar");
        this.document.getElementById("volumeContainer").appendChild(a);
        a.remove;
    }


    