namespace MyApp.Controllers {

    export class HomeController {
        public comics;

        constructor
            (
            private comicService: MyApp.Services.ComicService,
            private $location: angular.ILocationService
            ) {
            this.comics = this.comicService.listComics();
        }

    }

    export class CarouselController {
        public slides;
        constructor() {
            this.slides = [
                {
                    image: '~/Content/Images/placeholder.png',
                    text: 'Slide 1'
                },
                {
                    image: '~/Content/Images/placeholder.png',
                    text: 'Slide 2'
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