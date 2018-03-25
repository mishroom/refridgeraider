import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

var NavBar = (props) => (
<div>
	<div className="login">
	<Modal trigger={<Button content='Login' icon='user outline' labelPosition='right' />} >
	
	<Modal.Content>
      <p>Login Feature In Development!</p>
    </Modal.Content>
    </Modal>
	</div>
</div>  
)

export default NavBar;