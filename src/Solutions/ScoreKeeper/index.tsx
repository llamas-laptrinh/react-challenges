import { useState } from "react"
import styles from "./scorekeeper.module.css"

function TeamScore({ name, score, teams, setTeams }: { name: string, score: string, teams: string[], setTeams: any }) {
    const [teamScore, setTeamScore] = useState(score);

    return (
        <tr>
            <td colSpan={1}>{name}</td>
            <td><button type="button" onClick={() => setTeamScore(String(Number(teamScore) - 1))}>-</button></td>
            <td>{teamScore}</td>
            <td><button type="button" onClick={() => setTeamScore(String(Number(teamScore) + 1))}>+</button></td>
            <td><button type="button" onClick={() => setTeams(teams.filter((item) => item != name))}>Remove</button></td>
        </tr>
    )
}

function Dashboard({ score, teams, setTeams }: { score: string, teams: string[], setTeams: any }) {
    return (
        <div style={{ backgroundColor: '#85DCB', color: 'white' }}>
            <h3>Dashboard</h3>
            <table style={{ width: "100%" }}>
                <tr>
                    <th>Name</th>
                    <th colSpan={3}>Score</th>
                    <th colSpan={1}></th>
                </tr>
                {teams.map((item, key) => <TeamScore score={score} key={key} name={item} teams={teams} setTeams={setTeams} />)}
            </table>
        </div>
    );
}

const ScoreKeeper = () => {
    const [name, setName] = useState("");
    const [score, setScore] = useState("");
    const [teams, setTeams] = useState<string[]>([]);

    return (
        <div style={styles}>
            <div>
                <input type="text" placeholder="Name of the team" size={50} style={{
                    fontSize: "1em", lineHeight: "32px", borderRadius: "4px",
                    border: "1px solid transparent", padding: "0.2em 1.2em"
                }} value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Score" size={4} style={{
                    fontSize: "1em", lineHeight: "32px", borderRadius: "4px",
                    border: "1px solid transparent", padding: "0.2em 1.2em"
                }} value={score} onChange={(e) => setScore(e.target.value)} />
                <button onClick={() => {
                    setTeams([...teams, name]);
                }} type="button">Add</button>
            </div>
            <Dashboard score={score} teams={teams} setTeams={setTeams} ></Dashboard>
        </div>
    )
}

export default ScoreKeeper