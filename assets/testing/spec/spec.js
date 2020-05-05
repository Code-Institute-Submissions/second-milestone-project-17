describe("Buttons", function() {
        describe("Volume On/Off", function() {

        beforeEach(function() {
            sound = false;
            let volBtn = $("#volume-btn");
        });

        it("should = false", function() {
            expect(sound).toBe(false);
        });

        it("should = true", function() {
            sound = true;
            expect(sound).toBe(true);
        });

    });

});