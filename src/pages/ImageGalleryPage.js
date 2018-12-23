import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import ImageItem from '../components/ImageItem';
import { getImages } from '../actions/images';
import { startFindImage } from '../actions/images';
import { getKeys } from '../actions/keys';
import InfiniteScroll from 'react-infinite-scroller';



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
            hasMore: true,
            counter: 0
        };

    };

    /**
     * 
     */
    onValueChange = (e) => {
        const title = e;
        console.log("onValueChane:", title);

        this.setState(() => ({ title: title }));
        if (title === undefined || title === '') {
            console.log("title is empty!!");
        } else {
            this.props.startFindImage([title], {
                cache: false,
                httpRequest: true

            });
        }

    };


    async componentDidMount() {
        // await this.props.getImages();
        this.props.getKeys(); // get all the chace kays that save in the local storge.

    }

    /**
     * on select values from list and search selected items
     */

    onSelectValue = (selectedOption) => {


        console.log(`Option selected:`, selectedOption);

        if (selectedOption.length > 0) {
            let query = selectedOption.map(item => item.value);
            this.props.startFindImage(query, {
                cache: true,
                httpRequest: false
            });
        } else {
            this.props.getImages();
        }
    }

    /**
     * on enter click event
     * get data from server
     * save search value to local storage
     */
    onEnter = (e) => {
        console.log("onKeyDOwn");
        console.log(e.keyCode);
        console.log(this.state.title);

        if (e.keyCode === 13) {
            debugger;
            e.preventDefault();
            this.props.startFindImage([this.state.title], {
                cache: true,
                httpRequest: true
            }).then(() => {
                this.props.getKeys();
            });

        }
    }

    loadFunc = (page) => {
        debugger;
        this.props.getImages({ page: page });
        //  this.setState({ hasMore: false });
    }



    render() {
        const { images, keys } = this.props;

        const options = [];

        keys.forEach(key => {
            options.push({ value: key, label: key });
        });


        return (

            <div className="Rectangle">
                <Header />
                <div className="SearchBar">

                    <Select
                        defaultValue={[]}
                        isMulti
                        value={this.selectedOption}
                        name="colors"
                        options={options}
                        onKeyDown={this.onEnter}
                        onInputChange={this.onValueChange}
                        onChange={this.onSelectValue}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />

                </div>

                <div >
                    <InfiniteScroll
                        pageStart={0}
                        loadMore={this.loadFunc}
                        hasMore={true}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >
                        <div className="List">
                            {images.map((image) => { return <ImageItem key={image.id} {...image} />; })}
                        </div>
                    </InfiniteScroll>
                </div>

            </div>
        )
    };

};

const mapDispatchToProps = (dispatch) => ({
    getImages: (title) => dispatch(getImages(title)),
    startFindImage: (query, options) => dispatch(startFindImage(query, options)),
    getKeys: () => dispatch(getKeys())
});

const mapStateToProps = (state) => ({
    images: state.images,
    keys: state.keys,
});




export default connect(mapStateToProps, mapDispatchToProps)(ImageGalleryPage);


//this.props.getImagesByTitle(title);

// <div className="List">
// {
//     images.length === 0 ?
//     <div> Not Found Results </div> :

//     images.map((image) => { return <ImageItem key={image.id} {...image} />; })}
// </div>
