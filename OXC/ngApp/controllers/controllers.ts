namespace MyApp.Controllers {

    export class HomeController {
        public comics;
        public slides;
        constructor
            (
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService
            ) {
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
    }


    export class AboutController {

    }

    export class CreatorsController {

    }

    export class ComicsController {
        public comics;

        constructor
            (
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService
            ) {
            this.comics = this.comicService.listComics();
        }
    }

    export class NewsController {

    }

    export class AddComicController {
        public newComic;

        public save() {
            this.comicService.save(this.newComic).then(() => {
                this.$location.path('/comics');
            });
        }
        constructor(
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService
        ) { }

    }

    export class EditComicController {
        public comicToEdit;
        public save() {
            this.comicService.save(this.comicToEdit).then(() => {
                this.$location.path('/comics');
            });
        }
        constructor(
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.comicToEdit = comicService.getComic($routeParams['id']);
        }
    }

    export class DeleteComicController {
        public comicToDelete;
        public save() {
            this.comicService.deleteComic(this.comicToDelete.id).then(() => {
                this.$location.path('/comics');
            });
        }
        constructor(
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService,
            private $routeParams: ng.route.IRouteParamsService
        ) {
            this.comicToDelete = comicService.getComic($routeParams['id']);
        }
    }
}