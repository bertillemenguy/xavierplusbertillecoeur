import React from 'react';

/****************************************************************************/
class Choix extends React.Component{
    render() {
        return (<button onClick={this.props.onClick}> {this.props.texte}</button>);
    }
};

export default Choix;