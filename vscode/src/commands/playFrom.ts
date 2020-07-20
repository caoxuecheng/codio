import Player from '../player/Player';
import { showPlayFromInputBox, UI, MESSAGES } from '../user_interface/messages';

export default async function playFrom(player: Player, time?: number) {
  if (player && player.isPlaying) {
    if (time) {
      player.playFrom(time);
    } else {
      const timeInSecondsInput: string = await showPlayFromInputBox(player);
      const timeInSeconds = Number(timeInSecondsInput);
      if (timeInSeconds && timeInSeconds > 0 && timeInSeconds < player.codioLength / 1000) {
        const timeInMilliseconds = Number(timeInSeconds) * 1000;
        player.playFrom(timeInMilliseconds);
      } else {
        UI.showMessage(MESSAGES.invalidNumber);
      }
    }
  } else {
    UI.showMessage(MESSAGES.noActiveCodio);
  }
}
