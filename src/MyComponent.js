import React from 'react';
import Header from './Header';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import DropdownButton from 'react-bootstrap/DropdownButton';

import Dropdown from 'react-bootstrap/Dropdown';


class MyComponent extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }

    
    componentDidMount() {
    
      fetch("http://localhost:7179/depart")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Remarque : il est important de traiter les erreurs ici
          // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
          // des exceptions provenant de réels bugs du composant.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )

        
    }
  
    renderHeader() {
      return (
          <Header/>			
      );
    };


    render() {

        const { error, isLoaded, items } = this.state;
        console.log(items);

      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (

            <div> 
            {this.renderHeader()} <br />


            <div id="barre_annees">

                  <div id="elem_1">
                  <ul>{[
                //'Info',
               'Light'
              ].map((variant, idx) => (
                <Card
                  bg={variant.toLowerCase()}
                  key={idx}
                  text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                  style={{ width: '15rem' }}
                  className="mb-2">
                  <Card.Header>Formation choisie</Card.Header>
                  <Card.Body>
                    <Card.Text>
                    {items.map(item => (
                   <li key={item.idDepartement}>
                    {item.nomDepartement}
                    </li>
                     ))} <br />
                    </Card.Text>          
                    <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                      Ajouter une formation
                    </Button>
                  </div>
                  </Card.Body>
                </Card>
              ))}
          </ul>
                   
                  </div>
                  <div id="elem_2">
                  <p>Année : </p>
                  </div>

                  <div id="elem_3">
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                  </div>

                  <div id="elem_4">
                  <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </DropdownButton>
                    </div>

            </div> <br />
          </div>
       
        );
      }
    }

  }

  export default MyComponent;