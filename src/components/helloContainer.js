import { connect } from 'react-redux'
import Hello from './hello.jsx'

const mapStateToProps = (state) => {
	return {
		...state,
		helloString: state.hello.helloString
	};
};

const mapDispatchToProps = () => {
	return {};
};

const HelloContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Hello);

export default HelloContainer;