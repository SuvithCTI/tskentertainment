import confetti from 'canvas-confetti';

export const triggerConfetti = (originX = 0.5, originY = 0.7) => {
  // Fire multiple bursts for realistic celebratory feel
  const count = 200;
  const defaults = {
    origin: { x: originX, y: originY },
    zIndex: 9999
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
    colors: ['#F59E0B', '#EC4899', '#8B5CF6', '#10B981']
  });
  fire(0.2, {
    spread: 60,
    colors: ['#FDE68A', '#F43F5E', '#A78BFA', '#34D399']
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
    colors: ['#FFD700', '#FF1493', '#7928CA', '#00DFD8']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    colors: ['#F59E0B', '#FFFFFF', '#EC4899']
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
    colors: ['#FBBF24', '#C084FC']
  });
};

// Web Audio API synthesized applause cheering sound (no external file needed!)
export const playApplauseSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    // Generate synthesized white noise burst for applause clapping
    const bufferSize = ctx.sampleRate * 2.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      // Modulated white noise with random claps
      const envelope = Math.sin((i / bufferSize) * Math.PI);
      const clapPuffs = (Math.sin(i * 0.08) > 0.8 ? 1.5 : 0.6) * (Math.random() * 2 - 1);
      data[i] = clapPuffs * envelope * 0.28;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    // Filter to sound like cheering crowd / hand claps
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1200;
    filter.Q.value = 1.2;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.1);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 2.2);
  } catch (err) {
    console.warn("Audio Context playback prevented by browser:", err);
  }
};
