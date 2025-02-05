class Sound {
	audioContext = new (window.AudioContext || window.webkitAudioContext)();

	constructor() {}

	play(soundPath) {
		this.audioContext.resume().then(() => {
			fetch(soundPath)
				.then((response) => response.arrayBuffer())
				.then((data) => audioContext.decodeAudioData(data))
				.then((buffer) => {
					const source = audioContext.createBufferSource();
					source.buffer = buffer;
					source.connect(audioContext.destination);
					source.start(0);
				})
				.catch((err) => console.error('Audio playback failed:', err));
		});
	}
}
