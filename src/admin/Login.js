import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { auth } from '../firebaseConfig'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            estaAutenticado: false,
            estaLogando: false,
            erro: false
        }

        this.email = null
        this.senha = null

        this.autenticarUsuario = this.autenticarUsuario.bind(this)
    }

    autenticarUsuario() {
        this.setState({
            estaAutenticado: false, 
            estaLogando: true,
            erro: false
        })

        auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
        .then(user => {
            this.setState({
                estaAutenticado: true, 
                estaLogando: false,
                erro: false
            })
        })
        .catch(err => {
            this.setState({
                estaAutenticado: false, 
                estaLogando: false,
                erro: true
            })
        })
    }

    render() {
        if (this.state.estaAutenticado) {
            return (
                <Redirect to='/admin' />
            )
        } else {
            return (
                <div className="container">
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" ref={ref => this.email = ref} className="form-control" id="email" aria-describedby="emailHelp" placeholder="nome@email.com" />
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" name="email" ref={ref => this.senha = ref} className="form-control" id="password" />
                            {this.state.erro && <small id="emailHelp" className="form-text text-muted">Email e/ou senha inválidos</small>}
                        </div>
                        
                        <button type="button" disabled={this.state.estaLogando} className="btn btn-primary" onClick={this.autenticarUsuario}>Acessar</button>
                    </form>
                </div>
            )
        }
    }
}

export default Login