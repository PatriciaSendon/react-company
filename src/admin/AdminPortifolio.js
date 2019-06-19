import React, { Component } from 'react'

import config, { storage } from '../firebaseConfig'

class AdminPortifolio extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaGravando: false
        }

        this.gravarPortfolio = this.gravarPortfolio.bind(this)
    }

    gravarPortfolio(e) {
        let novoPortfolio = {
            titulo: this.titulo.value,
            descricao: this.descricao.value,
            imagem: this.imagem.files[0]
        }

        this.setState({ estaGravando: true })
        
        const ref = storage.ref(novoPortfolio.imagem.name)

        ref.put(novoPortfolio.imagem).then(img => {
            img.ref.getDownloadURL().then(downloadUrl => {
                novoPortfolio.imagem = downloadUrl
                config.push('portfolio', {
                    data: novoPortfolio
                })
                this.setState({ estaGravando: false })
            })
        })

        e.preventDefault()
    }

    render() {
        if (this.state.estaGravando) {
            return (
                <div className='container'>
                    <p><span className="glyphicon glyphicon-refresh" /> Aguarde...</p>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Portifólio - Área Administrativa</h2>
                    <form onSubmit={this.gravarPortfolio}>
                        <div className="form-group">
                            <label htmlFor="titulo">Titulo</label>
                            <input type="text" className="form-control" id="titulo" ref={(ref) => this.titulo = ref} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição</label>
                            <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.descricao = ref}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagem">Imagem</label>
                            <input type="file" className="form-control-file" id="imagem" ref={(ref) => this.imagem = ref} />
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
                
            );
        }
    }
}

export default AdminPortifolio;