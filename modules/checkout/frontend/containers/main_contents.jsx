import React from "react"
import { connect } from "react-redux"
import { ajax } from "jquery"

import MainContents from "../components/main_contents"
import { updateAllStates } from "../actions"

class MainContentsContainer extends React.Component {
  componentDidMount() {

  }

  render() {
    let {state, children} = this.props

    return <MainContents children={children} />
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDetailsLoad: (details) => {
      dispatch(updateAllStates(details))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContentsContainer)
