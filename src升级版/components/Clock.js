import React, {Component} from 'react';

//函数组件
//类组件

class Clock extends Component {

    //组件的状态
    state = {
        now: new Date(),  //当前时间
        count: 0,         //计数器
    }

    //组件被显示出来时，会自动执行
    componentDidMount() {
        console.log('componentDidMount')

        setInterval(() => {
            this.setState({count: ++this.state.count})
        }, 1000)


        this.timer = setInterval(() => {
            this.setState({now: new Date()})
        }, 1000)
    }

    //组件被卸载时自动执行
    componentWillUnmount() {
        console.log('componentDidMount')
        clearInterval(this.timer)
    }

    //react会自动调用组件的render方法
    render() {
        return (
            <div>
                <div>
                    count: {this.state.count}
                </div>

                <div>{this.state.now.toLocaleString()}</div>
            </div>
        );
    }
}

export default Clock;