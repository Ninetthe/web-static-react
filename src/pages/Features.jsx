import "../pages/pagesStyles/features.css"
import iconGrup from '../assets/grupo (2).png'
import siluetaSpacial from '../assets/silueta-de-nave-espacial-pequena.png';
import iconLabel from '../assets/codigo (1).png';
import iconConfiguration from '../assets/configuraciones (2).png';
import globoText from '../assets/globos-de-texto (2).png'



function Features(){
    return(
        <>
        <h3 id="titulo_special_feautures">Special Features</h3>
        <div className="testimonials">
            <h3 className="user_testimonials">User Testimonials</h3>
            <div className="star">
                <img src="images/estrellas.png" alt="Estrellas"/>
                <img src="images/estrellas.png" alt="Estrellas"/>
                <img src="images/estrellas.png" alt="Estrellas"/>
            </div>
            <div className="linea_comentario_uno">
                <p>I love using Sync for my personal <br/>
                development needs. It meets all my <br/>
                requirements and it actually helps a lot <br/>
                with focusing skills. <br/><br/>Rick jones - Designer</p>
                <p>After trying out a large number of <br/>
                personal coaching apps. I decided to give <br/>
                Sync a try and what a wonderful surprise <br/>
                it was. <br/><br/>/Lynda Marquez - Developer</p>
                <p>Never dreamed I coluld learn so fast how <br/>
                to focus on my personal goals and <br/>
                improve my life to levels I never thought <br/>
                possible. <br/><br/>Jay Frisco - Marketer</p>
            </div>
            <div className="logo_testimonials">
                <img src="images/customer-logo-1.png" alt="Logo Primester"/>
                <img src="images/customer-logo-2.png" alt="Logo GreenApp"/>
                <img src="images/customer-logo-3.png" alt="Logo Voltmeter"/>
                <img src="images/customer-logo-4.png" alt="Logo Keyrunner"/>
                <img src="images/customer-logo-5.png" alt="Logo Amplifier"/>
            </div>
            <div className="star_dos">
                <img src="images/estrellas.png" alt="Estrellas"/>
                <img src="images/estrellas.png" alt="Estrellas"/>
                <img src="images/estrellas.png" alt="Estrellas"/>
            </div>
            <div className="linea_comentario_dos">
                <p>I got so much value from using Sync in <br/>
                my daily life for wich I am very grateful <br/>
                and would recommend it to everybody <br/><br/>Frank Gibson - Manager</p>
                <p>If you have great goals but can't figure <br/>
                out a way to keep focused the you <br/>
                should definitely give Sync a try and see <br/>
                the results <br/>
                <br/> Rita Longmile - Designer</p>
                <p>I've been looking for a great organizer <br/>
                app for such a long time bur now I am <br/>
                really happy that I found Syne. It's beeen <br/>
                working great <br/>
                <br/>Jones Smith - Developer</p>
            </div>
            <ul classNameName="icons_generales">
                <li classNameName="list_grup"><img classNameName="icon_grup_main" src={iconGrup} alt="Grup"/>Logo Primester</li>
                <li classNameName="lis_label"><img classNameName="icon_label_main" src={iconLabel} alt="Label"/>231 <p>Happy Users</p></li>
                <li classNameName="lis_settings"><img classNameName="icon_settings_main" src={iconConfiguration} alt="Settings"/>Tasks Settings</li>
                <li classNameName="lis_balloon"><img classNameName="icon_balloon_main" src={globoText} alt="Balloon"/>Social Interaction</li>
                <li classNameName="lis_space"><img classNameName="icon_space_main" src={siluetaSpacial} alt="Space"/>Get Things Done</li>
            </ul>
        </div>
        
        </>
    )
}

export default Features;