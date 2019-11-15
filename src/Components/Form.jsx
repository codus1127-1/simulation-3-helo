import React from 'react'
// import {connect} from 'react-redux'
import noImage from '../assets/no-photo.png'
import axios from 'axios'

class Form extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            image_url: '',
            content: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    addPost = async () => {
        let {title, image_url, content} = this.state
        await axios.post(`/api/post/new/`, {title, image_url, content})
        this.props.history.push('/dashboard')
    }

    render(){
        return(
            <div className="form">
                <div className="form-container">
                    <h1>New Post</h1>
                    <form>
                        Title: <input onChange={e => this.handleChange(e, 'title')} />
                        {!this.state.image_url ? <img alt="placeholder" className='noImg' src={'https://www.lauriloewenberg.com/wp-content/uploads/2019/04/No_Image_Available.jpg'}/> :
                            <div className='addPic' style={{
                                backgroundImage:`url(${this.state.image_url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                               
                            }}/>
                        }
                        Image URL: <input onChange={e => this.handleChange(e, 'image_url')} />
                        Content: <textarea /* cols='70' rows='50' */ onChange={e => this.handleChange(e, 'content')} />
                        <button onClick={this.addPost}>Post</button>
                    </form>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = reduxState => {
//     const {id} = reduxState
//     return {id}
// }

// export default connect(mapStateToProps)(Form)
export default Form