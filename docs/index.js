window.onload = function () {
    var ImageMap = function (map) {
        //ImageMap
        var n,
            areas = map.getElementsByTagName("area"),
            len = areas.length,
            coords = [],
            previousWidth = 1224;
        for (n = 0; n < len; n++) {
            coords[n] = areas[n].coords.split(",");
        }

        this.resize = function () {
            //ImageMap
            var n,
                m,
                clen,
                x = document.body.clientWidth / previousWidth;
            for (n = 0; n < len; n++) {
                clen = coords[n].length;
                for (m = 0; m < clen; m++) {
                    coords[n][m] *= x;
                }
                areas[n].coords = coords[n].join(",");
            }
            previousWidth = document.body.clientWidth;

            return true;
        };
        window.onresize = this.resize;
        window.addEventListener('resize',()=>{
            this.resize();
        });
    },
    imageMap = new ImageMap(document.getElementById("map"));
    imageMap.resize();

    // event listener for rr

    var span = document.getElementById("pog");
    span.addEventListener("click", () => {
        rr(span);
    });
};

function rr(span) {
    console.log("RickRolledLMAO");
    var song = new Audio("Images/song.mp3");
    song.play();
    span.removeEventListener("click", null);
}
