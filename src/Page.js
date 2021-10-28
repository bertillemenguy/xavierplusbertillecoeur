import React from 'react';
import Choix from './Choix';
import Zone from './Zone';
//import MyComponent from './MyComponent';


/****************************************************************************/
class Page extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
                valeurs : [1, 2],
                valMax: 2,
                etat : true
        };
    };

    ajoutValeur = () => {
            this.setState(state => {
                    const valMax = state.valMax + 1;
                    const valeurs = state.valeurs.concat(valMax);
        return {
            valeurs,
            valMax
        };
        });
    };


supprimerValeur = i => {
    this.setState(state => {
                       let valMax = state.valMax;
                       const valeurs = state.valeurs.filter((val, indice) => i !== val);
                       if (valMax >0)
                        {
                            valMax = valMax - 1;
                        } 
                return {
                    valeurs,
                    valMax};
    });
};
renderBoutonPlus() {
    return (
        <Choix texte="Plus"
        onClick={() => this.ajoutValeur()}/>			
    );
};
      
renderBoutonMoins() {
    return (
        <Choix texte = "Moins"
        onClick={() => this.supprimerValeur(this.state.valMax)}/>
    );
};

renderBoutonAfficherEffacer(){
    return(<Choix texte = "Afficher/Effacer"
            onClick={() => this.handleChangerEtat()}/>
    );
};

handleChangerEtat = () => {
        this.setState({etat: !this.state.etat});
}

renderZoneMasquable(){
        return(<Zone text = "Zone de texte masquable"/>);
};

render() {
    return (<div>
            {this.renderBoutonPlus()} <br />
            {this.renderBoutonMoins()} <br />
            {this.renderBoutonAfficherEffacer()} <br />
            {this.state.valeurs.map((d)=><Zone text={"zone de texte : "+ d} />)}<br />
            {this.state.etat && this.renderZoneMasquable()} <br />
        </div>);
    }
};

//export default Page;