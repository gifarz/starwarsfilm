import React, {Component} from 'react';
import {Button, DialogContent, DialogTitle, DialogActions, Dialog} from 'react-mdl';
import '../css/style.css';
import Character from '../API/Characters';

class ButtonChar extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleOpenDialog = this.handleOpenDialog.bind(this);
      this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
  
    handleOpenDialog() {
      this.setState({
        openDialog: true
      });
    }
  
    handleCloseDialog() {
      this.setState({
        openDialog: false
      });
    }
  
    render() {
      return (
        <div>
          <div className="btn-2">
            <Button colored onClick={this.handleOpenDialog} raised ripple>List Of Characters</Button>
          </div>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>Characters of Star Wars Movies</DialogTitle>
            <DialogContent>
              <Character/>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}

export default ButtonChar;