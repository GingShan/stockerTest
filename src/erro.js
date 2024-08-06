import React, { Component } from 'react'

export default class erro extends Component {

  render() {
    const { onCancel } = this.props
    return (
      <div>
        erro
        <div className='btnArea'>
            <button className='btnType closeBtn' onClick={onCancel}>Close</button>
        </div>
        </div>
    )
  }
}
