import React from "react";
import './TodoListItem.scss';


class TodoListItem extends React.Component {

    state = {
        done: false,
        important: false
    }

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    }

    onImportantClick = () => {
        this.setState(state => {
            return {
                important: !this.state.important
            }
        })
    }
    render() {
        const {done, important} = this.state;
        const {label, onDeleted} = this.props;

        let cls = 'TodoListItem';

        if (done) {
            cls += ' done';
        }

        if (important) {
            cls += ' important';
        }

        return (
            <span className={cls}>
                <span
                    className='todo-list-item-label'
                    onClick={this.onLabelClick}
                >
                    {label}
                </span>

                <div>
                    <button onClick={this.onImportantClick} className='btn btn-outline-success btn-sm'>
                    <i className='fa fa-exclamation'/>
                </button>

                <button className='btn btn-outline-danger btn-sm'
                        onClick={onDeleted}
                >
                    <i className='fa fa-trash-o'/>
                </button>
                </div>
            </span>

        );
    }
}

export default TodoListItem;
