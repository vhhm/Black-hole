export const playSpaceSound = () => {
  const audio = new Audio("/sounds/space.mp3");
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();
};