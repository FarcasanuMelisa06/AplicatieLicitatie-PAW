import React,{Component} from "react";
import './login.css';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';

class Register extends Component{

    emptyItem = {
        name:'',
        username:'',
        email:'',
        password:''
    };
    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        console.log(this.props);

        const product = await (await fetch(`/products/${this.props.match.params.id}`)).json();
        this.setState({item: product});

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const username = target.username;
        const email = target.email;
        const password = target.password;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/users' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then((response)=>response.text()).then((result)=>{
            if(result=="User created"){
                alert("Account created");
            }else{
                alert("Something went wrong!");
            }
        });
        window.location.href = "/";
    }



    render() {
        const {item} = this.state;
        return (
            <div className="app">

                <Container>

                    <Form className ="formLogReg" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <div className="login-box">
                                <h1 className="account">Create an account</h1>
                                <div className="input-container">
                                    <input type="text"
                                           name="username"
                                           id="username"
                                           placeholder="Username"
                                           value={item.username}
                                           onChange={this.handleChange}
                                           autoComplete="username"/>
                                </div>

                                <div className="input-container">
                                    <Label for="name">Email</Label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        value={item.email}
                                        onChange={this.handleChange}
                                        autoComplete="email"/>
                                </div>

                                <div className="input-container">
                                    <Label for="name">Password</Label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        value={item.password}
                                        onChange={this.handleChange}
                                        autoComplete="password"/>
                                </div>

                                <FormGroup>
                                    <Button className = "button-create" type="submit">Create account</Button>

                                </FormGroup>


                            </div>

                        </FormGroup>
                    </Form>
                </Container>
            </div>

        );
    }
}

export default withRouter(Register) ;