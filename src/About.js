import React from "react";
import img from "../public/self.png";


class About extends React.Component{   

    render(){
        return (
    <div className="container">
        <aside className="well col-xs-9 about" style={{clear: "right"}}>
            <h2 className="aboutHeader">All About: Aja Servais</h2>
            <img src={img} alt={"self"} style={{width: "25%", height: "25%", float: "left", paddingRight: "2%", paddingBottom: "2%"}}/>
            <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit sollicitudin ex a egestas. Vivamus viverra ante ac justo faucibus, eget vulputate felis blandit. Proin aliquet nisi semper nisi faucibus blandit. Suspendisse ut leo ut erat dapibus venenatis. In hac habitasse platea dictumst. Nam a hendrerit diam. Quisque posuere eleifend neque nec auctor. Phasellus et felis aliquet, tristique velit ut, ultrices nisi. Aliquam porttitor velit accumsan lorem fermentum consectetur. Phasellus eget leo pretium, varius lectus ac, placerat lorem. Donec neque nisl, lobortis non varius ac, suscipit a neque. Vivamus suscipit erat eu ante pretium, sed ultrices turpis ornare.

            Sed non purus et leo sagittis dapibus id eget nibh. Duis tincidunt tortor sagittis nulla accumsan placerat. Curabitur tincidunt metus nisl, at maximus nulla iaculis vitae. Proin porta tellus a mollis maximus. Donec eu dapibus arcu. Curabitur dolor lectus, euismod non viverra at, viverra sed ipsum. Proin ac consectetur justo, malesuada laoreet velit. Donec dapibus, magna id condimentum efficitur, purus dolor egestas tortor, id aliquet tellus enim ac tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean aliquet sollicitudin libero non mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel rhoncus tellus. Cras risus justo, dapibus vel porttitor ut, bibendum et quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget justo sapien. Vestibulum mattis suscipit euismod.</p>
            </aside>
           {this.props.children}
            </div>
        )}
    }

export default About;