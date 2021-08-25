window.onload = function () {
    console.log("Loading..");
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 1224;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map'));
    imageMap.resize();

    var SpanTop = function (span){
        var  previousHeight = 800;
        var x =  previousHeight / document.body.clientHeight;

        this.resize = function (){
            //console.log(x);
            //var str = span.offsetTop;
            var cheight = document.body.clientHeight;
            //console.log(cheight);
            var top = parseFloat(cheight);
            top *=x;
            //console.log(top);
            span.style.top = `${top}px`;
            //previousHeight = document.body.clientHeight;
            return true;
        };
        window.onresize = this.resize
    },
    spanTop = new SpanTop(document.getElementById("pog"));
    spanTop.resize();
}




function rr(){
    console.log('RickRolledLMAO');
    var song = new Audio('Images/song.mp3');
    song.play();
}
