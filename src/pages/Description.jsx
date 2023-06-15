import "../pages/pagesStyles/description.css";
import imgDescription from "../assets/description-1-app.png";
import imgDescription2 from "../assets/description-2-app.png";
import imgReloj from "../assets/reloj-de-pared.png";
import iconTresPuntos from "../assets/simbolo-de-lista-de-tres-elementos-con-puntos.png"
import iconCalendar from "../assets/calendario.png"



function Description(){
    return(
        <>
            <div>
                <div className="description">
                    <img className="img_parte1" src={imgDescription} alt="Description 1"/>
                    <div className="column_1">
                            <h3>Organize Your Time And Start Getting Results</h3>
                            <p>Sync is the first mobile app on the market to harness the <br/>
                        power of socila connections to hep you stop procrastinanting <br/>
                        and start getting things done. Give it a try and see the <br/>
                        changes right away <br/><br/> </p>
                            <ul>
                                <li>Analyse and valuate your current status and productivity</li> <br/>
                                <li>Begin monitoring your day to day routine with Sync app</li> <br/>
                                <li>See the improved results in no more than a coupe of weeks</li> <br/>                
                            </ul>
                            <button className="bttn_descriptionUno">LIGTBOX</button>
                    </div>
                </div>
            </div>
                <div className="description_dos">
                    <div>
                        <div className="bttn_descriptionDos">
                            <button id="btt_schudele"><img src={imgReloj} alt="Clock"/> Schedule</button>
                            <button><img src={iconTresPuntos} alt="list"/> Tracking</button>
                            <button><img src={iconCalendar} alt="Calendar"/> Organize</button>       
                        </div>
                        <div id="columDos">
                            <p>Schedule task to keep track of their completion. Sync <br/>
                                provides multiple shceduling options including alarms and <br/>
                                reminders.</p>
                            <ul>
                                <li>You can always add new tasks or change the settings of <br/> existing ones in your calendar view or the app control <br/>panel</li>
                                <li>It's easy to stay focuse on your most importan daily <br/> activities that will get you closer to meeting your goals</li>
                                <li>Use phone reminders to free up your long term memory <br/>wich will reduce stress and make you more productive</li>
                            </ul>
                        </div>
                        <div id="bttn_tres">
                            <button id="bttn_terms">TERMS</button>
                            <button id="bttn_privacy">PRIVACY</button>
                        </div>
                    </div>
                    <img className="img_partedos" src={imgDescription2} alt="Calendario"/>
            </div>
                
        </>


    )
}

export default Description;