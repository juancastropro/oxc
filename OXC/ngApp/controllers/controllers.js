var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(comicService, $location) {
                this.comicService = comicService;
                this.$location = $location;
                this.comics = this.comicService.listComics();
                this.slides = [
                    {
                        image: '/Images/hydroslide1.png',
                        text: 'COMING FALL 2016'
                    },
                    {
                        image: '/Images/hydrosol1.png',
                        text: 'NEW ONGOING SERIES'
                    }];
            }
            return HomeController;
        })();
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        Controllers.AboutController = AboutController;
        var CreatorsController = (function () {
            function CreatorsController() {
            }
            return CreatorsController;
        })();
        Controllers.CreatorsController = CreatorsController;
        var ComicsController = (function () {
            function ComicsController(comicService, $location) {
                this.comicService = comicService;
                this.$location = $location;
                this.comics = this.comicService.listComics();
            }
            return ComicsController;
        })();
        Controllers.ComicsController = ComicsController;
        var NewsController = (function () {
            function NewsController() {
            }
            return NewsController;
        })();
        Controllers.NewsController = NewsController;
        var AddComicController = (function () {
            function AddComicController(comicService, $location) {
                this.comicService = comicService;
                this.$location = $location;
            }
            AddComicController.prototype.save = function () {
                var _this = this;
                this.comicService.save(this.newComic).then(function () {
                    _this.$location.path('/comics');
                });
            };
            return AddComicController;
        })();
        Controllers.AddComicController = AddComicController;
        var EditComicController = (function () {
            function EditComicController(comicService, $location, $routeParams) {
                this.comicService = comicService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.comicToEdit = comicService.getComic($routeParams['id']);
            }
            EditComicController.prototype.save = function () {
                var _this = this;
                this.comicService.save(this.comicToEdit).then(function () {
                    _this.$location.path('/comics');
                });
            };
            return EditComicController;
        })();
        Controllers.EditComicController = EditComicController;
        var DeleteComicController = (function () {
            function DeleteComicController(comicService, $location, $routeParams) {
                this.comicService = comicService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.comicToDelete = comicService.getComic($routeParams['id']);
            }
            DeleteComicController.prototype.save = function () {
                var _this = this;
                this.comicService.deleteComic(this.comicToDelete.id).then(function () {
                    _this.$location.path('/comics');
                });
            };
            return DeleteComicController;
        })();
        Controllers.DeleteComicController = DeleteComicController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map