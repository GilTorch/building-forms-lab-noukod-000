import React,{ Component } from 'react';
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {

  state={
    name:""
  }

  handleSubmit=(band)=>{
    this.props.addBand(band)
  }

  render() {
    const { bands }=this.props;
    return(
      <div>
        <BandInput handleSubmit={this.handleSubmit} />
        There are { bands.length } in the store, but 
        <ul>{ bands.map((band,idx)=><li key={idx}>{band.name}</li>)}</ul>
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return {
    bands: state.bands
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    addBand:formData=> dispatch({ type:"ADD_BAND",payload:formData})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(BandsContainer);
