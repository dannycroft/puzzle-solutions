/**
 * Creates a new ReverseBinary instance
 * @constructor
 * @see https://www.spotify.com/uk/jobs/tech/reversed-binary/
 */

module.exports = new ReverseBinary();

function ReverseBinary() {}

/**
 * Convert n to a binary number and return it's
 * reversed binary representation
 * @param  {Number} n
 * @return {Number}
 */
ReverseBinary.prototype.convert = function(n) {
        return parseInt(n.toString(2)
                .split("").reverse("")
                .join("").toString(2), 2);
};
