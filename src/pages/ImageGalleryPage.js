import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ImageItem from '../components/ImageItem';
import { getImagesByTitle } from '../actions/images';




class ImageGalleryPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            imageTitleArry: ['Star wars', 'The Shawshank Redemption', 'The Godfather', 'The Dark Knight', '12 Angry Men', 'The Lord of the Rings: The Return of the King', 'Pulp Fiction', 'Batman v Superman'],
        };
    };


    componentDidMount() {
        this.state.imageTitleArry.map((title) => {
          this.props.getImagesByTitle(title)
        })
    
      }


    render() {
        const { images } = this.props;
        return (

            <div className="Rectangle">
                <Header />
                <div className="List">
                    {images.map((image) => { return <ImageItem key={image.Title} {...image} />; })}



                </div>

            </div>
        )
    };

};

const mapDispatchToProps = (dispatch) => ({
    getImagesByTitle: (title) => dispatch(getImagesByTitle(title)),
});

const mapStateToProps = (state) => ({
    images: state.images,
});




export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);
