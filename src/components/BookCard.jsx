import React from 'react';
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react';

const BookCard = (book) => {
  const { title, author, image, price, AddToCart, addedCount } = book;
  return (
    
    
  <Grid.Column >
 
     <Card>
       <Image src={image} />
       <Card.Content>
         <Card.Header style={{fontSize:'calc(6px + 1vh)'}}>{title}</Card.Header>
         <Card.Meta>
           <span className="date" style={{fontSize:'calc(8px + 0.6vh)'}}>{author}</span>
         </Card.Meta>
       </Card.Content>
       <Card.Content extra>
         <Icon name="usd" />
         {price}
       </Card.Content>
  <Button  positive={addedCount > 0 && true} onClick={AddToCart.bind(this, book)}><Icon name="cart arrow down" />Добавить в корзину{addedCount > 0 && `(${addedCount})`}</Button>
     </Card>
      </Grid.Column>
    
    
 );
};

export default BookCard;
