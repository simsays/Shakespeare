"use strict";
var Speech = (function () {
    function Speech() {
    }
    Speech.prototype.getLines = function () {
        return this.lines;
    };
    Speech.prototype.getCharacter = function () {
        return this.character;
    };
    Speech.prototype.getSpeechNumber = function () {
        return this.speechNumber;
    };
    return Speech;
}());
exports.Speech = Speech;
//# sourceMappingURL=speech.js.map