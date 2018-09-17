const App = () => {
    <div>
        <Header />
        <Main />
    </div>
}

<Switch>
    <Route exact path="/" component={Home}>
    <Route path="/roster" component={Roster}>
    <Route path="schedule" component={schedule}>
</Switch>

import {Switch, Route} from 'react-router-dom'
const Main = () => {
    <main>
        <Switch>
            <Route exact path="/" component={Home}>
            <Route path="/roster" component={Roster}>
            <Route path="schedule" component={schedule}>            
        </Switch>
    </main>
}

const Roaster = () => {
    <Switch>
        <Route exact path="/roster" component={Roster}>
        <Route path="/roster/:number" component={Player}>         
    </Switch>    
}

const Player = (props) => {
    const player = PlayerAPI.get(
        parseInt(props.matchMedia.URLSearchParams.number,10)
    )
    if(!player) {
        return <div>sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name}</h1>
            <h1>{player.position}</h1>
        </div>
    )
}

const FullRoaster = () => {
    <div>
        <ul>
            {
                PlayerAPI.all().map(p => (
                    <li key = {p.number}>
                        <Link to={`/roster/${p.number}`}></Link>
                    </li>
                ))
            }
        </ul>
    </div>
}