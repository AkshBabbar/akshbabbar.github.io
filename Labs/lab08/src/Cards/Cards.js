import React, { Component } from 'react';
import Card from './CardUI';
import img1 from '../assets/skin1.jpg'
import img2 from '../assets/skin2.jpg'
import img3 from '../assets/skin3.jpg'
import img4 from '../assets/skin4.jpg'
import img5 from '../assets/skin5.jpg'
import img6 from '../assets/skin6.jpg'

class Cards extends Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img4} title="BLACK DRAGON" desc="Providing High Abrasion Resistance"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img2} title="DARK CAMO" desc="Perfect combination of Discrete and Stylish"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img3} title="DEEP SPACE" desc="Limited Edition Deep Gloss Glitter skin"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img1} title="HONEYCOMB" desc="The best Grip Sensation and Style"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img5} title="MAJESTIC GOLD" desc="Elegance mixed with Precision"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                        <Card imgsrc={img6} title="WHITE CAMO" desc="Texture and Depth you can feel"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;