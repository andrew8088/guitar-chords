const { Note, Pitch, stepPitch } = require("../lib/index");

describe("GuitarChords", () => {
  describe("stepPitch", () => {
    const p1 = new Pitch(Note.C, 4);
    const p2 = stepPitch(p1, 2);

    expect(p2.toString()).toBe("D4");
  });
});
