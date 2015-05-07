/* global jasmine, inject, describe, it, beforeEach, expect */ // jshint ignore:line
describe('autofocus directive', function() {
    var $compile, $rootScope, $scope;
    var elem;

    beforeEach(module('appTemplates'));
    beforeEach(module('demo'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;

        $scope = $rootScope.$new();
    }));

    function compile(attrs) {
        var html = '<book-list books="books" ' + attrs + '></book-list>';
        var compiled = $compile(html)($scope);
        elem = compiled[0];
        $scope.$digest();
    }

    function getText(node) {
        return node.textContent.trim();
    }
});
