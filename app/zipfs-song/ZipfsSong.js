/**
 * Take a data chunk consisting of two settings and n amount of tracks. Each
 * track has a name (String) and an amount of times that a track has been played
 * (Number). Log out the most popular tracks.
 *
 * CONSTRAINTS
 *
 *  1 <= n <= 50000 1 <= m <= n 0 <= fi <= 10^12
 *
 * @example
 *
 *  INPUT
 *
 *  4 2      // Number of songs on the album (4) & Number of songs to select (2)
 *  30 one   // Amount of times played (30) & Track name (one)
 *  30 two
 *  15 three
 *  25 four
 *
 *  OUTPUT
 *
 *  four
 *  two
 */
process.stdin.resume();
process.stdin.setEncoding("utf8");

var _performanceStart,
    _performanceEnd,
    album = [],
    tracks,
    config = {
        songCount: 0,
        songSelection: 0
    };

process.stdin.on("data", function(data) {

    _performanceStart = process.hrtime();

    data = data.replace(/(\r\n|\n|\r)/gm,"").split(" ");

    if (config.songCount === 0 && config.songSelection === 0) {
        config.songCount = parseInt(data[0], 10);
        config.songSelection = parseInt(data[1], 10);
        return;
    }

    album.push([ parseInt(data[0], 10), data[1] ]);

    if (config.songCount === album.length ) {

        process.stdin.pause();
        process.nextTick(function() {

            tracks = album.map(function(track, i) {

                return {
                    name: track[1],
                    quality:  track[0] / (album[0][0] / (i + 1))
                };

            }).sort(function(a, b) {

                return b.quality - a.quality;

            });

            console.log("\n" + "Highest Quality Tracks");

            for(i = 0; i < config.songSelection; i++) {
                console.log("- " + tracks[i].name);
            }

            _performanceEnd = process.hrtime(_performanceStart);

            console.log("\ntime: " +
                        _performanceEnd[0] +
                        "." + _performanceEnd[1]);
        });
    }

});
