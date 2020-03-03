import React from 'react';
import {connect} from 'react-redux'

const TechList = (props) => {
    return (
        <div>
            {props.stuff.map(
                
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
      stuff: state.stuff
    };
}

export default connect(
    mapStateToProps,
    {}
)(TechList);