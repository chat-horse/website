import React from 'react';

class AccordianItem extends React.Component {
  state = {
    opened: false
  }
  
  render () {
    const {
      props: {
        content,
        title
      },
      state: {
        opened
      }
    } = this
    
    return (
      <div
        {...{
          className: `accordion-item, ${opened && 'accordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'accordion-item__line' }}>
          <h3 {...{ className: 'accordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'accordion-item__icon' }}/>
        </div>
          <div {...{ className: 'accordion-item__inner' }}>
            <div {...{ className: 'accordion-item__content' }}>
              <p {...{ className: 'accordion-item__paragraph' }}
                dangerouslySetInnerHTML={{ __html: content }}
              >
              </p>
            </div>
          </div>
      </div>
    )
  }
}

export default AccordianItem;
