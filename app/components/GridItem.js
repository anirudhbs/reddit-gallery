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
    const customStyles = {
      content: {
        background: 'rgba(0, 0, 0, 0)',
        border: '0px',
        top: '10%',
        bottom: '10%',
        left: '40px',
        right: '40px'
      }
    }

    return (
      <div className='grid-item'>
        <ReactModal isOpen={this.state.showModal} style={customStyles}>
          <button onClick={this.handleCloseModal} className='modal-button'>X</button>
          <img src={this.props.url} className='image-modal' />
        </ReactModal>
        <div className='grid-title'>
          {this.props.title}
        </div>
        <div className='grid-image-container'>
          <img src={this.props.url} onClick={this.handleOpenModal} className='image-grid' />
        </div>
      </div>
    )
  }
}

export default GridItem
