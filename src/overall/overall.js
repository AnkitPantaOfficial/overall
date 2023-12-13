import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';

const downloadFrontendAsImage = () => {
  const frontendElement = document.querySelector('.frame .overlap-wrapper');

  if (frontendElement) {
    html2canvas(frontendElement, { backgroundColor: null }).then((canvas) => {
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = dataURL;
      a.download = 'result.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  }
};


const Overall = () => {
  const [Fulldata1, setFulldata1] = useState([]);
  const [Rest, setRest] = useState([]);
  const [First, setFirst] = useState([]);
  const [teamData, setTeamData] = useState([]);  // Fix: Add setTeamData
  const PORT = 3001;
  

  useEffect(() => {
    // Fetch data from the Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/AKfycby_bPfidsM-DmbOiyazYVYMyz-cjyRFyJ_ZIQ26niI2No8CMYgAfF6A16LOK6V0eSoyvQ/exec')
      .then(response => response.json())
      .then(data => setFulldata1(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    const Data = localStorage.getItem('tRMS');
    const Data1 = localStorage.getItem('tFMS');

    if (Data) {
      setFirst(JSON.parse(Data1))
      setRest(JSON.parse(Data))
    }
  }, []);

  useEffect(() => {
    // Fetch data from the Google Apps Script endpoint
    fetch('https://script.google.com/macros/s/AKfycbx2WiyTvCxJsxOhxLHHvYw75g7bNu4PvMtvBD7q2v9MNqIwU04RI-tVlgH1Q5X139R1_g/exec')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const dataArray = Array.from(data.data);

        const processData = (data) => {
          const teamsMap = new Map();

          // Iterate through the data and group players by team name
          data.forEach((item) => {
            const teamName = item["TeamName"];
            if (!teamsMap.has(teamName)) {
              teamsMap.set(teamName, {
                "TeamName": teamName,
                "TeamLogo": item["TeamLogo"],
                "TeamFlag": item["TeamFlag"],
                "TeamKills": item["TeamKills"],
                "TeamPosition": item["TeamPosition"],
                "TotalPoints": item["TotalPoint"],
                "WWCD": item["Chicken"],
                Players: [],
              });
            }

            teamsMap.get(teamName).Players.push({
              "PlayerName": item["PlayerName"],
              "Kills": item["Kills"],
              "Contribution": item["Contribution"]
            });
          });

          // Convert the Map to an array of teams
          const teams = Array.from(teamsMap.values());

          // Create the final object structure
          const formattedData = {
            "Teams": teams,
          };

          return formattedData;
        };

        // Process and format the data
        const formattedData = processData(dataArray);
        console.log(formattedData)
        formattedData.Teams.sort((a, b) => b.TotalPoints - a.TotalPoints);
        let FirstTeam = formattedData.Teams[1]
        let RestTeam = formattedData.Teams.slice(1, 12)
        console.log(FirstTeam, "first")
        console.log(RestTeam, "rest")
        setFirst(FirstTeam);
        setRest(RestTeam);
        localStorage.setItem("tFMS", JSON.stringify(FirstTeam));
        localStorage.setItem("tRMS", JSON.stringify(RestTeam));

        // Fix: Set the teamData state
        setTeamData(formattedData.Teams);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/fulldata1')
      .then(response => response.json())
      .then(data => setFulldata1(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('/api/teamData')
      .then(response => response.json())
      .then(data => setTeamData(data))  // Fix: Set the teamData state
      .catch(error => console.error('Error fetching data:', error));
  }, []);
return (
        <div className="frame">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="HEAD">
                            <div className="overlap-group">
                                <div className="STROKE">
                                    <div className="text-wrapper">OVERALL STANDING</div>
                                </div>
                                    <div className="OVERALL-STANDING">
                                      <div className="text-wrapper-3">OVERALL STANDING</div>
                                    </div>
                                { Fulldata1.length > 0 && Fulldata1[1] && (
                                  <div key={Fulldata1[1].TournamentName}>
                                    <div className="tournament-name">
                                      <div className="div">{Fulldata1[1].TournamentName}</div>
                                    </div>
                                    
                                      <img className="TOURNAMENTLOGO" src={Fulldata1[1].TournamentLogo} />
                                    
                                    <div className="MATCH">
                                      <div className="text-wrapper-2">{Fulldata1[1].Match}</div>
                                    </div>
                                  </div>
                                )}
                            </div>
                        </div>
                        <div className="TOP-BOX">
                            <div className="RANK-BOX">
                                <div className="text-wrapper-4">RANK</div>
                            </div>
                            <div className="TEAM">
                                <div className="text-wrapper-5">TEAM</div>
                            </div>
                            <div className="BOX">
                                <div className="text-wrapper-6">WWCD</div>
                                <div className="text-wrapper-7">PLACE</div>
                                <div className="text-wrapper-8">ELIM</div>
                                <div className="text-wrapper-9">TOTAL</div>
                            </div>
                        </div>
                        <div className="standing-box">
                        <div className="POINT-BOX">
                          {Rest.slice(0, 10).map((team, index) => (
                            <div key={index} className="TEAM-BOX">
                              <div className="RANK">
                                <div className="text-wrapper-10">#{index + 1}</div>
                              </div>
                              <div className="team-logo">
                                <img className="logo1" alt="logo" src={team.TeamLogo} />
                              </div>
                              <div className="FLAG">
                                    <img
                                    className="FLAG1"
                                    alt="flag"
                                    src={team.TeamFlag}
                                    />
                                </div>
                              <div className="text-wrapper-11">{team.TeamName}</div>
                              <div className='team-details'>
                                <div className="WWCD-wrapper">
                                  <div className="text-wrapper-12">{team.WWCD}</div>
                                </div>
                                <div className="PLACE-wrapper">
                                  <div className="text-wrapper-12">{team.TeamPosition}</div>
                                </div>
                                <div className="ELIM-wrapper">
                                  <div className="text-wrapper-12">{team.TeamKills}</div>
                                </div>
                                <div className="TOTAL-wrapper">
                                  <div className="text-wrapper-12">{team.TotalPoints}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {/* ... rest of your component ... */}
                      </div>
                    </div>
                    <img className="production-logo" alt="" src="https://media.discordapp.net/attachments/1181890589701189694/1181890687248109650/Power-Play-Logo-Design-Png.png?ex=6582b47a&is=65703f7a&hm=c8d0ef3d83a6fe2ce659d95b3d05fb512c6a742724bcc99381bb2bb999533578&=&format=webp&quality=lossless&width=621&height=621"/>
                      

                    
                </div>
                <button onClick={downloadFrontendAsImage} className="download-button">
                <h2>Download Frame</h2>
            </button>
            </div>
    );
};

export default Overall;