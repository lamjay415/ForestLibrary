import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import "./forest.css";

export class Forest extends React.Component {

    constructor(props){
        super(props)

        this.state= {
            dataIsShown: false,
            reload: false,
        }
        
    }

    // getUsers(){
    //     setTimeout(this.props.fetchUsers(), 2000)
    // }

    componentDidMount() {
        this.props.fetchTrees().then(this.props.fetchUsers());
        // this.getUsers();

    //     window.onload = function() {
    //     if(!window.location.hash) {
    //         window.location = window.location + '#loaded';
    //         window.location.reload();
    //     }
    // }
        // this.refreshPage()
    }

    // refreshPage = () => {
    //     this.setState(
    //         {reload: true},
    //         () => this.setState({reload: false})
    //     )
    // }

    existingForest = () => {
        const { loggedIn} = this.props;
        const trees = (this.props.trees);
    if(loggedIn) {
        return(
        <div className='main-page'>
            <div className="welcome-user">Welcome home {this.props.session.user.username}</div>
            <div className="outer-forest">
                <div className="forest">
                    {trees.map((tree, idx) => (
                        <div className="tree" key={idx}> 

                    <Link className="links"
                        to={`/users/${tree._id}`} >
                            <img className="tree-images"
                            src="https://image.flaticon.com/icons/png/64/4319/4319580.png" 
                            onMouseEnter={() => this.setState({dataIsShown: true})}
                            onMouseLeave={() => this.setState({dataIsShown: false})}
                            /> 
                        </Link> 
                            <span className="tree-username">{tree.username}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
        )}
        else{
            return(
            <div>
                <div className="advertisement">
                    <span id="main-advertisement">What's next in reading is first on ForestLibrary</span>
Upload your first leaf and begin your journey. ForestLibrary gives you space to create, document, and connect with other readers.</div>
                    <div className="outer-forest">
                    <div className="forest">
                        {trees.map((tree, idx) => (
                            <div className="tree" key={idx}> 

                                <Link className="links"
                                    to={`/users/${tree._id}`} >
                                        <img className="tree-images"
                                        src="https://image.flaticon.com/icons/png/64/4319/4319580.png" 
                                        onMouseEnter={() => this.setState({dataIsShown: true})}
                                        onMouseLeave={() => this.setState({dataIsShown: false})}
                                        /> 
                                    </Link> 
                                        <span className="tree-username">{tree.username}</span>
                                    </div>
                                ))}
                            </div>
                    </div>
                    <div className="bottom-section">
                        <span className="bottom-ad-title">Thanks for checking out the trees. Now join in.</span>
                        <span className="bottom-ad-desc">Save books, add reviews and build your tree. All for free.</span>
                        <Link to="/register"
                            className="create-tree-btn"
                            id="upload-your-own-button"
                        >Create a Tree</Link>
                    </div>
                            <Footer/>
                </div>
            )
        }
    }
 
    render() {
        const trees = (this.props.trees)
        const {loggedIn} = this.props;
        if(!trees){
            return null
        }else{
            return this.existingForest();
        }
    }
}
export default Forest
