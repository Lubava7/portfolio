import React from "react";
import game from "./Games.module.css";

const Games = () => {
  return (
    <div className={game.content}>
      <div className={game.scroll_item}>
        <iframe
          className={game.rps}
          src="https://lubava7.github.io/rock-paper-scissors-game/"
          title="memory game"
        ></iframe>
      </div>
      <div className={game.scroll_item}>
        <iframe
          className={game.memory}
          src="https://lubava7.github.io/tic-tac-toe-game//"
          title="memory game"
        ></iframe>
      </div>
      <div className={game.scroll_item}>
        <iframe
          className={game.memory}
          src="https://lubava7.github.io/memory-game/"
          title="memory game"
        ></iframe>
      </div>
    </div>
  );
};

export default Games;
