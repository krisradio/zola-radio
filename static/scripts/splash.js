/* splash 
 * Functionality to fade in subsection descriptions. 
 * Params: none.
 * Returns: none. 
 */
(function splash() {
    var html = document.querySelector("html");
    var main = document.getElementById("main");
    var subs = document.getElementsByClassName("sub");
    
    console.log(subs);
    
    for (let sub of subs) {
        console.log(sub);
        
        var h2 = sub.getElementsByTagName("h2")[0];
        var spanHeight = sub.getElementsByTagName("span")[0].offsetHeight + "px";;
        
        h2.style.top = spanHeight;
        
        sub.addEventListener('mouseenter', function splashSpan() {
            console.log("mouse entered");
            var span = this.getElementsByTagName("span")[0];
            span.style.opacity = "100%";
            
            var spanHeight = span.offsetHeight + "px";
            var h2 = this.getElementsByTagName("h2")[0];
            h2.style.top = "0px";
        });
        
        sub.addEventListener('mouseleave', function unsplash() {
            console.log("mouse left");
            var span = this.getElementsByTagName("span")[0];
            span.style.opacity = "0%";
            
            var spanHeight = span.offsetHeight + "px";
            var h2 = this.getElementsByTagName("h2")[0];
            h2.style.top = spanHeight;
        });
    }
})();