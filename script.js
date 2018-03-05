var PageBody = document.getElementsByTagName('body')[0];
        if(PageBody.className != "login"){

            var s = document.createElement('script');

            // TODO: add "script.js" to web_accessible_resources in manifest.json
            s.src = chrome.extension.getURL('tabletView.js');

            s.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(s);

            //load zingtouch

            var a = document.createElement('script');
            a.src = chrome.extension.getURL('zingtouch.js');
            a.onload = function() {
                this.remove();
            };
            (document.head || document.documentElement).appendChild(a);

            var c = document.createElement('link');
            c.href = chrome.extension.getURL('css.css');
            c.rel = "stylesheet";
            (document.head || document.documentElement).appendChild(c);

            var url = chrome.extension.getURL('tabletBody.html');
                $.get(url, function(html) {
                    $('body').append(html);
                });
            }
