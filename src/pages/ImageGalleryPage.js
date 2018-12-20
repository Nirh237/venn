import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ImageItem from '../components/ImageItem';
import SearchBar from 'material-ui-search-bar';
import { getImagesByTitle } from '../actions/images';
import { startFindImage } from '../actions/images';
import DownshiftMultiple from '../components/AutocompleteSearch';




class ImageGalleryPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            images: props.images,
            searchNum: 0,
        };
    };

    onTitleChange = (e) => {
        const title = e;

        this.setState(() => ({ title: title }));
        if (title === undefined || title === '') {
            console.log("title is empty!!");
            this.props.getImagesByTitle();
        } else {
            this.props.startFindImage(title, {
                cache: false
            });
        }

    };

    handleFindImage = () => {

        this.props.startFindImage(this.state.title, {
            cache: true
        });


    }

    async componentDidMount() {
        await this.props.getImagesByTitle();
    }



    render() {
        const { images } = this.props;

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
                <DownshiftMultiple />
                <div>

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
    startFindImage: (title, options) => dispatch(startFindImage(title, options))
});

const mapStateToProps = (state) => ({
    images: state.images,
});




export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);


//this.props.getImagesByTitle(title);
