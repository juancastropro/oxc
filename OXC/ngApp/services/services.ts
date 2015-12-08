namespace MyApp.Services {

    export class ComicService {
        private ComicResource;

        public listComics() {
            return this.ComicResource.query();
        }

        public save(comic) {
            return this.ComicResource.save(comic).$promise;
        }

        public getComic(id) {
            return this.ComicResource.get({ id: id });
        }

        public deleteComic(id: number) {
            return this.ComicResource.delete({ id: id }).$promise;
        }


        constructor($resource: angular.resource.IResourceService) {
            this.ComicResource = $resource('/api/comics/:id');
        }
    }

    angular.module('MyApp').service('comicService', ComicService);

}