import React, { PureComponent } from 'react';
import './ProgressBar.style.scss';

class ProgressBar extends PureComponent {
    constructor(){
        super();
        this.state={
            showedPoitIndex: 0//index in array
        }
    }

    componentDidMount(){
        this.changeProgressHandler();
    }
    componentDidUpdate(){
        this.changeProgressHandler();
    }
    
    changeProgressHandler = () => {
        const pointBlock = document.querySelectorAll('.ProgressPointContainer');
        const { progressStep, progressPoints } = this.props;
        const findProgressPointIndex = ()=>{
            for(let i = 0; i < progressPoints.length; i++){
                console.log(progressStep);
                console.log(progressPoints[i].progressStep);
                if( progressPoints[i].progressStep === progressStep){
                    return i;
                }
            }
        }
        const progressPointIndex = findProgressPointIndex();
        this.setState({showedPoitIndex: progressPointIndex});
    }

    render() {
        const { progressPoints } = this.props;
        const { showedPoitIndex } = this.state;
        const filteredProgressPoints = progressPoints.filter((elem, i)=> showedPoitIndex >= i );
        return (
            <div className='ProgressBar'>
                {
                    filteredProgressPoints.map((point)=>{
                        return(
                            <>
                                <div className='hr'/>
                                <div key={point.id} className='ProgressPoint'>
                                    <div className='PointCircle'>{point.pointNumber}</div>
                                    <div className='PointDescription'>{point.pointDescription}</div>
                                </div>
                            </>
                            
                        )
                    })
                }
            </div>
        );
    }
}

export default ProgressBar;