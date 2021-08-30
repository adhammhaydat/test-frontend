import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { withAuth0 } from '@auth0/auth0-react';

import { Card,Button } from "react-bootstrap";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      
    };
  }
  componentDidMount() {
    axios.get(`${process.env.REACT_APP_HERUKO}/showData`).then((result) => {
      this.setState({
        allData: result.data.flowerslist,
      });
      console.log(this.state.allData)
    });
  }
  handelFav=(idx)=>{
    let data={instructions:this.state.allData[idx].instructions,photo:this.state.allData[idx].photo,name:this.state.allData[idx].name}
    axios.post(`${process.env.REACT_APP_HERUKO}/addfav`,data)
    console.log(this.state.allData[idx])
  }
  render() {
    return (
      <>
        <h1>API Flowers</h1>

        <div>
          {this.state.allData.length>0 && this.state.allData.map((ele,idx)=>{
            return (<Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ele.photo} />
            <Card.Body>
              <Card.Title>{ele.name}</Card.Title>
              <Card.Text>
              {ele.instructions}
              </Card.Text>
              <Button variant="primary" onClick={(e)=>{this.handelFav(idx)}}>Add to Favorat</Button>
            </Card.Body>
          </Card>)
          })
          }
          
        </div>
      </>
    );
  }
}

export default withAuth0(Home);
