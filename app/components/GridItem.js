import React, { Component } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#app')

class GridItem extends Component {
  constructor () {
    super()
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal () {
    this.setState({ showModal: true })
  }

  handleCloseModal () {
    this.setState({ showModal: false })
  }

  render () {
    return (
      <div className='grid-item'>
        <ReactModal isOpen={this.state.showModal} contentLabel='Minimal Modal Example'>
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <img src={this.props.url} className='image-modal' />
        </ReactModal>

        <div className='title'>
          {this.props.title}
        </div>
        <div className='image-container'>
          <img src={this.props.url} onClick={this.handleOpenModal} className='image-grid' />
        </div>
      </div>
    )
  }
}

export default GridItem
