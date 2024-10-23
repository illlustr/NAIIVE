const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const synth = {
    oscillator: null,
    gainNode: audioCtx.createGain(),
};

const canvas = document.getElementById("waveformCanvas");
const ctx = canvas.getContext("2d");
let waveformType = 'sine';
let oscillation = 1;

synth.gainNode.gain.value = 0.5;
synth.gainNode.connect(audioCtx.destination);

function playSynth(noteFrequency) {
    synth.oscillator = audioCtx.createOscillator();
    synth.oscillator.type = waveformType;

    const modulatedFrequency = noteFrequency * oscillation;
    synth.oscillator.frequency.setValueAtTime(modulatedFrequency, audioCtx.currentTime);
    synth.oscillator.connect(synth.gainNode);
    synth.oscillator.start();
}

function stopSynth() {
    if (synth.oscillator) {
        synth.oscillator.stop();
        synth.oscillator.disconnect();
    }
}

document.querySelectorAll(".key").forEach(key => {
    key.addEventListener("mousedown", (e) => {
        const note = e.target.dataset.note;
        const frequency = getNoteFrequency(note);
        playSynth(frequency);
    });
    key.addEventListener("mouseup", stopSynth);
    key.addEventListener("mouseleave", stopSynth);
});

function getNoteFrequency(note) {
    const notes = {
        "C4": 261.63, "C#4": 277.18, "D4": 293.66, "D#4": 311.13, "E4": 329.63,
        "F4": 349.23, "F#4": 369.99, "G4": 392.00, "G#4": 415.30, "A4": 440.00,
        "A#4": 466.16, "B4": 493.88
    };
    return notes[note];
}

document.getElementById('waveform').addEventListener('input', (e) => {
    switch (e.target.value) {
        case "0": waveformType = 'sine'; break;
        case "1": waveformType = 'square'; break;
        case "2": waveformType = 'sawtooth'; break;
        case "3": waveformType = 'triangle'; break;
    }
    drawWaveform();
});

document.getElementById('oscillation').addEventListener('input', (e) => {
    oscillation = parseInt(e.target.value);
    drawWaveform();
});

function drawWaveform() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = 'orange';
    ctx.lineWidth = 2;

    ctx.beginPath();
    const width = canvas.width;
    const height = canvas.height;
    const midHeight = height / 2;
    const cycles = oscillation;

    for (let x = 0; x < width; x++) {
        let value;
        const t = (x / width) * cycles * 2 * Math.PI;

        switch (waveformType) {
            case 'sine':
                value = Math.sin(t);
                break;
            case 'square':
                value = Math.sign(Math.sin(t));
                break;
            case 'sawtooth':
                value = 2 * (t / (2 * Math.PI) - Math.floor(0.5 + t / (2 * Math.PI)));
                break;
            case 'triangle':
                value = Math.abs(2 * (t / (2 * Math.PI) - Math.floor(0.5 + t / (2 * Math.PI)))) * 2 - 1;
                break;
        }

        const y = midHeight + value * (height / 2);
        if (x === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }

    ctx.stroke();
}

drawWaveform();
