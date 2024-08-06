import React, { Component } from 'react'

export default class Test extends Component {

  render() {
    const { onCancel } = this.props
    return (
      <div>
        Test
        <div className='btnArea'>
            <button className='btnType closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
