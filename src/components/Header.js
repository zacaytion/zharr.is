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
        const locationString = `/usr${trimTitle} `
        const max = width / 18.46 
        const padding = max - locationString.length
        const backslash = Array(parseInt(padding)).join('\\')
        const headerString = `${locationString}${backslash}`
        return (
            <span
              className={css`
                ${noSelect};
                font-size: 2rem;
                grid-area: header;
                overflow: hidden;
                min-width: 0;
                min-height: 0;
                max-width: 100vw;
                max-height: 1.8em;
              `}
            >
            {headerString}
            </span>
        )
    }
}

export default Header
