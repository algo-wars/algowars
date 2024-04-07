import { Button } from "@/components/ui/button";
import { Game } from "@/features/game/game.model";
import { Player } from "@/features/player/player.model";

type Props = {
  game?: Game;
  player?: Player;
};

const LobbyActionsLeave = ({ game, player }: Props) => {
  console.log(game, player);
  if (
    !game ||
    !game.lobby ||
    !player ||
    !game.lobby.players?.find((p) => p.username !== player.username)
  ) {
    return null;
  }

  return <Button variant="destructive">Leave Lobby</Button>;
};

export default LobbyActionsLeave;