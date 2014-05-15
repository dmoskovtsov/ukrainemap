'use strict';
angular.module('taskee').controller('TaskCtrl', function ($scope, $rootScope) {
    $scope.selectedTask = null;
    $scope.taskList = [
        {id: 0, name: 'Todo', tasks: [
            {
                id: 0, name: 'Купить самолет'
            },
            {
                id: 3, name: 'Увидеть Эстонию'
            }
        ]},
        {id: 1, name: 'In progress', tasks: [
            {
                id: 1, name: 'Написать todo app'
            }
        ]},
        {id: 1, name: 'Done', tasks: [
            {
                id: 1, name: 'Выучить английский'
            },
            {
                id: 3, name: 'Проклять js'
            }
        ]}
    ];

    $scope.onTaskSelect = function (task) {
        $scope.selectedTask = task;
        $rootScope.$broadcast("SELECTED_TASK_CHANGED", task);
    }
});

angular.module('taskee').controller('InfoController', function ($scope) {

    $scope.selectedTask = null;

    $scope.$on("SELECTED_TASK_CHANGED", function (event, task) {
        $scope.selectedTask = task;
    });

});

angular.module('taskee').controller('MainController', function ($scope) {

});
