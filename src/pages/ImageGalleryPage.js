import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ImageItem from '../components/ImageItem';
import SearchBar from 'material-ui-search-bar';
import { getImagesByTitle } from '../actions/images';
import { startFindImage } from '../actions/images';




class ImageGalleryPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            images: props.images
        };
    };

    onTitleChange = (e) => {
        const title = e;
        
        this.setState(() => ({ title: title }));
        console.log('titleOnTitleChane:', title);
        this.props.startFindImage(this.state.title);
    };

    handleFindImage = () => {
        console.log('titleOnHandleFindImage:', this.state.title);
        if (this.props.images.find((image) => image.title.includes(this.state.title))) {
            console.log("find image!!!!!");
        }
   
        this.props.startFindImage(this.state.title);
    }

    componentDidMount() {
        this.props.getImagesByTitle();
    }



    render() {
        const { images } = this.props;
        console.log("images In Render:", images);
        return (

            <div className="Rectangle">
                <Header />
                <div className="SearchBar">
                    <SearchBar
                        onChange={this.onTitleChange}
                        onRequestSearch={this.handleFindImage}
                        style={{

                            borderRadius: 10,
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                    />
                </div>
                <div className="List">
                    {images.map((image) => { return <ImageItem key={image.id} {...image} />; })}
                </div>
            </div>
        )
    };

};

const mapDispatchToProps = (dispatch) => ({
    getImagesByTitle: (title) => dispatch(getImagesByTitle(title)),
    startFindImage: (title) => dispatch(startFindImage(title))
});

const mapStateToProps = (state) => ({
    images: state.images,
});




export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);


//this.props.getImagesByTitle(title);
