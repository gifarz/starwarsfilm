import React, {Component} from 'react';
import {Button, DialogContent, DialogTitle, DialogActions, Dialog} from 'react-mdl';
import Film from '../API/Film';
import '../css/style.css';

class ButtonFilm extends Component {
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
          <div className="btn">
            <Button colored onClick={this.handleOpenDialog} raised ripple>List Of Films</Button>
          </div>
          <Dialog open={this.state.openDialog}>
            <DialogTitle>Title of Star Wars Movies</DialogTitle>
            <DialogContent>
              <Film/>
            </DialogContent>
            <DialogActions>
              <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}

export default ButtonFilm;