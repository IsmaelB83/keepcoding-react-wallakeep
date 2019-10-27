/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
/* Own modules */
/* Assets */
/* CSS */

/**
* Main App
*/
export default class Paginator extends Component {
      
    /**
    * Render
    */
    render() {   
        return (
            <MobileStepper
                className='Paginator'
                variant="dots"
                steps={this.props.numPages}
                position="static"
                activeStep={this.props.currentPage}
                backButton={
                    <Button size="small" onClick={this.handleBack} disabled={this.props.currentPage === 0} className='ButtonWallakeep ButtonWallakeep__Green'>
                    <KeyboardArrowLeft />
                    Back
                    </Button>
                }
                nextButton={
                    <Button size="small" onClick={this.handleNext} disabled={this.props.currentPage === this.props.numPages - 1 } className='ButtonWallakeep ButtonWallakeep__Green'>
                    Next
                    <KeyboardArrowRight />
                    </Button>
                }
            />    
        );
    }

    /**
     * Retroceder
     */
    handleBack = () => {
        if (this.props.currentPage > 0) {
            this.props.handleMovePaginator(-1);
        }
    }

    /**
     * Avanzar
     */
    handleNext = () => {
        if (this.props.currentPage < this.props.numPages) {
            this.props.handleMovePaginator(1);
        }       
    }
}