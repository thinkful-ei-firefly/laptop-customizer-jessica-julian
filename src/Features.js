import React from 'react';
import './Features.css';
import Feature from './Feature';

function Features(props) {

    const features = Object.keys(props.features)
    .map(key => {
      let keyId = key;
     
      const options = props.features[key].map((item, index) => { 
      return <Feature item={item} state={props.state} keyId={keyId} index={index} updateFeature={props.updateFeature} key={index}/>
        
      });

      return <div className="feature" key={key}>
        <div className="feature__name">{key}</div>
        <ul className="feature__list">
          { options }
        </ul>
      </div>
    });


    return (
        <section className="main__form">
            <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            { features }
        </section>

    );
}

export default Features;