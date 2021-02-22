
import React, { Component } from 'react'



export default class SiderOne extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            testData: 1,
            sideName: '我是子组件改变的侧边栏'
        }
    }

    render() {

        const tiaojian = true
        const listData = [1,2,3,4,5,6]
        const listItem = listData.map(item =>
            <li>{item}</li>
        );

        function clickEvent(){
            console.log('点击事件')
        }

        function changePropName() {
            // 行不通，需要调用父组件的函数进行改变状态
            // { this.props.name("我是侧边栏1啊")}
            // this.props.name = this.props.name + '啊'

            this.props.nameCallBack(this.state.sideName)
        }

        function changeStateNum() {
            this.setState({
                testData: 2
            })
            // state.testData += 1
        }

        return (

            // <Layout.Footer style={{textAlign:'center'}}>

            //     自己网站的备案号

            // </Layout.Footer>
            <div>
                <span>{tiaojian == true?'测试文件true':'测试文件false'}</span>
                <ul>{listItem}</ul>
                <button onClick={clickEvent}>点击按钮</button>
                <div>props数据: {this.props.name}</div>
                <div>state数据：{this.state.testData}</div>
                <button onClick={changeStateNum.bind(this)}>点击改变state数据</button>
                <button onClick={changePropName.bind(this)}>点击改变props数据</button>
            </div>
        )
    }

}