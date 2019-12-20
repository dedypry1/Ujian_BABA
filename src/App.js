import React, {Component, Fragment} from 'react';
import Mahasiswas from './components/mahasiswas';
import Dosens from './components/dosens';
import Matkuls from './components/matkuls';



class App extends Component {
    render() {
        return (
            <Fragment>
            <Mahasiswas mahasiswas={this.state.mahasiswas} />
            <Dosens dosens={this.state.dosens} />
            <Matkuls matkuls={this.state.matkuls} />
            </Fragment>
        )
    }

    state = {
        mahasiswas: [],
        dosens: [],
        matkuls: []
        
    };

    componentDidMount() {
        fetch('http://localhost:8000/mahasiswas/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ mahasiswas: data })
            })
            .catch(console.log)}

    componentDidMount() {
        fetch('http://localhost:8000/dosens/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dosens: data })
            })
            .catch(console.log)}

    componentDidMount() {
        fetch('http://localhost:8000/matkuls/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ matkuls: data })
            })
            .catch(console.log)
    }
}

export default App;
