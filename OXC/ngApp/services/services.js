var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var ComicService = (function () {
            function ComicService($resource) {
                this.ComicResource = $resource('/api/comics/:id');
            }
            ComicService.prototype.listComics = function () {
                return this.ComicResource.query();
            };
            ComicService.prototype.save = function (comic) {
                return this.ComicResource.save(comic).$promise;
            };
            ComicService.prototype.getComic = function (id) {
                return this.ComicResource.get({ id: id });
            };
            ComicService.prototype.deleteComic = function (id) {
                return this.ComicResource.delete({ id: id }).$promise;
            };
            return ComicService;
        })();
        Services.ComicService = ComicService;
        angular.module('MyApp').service('comicService', ComicService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map