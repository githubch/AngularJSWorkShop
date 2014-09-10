describe("Home Controller ", function(){
    var scope;
    beforeEach(module('myApp'));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        $controller("HomeController", {
            $scope:scope
        });
    }));

    it("shoulde init when render home", function(){
        expect(scope.Magic).toEqual(1234);
})
});