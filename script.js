//check if the user is logged in. If not disable the extention.
var PageBody = document.getElementsByTagName('body')[0];
        if(PageBody.className != "login"){

            //load the tablet interface script
            var s = document.createElement('script');
            s.src = chrome.extension.getURL('tabletView.js');
            s.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(s);

            //load zingtouch
            var a = document.createElement('script');
            a.src = chrome.extension.getURL('zingtouch.min.js');
            a.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(a);

            //add the css file to the document
            var c = document.createElement('link');
            c.href = chrome.extension.getURL('css.css');
            c.rel = "stylesheet";
            (document.head || document.documentElement).appendChild(c);

            //add the extra html to the document
            var url = chrome.extension.getURL('tabletBody.html');
                $.get(url, function(html) {
                    $('body').append(html);
                });
            }
