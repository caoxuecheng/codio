import { UI, MESSAGES } from '../user_interface/messages';
import Player from '../player/Player';

export default function resumeCodio(player: Player) {
  if (player && !player.isPlaying && player.relativeActiveTime > 0) {
    player.resume();
  } else {
    UI.showMessage(MESSAGES.alreadyPlaying);
  }
}
