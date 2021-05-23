enum Note {
  C = 0,
  CSharp = 1,
  D = 2,
  EFlat = 3,
  E = 4,
  F = 5,
  FSharp = 6,
  G = 7,
  AFlat = 8,
  A = 9,
  BFlat = 10,
  B = 11,
}

type Octave = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export enum Triad {
  Major = 0,
  Minor = 1,
  Diminished = 2,
}

export enum Step {
  Tone = 2,
  Semitone = 1,
}

export interface Scale {
  intervals: [Step, Step, Step, Step, Step, Step, Step];
  triads: [Triad, Triad, Triad, Triad, Triad, Triad, Triad];
}

export class Pitch {
  constructor(public note: Note, public octave: Octave) {}

  toString() {
    return `${Note[this.note]}${this.octave}`;
  }
}

export class Chord {
  constructor(public pitch: Pitch, public triad: Triad) {}

  toString() {
    return `${this.pitch.toString()} ${Triad[this.triad]}`;
  }
}

export const MajorScale: Scale = {
  intervals: [
    Step.Tone,
    Step.Tone,
    Step.Semitone,
    Step.Tone,
    Step.Tone,
    Step.Tone,
    Step.Semitone,
  ],
  triads: [
    Triad.Major,
    Triad.Minor,
    Triad.Minor,
    Triad.Major,
    Triad.Major,
    Triad.Minor,
    Triad.Diminished,
  ],
};

export const MinorScale: Scale = {
  intervals: [
    Step.Tone,
    Step.Semitone,
    Step.Tone,
    Step.Tone,
    Step.Semitone,
    Step.Tone,
    Step.Tone,
  ],
  triads: [
    Triad.Minor,
    Triad.Diminished,
    Triad.Major,
    Triad.Minor,
    Triad.Minor,
    Triad.Major,
    Triad.Major,
  ],
};

export function stepPitch(pitch: Pitch, steps: number): Pitch {
  const { note, octave } = pitch;

  const nextNote = (chord.note + step) % 12;
}

// export function getScale(note: Note, scale: Scale): Chord[] {
//   const chords = [];

//   let chord = new Chord(note, scale.triads[0]);

//   chords.push(chord);

//   for (let i = 0; i < scale.intervals.length; i++) {
//     const step = scale.intervals[i];
//     const nextNote = (chord.note + step) % 12;
//     const nextTriad = scale.triads[(i + 1) % scale.triads.length];
//     chord = new Chord(nextNote, nextTriad);
//     chords.push(chord);
//   }

//   return chords;
// }

// console.log(getScale(Note.C, MajorScale).map((x) => x.toString()));
