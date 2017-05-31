(function() {
    function SongPlayer() {
        var SongPlayer = {};

        /**
        * @desc variable to hold currentSong designation
        * @type {Object}
        */
        var currentSong = null;

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
        var currentBuzzObject = null;

        /**
        * @function setSong
        * @desc Stops currently playing song and loads new audio file as currentBuzzObject
        * @param {Object} song
        */
        var setSong = function(song) {
            if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
            }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
                formats: ['mp3'],
                preload: true
            });

            currentSong = song;
        };

        /**
        * @function playSong
        * @desc Plays currentBuzzObject and sets song.playing boolean truthy
        * @param {Object} song
        * @param {Object} currentBuzzObject
        */
        var playSong = function(currentBuzzObject, song) {
            currentBuzzObject.play();
            song.playing = true;
        };

        /**
        * @function SongPlayer.play
        * @desc If there is not a currentSong, sets one and plays it.
        * @desc Otherwise, if there is a currentSong, checks if it's paused and resumes song play.
        * @param {Object} song
        */
        SongPlayer.play = function(song) {
            if (currentSong !== song) {
                setSong(song);

                playSong(currentBuzzObject, song);
            } else if (currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                }
            }
        };

        /**
        * @function SongPlayer.pause
        * @desc Pauses currently playing song
        * @param {Object} song
        */
        SongPlayer.pause = function(song) {
            currentBuzzObject.pause();
            song.playing = false;
        };

        return SongPlayer;
    }

    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
