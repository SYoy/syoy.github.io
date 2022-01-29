if (document.cookie.split(';').filter(function(item) {
    return item.indexOf('cookieconsent_status=allow') >= 0
}).length && (navigator.doNotTrack != 1 && navigator.doNotTrack != "yes" && window.doNotTrack != 1 && navigator.msDoNotTrack != 1)) {
    loadGAonConsent();
}

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
              "background": "#A9B4C2",
              "text": "#5c7291"
            },
            "button": {
              "background": "#2E4756",
              "text": "#ffffff"
            }
          },
        "theme": "edgeless",
        "position": "bottom-right",
        "type": "opt-in",
        "content": {
        "message": "This website uses cookies &#x1F36A; to ensure that you get the best experience possible.",
        "deny": "Deny",
        "allow": "Allow",
        "link": "More information on cookies",
        "href": "https://cookiesandyou.com/"
        },
        onStatusChange: function(status, chosenBefore) {
            var type = this.options.type;
            var didConsent = this.hasConsented();
            if (type == 'opt-in' && didConsent) {
            // enable cookies
            loadGAonConsent();
            }
        }
    })
});

function loadGAonConsent(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-PSC40S5SPE');
  gtag('set', 'anonymizeIp', true);
  gtag('send', 'pageview');

  var gascript = document.createElement("script");
  gascript.async = true;
  gascript.src = "https://www.googletagmanager.com/gtag/js?id=G-PSC40S5SPE";
  document.getElementsByTagName("head")[0].appendChild(gascript, document.getElementsByTagName("head")[0]);
}