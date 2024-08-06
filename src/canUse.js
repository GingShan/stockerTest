import React, { Component } from 'react'

export default class canUse extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    const { onCancel } = this.props
    return (
      <div>
        canUse
        <div className='btnArea'>
            <button className='closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
