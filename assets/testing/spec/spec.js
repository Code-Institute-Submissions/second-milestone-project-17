describe("Button state", function() {

    describe("Strict button", function() {

        beforeEach(function() {
            strict = false;
            let strictBtn = document.querySelector('.strict-btn');
        })

        it("should return hard = false", function() {
            expect(strict).toBe(false);
        });

        it("should return hard = true", function() {
            strict = true;
            expect(strict).toBe(true);
        });
    });

    describe("Mute sound", function() {

        beforeEach(function() {
            sound = false;
            let volBtn = $('#volume-btn');
        });

        it("should return sound = false", function() {
            expect(sound).toBe(false);
        });

        it("should return sound = true", function() {
            sound = true;
            expect(sound).toBe(true);
        });

    });

});