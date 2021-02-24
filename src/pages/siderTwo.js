import React, { Component } from 'react'

export default class SiderTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // form: {
            //     inputValue: '默认输入值',
            //     radio: 'radio1',
            //     checkbox: true,
            //     select: 'option2',
            //     textArea: 'textArea默认值'
            // }
            inputValue: '默认输入值',
            radio: 'radio1',
            checkbox: true,
            select: 'option2',
            textArea: 'textArea默认值'
        }
    }

    // 表单练习
    render() {
        function getInputValue(e) {
            console.log('获取input输入的值', e)
            console.log('打印值', e.target.value)
            this.setState({
                // form: {
                //     inputValue:e.target.value
                // }
                inputValue:e.target.value
            })
        }


        function handleRadioChange(e) {
            console.log('获取radio输入的值', e)
            console.log('打印值', e.target.value)
            this.setState({
                // form: {
                //     radio:e.target.value
                // }
                radio:e.target.value
            })
        }

        function handleCheckboxChange(e) {
            console.log('获取checkbox输入的值', e)
            console.log('打印值', e.target.value)
            this.setState({
                // form: {
                //     checkbox:e.target.value
                // }
                checkbox:!this.state.checkbox
            })
        }

        function handleSelectChange(e) {
            console.log('获取select输入的值', e)
            console.log('打印值', e.target.value)
            this.setState({
                // form: {
                //     checkbox:e.target.value
                // }
                select:e.target.value
            })
        }


        function handleTextAreaChange(e) {
            console.log('获取textarea输入的值', e)
            console.log('打印值', e.target.value)
            this.setState({
                // form: {
                //     select:e.target.value
                // }
                textArea:e.target.value
            })
        }

        function submit() {
            
        }

        return (
            <div>
                <div>siderTwoContent</div>
                <form>
                    input:<input type="text" value={this.state.inputValue} onChange={getInputValue.bind(this)}></input><br></br>
                    {/* radio:<input type="radio" value="radio1" checked={this.state.radio} onChange={handleRadioChange.bind(this)}></input>radio1
                        <input type="radio"  value="radio2" checked={this.state.radio} onChange={handleRadioChange.bind(this)}></input>radio2
                        <br></br> */}
                    checkBox:<input type="checkbox" value="checkbox1" checked={this.state.checkbox} onChange={handleCheckboxChange.bind(this)}></input>checkbox1
                            <input type="checkbox" value="checkbox2" checked={this.state.checkbox} onChange={handleCheckboxChange.bind(this)}></input>checkbox2
                            <br></br>
                    select:<select value={this.state.select} onChange={handleSelectChange.bind(this)}>
                            <option value="option1">1</option>
                            <option value="option2">2</option>
                            <option value="option3">3</option>
                        </select><br></br>
                    textArea:<textarea value={this.state.textArea} onChange={handleTextAreaChange.bind(this)}></textarea>
                             <br></br>
                    <button onClick={submit}>提交</button>
                </form>
            </div>
        )
    }
}