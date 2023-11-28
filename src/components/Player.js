simport Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
const Player=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.URL} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.team}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    )
}

Player.defaultProps={
    el : {
        name : "Karolina",
        team : "TennisK",
        nationality : "Française",
        jerseyNumber :  10,
        age : 20,
        URL : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Muchova_RG19_%2814%29_%2848199152057%29.jpg/200px-Muchova_RG19_%2814%29_%2848199152057%29.jpg"
    }
}

Player.propTypes = {

    el: PropTypes.object
}
export default Player