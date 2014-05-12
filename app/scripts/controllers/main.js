'use strict';
angular.module('taskee').controller('TotalController', function ($scope) {
    $scope.data = [
        {type: 'Пожертвования', value: 689693}
        ,
        {type: 'Заказы', value: 163325}
    ];
});
angular.module('taskee').controller('ThingsController', function ($scope) {
    $scope.data = [
        {type: 'Каски', value: 155},
        {type: 'Чехлы для бронежилетов', value: 766},
        {type: 'Пластин брони 4го класса', value: 746}

    ];
});

angular.module('taskee').controller('MainController', function ($scope) {

});
