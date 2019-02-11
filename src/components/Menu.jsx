import React from 'react';
import {
  Menu,
  Icon,
  Popup,
  Button,
  Image,
  List,
  Grid
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CartComponent = ({ title, author, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <div>
          <Icon
            name="remove"
            size="large"
            onClick={removeFromCart.bind(this, id)}
            color="red"
          />
        </div>
      </List.Content>

      <Image size='mini' src={image} />
      <List.Content>
        <List.Header as="a">{title}</List.Header>
        <List.Description as="a">{author}</List.Description>
      </List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu >
    <Menu.Item name="lable">Store Books</Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="price">
        Итого:&nbsp;<b>{totalPrice}</b>&nbsp;
        <Icon name="usd" />
      </Menu.Item>

      <Popup
        on="click"
        trigger={
          <Menu.Item name="cart">
            <Icon name="cart" />
            <b>{count}</b>
          </Menu.Item>
        }
        flowing
        hideOnScroll>
        <Grid  divided columns={1}>
          <Grid.Column>
            {items.map(book => (
              <CartComponent key={book.id} {...book} />
            ))}

            <Button disabled={count === 0 && true} color= "green" >Оформить заказ</Button>
            
          </Grid.Column>
        </Grid>
      </Popup>
    </Menu.Menu>
  </Menu>
);
MenuComponent.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
};

export default MenuComponent;
//state is not good
//asfasfas