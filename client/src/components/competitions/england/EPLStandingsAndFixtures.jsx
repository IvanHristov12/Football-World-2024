import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = '6f9497b6af82a8118f28c68b85b0178e';
const BASE_URL = 'https://v3.football.api-sports.io/';

export default function EPLStandingsAndFixtures() {
    const [standings, setStandings] = useState([]);
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        // Fetch the current standings
        const fetchStandings = async () => {
            try {
                const response = await axios.get(`${BASE_URL}standings`, {
                    headers: {
                        'x-apisports-key': API_KEY,
                    },
                    params: {
                        league: 39,  // EPL league id
                        season: 2024 // Change this to the current season
                    }
                });
                setStandings(response.data.response[0].league.standings[0]);
            } catch (error) {
                console.error('Error fetching standings:', error);
            }
        };

        // Fetch the upcoming fixtures
        const fetchFixtures = async () => {
            try {
                const response = await axios.get(`${BASE_URL}fixtures`, {
                    headers: {
                        'x-apisports-key': API_KEY,
                    },
                    params: {
                        league: 39,  // EPL league id
                        season: 2024, // Change this to the current season
                        next: 5      // Fetch the next 5 fixtures
                    }
                });
                setFixtures(response.data.response);
            } catch (error) {
                console.error('Error fetching fixtures:', error);
            }
        };

        fetchStandings();
        fetchFixtures();
    }, []);

    return (
        <div className="container mx-auto p-6 pt-20 mt-10">
            <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">English Premier League</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Current Standings</h2>
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-indigo-600 text-white">
                            <th className="py-3 px-4 text-left">#</th>
                            <th className="py-3 px-4 text-left">Team</th>
                            <th className="py-3 px-4 text-center">Played</th>
                            <th className="py-3 px-4 text-center">Won</th>
                            <th className="py-3 px-4 text-center">Drawn</th>
                            <th className="py-3 px-4 text-center">Lost</th>
                            <th className="py-3 px-4 text-center">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {standings.map((team, index) => (
                            <tr key={team.team.id} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                <td className="py-3 px-4">{team.rank}</td>
                                <td className="py-3 px-4 flex items-center">
                                    <img src={team.team.logo} alt={team.team.name} className="w-6 h-6 mr-2" />
                                    {team.team.name}
                                </td>
                                <td className="py-3 px-4 text-center">{team.all.played}</td>
                                <td className="py-3 px-4 text-center">{team.all.win}</td>
                                <td className="py-3 px-4 text-center">{team.all.draw}</td>
                                <td className="py-3 px-4 text-center">{team.all.lose}</td>
                                <td className="py-3 px-4 text-center">{team.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 mt-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Upcoming Fixtures</h2>
                <ul className="space-y-4">
                    {fixtures.map((fixture) => (
                        <li key={fixture.fixture.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                            <div className="text-lg font-medium">{fixture.teams.home.name} vs {fixture.teams.away.name}</div>
                            <div className="text-sm text-gray-600">{new Date(fixture.fixture.date).toLocaleString()}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto p-6">
                    {/* Creates space for extra scrolling */}
                <div className="h-20"></div>
            </div>
        </div>

    );
}
