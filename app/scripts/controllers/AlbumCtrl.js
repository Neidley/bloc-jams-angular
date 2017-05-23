(function() {
    function AlbumCtrl() {
        this.albumData = albumPicasso.songs;
    }

    angular
        .module('blocJams')
        .controller('AlbumCtrl', AlbumCtrl);
})();
