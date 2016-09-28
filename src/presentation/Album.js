import React, {Component, PropTypes as pt} from 'react';

import {Icon} from './';

import styles from './album.scss';

const IconListen = () => (
    <Icon className={styles.album__icon}><path d="M17 20c-.29 0-.56-.06-.76-.15-.71-.37-1.21-.88-1.71-2.38-.51-1.56-1.47-2.29-2.39-3-.79-.61-1.61-1.24-2.32-2.53C9.29 10.98 9 9.93 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.93-3.07-7-7-7S7 5.07 7 9c0 1.26.38 2.65 1.07 3.9.91 1.65 1.98 2.48 2.85 3.15.81.62 1.39 1.07 1.71 2.05.6 1.82 1.37 2.84 2.73 3.55.51.23 1.07.35 1.64.35 2.21 0 4-1.79 4-4h-2c0 1.1-.9 2-2 2zM7.64 2.64L6.22 1.22C4.23 3.21 3 5.96 3 9s1.23 5.79 3.22 7.78l1.41-1.41C6.01 13.74 5 11.49 5 9s1.01-4.74 2.64-6.36zM11.5 9c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5-2.5 1.12-2.5 2.5z"/></Icon>
)

const IconBuy = () => (
    <Icon className={`${styles.album__icon}  ${styles['album__icon--highlight']}`}><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></Icon>
)

class Album extends Component {

    constructor() {
        super();

        this.state = {
            isloaded: false,
            movedX: 0,
            currentX: 0,
            startX: 0
        }

        this.handleTouchStart = this.handleTouchStart.bind(this);
        this.handleTouchMove = this.handleTouchMove.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        
    }

    componentDidUpdate (prevProps, prevState) {
        const { currentX, movedX } = this.state; 

        if(currentX !== prevState.currentX) {
            this.setState({
                movedX: movedX - 1
            })
        }
    }
    
    

    render() {
        const {cover, title, artist, onClick, category, showCategoryIcon} = this.props;
        const { isLoaded, movedX } = this.state;
        // const normlizedMoveX = Math.abs(movedX) > 10 ? 0 : movedX
        let icon = null;

        if(showCategoryIcon) {
            if(category === 1) icon = <IconListen />;
            if(category === 2) icon = <IconBuy />;
        }

        return (
            <div className={styles.view} onClick={onClick} ref="album">
                <div className={styles.album} onTouchMove={this.handleTouchMove} onTouchStart={this.handleTouchStart} style={{
                    transform: `translateX(${movedX * 2}px)` 
                }}>
                    <img src={cover} onLoad={() => this.setState({isLoaded: true})} className={styles.album__loadinghelper} />
                    <div className={styles.album__cover}>
                        <div className={`${styles.album__img} ${isLoaded ?  styles['is-loaded'] : ''}`} style={{backgroundImage: `url('${cover}')`}} />
                    </div>
                    <div className={styles.album__desc}>
                        <div className={styles.album__desc__title}>{title}</div>
                        <div className={styles.album__desc__artist}>{artist}</div>
                    </div>
                    {icon}
                </div>
            </div>
        )
    }

    handleTouchMove(e) {
        e.persist();
            this.setState({
                currentX: e.touches.item(0).clientX
            })
        requestAnimationFrame(() => {
        })
    }

    handleTouchStart(e) {
        e.persist();
        this.setState({
            currentX: e.touches.item(0).clientX,
            movedX: 0
        })
    }


}

Album.defaultProps = {
    onClick: () => {},
    isActive: false,
    showCategoryIcon: false
}

Album.propTypes = {
    cover: pt.string,
    title: pt.string,
    artist: pt.string,
    onClick: pt.func,
    isActive: pt.bool,
    showCategoryIcon: pt.bool
}

export default Album;
