describe("Buttons", function() {

    describe("Volume On/Off", function() {

        beforeEach(function() {
            sound = false;
            let volBtn = $("#volume-btn");
        });

        it("should return sound = false", function() {
            expect(sound).toBe(false);
        });

        it("should return sound = true", function() {
            sound = true;
            expect(sound).toBe(true);
        });

    });
    describe("Start Game", function() {

        beforeEach(function() {
            game = false;
            let startBtn = $(".start-btn");
        });

        it("should return Game Started = false", function() {
            expect(game).toBe(false);
        });

        it("should return Game Started = true", function() {
            game = true;
            expect(game).toBe(true);
        });

    });
    describe("Strict mode", function() {

        beforeEach(function() {
            strict = false;
            let strictBtn = $(".strict-btn");
        });

        it("should return strict = false", function() {
            expect(strict).toBe(false);
        });

        it("should return strict  = true", function() {
            strict = true;
            expect(strict).toBe(true);
        });

    });

});