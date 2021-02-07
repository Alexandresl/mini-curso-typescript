"use strict";
var tlou = {
    title: 'The last of Us',
    description: 'The best game in the world',
    genre: 'action',
    platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    }
};
console.log(tlou.genre);
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
var leftBehind = {
    title: 'The last of us = left behind',
    description: 'You play as Ellie b efore the original game',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters'],
};
var CreateGame = /** @class */ (function () {
    function CreateGame(title, description, genre, platform) {
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.platform = platform;
    }
    CreateGame.prototype.getSimilars = function () {
        console.log("Similar games to " + title + ": Uncharted, A Plague Tale, Metro");
    };
    return CreateGame;
}());
