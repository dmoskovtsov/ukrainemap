'use strict';
angular.module('ukrainemapApp').controller('TotalController', function ($scope) {
    $scope.data = [
        {type: 'Пожертвования', value: 689693}
        ,
        {type: 'Заказы', value: 163325}
    ];
});

'use strict';
angular.module('ukrainemapApp').controller('ThingsController', function ($scope) {
    $scope.data = [
        {type: 'Каски', value: 155},
        {type: 'Чехлы для бронежилетов', value: 766},
        {type: 'Пластин брони 4го класса', value: 746}

    ];
});
