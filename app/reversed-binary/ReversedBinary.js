/**
 * Creates a new ReverseBinary instance
 * @constructor
 * @see https://www.spotify.com/uk/jobs/tech/reversed-binary/
 */

module.exports = new ReverseBinary();

function ReverseBinary() {

    // Stricter parse function
    this.filterInt = function(value) {
        if(/^\-?([0-9]+|Infinity)$/.test(value)) {
            return Number(value);
        }
        return NaN;
    };
}

/**
 * Convert n to a binary number and return it's
 * reversed binary representation
 * @param  {Number} n
 * @return {Number}
 */
ReverseBinary.prototype.convert = function(n) {
    n = this.filterInt(n);
    if (!isNaN(n)) {
        return parseInt(n.toString(2)
                .split("").reverse("")
                .join("").toString(2), 2);
    }
};
