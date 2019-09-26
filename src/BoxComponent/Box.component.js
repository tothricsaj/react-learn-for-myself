import React from 'react';
import styles from './Box.module.css'; // important --> only dot and module and dot and css

class BoxComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.showTheBox = this.showTheBox.bind(this);
        this.state = {
            isToggleOn: true,
            isHidedd: true,
        }
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    showTheBox() {
        this.setState({isHidedd: !this.state.isHidedd})
    }

    render() {
        return (
        <div className={ styles.wrapperBox }>
            {!this.state.isHidedd &&
                <div>
                    <h2 className={ styles.h2Class }>{ this.props.msg }</h2>
                    {this.state.isToggleOn ? (
                        <p>I am alive....</p>
                    ) : (
                        <p className={styles.diedTxt}>I am died....</p>
                    )
                    }
                    <div className={styles.buttonDiv} onClick={this.handleClick}>{this.state.isToggleOn? ':)' : ':('}</div>
                </div>
            }
            <div className={styles.showBox} onClick={this.showTheBox}>{this.state.isHidedd ? 'Show' : 'Hide'}</div>
        </div>
        )
    }
}

export default BoxComponent;
