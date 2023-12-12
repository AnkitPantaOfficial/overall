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

return (
        <div className="frame">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="HEAD">
                            <div className="overlap-group">
                                <div className="STROKE">
                                    <div className="text-wrapper">OVERALL STANDING</div>
                                </div>
                                <div className="tournament-name">
                                    <div className="div">PUBG MOBILE 6K LEAGUE</div>
                                </div>
                                <div className="TOURNAMENTLOGO">
                                    <img className="logo"alt="logo" src="https://media.discordapp.net/attachments/862430308673781770/1182374296069349517/20231207_231756.png?ex=658476df&is=657201df&hm=8f778de80cac363c35e4e36d3b08bc242a75fc469d85a5ee1546bc0f758423f1&=&format=webp&quality=lossless&width=435&height=435" />
                                </div>
                                <div className="MATCH">
                                    <div className="text-wrapper-2">GRAND FINAL M4/04</div>
                                </div>
                                <div className="OVERALL-STANDING">
                                    <div className="text-wrapper-3">OVERALL STANDING</div>
                                </div>
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
                                <div className="RANK">
                                <div className="text-wrapper-10">#1</div>
                                </div>
                                <div className="TEAM-BOX">
                                <div className="team-logo">
                                    <img
                                    className="logo1"
                                    alt="logo"
                                    src="https://media.discordapp.net/attachments/1179272632156291164/1179272726351974470/defult_logo.png?ex=658268cf&is=656ff3cf&hm=e9ff4422624e2991f5b969813f0852bdac67fdbe6cddf46064783b08cb29dded&=&format=webp&quality=lossless&width=434&height=434"
                                    />
                                </div>
                                <div className="FLAG">
                                    <img
                                    className="FLAG1"
                                    alt="flag"
                                    src="https://media.discordapp.net/attachments/1179258727061270650/1184080735892676659/Flag_of_Nepal.svg_1.png?ex=658aac1e&is=6578371e&hm=a52ad979cd2ab31f40b327038481b297e99782a60d250a73a0ebdebacbe9a9cb&=&format=webp&quality=lossless&width=356&height=434"
                                    />
                                </div>
                                <div className="div-wrapper">
                                    <div className="text-wrapper-11">TEAM NAME</div>
                                </div>
                                <div className="WWCD-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="PLACE-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="ELIM-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="TOTAL-wrapper">
                                        <div className="div-wrapper-3">
                                            <div className="text-wrapper-12">0</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="POINT-BOX-2">
                                <div className="RANK">
                                <div className="text-wrapper-10">#2</div>
                                </div>
                                <div className="TEAM-BOX-2">
                                <div className="team-logo">
                                    <img
                                    className="logo1"
                                    alt="logo"
                                    src="https://media.discordapp.net/attachments/1179272632156291164/1179272726351974470/defult_logo.png?ex=658268cf&is=656ff3cf&hm=e9ff4422624e2991f5b969813f0852bdac67fdbe6cddf46064783b08cb29dded&=&format=webp&quality=lossless&width=434&height=434"
                                    />
                                </div>
                                <div className="FLAG">
                                    <img
                                    className="FLAG1"
                                    alt="flag"
                                    src="https://media.discordapp.net/attachments/1179258727061270650/1184080735892676659/Flag_of_Nepal.svg_1.png?ex=658aac1e&is=6578371e&hm=a52ad979cd2ab31f40b327038481b297e99782a60d250a73a0ebdebacbe9a9cb&=&format=webp&quality=lossless&width=356&height=434"
                                    />
                                </div>
                                <div className="div-wrapper">
                                    <div className="text-wrapper-11">TEAM NAME</div>
                                </div>
                                <div className="WWCD-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="PLACE-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="ELIM-wrapper">
                                    <div className="div-wrapper-3">
                                    <div className="text-wrapper-12">0</div>
                                    </div>
                                </div>
                                <div className="TOTAL-wrapper">
                                        <div className="div-wrapper-3">
                                            <div className="text-wrapper-12">0</div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <button onClick={downloadFrontendAsImage} className="download-button">
                <h2>Download Frame</h2>
            </button>
            </div>
    );
};

export default Overall;
