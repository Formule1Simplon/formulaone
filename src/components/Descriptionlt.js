import React from 'react';



const Descriptionja = () => {
    return (
        <div className="popup-body">
            
            <img className="imgdescr" src='./images/Lara-Tatouille.jpg'alt="membre"></img>
            <h1 className="h1descr">Lara Tatouille</h1>
            <p className="titredescr"><strong>Membre stagiaire</strong></p>
            <p className="articledescript">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
             Duis egestas dui et laoreet sollicitudin.<br/>
             Duis sed risus tortor. Fusce vitae molestie ex.
             Nunc quis augue vitae metus pulvinar commodo<br/> at ut nisi.
             Quisque nec eros finibus eros rutrum viverra.<br/>
             Cras auctor odio in orci ullamcorper, at rhoncus nisi semper.
            </p>
            <button className="card-buttondesc">Fermer la fenêtre</button>
            
        </div>
        
    );
};

export default Descriptionja;