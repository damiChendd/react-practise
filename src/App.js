import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router, // 最外面的包裹
  Switch, // <Switch>是唯一的因为它仅仅只会渲染一个路径
  Route, // 相当于view
  Link //相当于a
} from "react-router-dom";
import SiderOne from './pages/siderOne'


// export default function App(){
//   return(
//     <Router>
//       <div>
//         <div class="header">头部</div>
//         <div class="content-box">
//           <div class="sider">
//             <Link to="/silderOne">侧边栏1</Link>
//             <Link to="/silderTwo">侧边栏2</Link>
//             <Link to="/silderThree">侧边栏3</Link>
//           </div>
//           <div class="content">
//             <Switch>
//               <Route path="/silderOne" component= {SiderOne}>
//                 {/* <SiderOne/> */}
//               </Route>
//               <Route path="/silderTwo">
//                 <SilderTwo/>
//               </Route>
//               <Route path="/silderThree">
//                 <SilderThree/>
//               </Route>
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

function SilderOne() {
  return <h2>silderOne</h2>;
}

function SilderTwo() {
  return <h2>silderTwo</h2>;
}

function SilderThree() {
  return <h2>silderThree</h2>;
}


export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      sideName1: '侧边栏1'
    }
  }
  changeName = (name) => {
    this.setState({
      sideName1: name
    })
  }


  render() {
    function SilderTwo(props) {
      return <h2>silderTwo,小名{props.name}</h2>;
    }
    
    function SilderThree(props) {
      return (
        <div>
          <h2>silderThree</h2>
          <span>小名：{props.name}</span>
        </div>
        
      );
    }

    return (
      <Router>
        <div>
          <div class="header">头部</div>
          <div class="content-box">
            <div class="sider">
              <Link to="/silderOne">侧边栏1</Link>
              <Link to="/silderTwo">侧边栏2</Link>
              <Link to="/silderThree">侧边栏3</Link>
            </div>
            <div class="content">
              <Switch>
                {/* <Route path="/silderOne" component={SiderOne}> */}
                {/* </Route> */}
                <Route path="/silderOne">
                  <SiderOne name={this.state.sideName1} nameCallBack={this.changeName}/>
                </Route>
                <Route path="/silderTwo">
                  <SilderTwo name="侧边栏2"/>
                </Route>
                <Route path="/silderThree">
                  <SilderThree name="侧边栏3"/>
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}
