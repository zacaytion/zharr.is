import React from 'react'
import { css } from 'emotion'
import { noSelect } from '../styles/utils'

// FIXME: Hides all backslashes when max h
class Header extends React.Component {
    constructor(){
        super();
        this.setState({
          width: 0
        })
    }
    componentWillMount() {
        this.updateDimensions()
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions)
    }
    updateDimensions = () => {
        const w = window,
              d = document,
              documentElement = d.documentElement,
              body = d.getElementById('___gatsby')[0],
              width = w.innerWidth || documentElement.clientWidth || body.clientWidth
        this.setState({width})
    }
    render() {
        const { title } = this.props
        const { width } = this.state
        const trimTitle = title === '/' ? '' : title
        const divisor = width > 1200 ? 22 : 24 
        const backslash = Array(parseInt(width / divisor)).join('\\')

        return (
            <span
              className={css`
                ${noSelect};
                font-size: 2.2em;
                grid-area: header;
                overflow: hidden;
                min-width: 0;
                min-height: 0;
                max-width: 100vw;
                max-height: 2em;
              `}
            >
            {`/usr${trimTitle} ${backslash}`}
            </span>
        )
    }
}

export default Header
