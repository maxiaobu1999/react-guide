import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/**
 * React 组件类
 * 渲染了一个单独的 <button>
 */
class Square extends React.Component {// 给组件添加交互功能
    // 构造函数，用来初始化 state：
    constructor(props) {
        super(props);// 定义其子类的构造函数时，都需要调用 super 方法。
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="square"
                // onClick={function () {// 设置点击事件
                //     alert('on clicked')
                // }
                // }
                //     onClick={() => {// 箭头函数
                //         this.setState({value: 'X'})
                //     }}
                // 回调父控件函数
                onClick={()=>this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

// 渲染了 9 个方块
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null)
        }
    }
    handleClick(i) {
        const squares = this.state.squares.slice();// 深拷贝数组
        squares[i] = 'X';
        this.setState({squares: squares});// 刷新数据
    }

    renderSquare(i) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}// 向子控件传递一个函数
        />;// 向 Square 组件中传递两个 props 参数
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

// 组件渲染了含有默认值的一个棋盘
export  class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board/>
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

// ReactDOM.render(
//     <Game/>,
//     document.getElementById('root')
// );
