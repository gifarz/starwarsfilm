import React, {Component} from 'react';
import {Card, CardText, CardActions, CardTitle, Button, Dialog, DialogActions, DialogContent, DialogTitle} from 'react-mdl';
import Characters from '../API/Characters';

class CardFilm extends Component {
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
            
            <Card shadow={0} style={{width: '220px', height: '280px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(https://i.pinimg.com/236x/98/57/99/9857994907179f175184bb3b127e8f7f--iphone-s-wallpaper-tumblr-phone-wallpapers.jpg) no-repeat center #46B6AC'}}></CardTitle>
                <CardText>
                    A New Hope
                </CardText>
                <CardActions border>
                        <div>
                            <Button colored onClick={this.handleOpenDialog}>List Of Characters</Button>
                            <Dialog open={this.state.openDialog}>
                                <DialogTitle>All Of Characters in Episode 1</DialogTitle>
                                <DialogContent>
                                    <Characters/>
                                </DialogContent>
                                <DialogActions>
                                    <Button colored onClick={this.handleCloseDialog}>Close</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                </CardActions>
            </Card>

        )
    }
}

export default CardFilm;