import React from 'react';
import  './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/21248532?s=460&u=01ec1df6f366e4186c774fb8f0053aa57232f8ad&v=4" alt="Usuaria"/>
                <div>
                    <strong>Fernanda Albre</strong>
                    <span>Design</span>
                </div>
            </header>
            <p>
                Ignis divine eleison
                <br/><br/>
                Kire set te kloloti na vitae. Set etnub holonoror wasidurare
            </p>
            <footer>
                <p>
                    Preço/hora 
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}


export default TeacherItem;