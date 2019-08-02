import React from 'react';

function SummaryItem(props) {

    return(
        <div className="summary__option" key={props.keyId}>
            <div className="summary__option__label">{props.keyId}  </div>
            <div className="summary__option__value">{props.state.selected[props.keyId].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.state.selected[props.keyId].cost) }
            </div>
        </div>
        );
    
}

export default SummaryItem;