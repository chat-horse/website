import React from 'react';
import AccordionItem from './AccordianItem';

class Accordian extends React.Component {
  constructor(props) {
    super(props);

    this.data = props.data;
  }

  render () {
    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {this.data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordionItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Accordian;
