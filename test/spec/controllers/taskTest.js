'use strict';
describe('Controller: TaskCtrl', function () {
    var TaskCtrl;
    var scope;
    var rootScope;

    beforeEach(module('taskee'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        rootScope = $rootScope;
        TaskCtrl = $controller('TaskCtrl', {
            $scope: scope,
            $rootScope: rootScope
        });
    }));

    it('onTaskSelect', function () {
        spyOn(rootScope, "$broadcast");
        var task = {};
        scope.onTaskSelect(task);
        expect(rootScope.$broadcast).toHaveBeenCalledWith('SELECTED_TASK_CHANGED', task);
    });

});
