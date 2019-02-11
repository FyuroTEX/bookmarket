import React, { Component } from 'react';
import { Container, Grid, Sticky, Loader, Dimmer } from 'semantic-ui-react';
import axios from 'axios';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import BookCard from '../containers/BookCard';

class App extends Component {
  

  
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    
    return (
      <Container>
        <Sticky >
       
          <Menu  />
          </Sticky>
        <Filter />

        <Grid doubling columns={4} stretched>
          
          {!isReady
            ?    <Dimmer active inverted>
            <Loader inverted size='big'>Loading...</Loader>
          </Dimmer>
              : books.map(book => <BookCard key={book.id} {...book} />)}
            
        </Grid>
      </Container>
    );
  }
}

export default App;
