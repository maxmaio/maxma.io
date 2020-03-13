import React from 'react';
import './bday.css';
import photo from './000037810012.jpg';
import {Container, Image} from 'react-bootstrap';

const SVG = () => (
<Container>
<div className = "main">
<div className="css-typing">
  <p>
    Dear Sophie,
  </p>
  <p>
    I can't believe we are celebrating a
  </p>
  <p>
    second birthday together. Being with 
  </p>  
  <p>
    you has been more than a dream come 
  </p>
  <p>
    true. Ever since Freshmen year I have 
  </p>
  <p>
     thought about you daily praying that
  </p>
  <p>
    I would get a second shot. I knew that
  </p>
  <p>
    you were the perfect girl for me, and I
  </p>
  <p>
    am so happy that our paths cross again :).
  </p>
  <p>
    You have changed my life in so many ways
  </p>
  <p>
    and showed me the best version of myself.
  </p>
  <p>
    Your bright energy and contagious smile is 
  </p>
  <p>
    adored by everyone you meet. Everytime I
  </p>
  <p>
    introduce you to someone they tell
  </p>
  <p>
    me how incredible you are and
  </p>
  <p>
    how lucky I am. They are not wrong... 
  </p>
  <p>
    I am the luckiest man everyday I 
  </p>
  <p>
    am with you. Thank you for putting
  </p>
  <p>
    up with me and I can't wait to spend
  </p>
  <p>
    more birthdays with you!
  </p>
  <p>
    Happy birthday,
  </p>
  <p>
    I love you :) 
  </p>
  <p>
      -Max
  </p>

</div>
</div>
<Container className="photo">
    <Image className="pic" src={photo} alt="love" />
</Container>
</Container>
);


export default SVG;