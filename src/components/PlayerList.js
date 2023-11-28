import players from "../Players"
import Player from "./Player"

const PlayerList=()=>{
    return(
        <div>
            <h2>PlayerList Component</h2>
            <div className="cards">
            {
                players.map((el,i,t)=> <Player key={i} el={el}/>)
            }
            </div>
        </div>
    )
}

export default PlayerList