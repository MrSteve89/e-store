import React, { Component } from 'react';
import shop_data from './data';
import CollectionPreview from '../../components/collection-preview/collection-preview';

class Store extends Component {
    constructor() {
        super();

        this.state = {
            collections: shop_data
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className='store'>
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    }



}

export default Store;