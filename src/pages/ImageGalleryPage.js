import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ImageItem from '../components/ImageItem';
import SearchBar from 'material-ui-search-bar';
import { getImagesByTitle } from '../actions/images';
import { startFindImage } from '../actions/images';
import { getKeys } from '../actions/keys';
import DownshiftMultiple from '../components/AutocompleteSearch';


import Select from 'react-select';



class ImageGalleryPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            images: props.images,
            keys: props.keys,
            searchNum: 0,
            selectedOption: null,
        };

    };

    onTitleChange = (e) => {
        const title = e;

        this.setState(() => ({ title: title }));
        if (title === undefined || title === '') {
            console.log("title is empty!!");
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
        this.props.getKeys(); // get all the chace kays that save in the local storge.

    }

    onChangeInput(value) {
        console.log(value);
    }

    handleChange = (selectedOption) => {

        console.log(`Option selected:`, selectedOption);

        if (selectedOption.length > 0) {
            let title = selectedOption[0].value;
            this.props.startFindImage(title, {
                cache: true
            });
        } else {
            this.props.getImagesByTitle();
        }
    }




    render() {
        const { images, keys } = this.props;

        const options = [];

        keys.forEach(key => {
            options.push({ value: key, label: key });
        });

        // const options = [
        //     { value: 'chocolate', label: 'Chocolate' },
        //     { value: 'strawberry', label: 'Strawberry' },
        //     { value: 'vanilla', label: 'Vanilla' }
        // ]
        //   <DownshiftMultiple onChange={this.onChangeInput} />
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


                <Select
                    defaultValue={[]}
                    isMulti
                    value={this.selectedOption}
                    name="colors"
                    options={options}
                    onInputChange={this.onTitleChange}
                    onChange={this.handleChange}
                    className="basic-multi-select"
                    classNamePrefix="select"
                />

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
    startFindImage: (title, options) => dispatch(startFindImage(title, options)),
    getKeys: () => dispatch(getKeys())
});

const mapStateToProps = (state) => ({
    images: state.images,
    keys: state.keys,
});




export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);


//this.props.getImagesByTitle(title);
