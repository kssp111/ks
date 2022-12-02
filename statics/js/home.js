(function(w) {
    function enterLine() {
        document.getElementById("btnEnter1").onclick = function() {
            window.open(url, "_self");
        }
        document.getElementById("btnEnter2").onclick = function() {
            window.open('https://12.kssp12.com', "_self");
        }
        document.getElementById("btnEnter3").onclick = function() {
            window.open('https://13.kssp13.com', "_self");
        }
        document.getElementById("btnEnter4").onclick = function() {
            window.open('https://14.kssp14.com', "_self");
        }
        document.getElementById("btnEnter6").onclick = function() {
            window.open('https://www.baidu.com/', "_blank");
        }
    }
    function init() {
        enterLine();
    }
    window.addEventListener("DOMContentLoaded", init, !1);
})(window);
