import * as React from "react";
import { connect } from "react-redux";

import { printableData } from "../presenter";
import OptionBox from "../containers/option_button_box";
import OptionItems from "../components/option_items";
import { selectType } from "../actions";

const itemsData = printableData('type');

class TypesItemBox extends React.Component<any, any> {
  shouldComponentUpdate(nextProps:any, nextState:any) {
    return nextProps.selectedItem !== this.props.selectedItem;
  }

  render() {
    let { selectedItem } = this.props;
    let isSelected = selectedItem && selectedItem !== '' ? true : false;

    let optionButtonNodes = itemsData.map((entry) => {
      let selected = selectedItem === entry.id ? true : false;
      return <OptionBox id={entry.id} label={entry.value} selected={selected} onClick={selectType} key={entry.id}/>;
    });

    return <OptionItems optionButtonNodes={optionButtonNodes} selected={isSelected} />
  }
}

const mapStateToProps = (printApp: any, ownProps: any) => {
  return {
    selectedItem: printApp.selectionState.type
  }
}

export default connect(
  mapStateToProps
)(TypesItemBox);
