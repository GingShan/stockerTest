import React, { Component } from 'react'

export default class Test extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { onCancel } = this.props
    return (
      <div>
        Test
        <div className='btnArea'>
            <button className='closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
