import {Component} from "react";
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import "./ProductAdd.css";


class ProductAdd extends Component {
    emptyItem = {
        name: '',
        price:'',
        description:'',
        final_date:'',
        initial_date:'',
        image:''
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
        if (this.props.match.params.id !== 'new') {
            const product = await (await fetch(`/products/${this.props.match.params.id}`)).json();
            this.setState({item: product});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        const description = target.description;
        const price = target.price;
        const final_date = target.final_date;
        const initial_date = target.initial_date;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/products' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        }).then((response)=>response.text()).then((result)=>{
            if(result=="Product created"){
                alert("Product added successfully!");
            }else{
                alert("Something went wrong!");
            }
        });
    }


    render() {
        const {item} = this.state;


        const title = <h2>{item.id ? 'Edit Product' : 'Add your Product'}</h2>;

        return (<div className="app-upload">
            <AppNavbar/>
            <Container className = "container-box">
                {title}
                <Form  className = "formContainer" onSubmit={this.handleSubmit}>
                    <FormGroup className = "formGroup">
                        <Label className = "input-container-upload" for="name">Name</Label>
                        <Input type="text"
                               name="name"
                               id="name"
                               value={item.name}
                               onChange={this.handleChange}
                               autoComplete="name"/>

                        <Label className = "input-container-upload" for="name">Description</Label>
                        <Input type="text"
                               name="details"
                               id="details"
                               value={item.details}
                               onChange={this.handleChange}
                               autoComplete="details"/>

                        <Label className="input-container-upload" for="name">Price</Label>
                        <Input type="text"
                               name="price"
                               id="price"
                               value={item.price}
                               onChange={this.handleChange}
                               autoComplete="details"/>
                        <Label className="input-container-upload" for="name">Date initial</Label>
                        <Input type="text"
                               name="initial_date"
                               id="initial_date"
                               value={item.initial_date}
                               onChange={this.handleChange}
                               autoComplete="initial_date"/>

                        <Label className="input-container-upload" for="name">Date final</Label>
                        <Input type="text"
                               name="final_date"
                               id="final_date"
                               value={item.final_date}
                               onChange={this.handleChange}
                               autoComplete="final_dates"/>

                    </FormGroup>
                    <FormGroup>
                        <Button className = "button_save" type="submit">Save</Button>
                        <Button className="button_cancel" tag={Link} to="/logged-home">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>)
    }

}

export default withRouter(ProductAdd);