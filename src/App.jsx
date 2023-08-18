import playerData from "./playerData"
import { useState } from "react"

function BaseballCard(props) {
    const [showPicture, setShowPicture] = useState(true)
    const { name, team, position, stats, imgUrl } = props.player

    const statsDisplay = []
    for (let key in stats) {
        statsDisplay.push(
            <p>
                {key}: {stats[key]}
            </p>
        )
    }

    const toggleCard = () => {
      setShowPicture(!showPicture)
    }
    return showPicture ? (
        <div className="card" onClick={toggleCard}>
            <h2>{name}</h2>
            <img src={imgUrl} />
        </div>
    ) : (
        <div className="card" onClick={toggleCard}>
            <h2>{name}</h2>
            <p>{position}</p>
            <p>{team}</p>
            {statsDisplay}
        </div>
    )
}

function App() {
    const cards = playerData.map(player => (
        <BaseballCard player={player} key={player.cardId} />
    ))
    return <>{cards}</>
}

export default App
