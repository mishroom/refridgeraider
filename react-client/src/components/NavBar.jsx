import React from 'react';
import { Button, Header, Icon, Modal, Segment, Divider, Form } from 'semantic-ui-react';

class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			username: "",
			password: ""
		}
		this.signup = this.signup.bind(this);
		this.login = this.login.bind(this);
		this.saveUsername = this.saveUsername.bind(this);
		this.savePassword = this.savePassword.bind(this);
		this.validate = this.validate.bind(this);
	}

	saveUsername (e) {
		this.setState({username: e.target.value});

	}
	savePassword (e) {
		this.setState({password: e.target.value});
	}

	signup () {
		if (this.validate()) {
			this.props.onSignup(this.state.username, this.state.password);
		}
	}

	login () {
		if (this.validate()) {
			this.props.onLogin(this.state.username, this.state.password);
		}
	}

	validate () {
		if (this.state.username.length < 1) {
			alert("input username bro")
			return false;
		}
		if (this.state.password.length < 1) {
			alert("input password bro")
			return false;
		}
		return true;
	}

  render() {
  	if(!this.props.user.length) {
  		return (

		<div>
			<div className="login">
			<Modal trigger={<Button content='Login' icon='user outline' labelPosition='right' basic inverted/>} basic size='small'>
			
			<Modal.Content>
			  <Segment padded>
			  	<Form>
		        <Form.Group widths='equal'>
		          <Form.Input fluid label='Username' placeholder='username' onChange={this.saveUsername} />
		          <Form.Input fluid label='Password' placeholder='password' onChange={this.savePassword} />
		        </Form.Group>
		      </Form>  
		      <Modal.Actions>
			      <Button onClick={this.login}>Login</Button>
			      <Button onClick={this.signup}>Signup</Button>
		      </Modal.Actions>
		  	</Segment>
		    </Modal.Content>
		    </Modal>
			</div>
		</div>  
		)
  	} else {
  		return (
  			<div className="login" >
  			<Button content={this.props.user[0].username} icon='user outline' labelPosition='right' basic inverted color="green" onClick={this.props.showSaved} /> 
  			</div>
  		)
		
 }
  	}

} 

export default Login;