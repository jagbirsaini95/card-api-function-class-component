import '../App.css';
import { Card, Row, Col, Form } from 'react-bootstrap'
// import { useEffect, useState } from 'react'
import React from 'react';
// import Image from './Image';
export default class CardAPIAssignmemnt2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      search: '',
    }
  }
  // const [user, setuser] = useState([])
  // const [search, setsearch] = useState('');
  // const [filteredPosts, setFilteredPosts] = useState([]);
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(response => {
        return this.setState({ user: response });
      })
      .catch((err) => console.log("error"))
  }
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response => {
  //       return response.json()
  //     })
  //     .then(response => {
  //       return setuser(response);
  //     })
  // }, [])

  // useEffect(() => {
  //   setFilteredPosts(user.filter((user) => user.name.indexOf(search) !== -1))
  // }, [user, search]);
  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }
  // const handleSearchChange = (event) => {
  //   setsearch(event.target.value);
  // };
  render() {
    let filteredPosts = this.state.user.filter((item) => item.name.indexOf(this.state.search) !== -1)
    console.log(this.state.user, "jagbir");
    return (
      <div align="center">
        {console.log(filteredPosts.name)}
        <div>
          <Form.Control xs={8} type="text" className="cardsize" value={this.state.search} onChange={(e) => this.handleSearchChange(e)} placeholder="search by name" />
          {
            filteredPosts.map((data, i) => {
              return (
                <div key={i} className="cardsize">
                  <Card style={{ width: '70rem' }}>
                    <Row >
                      <Col>
                        <img src={`https://avatars.dicebear.com/v2/avataaars/${data.username}.svg?options[mood][]=happy`} alt={`${data.username}`} />
                        {/* <Image username={user.username} /> */}
                      </Col>
                      <Col xs={9}>
                        <Card.Body align="left">
                          <Card.Title> <h2>{data.name}</h2></Card.Title>
                          <div><strong>Email:</strong> {data.email}</div>
                          <div><strong>Phone:</strong> {data.phone}</div>
                          <div><strong>Company:</strong>{data.company.name}</div>
                          <div><strong>Website:</strong> {data.website}</div>
                          <div><strong>Address:</strong> {data.address.street + ', ' + data.address.suite + ', ' + data.address.city + ', ' + data.address.zipcode}</div>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}