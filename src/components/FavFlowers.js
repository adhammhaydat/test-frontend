import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { Card,Button } from 'react-bootstrap';
import FormModal from './FormModal';


class FavFlowers extends React.Component {
  constructor(props){
    super(props);
    this.state={
      dataFav:[],
      showModal:false,
      idx:0,
      infoModal:[],
    }
  }

  componentDidMount(){
    axios.get(`${process.env.REACT_APP_HERUKO}/showFav`).then(result=>{
      this.setState({
        dataFav:result.data
      })
    })
  }
  handelDelete=(idx)=>{
    let id=this.state.dataFav[idx]._id

    axios.delete(`${process.env.REACT_APP_HERUKO}/deleteFav/${id}`).then(result=>{
this.setState({
  dataFav:result
})
    })
  }
  handelShow=(idx)=>{
    let data=this.state.dataFav[idx];
    this.setState({
      showModal:true,
      idx:idx,
      infoModal:data
    })
    console.log(this.state.showModal)
  }
  handleUpdat=(e)=>{
    let data={instructions:e.target.instructions.value,photo:e.target.photo.value,name:e.target.name.value

    }
    let id=this.state.dataFav[this.state.idx]._id;
    axios.put(`${process.env.REACT_APP_HERUKO}/updatData/${id}`,data).then(result=>{
      this.setState({
        dataFav:result
      })
      console.log(result)
    })

  }
  handelClose=()=>{
    this.setState({
      showModal:false
    })
  }
  render() {
    return(
      <>
        <h1>My Favorite Flowers</h1>
        <div>
          {this.state.dataFav.length>0 && this.state.dataFav.map((ele,idx)=>{
            return (<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ele.photo} />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Text>
              {ele.instructions}
              </Card.Text>
              <Button variant="danger" onClick={(e)=>{this.handelDelete(idx)}}>Delete</Button>
              <Button variant="danger" onClick={()=>{this.handelShow(idx)}}>update</Button>
            </Card.Body>
          </Card>)
          })
          }
          {this.state.showModal && <FormModal handleUpdat={this.handleUpdat} handelClose={this.handelClose} show={this.state.showModal} infoModal={this.state.infoModal}/>}
          
        </div>
      </>
    )
  }
}

export default withAuth0(FavFlowers);
