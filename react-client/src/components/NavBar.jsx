import React from 'react';
import { Button, Header, Icon, Modal, Segment, Divider, Form } from 'semantic-ui-react';

class NavBar extends React.Component{
	constructor(props) {
		super(props);
	}

  render() {
		return (

		<div>
			<div className="login">
			<Modal trigger={<Button content='Login' icon='user outline' labelPosition='right' />} basic size='small'>
			
			<Modal.Content>
			  <Segment padded>
			  	<Form>
		        <Form.Group widths='equal'>
		          <Form.Input fluid label='Username' placeholder='username' />
		          <Form.Input fluid label='Password' placeholder='password' />
		        </Form.Group>
		      </Form>  
		      <Modal.Actions>
			      <Button onClick={this.props.onLogin}>Login</Button>
			      <Button onClick={this.props.onSignup}>Signup</Button>
		      </Modal.Actions>
		  	</Segment>
		    </Modal.Content>
		    </Modal>
			</div>
		</div>  
		)
 }

} 

export default NavBar;