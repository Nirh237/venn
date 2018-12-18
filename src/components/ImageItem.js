import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class ImageItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: props.Title,
      Year: props.Year,
      Runtime: props.Runtime,
      Genre: props.Genre,
      Director: props.Director,
      Poster: props.Poster,
      imdbID: props.imdbID,
   
    };
  };


 

  render() {
    const { Title, Year, Runtime, Genre, Director, Poster, imdbID } = this.props;
    return (

      <Card className="card"  >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="image"
          image={Poster}/>
        <CardContent className="Movie-Card">

          <div className="box-control">

            <div className="flex d-col movie-info">

              <Typography className="txt" variant="headline" component="h2">{Title}</Typography>

              <Typography className="txt" >{Year}</Typography>

              <Typography className="txt" component="p"> {Runtime} </Typography>

              <Typography className="txt" component="p"> {Genre} </Typography>

              <Typography className="txt" component="p"> {Director} </Typography>

            </div>

         
          </div>
        </CardContent>
      </Card>
    )
  }
}


export default ImageItem;

