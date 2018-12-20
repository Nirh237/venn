import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



class ImageItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Title: props.title,
      Poster: 'https://farm' + props.farm + '.staticflickr.com/' + props.server + '/' + props.id + '_' + props.secret + '_m.jpg',


    };
  };




  render() {
    const { farm, id, secret, server, title } = this.props;

    return (

      <Card className="card"  >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className="image"
          image={this.state.Poster} />
        <CardContent className="Movie-Card">

          <div className="box-control">

            <div className="flex d-col movie-info">

              <Typography className="txt" variant="headline" component="h2">{title}</Typography>



            </div>


          </div>
        </CardContent>
      </Card>
    )
  }
}


export default ImageItem;

