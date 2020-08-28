import React from 'react'
import Header from '../components/header-pt'
import '../global.css'
import './contato.css'
import Head from '../components/head'

import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp'
import { FacebookSquare } from '@styled-icons/boxicons-logos/FacebookSquare'
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline' 
  
function contato() {
    return (
        <>
          <Head title="Contato"/>
            <Header />
            <section className="mainContato container-fluid">
                <div className="form-container">
                    <h1 className="mt-5 text-center">Contato</h1> 
                    <a href="https://api.whatsapp.com/send?phone=5511990105998" target="_blank" className="linkMaior pt-2"><Whatsapp className="icone" style={{color:"green"}} /> (11) 99010-5998</a>
                    <a href="https://www.instagram.com/estebanchalapsico/" target="_blank"><Instagram className="icone"  style={{color:"red"}} />Instagram</a>
                    <a href="https://www.facebook.com/estebanchalapsico" target="_blank"><FacebookSquare className="icone"  style={{color:"blue"}} />Facebook</a>
                    <a href=""><EmailOutline className="icone letraMenor" />estebanchalapsico@gmail.com</a> 
                    <h3 className="mt-4 mb-3">¿Tienes más dudas? Envia un mensaje.</h3> 

                    <form className="formulario mt-3" action="https://formspree.io/maypzoew" method="POST">
                        <div className="form-group" >
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" className="form-control" id="telefone" name="telefone" placeholder="Telefone" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea className="form-control" id="mensagem" name="mensagem" rows="6" placeholder="Tu mensagem" />
                        </div>
                        <button type="submit" class="btn btn-info">ENVIAR</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default contato
